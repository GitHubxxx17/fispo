import { InlineConfig, build as viteBuild } from "vite";
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from "./constants";
import type { RollupOutput } from "rollup";
import { join } from "path";
import fs from "fs-extra";
import { pathToFileURL } from "url";
import { SiteConfig } from "shared/types";
import { pluginConfig } from "./plugins/config";
import pluginReact from "@vitejs/plugin-react";
import { pluginIndexHtml } from "./plugins/indexHtml";
import { pluginRoutes } from "./plugins/plugin-routes";

export async function bundle(root: string, config: SiteConfig) {
  const resolveViteConfig = (isServer: boolean): InlineConfig => ({
    mode: "production",
    root,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config),
      pluginRoutes({
        root: config.root,
        isSSR: isServer,
      }),
    ],
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
      viteBuild(resolveViteConfig(false)),
      // server build
      viteBuild(resolveViteConfig(true)),
    ]);
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}

export async function renderPage(
  render: () => string,
  root: string,
  clientBundle: RollupOutput
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  console.log(`Rendering page in server side...`);
  const appHtml = render();
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>title</title>
    <meta name="description" content="xxx">
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/${clientChunk?.fileName}"></script>
  </body>
</html>`.trim();
  await fs.ensureDir(join(root, "build"));
  await fs.writeFile(join(root, "build/index.html"), html);
  await fs.remove(join(root, ".temp"));
}

// 新增入参
export async function build(root: string = process.cwd(), config: SiteConfig) {
  // bundle 方法也新增入参
  const [clientBundle] = await bundle(root, config);
  const serverEntryPath = join(root, ".temp", "ssr-entry.cjs");
  const { render } = await import(pathToFileURL(serverEntryPath).toString());
  try {
    await renderPage(render, root, clientBundle);
  } catch (e) {
    console.log("Render page error.\n", e);
  }
}
