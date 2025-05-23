import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { ElementContent, Root } from "hast";

interface Options {
  base: string;
}

export const rehypePluginTags: Plugin<[Options], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName == "li" &&
        node.properties?.className?.toString().endsWith("-list-item")
      ) {
        try {
          const className = node.properties?.className;
          const properties = node.properties;
          node.properties = { className: node.properties?.className };
          node.children = [];
          const isTheme = className?.toString()?.startsWith("theme");
          if (isTheme) {
            node.children.push({
              type: "element",
              tagName: "div",
              properties: { className: "theme-list-item-img" },
              children: [
                {
                  type: "element",
                  tagName: "Link",
                  properties: { href: properties.dataUrl },
                  children: [
                    {
                      type: "element",
                      tagName: "Image",
                      properties: { src: properties.dataImg },
                      children: [],
                    },
                    {
                      type: "element",
                      tagName: "div",
                      properties: { className: "theme-list-item-img-text" },
                      children: [
                        {
                          type: "element",
                          tagName: "Icon",
                          properties: { icon: "eye" },
                          children: [],
                        },
                        {
                          type: "element",
                          tagName: "span",
                          properties: {},
                          children: [
                            {
                              type: "text",
                              value: "点击预览网站",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            });
          }

          const content: ElementContent = {
            type: "element",
            tagName: "div",
            properties: {
              className: `${isTheme ? "theme" : "plugin"}-list-item-content`,
            },
            children: [
              {
                type: "element",
                tagName: "h3",
                properties: {},
                children: [
                  {
                    type: "element",
                    tagName: "Link",
                    properties: { href: properties.dataUrl },
                    children: [
                      {
                        type: "text",
                        value: properties.dataName as string,
                      },
                    ],
                  },
                ],
              },
              {
                type: "element",
                tagName: "p",
                properties: {},
                children: [
                  {
                    type: "text",
                    value: properties.dataDescription as string,
                  },
                ],
              },
            ],
          };

          if (!isTheme) {
            const tags = properties?.dataTags?.toString()?.split(" ");
            content.children.push({
              type: "element",
              tagName: "div",
              properties: { className: "plugin-list-item-tags" },
              children: tags.map((tag) => {
                return {
                  type: "element",
                  tagName: "span",
                  properties: {},
                  children: [
                    {
                      type: "text",
                      value: `#${tag}`,
                    },
                  ],
                };
              }),
            });
          }

          node.children.push(content);
        } catch (e) {
          console.log("docs外挂标签插件发生错误", e);
        }
      }
    });
  };
};
