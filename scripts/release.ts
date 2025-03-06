import chalk from "chalk";
import enquirer from "enquirer";
import { execa } from "execa";
import fs from "fs-extra";
import minimist from "minimist";
import { createRequire } from "module";
import path, { dirname } from "path";
import semver from "semver";
import { fileURLToPath } from "url";
const { prompt } = enquirer;

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前文件所在的目录路径
const __dirname = dirname(__filename);

// 因为 packag.json 声明了 `type: "module"`, 而 esm 环境下没有 require 方法，所以我们使用 createRequire 来声明 require
const require = createRequire(import.meta.url);
// 解析命令行参数
const args = minimist(process.argv.slice(2));
// 是否是 dry 模式。dry 模式下只会展示命令，不会真正执行命令，用来测试。
const isDry = args.dry;
const versionIncrements = ["patch", "minor", "major"];
const pkg = require("../package.json");
const currentVersion = pkg.version;
const commitTypes = [
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "test",
  "chore",
  "perf",
];
const releaseTags = ["none", "alpha", "beta", "rc"];

const packages = fs
  .readdirSync(path.resolve(__dirname, "../packages"))
  .filter((p) => !p.endsWith(".ts") && !p.startsWith("."));
const skippedPackages: string[] = [];
const directRun = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: "inherit", ...opts });
const dryRun = (bin, args, opts = {}) =>
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(" ")}`), opts);

const run = isDry ? dryRun : directRun;

const step = (msg) => console.log(chalk.cyan(msg));
const getPkgRoot = (pkg) => path.resolve(__dirname, "../packages/" + pkg);

let isCommit = false;

async function main() {
  isCommit = false;
  let targetVersion = args._[0];
  if (!targetVersion) {
    // 1. 确定变动版本级别 `patch | minor | major`，遵循 semver 规范。
    const { release } = await prompt<{ release: string }>({
      type: "select",
      name: "release",
      message: "Select release type",
      choices: versionIncrements
        .map((i) => `${i} (${semver.inc(currentVersion, i)})`)
        .concat(["custom"]),
    });

    if (release === "custom") {
      const inputVersion = (await prompt({
        type: "input",
        name: "version",
        message: "Input custom version",
        initial: currentVersion,
      })) as { version: string };
      targetVersion = inputVersion.version;
    } else {
      targetVersion = release.match(/\((.*)\)/)?.[1];
    }
  }

  if (!semver.valid(targetVersion)) {
    throw new Error(`invalid target version: ${targetVersion}`);
  }

  const { confirm } = await prompt<{ confirm: string }>({
    type: "confirm",
    name: "confirm",
    message: `Releasing ${targetVersion}. Confirm?`,
  });

  if (!confirm) {
    return;
  }
  // 2. 执行测试
  step("\nRunning tests...");
  await run("pnpm", ["test:init"]);

  // 3. 自动修改包版本
  if (!isDry) {
    step("\nUpdate version...");
    updateVersions(targetVersion);
  }

  // 4. 执行 pnpm build
  step("\nBuilding package...");
  await run("pnpm", ["build"]);

  // 5. 生成 CHANGELOG.md（后面会补充 changelog 命令）
  step("\nGenerating changelog...");
  await run("pnpm", ["changelog"]);

  // 6. 生成 release commit
  const { stdout } = await directRun("git", ["diff"], { stdio: "pipe" });
  if (stdout) {
    step("\nCommitting changes...");
    await run("git", ["add", "-A"]);

    // 选择提交的类型
    const { commitType } = await prompt<{ commitType: string }>({
      type: "select",
      name: "commitType",
      message: "Select commit type",
      choices: commitTypes.map((type) => type),
    });

    // 输入自定义的 commit 信息
    const { commitMessage } = await prompt<{ commitMessage: string }>({
      type: "input",
      name: "commitMessage",
      message: "Enter your custom commit message:",
      initial: `release: v${targetVersion}`,
    });
    await run("git", ["commit", "-m", `${commitType}: ${commitMessage}`, "-n"]);
    isCommit = true;
  } else {
    console.log("No changes to commit.");
  }

  // 7. 执行 npm publish
  step("\nPublishing packages...");
  for (const pkg of packages) {
    await publishPackage(pkg, targetVersion, run);
  }

  // 8. git push 并打 tag
  step("\nPushing to GitHub...");
  await run("git", ["tag", `v${targetVersion}`]);
  await run("git", ["push", "origin", `refs/tags/v${targetVersion}`]);
  await run("git", ["push"]);
}

function updateVersions(version) {
  // 1. 更新根 package.json
  updatePackage(path.resolve(__dirname, ".."), version);
  // 2. 更新所有包
  packages.forEach((p) => updatePackage(getPkgRoot(p), version));
}

function updatePackage(pkgRoot, version) {
  const pkgPath = path.resolve(pkgRoot, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  pkg.version = version;
  updateDeps(pkg, "dependencies", version);
  updateDeps(pkg, "peerDependencies", version);
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

function updateDeps(pkg, depType, version) {
  const deps = pkg[depType];
  if (!deps) return;
  Object.keys(deps).forEach((dep) => {
    if (
      dep === "fispo" ||
      (dep.startsWith("@fispo") &&
        packages.includes(dep.replace(/^@fispo\//, "")))
    ) {
      console.log(
        chalk.yellow(`${pkg.name} -> ${depType} -> ${dep}@${version}`)
      );
      deps[dep] = version;
    }
  });
}

async function publishPackage(pkgName: string, version: string, runIfNotDry) {
  if (skippedPackages.includes(pkgName)) {
    return;
  }
  const pkgRoot = getPkgRoot(pkgName);
  const pkgPath = path.resolve(pkgRoot, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  step(`\nPublishing packages:${pkg.name}`);
  if (pkg.private) {
    return;
  }

  // 选择发布标签
  let { releaseTag } = await prompt<{ releaseTag: string }>({
    type: "select",
    name: "releaseTag",
    message: "Select release tag",
    choices: releaseTags.map((type) => type),
  });

  if (releaseTag == "none") {
    releaseTag = "";
  }

  step(`Publishing ${pkgName}...`);
  try {
    await runIfNotDry(
      // note: use of yarn is intentional here as we rely on its publishing
      // behavior.
      "npm",
      [
        "publish",
        ...(releaseTag ? ["--tag", releaseTag] : []),
        "--access",
        "public",
      ],
      {
        cwd: pkgRoot,
        stdio: "pipe",
      }
    );
    console.log(chalk.green(`Successfully published ${pkgName}@${version}`));
  } catch (e) {
    if (e.stderr.match(/previously published/)) {
      console.log(chalk.red(`Skipping already published: ${pkgName}`));
    } else {
      throw e;
    }
  }
}

main().catch((err) => {
  // 错误兜底处理，回退版本
  console.log(err);
  updateVersions(currentVersion);
  if (isCommit) {
    run("git", ["reset", "--soft", "HEAD~1"]);
  }
});
