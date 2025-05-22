import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "hast";

export const rehypePluginImg: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      try {
        if (node.tagName == "img") {
          node.tagName = "Image";
          node.properties.isPreview = true;
        }
      } catch (e) {
        console.log("rehypePluginImg插件发生错误:", e);
      }
    });
  };
};
