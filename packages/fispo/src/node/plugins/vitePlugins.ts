import { pluginIndexHtml } from "./indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { pluginConfig } from "./config";
import { pluginRoutes } from "./plugin-routes";
import { SiteConfig } from "shared/types";
import pluginMdx from "@mdx-js/rollup";
import shiki from "shiki";
import { createPluginMdx } from "./plugin-mdx";
import { pluginTheme } from "./theme";
import { createFispoPlugins } from "./pulgin-fispo";

type enforceType = "pre" | "post";

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false
) {
  const highlighter = await shiki.getHighlighter(config.siteData.highlighter);
  const { rehypePlugins, remarkPlugins } = createPluginMdx(config, highlighter);

  const pluginsFromIslandPlugins = config.siteData.plugins
    ?.map((item) => item.vite)
    .filter(Boolean)
    .map((item) => item?.plugins || [])
    .flat();

  return [
    pluginConfig(config, restartServer),
    {
      enforce: "pre" as enforceType,
      ...pluginMdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins,
        rehypePlugins,
      }),
    },
    pluginIndexHtml(config),
    pluginReact({
      jsxRuntime: "automatic",
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
    pluginRoutes({
      prefix: config.base || "/",
      root: config.root,
      postDir: config.postDir,
      isSSR,
    }),
    pluginTheme(config),
    ...createFispoPlugins(config),
    ...pluginsFromIslandPlugins,
  ];
}
