import { execSync } from "child_process";
import fs from "fs-extra";
import { join } from "path";
import { SiteConfig } from "shared/types";

export function deploy(config: SiteConfig, dry = false) {
  if (!config.deploy || !config.deploy.repo) {
    return console.log("请在配置文件中添加deploy.repo");
  }

  // 封装执行命令的方法
  const execute = (command: string, allowFailure = false) => {
    console.log(`\n▶️  执行命令: ${command}`);
    if (dry) return;

    try {
      const output = execSync(command, { stdio: "inherit" });
      return output?.toString();
    } catch (error) {
      if (!allowFailure) throw error;
    }
  };

  // 封装文件操作方法
  const dryFileOps = (type: string, path: string, content?: string) => {
    console.log(`📝 [模拟] ${type}操作: ${path}`);
    if (content) console.log(`文件内容预览:\n${content}...`);
  };

  try {
    console.log(dry ? "\n🚀 开始模拟部署流程..." : "\n🚀 开始部署...");

    // 初始化或检查Git仓库
    const isGitRepo = fs.existsSync(".git");
    let branchName = "main";

    if (!isGitRepo) {
      console.log(dry ? "📦 将初始化Git仓库" : "📦 正在初始化Git仓库...");
      if (!dry) {
        execute("git init");
        execute("git checkout -b main");
      }
    } else {
      try {
        branchName = execute("git branch --show-current")?.trim() || "main";
      } catch {
        console.log("使用默认分支 main");
        branchName = "main";
      }
    }

    // 创建GitHub Actions工作流
    const workflowDir = join(".github", "workflows");
    const workflowPath = join(workflowDir, "gh-pages.yml");
    // 生成工作流文件内容
    const workflowContent = `name: Deploy to GitHub Pages
on:
  push:
    branches: [${branchName}]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ${config.root}/${config.build}`;

    if (dry) {
      dryFileOps("创建目录", workflowDir);
      dryFileOps("写入文件", workflowPath, workflowContent);
    } else {
      if (!fs.existsSync(workflowDir)) {
        fs.mkdirSync(workflowDir, { recursive: true });
      }
      // 写入工作流文件
      fs.writeFileSync(workflowPath, workflowContent);
    }

    // 仅在实际执行时进行git操作
    if (!dry) {
      execute("git add .");

      try {
        execute(`git commit -m "deploy: ${new Date().toLocaleString()}"`);
      } catch {
        console.log("无文件变更需要提交");
      }

      try {
        execute("git remote get-url origin");
      } catch {
        execute(`git remote add origin ${config.deploy.repo}`);
      }

      execute(`git push -u origin ${branchName}`);
    } else {
      console.log("\n📦 模拟Git操作:");
      execute("git add .");
      execute(`git commit -m "deploy: ${new Date().toLocaleString()}"`);
      execute(`git remote add origin ${config.deploy.repo}`);
      execute(`git push -u origin ${branchName}`);
    }

    console.log(
      dry
        ? "\n✅ 模拟执行完成，未进行实际修改"
        : "\n✅ 部署完成并已推送到远程仓库"
    );
  } catch (error) {
    console.error("\n❌ 发生错误:", error);
    if (dry) console.log("注意：上述错误发生在模拟执行阶段");
  }
}
