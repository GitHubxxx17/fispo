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
  const highlighter = await shiki.getHighlighter({ theme: "nord" });
  const { rehypePlugins, remarkPlugins } = createPluginMdx(config, highlighter);

  return [
    pluginConfig(config, restartServer),
    {
      enforce: "pre" as enforceType,
      ...pluginMdx({ remarkPlugins, rehypePlugins }),
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
  ];
}
