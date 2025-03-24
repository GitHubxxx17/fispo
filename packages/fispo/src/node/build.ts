import {
  InlineConfig,
  Plugin,
  build as viteBuild,
  IndexHtmlTransformHook,
  HtmlTagDescriptor,
} from "vite";
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from "./constants";
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
  const resolveViteConfig = async (
    isServer: boolean
  ): Promise<InlineConfig> => ({
    mode: "production",
    root: join(process.cwd(), root),
    plugins: await createVitePlugins(config, undefined, isServer),
    ssr: {
      // 注意加上这个配置，防止 cjs 产物中 require ESM 的产物，因为 react-router-dom 的产物为 ESM 格式
      noExternal: ["react-router-dom"],
    },
    build: {
      minify: false,
      ssr: isServer,
      outDir: isServer ? join(root, ".temp") : join(root, "build"),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? "cjs" : "esm",
        },
        plugins: [
          {
            name: "extract-tags-plugin",
            buildStart() {
              if (isServer) {
                extractTagsDuringBuild(config);
              }
            },
          },
        ],
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
      await fs.copy(publicDir, join(root, "build"));
    }
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}

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
  const tagsHtml = extractedTags
    .map((tag) => {
      const attrs = Object.entries(tag.attrs)
        .map(([k, v]) => {
          if (v === true) {
            return k;
          }
          return `${k}="${v}"`;
        })
        .join(" ");
      return `<${tag.tag} ${attrs}></${tag.tag}>`;
    })
    .join("\n    ");
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

      const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    ${helmet?.title?.toString() || ""}
    ${helmet?.meta?.toString() || ""}
    ${helmet?.link?.toString() || ""}
    ${helmet?.style?.toString() || ""}
    ${tagsHtml}
    <link rel="icon" href="${withBaseUrl(config.logo)}" type="image/png">
    <meta name="description" content="${config.siteData.description}">
    ${styleAssets
      .map(
        (item) => `<link rel="stylesheet" href="${withBaseUrl(item.fileName)}">`
      )
      .join("\n")}
  </head>
  <body>
    <div id="root">${appHtml}</div>
      ${globalComponentsHtml}
    <script type="module" src="${withBaseUrl(clientChunk?.fileName)}"></script>
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
  const [clientBundle] = await bundle(root, config);
  const serverEntryPath = join(root, ".temp", "ssr-entry.cjs");
  const { render, routes } = await import(
    pathToFileURL(serverEntryPath).toString()
  );

  const tagsAndCategoriesRoutes = await getTagsAndCategoriesRoutes(routes);
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
}
