import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Text, Root } from "hast";

export const rehypePluginHighlight: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (
        node.tagName === "pre" &&
        node.children[0]?.type === "element" &&
        node.children[0].tagName === "code"
      ) {
        const codeNode = node.children[0];
        const codeContent = (codeNode.children[0] as Text).value;
        const codeClassName =
          codeNode.properties?.className?.toString() || "language-md";

        const lang = codeClassName.split("-")[1];
        if (!lang) {
          return;
        }
        parent.children.splice(index, 1, {
          type: "element",
          tagName: "CodeBlock",
          properties: {
            code: codeContent,
            language: lang,
          },
          children: [],
        });
      }
    });
  };
};
