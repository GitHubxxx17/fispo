import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import { Root } from "mdast";
import type { MdxjsEsm } from "mdast-util-mdxjs-esm";
import { parse, Program } from "acorn";

export const remarkPluginInfo: Plugin<[], Root> = () => {
  return (tree) => {
    let mdContent = toString(tree);
    visit(tree, "yaml", (node) => {
      mdContent = mdContent.replace(node.value, "");
    });
    mdContent = mdContent.replaceAll(/[\r\n]/g, "");
    const insertCode = `export const mdInfo = ${JSON.stringify(mdContent.slice(0, 150))};`;

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
