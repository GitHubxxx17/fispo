import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { ElementContent, Root } from "hast";
import { EXTENDED_TAGS } from "../../../constants";

interface Options {
  base: string;
}

const iconNoteMap = new Map([
  ["default", () => ({ icon: "circle-right", className: "fas" })],
  ["primary", () => ({ icon: "plus-circle", className: "fas" })],
  ["success", () => ({ icon: "check-circle", className: "fas" })],
  ["info", () => ({ icon: "info-circle", className: "fas" })],
  ["warning", () => ({ icon: "exclamation-circle", className: "fas" })],
  ["danger", () => ({ icon: "minus-circle", className: "fas" })],
]);

const iconTipMap = new Map([
  ["success", () => ({ icon: "check" })],
  ["info", () => ({ icon: "info" })],
  ["error", () => ({ icon: "times" })],
  ["warning", () => ({ icon: "exclamation" })],
  ["bolt", () => ({ icon: "bolt" })],
  ["ban", () => ({ icon: "ban" })],
  ["home", () => ({ icon: "home" })],
  ["sync", () => ({ icon: "sync" })],
  ["cogs", () => ({ icon: "cogs" })],
  ["key", () => ({ icon: "key" })],
  ["bell", () => ({ icon: "bell" })],
]);

const iconRegex = /icon-([\w\s-]+)/;

export const rehypePluginTags: Plugin<[Options], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "div") {
        const type = node.properties?.className?.[0];
        if (EXTENDED_TAGS.includes(type)) {
          const isNotIcon = node.properties?.className
            ?.toString()
            .includes("no-icon");

          const customIcon = node.properties?.className
            ?.toString()
            .match(iconRegex)?.[1];
          let iconProps = null;

          if (customIcon) {
            iconProps = { icon: customIcon };
          } else {
            const category = node.properties?.className?.[1];
            iconProps =
              type == "note"
                ? iconNoteMap.get(category)?.()
                : iconTipMap.get(category)?.();
          }

          if (iconProps && !isNotIcon) {
            node.children.unshift({
              type: "element",
              tagName: "span",
              properties: { class: `${type}-icon` },
              children: [
                {
                  type: "element",
                  tagName: "Icon",
                  properties: iconProps,
                  children: [],
                },
              ],
            });
          }
        } else if (type === "timeline") {
          const text = node.properties?.className?.[1];
          node.properties = { class: type };

          node.children.forEach((item) => {
            if (
              item.type === "element" &&
              item.tagName === "div" &&
              item.properties.className.toString() == "timeline-item"
            ) {
              const spliceIdx = item.children.findIndex(
                (v) =>
                  v.type === "element" &&
                  v.tagName === "div" &&
                  v.properties.className.toString() == "timeline-item-title"
              );

              const content = item.children.splice(spliceIdx + 1);
              item.children.push({
                type: "element",
                tagName: "div",
                properties: {
                  class: "timeline-item-content",
                },
                children: content,
              });
            }
          });

          node.children.unshift({
            type: "element",
            tagName: "div",
            properties: {
              class: "timeline-item headline",
            },
            children: [
              {
                type: "element",
                tagName: "div",
                properties: {
                  class: "timeline-item-title",
                },
                children: [
                  {
                    type: "element",
                    tagName: "p",
                    properties: {},
                    children: [
                      {
                        type: "text",
                        value: text,
                      },
                    ],
                  },
                ],
              },
            ],
          });
        }
      }

      // 清除空标签
      if (node.tagName === "p" && node.children.length === 0) {
        parent.children.splice(index, 1);
      }

      // docs主题扩展语法 - 需转移到相关主题上
      if (
        node.tagName == "li" &&
        node.properties?.className?.toString().endsWith("-list-item")
      ) {
        const className = node.properties?.className;
        const properties = node.properties;
        node.properties = { className: node.properties?.className };
        node.children = [];

        const isTheme = className.toString().startsWith("theme");
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
          const tags = properties?.dataTags.toString().split(" ");
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
      }
    });
  };
};
