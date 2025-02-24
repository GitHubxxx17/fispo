import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugins/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { PACKAGE_ROOT } from "./constants";
import { resolveConfig } from "./config";
import { pluginConfig } from "./plugins/config";
import { pluginRoutes } from "./plugins/plugin-routes";

export async function createDevServer(
  root = process.cwd(),
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, "serve", "development");
  return createViteDevServer({
    root: PACKAGE_ROOT,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config, restartServer),
      pluginRoutes({
        root: config.root,
        isSSR: false,
      }),
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
