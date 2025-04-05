import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "hast";
import { EXTENDED_TAGS } from "../../../constants";

interface Options {
  base: string;
}

const iconMap = new Map([
  ["default", () => ({ icon: "circle-right", className: "fas" })],
  ["primary", () => ({ icon: "plus-circle", className: "fas" })],
  ["success", () => ({ icon: "check-circle", className: "fas" })],
  ["info", () => ({ icon: "info-circle", className: "fas" })],
  ["warning", () => ({ icon: "exclamation-circle", className: "fas" })],
  ["danger", () => ({ icon: "minus-circle", className: "fas" })],
]);

const iconRegex = /icon-([\w\s-]+)/;

export const rehypePluginTags: Plugin<[Options], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "div") {
        const type = node.properties?.className?.[0];
        if (EXTENDED_TAGS.includes(type)) {
          const isNotIcon = node.properties?.className
            ?.toString()
            .includes("no-icon");

          const customIcon = node.properties?.className
            ?.toString()
            .match(iconRegex)?.[1];
          const iconProps = iconMap.get(node.properties?.className?.[1])?.();
          if (customIcon) {
            iconProps.icon = customIcon;
          }
          node.children.unshift({
            type: "element",
            tagName: "span",
            properties: { class: "note-icon" },
            children:
              iconProps && !isNotIcon
                ? [
                    {
                      type: "element",
                      tagName: "Icon",
                      properties: iconProps,
                      children: [],
                    },
                  ]
                : [],
          });
        }
      }
    });
  };
};
