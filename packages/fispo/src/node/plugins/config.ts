import { join, relative } from "path";
import { Plugin } from "vite";
import { SiteConfig } from "shared/types/index";
import { PACKAGE_ROOT } from "node/constants";
import fs from "fs-extra";
import sirv from "sirv";

const SITE_DATA_ID = "fispo:site-data";

export function pluginConfig(
  config: SiteConfig,
  restartServer?: () => Promise<void>
): Plugin {
  return {
    name: "fispo:config",
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return "\0" + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === "\0" + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath.replaceAll("\\", "/")];
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file));

      if (include(ctx.file)) {
        console.log(
          `\n${relative(config.root, ctx.file)} changed, restarting server...`
        );
        // 重启 Dev Server
        await restartServer();
      }
    },
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            "@runtime": join(PACKAGE_ROOT, "src", "runtime", "index.ts"),
          },
        },
      };
    },
    configureServer(server) {
      const publicDir = join(config.root, "public");
      if (fs.pathExistsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir));
      }
    },
  };
}
