import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { Element, Root } from "hast";

type dataType = {
  isVisited: boolean;
};

export const rehypePluginPreWrapper: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      // <pre><code>...</code></pre>
      // 找到 pre 元素
      if (
        node.tagName === "pre" &&
        node.children[0]?.type === "element" &&
        node.children[0].tagName === "code" &&
        !(node.data as unknown as dataType)?.isVisited
      ) {
        const codeNode = node.children[0];
        const codeClassName =
          codeNode.properties?.className?.toString() || "language-md";
        // language-xxx
        const lang = codeClassName.split("-")[1];

        const clonedNode: Element & { data: dataType } = {
          type: "element",
          tagName: "pre",
          children: node.children,
          data: {
            isVisited: true,
            position: undefined,
          },
          properties: {},
        };

        // 修改原来的 pre 标签 -> div 标签
        node.tagName = "div";
        node.properties = node.properties || {};
        node.properties.className = codeClassName;

        node.children = [
          {
            type: "element",
            tagName: "div",
            properties: {
              className: "highlight-tools",
            },
            children: [
              {
                type: "element",
                tagName: "span",
                properties: {
                  className: "lang",
                },
                children: [
                  {
                    type: "text",
                    value: lang,
                  },
                ],
              },
              {
                type: "element",
                tagName: "CopyButton",
                properties: {},
                children: [],
              },
            ],
          },
          clonedNode,
        ];
      }
    });
  };
};
