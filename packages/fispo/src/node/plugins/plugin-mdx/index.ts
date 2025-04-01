import remarkPluginGFM from "remark-gfm";
import rehypePluginAutolinkHeadings from "rehype-autolink-headings";
import rehypePluginSlug from "rehype-slug";
import remarkPluginMDXFrontMatter from "remark-mdx-frontmatter";
import remarkPluginFrontmatter from "remark-frontmatter";
import { rehypePluginPreWrapper } from "./rehypePlugins/preWrapper";
import { rehypePluginShiki } from "./rehypePlugins/shiki";
import type { Highlighter } from "shiki";
import { remarkPluginToc } from "./remarkPlugins/toc";
import { PluggableList } from "unified";
import remarkBreaks from "remark-breaks";
import { remarkPluginInfo } from "./remarkPlugins/info";
import { SiteConfig } from "shared/types";
import { rehypePluginLink } from "./rehypePlugins/link";

export function createPluginMdx(config: SiteConfig, highlighter: Highlighter) {
  const plugins = config.siteData.plugins || [];

  return {
    remarkPlugins: [
      remarkPluginGFM,
      remarkPluginInfo,
      remarkBreaks,
      remarkPluginFrontmatter,
      [remarkPluginMDXFrontMatter, { name: "frontmatter" }],
      remarkPluginToc,
      ...(config.siteData.markdown.remarkPlugins ?? []),
      ...plugins.map((plugin) => plugin.markdown?.remarkPlugins || []).flat(),
    ] as PluggableList,
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: "header-anchor",
          },
        },
      ],
      [rehypePluginLink, { base: config.base }],
      rehypePluginPreWrapper,
      [rehypePluginShiki, { highlighter }],
      ...(config.siteData.markdown.rehypePlugins ?? []),
      ...plugins.map((plugin) => plugin.markdown?.rehypePlugins || []).flat(),
    ] as PluggableList,
  };
}
