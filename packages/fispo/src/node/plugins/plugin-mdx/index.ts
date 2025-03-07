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
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import React from "react";

export function createPluginMdx(highlighter: Highlighter) {
  return {
    remarkPlugins: [
      remarkPluginGFM,
      remarkPluginInfo,
      remarkBreaks,
      remarkPluginFrontmatter,
      [remarkPluginMDXFrontMatter, { name: "frontmatter" }],
      remarkPluginToc,
    ] as PluggableList,
    rehypePlugins: [
      [
        rehypeRaw,
        {
          // 配置 passThrough 选项，忽略 mdxjsEsm 节点
          passThrough: ["mdxjsEsm"],
        },
      ],
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: "header-anchor",
          },
        },
      ],
      rehypePluginPreWrapper,
      [rehypePluginShiki, { highlighter }],
      [
        rehypeReact,
        {
          createElement: React.createElement,
        },
      ],
    ] as PluggableList,
  };
}
