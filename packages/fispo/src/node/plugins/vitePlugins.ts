import { pluginIndexHtml } from "./indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { pluginConfig } from "./config";
import { pluginRoutes } from "./plugin-routes";
import { SiteConfig } from "shared/types";
import pluginMdx from "@mdx-js/rollup";
import shiki from "shiki";
import { createPluginMdx } from "./plugin-mdx";
import { pluginTheme } from "./theme";

type enforceType = "pre" | "post";

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false
) {
  const highlighter = await shiki.getHighlighter({ theme: "nord" });
  const { rehypePlugins, remarkPlugins } = createPluginMdx(highlighter);
  return [
    pluginIndexHtml(config),
    {
      enforce: "pre" as enforceType,
      ...pluginMdx({ remarkPlugins, rehypePlugins }),
    },
    pluginReact({
      jsxRuntime: "automatic",
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
      isSSR,
    }),
    pluginTheme(config),
  ];
}
