import { pluginIndexHtml } from "./indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { pluginConfig } from "./config";
import { pluginRoutes } from "./plugin-routes";
import { SiteConfig } from "shared/types";
import pluginMdx from "@mdx-js/rollup";
import shiki from "shiki";
import { createPluginMdx } from "./plugin-mdx";
import commonjs from "vite-plugin-commonjs";

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
    commonjs({
      filter(id) {
        // 特别处理 prop-types fontawesome classnames相关模块
        return [
          "prop-types",
          "@fortawesome",
          "classnames",
          "react-fast-compare",
          "react-helmet-async",
          "invariant",
          "shallowequal",
          "history",
          "react-is",
        ].some((p) => id.includes(p));
      },
    }),
    pluginReact({
      jsxRuntime: "automatic",
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
      isSSR,
    }),
  ];
}
