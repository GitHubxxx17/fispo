import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import { Root } from "mdast";
import fs from "fs-extra";
import matter from "gray-matter";
import { formatDate } from "shared/helper/date";
import { FrontMatter } from "shared/types";
import { TAG_HTML_REGEX, TAG_REGEX } from "../../../constants";

export const remarkPluginFispoFrontMatter: Plugin<[], Root> = () => {
  return (tree, file) => {
    visit(tree, "yaml", (node, index, parent) => {
      // 处理frontMatter
      if (index == 0 && parent.type == "root") {
        const stats = fs.statSync(file.path);
        const { birthtime, mtime } = stats;
        const matterData = matter(`---\n${node.value}\n---\n`);
        const data: FrontMatter = matterData.data;

        if (!data.date) {
          data.date = formatDate(birthtime);
        }

        if (!data.updated) {
          data.updated = formatDate(mtime);
        }

        if (!data.info) {
          const newFlags = "g" + TAG_REGEX.flags;
          const mdContent = toString(tree)
            .replace(node.value, "")
            .replaceAll(/[\r\n]/g, "")
            .replaceAll(new RegExp(TAG_REGEX.source, newFlags), "")
            .replaceAll(new RegExp(TAG_HTML_REGEX.source, "g"), "");
          data.info = mdContent.slice(0, 150);
        }

        const value = matter
          .stringify("", data)
          .trim()
          .replace(/^---\n/, "")
          .replace(/\n---$/, "");

        node.value = value;
      }
    });
  };
};
