import type { Plugin } from "unified";
import Slugger from "github-slugger";
import { visit } from "unist-util-visit";
import { Root } from "mdast";
import type { MdxjsEsm } from "mdast-util-mdxjs-esm";
import { parse, Program } from "acorn";

interface TocItem {
  id: string;
  text: string;
  depth: number;
}

interface ChildNode {
  type: "link" | "text" | "inlineCode";
  value: string;
  children?: ChildNode[];
}

/**
 * 过滤 HTML 标签，保留标签内文本
 * @param html 包含 HTML 标签的字符串
 * @returns 过滤后的文本
 */
export function filterHtml(html: string): string {
  // 匹配完整标签（开始+结束 或 自闭合）并保留内部文本
  return html.replace(/<[^>]*>(.*?)<\/[^>]*>|<[^>]*\/>/g, "$1");
}

export const remarkPluginToc: Plugin<[], Root> = () => {
  return (tree) => {
    const slugger = new Slugger();
    const toc: TocItem[] = [];
    visit(tree, "heading", (node) => {
      if (!node.depth || !node.children) {
        return;
      }
      // h1 ~ h4
      if (node.depth > 0 && node.depth <= 5) {
        // node.children 是一个数组，包含几种情况:
        // 1. 文本节点，如 '## title'
        // 结构如下:
        // {
        //   type: 'text',
        //   value: 'title'
        // }
        // 2. 链接节点，如 '## [title](/path)'
        // 结构如下:
        // {
        //   type: 'link',
        //     {
        //       type: 'text',
        //       value: 'title'
        //     }
        //   ]
        // }
        // 3. 内联代码节点，如 '## `title`'
        // 结构如下:
        // {
        //   type: 'inlineCode',
        //   value: 'title'
        // }
        const originText = (node.children as ChildNode[])
          .map((child) => {
            switch (child.type) {
              case "link":
                return child.children?.map((c) => c.value).join("") || "";
              default:
                return child.value;
            }
          })
          .join("");
        const filterText = filterHtml(originText);
        const id = slugger.slug(filterText);
        toc.push({
          id,
          text: filterText,
          depth: node.depth,
        });
      }
    });

    const insertCode = `export const toc = ${JSON.stringify(toc, null, 2)};`;

    tree.children.push({
      type: "mdxjsEsm",
      value: insertCode,
      data: {
        estree: parse(insertCode, {
          ecmaVersion: 2020,
          sourceType: "module",
        }) as unknown as Program,
      },
    } as MdxjsEsm);
  };
};
