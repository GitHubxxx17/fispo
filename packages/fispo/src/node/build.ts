import { InlineConfig, build as viteBuild } from "vite";
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
  render: (url: string, helmetContext: object) => Promise<string>,
  routes: Route[],
  root: string,
  clientBundle: RollupOutput,
  config: SiteConfig
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  const withBaseUrl = (url: string) => withBase(url, config.base || "/");
  console.log(`Rendering page in server side...`);
  return Promise.all(
    routes.map(async (route) => {
      const helmetContext = {
        context: {},
      } as HelmetData;
      const routePath = route.path;
      const appHtml = await render(routePath, helmetContext.context);
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
  }
}
