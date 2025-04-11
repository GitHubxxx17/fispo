import { cac } from "cac";
import path, { dirname, join } from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import enquirer from "enquirer";
// import { execa } from "execa";
const { prompt } = enquirer;
import figlet from "figlet";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const version = require("../package.json").version;

const cli = cac("create-fispo").version(version).help();

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前文件所在的目录
const __dirname = dirname(__filename);

const templateDocsPath = path.resolve(__dirname, "../template/docs");

// 规范化项目名称
function normalizeProjectName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // 空格转连字符
    .replace(/[^a-z0-9-]/g, "") // 移除非字母数字字符
    .replace(/--+/g, "-") // 去除连续连字符
    .replace(/^-|-$/g, ""); // 去除首尾连字符
}

async function updatePackageName(
  targetDir: string,
  projectName: string,
  isThemeOrPlugin: boolean
) {
  const pkgPath = path.join(targetDir, "package.json");

  try {
    // 读取并修改 package.json
    const pkg = await fs.readJson(pkgPath);
    pkg.name = isThemeOrPlugin ? `@fispo/${projectName}` : projectName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });
  } catch (error) {
    throw new Error(`无法更新 package.json: ${error.message}`);
  }
}

async function createConfigFile(targetDir: string, projectName: string) {
  const configContent = `import { Theme } from "fispo-core/types";
import { join } from "path";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "${projectName}",
  layoutPath: join(__dirname, "index.ts"),
  config: {
    navMenus: [],
  },
  plugins: [],
};

export default theme;
`;

  const targetPath = join(targetDir, "src", "config.ts");

  fs.writeFileSync(targetPath, configContent);
}

// 创建项目逻辑
async function createProject(
  targetDir: string,
  rawProjectName: string,
  isTheme: boolean,
  isPlugin: boolean
) {
  let templateName = "fispo";
  if (isTheme) {
    templateName = "theme";
  }
  if (isPlugin) {
    templateName = "plugin";
  }
  const templatePath = path.resolve(
    __dirname,
    `../template/template-${templateName}`
  );

  const spinner = ora().start();

  try {
    // 检查模板是否存在
    if (!fs.existsSync(templatePath)) {
      spinner.fail(chalk.red("模板文件缺失..."));
      process.exit(1);
    }

    // 检查目标目录
    if (fs.existsSync(targetDir)) {
      spinner.stop();
      const { overwrite } = await prompt<{ overwrite: string }>({
        type: "confirm",
        name: "overwrite",
        message: `目录 ${chalk.yellow(targetDir)} 已存在，是否覆盖？`,
        initial: false,
      });

      if (!overwrite) {
        console.log(chalk.yellow("操作已取消"));
        process.exit(0);
      }

      spinner.start(chalk.blue("正在清理旧目录..."));
      await fs.remove(targetDir);
    }

    // 复制模板
    spinner.text = chalk.blue("正在创建项目...");
    await fs.copy(templatePath, targetDir);
    await fs.copy(templateDocsPath, join(targetDir, "docs"));

    // 更新 package.json
    spinner.text = chalk.blue("正在更新配置...");
    const projectName = normalizeProjectName(rawProjectName);
    await updatePackageName(targetDir, projectName, isTheme || isPlugin);
    if (isTheme) {
      createConfigFile(targetDir, projectName);
    }

    // 安装依赖
    spinner.text = chalk.blue("正在安装依赖...\n");
    process.chdir(targetDir);
    // await execa("npm", ["install", "fispo-core@latest"], { stdio: "inherit" });

    spinner.succeed(chalk.green("项目创建成功！"));

    console.log(`
${chalk.bold("启动项目：")}
${chalk.cyan(`cd ${path.basename(targetDir)}`)}
${chalk.cyan("npm run dev")}
    `);
  } catch (error) {
    spinner.fail(chalk.red("项目创建失败"));
    console.error(error);
    process.exit(1);
  }
}

// CLI 命令配置
cli
  .command("[dirname]", "Create new fispo project")
  .option("-t, --theme", "Create new custom theme project")
  .option("-p, --plugin", "Create new custom theme project")
  .action(
    async (dirname: string, props: { theme: boolean; plugin: boolean }) => {
      const { theme, plugin } = props;

      // 打印 ASCII 艺术字
      console.log(`
      ${chalk.blueBright(
        figlet.textSync("Fispo", {
          font: "Standard",
          horizontalLayout: "full",
        })
      )}
    `);

      // 校验目录名
      if (!dirname) {
        const { projectName } = await prompt<{ projectName: string }>({
          type: "text",
          name: "projectName",
          message: "请输入项目名称：",
          validate: (value) =>
            /^[a-z0-9-]+$/i.test(value) || "仅允许字母、数字和横线",
        });
        dirname = projectName;
      }

      const targetPath = path.resolve(process.cwd(), dirname);
      await createProject(targetPath, dirname, theme, plugin);
    }
  );

cli.parse();
