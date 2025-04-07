import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root } from "hast";
import { EXTERNAL_URL_RE } from "shared/constants";
import { isHashPath, isRelativePath, withBase } from "shared/utils";
import { basename, dirname } from "path";

interface Options {
  base: string;
  root: string;
}

export const rehypePluginLink: Plugin<[Options], Root> = ({ base, root }) => {
  return (tree, file) => {
    visit(tree, "element", (node) => {
      try {
        if (node.tagName === "a" && node.properties?.class != "header-anchor") {
          const { target = "", rel = "" } = node.properties;
          let href = (node.properties.href ?? "/") as string;
          if (isHashPath(href)) {
            const dirName = dirname(file.path);
            const index = dirName.indexOf(`${root}/`);
            const targetpath = dirName.slice(index + root.length);

            const fileName = basename(file.path).replace(/\.[^/.]+$/, "");

            href = `${fileName !== "index" ? "./" + fileName : targetpath}${href}`;
          }
          const isExternal = EXTERNAL_URL_RE.test(href as string);
          const innerTarget = isExternal ? "_blank" : target;
          const innerRel = isExternal ? "noopener noreferrer" : rel;
          let innerHref =
            isRelativePath(href as string) || isExternal
              ? href
              : withBase(href, base);

          // 去扩展名
          if (!isExternal) {
            innerHref = innerHref.replace(/\.[^/.]+$/, "");
          }

          node.properties = {
            ...node.properties,
            href: innerHref,
            target: innerTarget,
            rel: innerRel,
          };
        }
      } catch (e) {
        console.log("rehypePluginLink插件发生错误:", e);
      }
    });
  };
};
