import { createServer as createViteDevServer } from "vite";
import { PACKAGE_ROOT, RUNTIME_PATH, SHARED_PATH } from "./constants";
import { resolveConfig } from "./config";
import { createVitePlugins } from "./plugins/vitePlugins";

export async function createDevServer(restartServer: () => Promise<void>) {
  const config = await resolveConfig("serve", "development");
  return createViteDevServer({
    root: PACKAGE_ROOT,
    plugins: await createVitePlugins(config, restartServer),
    server: {
      fs: {
        allow: [PACKAGE_ROOT, RUNTIME_PATH, SHARED_PATH, process.cwd()],
      },
    },
  });
}
