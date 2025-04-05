import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import {
  Html,
  Link,
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
  Text,
} from "mdast";
import { basename } from "path";

interface Options {
  base?: string;
}

type RootContentType = RootContent & { children: RootContent[] };

interface Tag {
  tag: string;
  attrs: string[];
  isEnd: boolean;
  index?: number;
}

export const remarkPluginTags: Plugin<[Options], Root> = () => {
  return (tree, file) => {
    const tagsParentNodes: (RootContentType | Root)[] = [];
    const tagRegex = /\{%\s*([\u4e00-\u9fa5\w\s-]+)\s*%\}/s;
    const EXCLUDE_TAGS = ["mdxjsEsm", "yaml", "break", "code", "heading"];
    const timelineRegex = /<!--\s*(\S+)\s*(\S[\s\S]*?)\s*-->/;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    const isTag = (text: string) => {
      return text.match(tagRegex);
    };

    // 创建 Paragraph 节点
    const createParagraphNode = (children: PhrasingContent[]): Paragraph => {
      return {
        type: "paragraph",
        children: children,
        position: {
          start: children[0]?.position?.start,
          end: children.at(-1)?.position?.end,
        },
      };
    };

    // 创建 Text 节点
    const createTextNode = (value: string): Text => {
      return {
        type: "text",
        value,
      };
    };

    // 创建 Link 节点
    const createLinkNode = (text: string, url: string): Link => {
      if (text === "") text = url;
      return {
        type: "link",
        url,
        children: [createTextNode(text)],
      };
    };

    // 创建标签
    const createTag = ({ isEnd, tag, attrs }: Tag): Html => {
      return {
        type: "html",
        value: isEnd ? "</div>" : `<div class="${tag} ${attrs.join(" ")}">`,
      };
    };

    // 创建时间轴标题节点
    const createTimelineTitleNode = (text: string) => {
      const matches = text.matchAll(linkRegex);
      const p = createParagraphNode([]);
      for (const match of matches) {
        const [val, linkText, url] = match;
        const startIdx = match.index;
        if (startIdx !== 0) {
          p.children.push(createTextNode(text.slice(0, startIdx)));
          text = text.slice(startIdx);
        }
        p.children.push(createLinkNode(linkText, url));
        text = text.replace(val, "");
      }
      p.children.push(createTextNode(text));

      return [
        createTag({
          tag: "timeline-item-title",
          attrs: [],
          isEnd: false,
        }),
        p,
        createTag({
          tag: "timeline-item-title",
          attrs: [],
          isEnd: true,
        }),
      ];
    };

    const handleTagsNode = (
      node: RootContentType,
      parentNode: RootContentType | Root,
      parentIdx: number,
      containerNode: RootContentType | Root,
      containerIdx: number
    ) => {
      if (node?.children) {
        for (let i = 0; i < node.children.length; i++) {
          const item = node.children[i];
          if (node.type === "listItem" || node.type === "blockquote") {
            containerNode = node;
            containerIdx = i;
          }
          handleTagsNode(
            item as RootContentType,
            node,
            i,
            containerNode,
            containerIdx
          );
        }
        return;
      }

      if (node.type === "text") {
        const match = isTag(node.value);
        if (match) {
          const [val, catchTags] = match;
          const [tag, ...attrs] = catchTags.split(" ").filter(Boolean);
          const isEnd = tag.startsWith("end");
          const startIdx = match.index;
          node.value = node.value.replace(val, "");
          try {
            const container = isEnd ? tagsParentNodes.pop() : containerNode;
            if (!container) return;
            const innerText = node.value.slice(startIdx);
            const p = createParagraphNode(
              parentNode.children.splice(parentIdx + 1) as PhrasingContent[]
            );
            if (innerText !== "") {
              node.value = node.value.slice(0, startIdx);
              const newText = createTextNode(innerText);
              p.children.unshift(newText);
            }
            container.children.splice(
              containerIdx + 1,
              0,
              createTag({ tag, attrs, isEnd }),
              p
            );
            if (!isEnd) {
              tagsParentNodes.push(containerNode);
            }
          } catch (e) {
            console.log(e);
          }
        }
      } else if (node.type === "html") {
        const match = node.value.match(timelineRegex);
        if (match) {
          const [val, tag, text] = match;
          const isEnd = tag.startsWith("end");
          const startIdx = match.index;
          node.value = node.value.replace(val, "");
          const innerText = node.value.slice(startIdx);
          const p = createParagraphNode(
            parentNode.children.splice(parentIdx + 1) as PhrasingContent[]
          );
          let timelineTitleNode = [];
          if (!isEnd) {
            timelineTitleNode = createTimelineTitleNode(text);
          }
          if (innerText !== "") {
            node.value = node.value.slice(0, startIdx);
            const newText = createTextNode(innerText);
            p.children.unshift(newText);
          }
          containerNode.children.splice(
            containerIdx + 1,
            0,
            createTag({ tag: "timeline-item", attrs: [], isEnd }),
            ...timelineTitleNode,
            p
          );
        }
      }
    };

    visit(tree, "root", (node) => {
      const fileName = basename(file.path).replace(/\.[^/.]+$/, "");
      if (fileName === "source") {
        // console.log(JSON.stringify(node));
      }
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        const item = children[i];
        if (EXCLUDE_TAGS.includes(item.type)) continue;
        handleTagsNode(item as RootContentType, node, i, node, i);
      }
    });

    visit(tree, "paragraph", (node, index, parent) => {
      let i = 0;
      while (i < node.children.length) {
        const item = node.children[i];
        if (item.type === "text" || item.type === "html") {
          if (item.value === "") {
            node.children.splice(i, 1);
          } else {
            i++;
          }
        } else if (item.type === "break") {
          const nextNode = node.children[i + 1];
          if (
            i === 0 ||
            i === node.children.length - 1 ||
            node.children[i - 1]?.type === "break" ||
            (nextNode?.type === "text" && nextNode?.value === "")
          ) {
            node.children.splice(i, 1);
          } else {
            i++;
          }
        } else {
          i++;
        }
      }

      if (node.children.length == 0) {
        parent.children.splice(index, 1);
      }
    });
  };
};
