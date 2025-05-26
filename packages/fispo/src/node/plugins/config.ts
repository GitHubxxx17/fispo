import { join, relative } from "path";
import { mergeConfig, Plugin, UserConfig } from "vite";
import { SiteConfig } from "shared/types/index";
import { configFiles, PACKAGE_ROOT, SHARED_PATH } from "../constants";
import fs from "fs-extra";
import sirv from "sirv";
import autoprefixer from "autoprefixer";
import postcssPrefixSelector from "postcss-prefix-selector";

const SITE_DATA_ID = "fispo:site-data";

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function base16(theme: string) {
  return theme.startsWith("base16")
    ? `base16/${theme.replace("base16-", "")}`
    : theme;
}

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
      // 获取当前配置的主题名称
      const darkTheme = config.siteData?.codeHighlight?.dark || "github-dark";
      const lightTheme = config.siteData?.codeHighlight?.light || "github";
      const darkThemePath = `highlight.js/styles/${base16(darkTheme)}.css`;
      const lightThemePath = `highlight.js/styles/${base16(lightTheme)}.css`;
      const excludeRegExp = new RegExp(
        `^\\.theme-(${escapeRegExp(darkTheme)}|${escapeRegExp(lightTheme)})`
      );

      return mergeConfig(
        {
          root: PACKAGE_ROOT,
          server: {
            fs: {
              allow: [SHARED_PATH, process.cwd()],
            },
          },
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
              "@fortawesome/free-solid-svg-icons",
              "@fortawesome/free-brands-svg-icons",
              "@fortawesome/fontawesome-svg-core",
              "classnames",
              "@mdx-js/react",
              "highlight.js",
            ],
            exclude: [
              "@runtime",
              "shared",
              "fispo:globalComponents",
              "virtual:routes",
              "fispo:site-data",
            ],
          },
          resolve: {
            alias: {
              "@runtime": join(PACKAGE_ROOT, "src", "runtime"),
              shared: SHARED_PATH,
              "@darkTheme": darkThemePath,
              "@lightTheme": lightThemePath,
              ...pluginAlias,
            },
          },
          define: { ...pluginDefine },
          css: {
            postcss: {
              plugins: [
                autoprefixer(),
                postcssPrefixSelector({
                  // 根据主题文件名动态生成前缀
                  transform: (prefix, selector, prefixedSelector, file) => {
                    if (file.includes(darkThemePath)) {
                      return `.theme-${darkTheme} ${selector}`;
                    } else if (file.includes(lightThemePath)) {
                      return `.theme-${lightTheme} ${selector}`;
                    }
                    return prefixedSelector;
                  },
                  exclude: [excludeRegExp],
                  // 只处理 highlight.js 的 CSS 文件
                  includeFiles: [darkThemePath, lightThemePath],
                }),
              ],
            },
          },
        },
        mergeConfig(config.siteData?.vite ?? {}, pluginViteConfig ?? {})
      );
    },
    configureServer(server) {
      const publicDir = join(config.root, config.public);
      if (fs.pathExistsSync(publicDir)) {
        server.middlewares.use(config.base, sirv(publicDir));
      }

      [...configFiles, ...(watchFilesFromPlugins || [])].forEach((file) => {
        server.watcher.add(file);
      });
    },
  };
}
