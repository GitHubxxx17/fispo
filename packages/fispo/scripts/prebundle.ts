import { build } from "esbuild"; // 引入esbuild构建工具
import fs from "fs-extra"; // 引入增强的文件系统操作库
import path from "path"; // 引入路径处理模块
import resolve from "resolve"; // 引入模块路径解析工具
import { normalizePath } from "vite"; // 引入Vite的路径规范化工具
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// 预构建输出目录
const PRE_BUNDLE_DIR = "vendors";

/**
 * 预构建指定的依赖模块
 * @param deps 需要预构建的依赖模块列表
 */
async function preBundle(deps: string[]) {
  // 创建扁平化的依赖映射表（将斜杠替换为下划线作为文件名）
  const flattenDepMap = {} as Record<string, string>;
  deps.map((item) => {
    const flattedName = item.replace(/\//g, "_");
    flattenDepMap[flattedName] = item;
  });

  // 计算输出目录的绝对路径
  const outputAbsolutePath = path.join(process.cwd(), PRE_BUNDLE_DIR);

  // 如果输出目录已存在，则删除它
  if (await fs.pathExists(outputAbsolutePath)) {
    await fs.remove(outputAbsolutePath);
  }

  // 使用Esbuild进行依赖预构建
  await build({
    entryPoints: flattenDepMap, // 入口点使用扁平化的依赖映射
    outdir: PRE_BUNDLE_DIR, // 输出目录
    bundle: true, // 启用打包功能
    minify: true, // 压缩代码
    splitting: true, // 启用代码分割
    format: "esm", // 输出格式为ES模块
    platform: "browser", // 目标平台为浏览器
    plugins: [
      // 自定义插件
      {
        name: "pre-bundle",
        setup(build) {
          // 处理裸导入（bare import）模块
          build.onResolve({ filter: /^[\w@][^:]/ }, async (args) => {
            // 如果不是需要预构建的依赖，则跳过
            if (!deps.includes(args.path)) {
              return;
            }

            // 判断是否为入口模块
            const isEntry = !args.importer;

            // 解析模块的实际路径
            const resolved = resolve.sync(args.path, {
              basedir: args.importer || process.cwd(),
            });

            // 如果是入口模块，标记为特殊命名空间以便后续处理
            return isEntry
              ? { path: resolved, namespace: "dep" }
              : { path: resolved };
          });

          // 处理特殊命名空间的模块加载
          build.onLoad({ filter: /.*/, namespace: "dep" }, async (args) => {
            // 规范化入口路径
            const entryPath = normalizePath(args.path);

            // 动态导入模块获取所有具名导出
            const res = require(entryPath);

            // 获取模块的所有具名导出
            const specifiers = Object.keys(res);

            // 生成混合导出的代码：同时支持具名导出和默认导出
            return {
              contents: `export { ${specifiers.join(
                ","
              )} } from "${entryPath}"; export default require("${entryPath}")`,
              loader: "js",
              resolveDir: process.cwd(),
            };
          });
        },
      },
    ],
  });
}

// 预构建React相关核心依赖
preBundle(["react", "react-dom", "react-dom/client", "react/jsx-runtime"]);
