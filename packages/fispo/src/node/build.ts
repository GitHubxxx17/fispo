import {
  InlineConfig,
  Plugin,
  build as viteBuild,
  IndexHtmlTransformHook,
  HtmlTagDescriptor,
} from "vite";
import {
  CLIENT_ENTRY_PATH,
  EXTERNALS,
  PACKAGE_ROOT,
  SERVER_ENTRY_PATH,
} from "./constants";
import type { RollupOutput } from "rollup";
import { dirname, join } from "path";
import fs from "fs-extra";
import { pathToFileURL } from "url";
import { Route, SiteConfig } from "shared/types";
import { createVitePlugins } from "./plugins/vitePlugins";
import { HelmetData } from "react-helmet-async";
import { getTagsAndCategoriesRoutes } from "shared/utils/handleRoutes";
import { withBase } from "shared/utils";
import { renderResultOptions } from "@runtime/ssr-entry";
import { EXTERNAL_URL_RE } from "shared/constants";
import { terser } from "rollup-plugin-terser";
import os from "os";

let isTagsExtracted = false;
let extractedTags: HtmlTagDescriptor[] = [];

// 触发 transformIndexHtml 并提取 tags
function extractTagsDuringBuild(config: SiteConfig) {
  const dummyHtml = "<!DOCTYPE html><html><head></head><body></body></html>";

  function handleResult(result: any) {
    if (result?.tags) {
      extractedTags = extractedTags.concat(result.tags);
    }
  }

  const pluginsFromFispoPlugins = config.siteData?.plugins
    ?.map((item) => item.vite)
    .filter(Boolean)
    .map((item) => item?.plugins || [])
    .flat();

  pluginsFromFispoPlugins.forEach(async (plugin: Plugin) => {
    try {
      const transformIndexHtml = plugin?.transformIndexHtml;

      if (transformIndexHtml) {
        const isFunction = typeof transformIndexHtml === "function";
        let result: ReturnType<IndexHtmlTransformHook>;

        if (isFunction) {
          result = transformIndexHtml(dummyHtml, undefined);
        } else {
          const handler =
            "handler" in transformIndexHtml
              ? transformIndexHtml.handler
              : "transform" in transformIndexHtml
                ? transformIndexHtml.transform
                : null;

          result = handler(dummyHtml, undefined);
        }

        if (result instanceof Promise) {
          const res = await result;
          handleResult(res);
          return res;
        }

        handleResult(result);
      }
    } catch (e) {
      console.log("解析vite插件出现错误", e);
    }
  });

  return extractedTags;
}

export async function bundle(root: string, config: SiteConfig) {
  root = join(process.cwd(), root);

  // 获取CPU核心数（减去1保留一个核心给系统）
  const cpuCount = Math.max(1, os.cpus().length - 1);
  const resolveViteConfig = async (
    isServer: boolean
  ): Promise<InlineConfig> => ({
    mode: "production",
    root: join(process.cwd(), root),
    plugins: await createVitePlugins(config, undefined, isServer),
    ssr: {
      noExternal: [
        "react-router-dom",
        "react-helmet-async",
        "@fortawesome/react-fontawesome",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/free-brands-svg-icons",
      ],
    },
    build: {
      minify: true,
      ssr: isServer,
      outDir: isServer ? join(root, ".temp") : join(root, "build"),
      emptyOutDir: true,
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? "[name].mjs" : undefined,
          format: "es",
        },
        external: EXTERNALS,
        maxParallelFileOps: cpuCount * 16,
        plugins: [
          {
            name: "extract-tags-plugin",
            buildStart() {
              if (isServer && !isTagsExtracted) {
                extractTagsDuringBuild(config);
                isTagsExtracted = true;
              }
            },
          },
          terser({
            compress: {
              dead_code: true, // 移除未使用代码
              unused: true, // 移除未使用变量
              reduce_vars: true, // 减少变量声明
            },
            mangle: {
              properties: false, // 保留属性名（按需配置）
            },
          }),
        ],
        treeshake: {
          moduleSideEffects: "no-external", // 关键配置：仅保留有副作用的模块
          propertyReadSideEffects: false, // 允许对属性访问进行tree-shaking
          tryCatchDeoptimization: false, // 优化try-catch块的tree-shaking
        },
      },
    },
  });

  console.log(`Building client + server bundles...`);

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      viteBuild(await resolveViteConfig(false)),
      // server build
      viteBuild(await resolveViteConfig(true)),
    ]);
    // 复制图片到打包目录
    const publicDir = join(root, config.public);
    if (fs.pathExistsSync(publicDir)) {
      await fs.copy(publicDir, join(root, config.build));
    }
    await fs.copy(join(PACKAGE_ROOT, "vendors"), join(root, config.build));
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}

// 生成标签的HTML字符串，根据 "head" | "body" 分类
const generateTagsHtml = (tags: HtmlTagDescriptor[], base: string) => {
  const headTags: string[] = [];
  const headPrependTags: string[] = [];
  const bodyTags: string[] = [];
  const bodyPrependTags: string[] = [];
  const withBaseUrl = (url: string) => withBase(url, base || "/");
  tags.forEach((tag) => {
    if (tag.tag === "link" && !EXTERNAL_URL_RE.test(tag.attrs.href as string))
      return;
    const attrs = Object.entries(tag.attrs)
      .map(([k, v]) => {
        if (v === true) {
          return k;
        }
        if (k == "href" || k == "src") {
          v = withBaseUrl(v as string);
        }
        return `${k}="${v}"`;
      })
      .join(" ");
    const tagHtml = `<${tag.tag} ${attrs}></${tag.tag}>`;

    if (tag.injectTo === "head") {
      headTags.push(tagHtml);
    } else if (tag.injectTo === "body") {
      bodyTags.push(tagHtml);
    } else if (tag.injectTo === "head-prepend") {
      headPrependTags.push(tagHtml);
    } else if (tag.injectTo === "body-prepend") {
      bodyPrependTags.push(tagHtml);
    }
  });

  return {
    headTagsHtml: headTags.join("\n    "),
    bodyTagsHtml: bodyTags.join("\n    "),
    headPrependTagsHtml: headPrependTags.join("\n    "),
    bodyPrependTagsHtml: bodyPrependTags.join("\n    "),
  };
};

export async function renderPage(
  render: (url: string, helmetContext: object) => Promise<renderResultOptions>,
  routes: Route[],
  root: string,
  clientBundle: RollupOutput,
  config: SiteConfig
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  const withBaseUrl = (url: string) => withBase(url, config.base || "/");

  // 生成标签的HTML字符串
  const {
    headTagsHtml,
    bodyTagsHtml,
    headPrependTagsHtml,
    bodyPrependTagsHtml,
  } = generateTagsHtml(
    [...extractedTags, ...config.siteData.htmlTags],
    config.base
  );

  console.log(`Rendering page in server side...`);
  return Promise.all(
    routes.map(async (route) => {
      const helmetContext = {
        context: {},
      } as HelmetData;
      const routePath = route.path;
      const { appHtml, globalComponentsHtml } = await render(
        routePath,
        helmetContext.context
      );
      const { helmet } = helmetContext.context;
      const styleAssets = clientBundle.output.filter(
        (chunk) => chunk.type === "asset" && chunk.fileName.endsWith(".css")
      );

      const normalizeVendorFilename = (fileName: string) =>
        fileName.replace(/\//g, "_") + ".js";

      const html = `
<!DOCTYPE html>
<html>
  <head>
    ${headPrependTagsHtml}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="${config.siteData.description}">
    ${helmet?.title?.toString() || ""}
    ${helmet?.meta?.toString() || ""}
    ${helmet?.link?.toString() || ""}
    ${helmet?.style?.toString() || ""}
    <link rel="icon" href="${withBaseUrl(config.logo)}" type="image/png">
    ${styleAssets
      .map(
        (item) => `<link rel="stylesheet" href="${withBaseUrl(item.fileName)}">`
      )
      .join("\n")}

      <script type="importmap">
      {
        "imports": {
          ${EXTERNALS.map(
            (name) =>
              `"${name}": "${withBaseUrl(normalizeVendorFilename(name))}"`
          ).join(",")}
        } 
      }  
    </script>

    ${headTagsHtml}
  </head>
  <body>
  ${bodyPrependTagsHtml}
    <div id="root">${appHtml}</div>
      ${globalComponentsHtml}
      
    <script type="module" src="${withBaseUrl(clientChunk?.fileName)}"></script>
  ${bodyTagsHtml}
  </body>
</html>`.trim();
      const fileName = routePath.endsWith("/")
        ? `${decodeURI(routePath)}index.html`
        : `${decodeURI(routePath)}.html`;
      await fs.ensureDir(join(root, "build", dirname(fileName)));
      await fs.writeFile(join(root, "build", fileName), html);
    })
  );
}

export async function build(root: string, config: SiteConfig) {
  // 记录开始时间
  const start = performance.now();

  const [clientBundle] = await bundle(root, config);
  const serverEntryPath = join(root, ".temp", "ssr-entry.mjs");
  const { render, routes } = await import(
    pathToFileURL(serverEntryPath).toString()
  );

  const tagsAndCategoriesRoutes = await getTagsAndCategoriesRoutes(
    routes,
    config.postDir
  );
  const newRoutes = [
    ...routes,
    ...config.siteData.themeConfig.navMenus,
    ...tagsAndCategoriesRoutes,
    {
      path: "404",
    },
  ];

  try {
    await renderPage(render, newRoutes, root, clientBundle, config);
  } catch (e) {
    console.log("Render page error.\n", e);
  } finally {
    fs.remove(join(root, ".temp"));
  }

  // 计算总耗时
  const totalTime = performance.now() - start;

  // 输出时间统计（带颜色区分）
  console.log(
    "\n------------------------ Build Time Statistics ------------------------"
  );
  console.log(`Total: ${totalTime.toFixed(2)}ms`);
  console.log(
    "------------------------------------------------------------------------\n"
  );
}
