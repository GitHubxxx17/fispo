import { join, relative } from "path";
import { mergeConfig, Plugin, UserConfig } from "vite";
import { SiteConfig } from "shared/types/index";
import { configFiles, PACKAGE_ROOT, THEME_PATH } from "node/constants";
import fs from "fs-extra";
import sirv from "sirv";

const SITE_DATA_ID = "fispo:site-data";

export function pluginConfig(
  config: SiteConfig,
  restartServer?: () => Promise<void>
): Plugin {
  const getComposedPluginConfig = (key: "alias" | "define" | "vite") => {
    return config.siteData.plugins
      ?.map((plugin) => plugin[key])
      .filter(Boolean)
      .reduce((acc, cur) => {
        return mergeConfig(acc as UserConfig, cur as UserConfig);
      }, {});
  };
  const pluginAlias = getComposedPluginConfig("alias");
  const pluginDefine = getComposedPluginConfig("define");
  const pluginViteConfig = getComposedPluginConfig("vite");

  const watchFilesFromPlugins = config.siteData.plugins
    ?.map((plugin) => plugin.watchFiles)
    .flat() as string[];

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
      const customWatchedFiles = [
        config.configPath.replaceAll("\\", "/"),
        ...(watchFilesFromPlugins || []),
      ].filter(Boolean) as string[];

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
      return mergeConfig(
        {
          root: PACKAGE_ROOT,
          optimizeDeps: {
            include: [
              "react",
              "react-dom",
              "react-dom/client",
              "react-router-dom",
              "react/jsx-runtime",
              "react-helmet-async",
              "medium-zoom",
              "@fortawesome/react-fontawesome",
              "classnames",
            ],
          },
          resolve: {
            alias: {
              "@runtime": join(PACKAGE_ROOT, "src", "runtime"),
              shared: join(PACKAGE_ROOT, "src", "shared"),
              "@fispo": THEME_PATH,
              "@theme-default": join(PACKAGE_ROOT, "src", "theme-default"),
              ...pluginAlias,
            },
          },
          define: { ...pluginDefine },
        },
        mergeConfig(config.siteData?.vite ?? {}, pluginViteConfig ?? {})
      );
    },
    configureServer(server) {
      const publicDir = join(config.root, config.public);
      if (fs.pathExistsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir));
      }

      [...configFiles, ...(watchFilesFromPlugins || [])].forEach((file) => {
        server.watcher.add(file);
      });
    },
  };
}
