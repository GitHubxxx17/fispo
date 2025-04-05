import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import {
  Html,
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
  Text,
} from "mdast";

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
  return (tree) => {
    // const tags: Tag[] = [];
    // const detachNodes: RootContentType[][] = [];
    const tagRegex = /\{%\s*([\w\s-]+)\s*%\}/s;
    const EXCLUDE_TAGS = ["mdxjsEsm", "yaml", "break", "code", "heading"];

    const isTag = (text: string) => {
      return text.match(tagRegex);
    };

    // // 清除换行符和空字符串
    // const clearLineBreak = (
    //   node: Text,
    //   idx: number,
    //   parent: RootContentType | Root
    // ): number => {
    //   let startIdx = idx;
    //   let delNum = 1;
    //   // 去除换行符
    //   if (node.value === "") {
    //     if (parent.children[idx - 1]?.type === "break") {
    //       startIdx--;
    //       delNum++;
    //     }
    //     if (parent.children[idx + 1]?.type === "break") {
    //       delNum++;
    //     }
    //     parent.children.splice(startIdx, delNum);
    //   }
    //   return startIdx;
    // };

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

    // 创建标签
    const createTag = ({ isEnd, tag, attrs }: Tag): Html => {
      return {
        type: "html",
        value: isEnd ? "</div>" : `<div class="${tag} ${attrs.join(" ")}">`,
      };
    };

    // const handleDetachNodes = (nodes: PhrasingContent[]) => {
    //   const result: RootContentType[] = [];

    //   if (nodes[0].type === "break") {
    //     nodes.shift();
    //   }

    //   const addNodes = (node: PhrasingContent) => {
    //     if (
    //       node.type === "break" &&
    //       result[result.length - 1].type === "html"
    //     ) {
    //       return;
    //     }
    //     if (
    //       result.length == 0 ||
    //       result[result.length - 1].type !== "paragraph"
    //     ) {
    //       const p = createParagraphNode([node]);
    //       result.push(p);
    //     } else if (result.at(-1).type == "paragraph") {
    //       result[result.length - 1].children.push(node);
    //     } else {
    //       console.log("error", node);
    //     }
    //   };

    //   nodes.forEach((node) => {
    //     if (node.type === "text" && isTag(node.value)) {
    //       while (isTag(node.value)) {
    //         const match = isTag(node.value);
    //         const [val, tag, attrs] = match;
    //         const startIdx = match.index;
    //         const isEnd = tag.startsWith("end");
    //         node.value = node.value.replace(val, "");
    //         const tagNode = createTag({
    //           tag,
    //           attrs,
    //           isEnd,
    //         });
    //         if (startIdx !== 0) {
    //           const outerText = node.value.slice(0, startIdx);
    //           addNodes(createTextNode(outerText));
    //           node.value = node.value.slice(startIdx);
    //         }
    //         result.push(tagNode as RootContentType);
    //         if (isEnd && !node.value.match(tagRegex)) {
    //           const p = createParagraphNode([node]);
    //           result.push(p);
    //         }
    //       }
    //     } else {
    //       addNodes(node);
    //     }
    //   });
    //   return result;
    // };

    // 处理标签节点
    // const handleTagsNode = (
    //   node: RootContentType,
    //   idx: number,
    //   parent: RootContentType | Root,
    //   parentIdx: number
    // ) => {
    //   let curIdx = idx;
    //   if (node?.children) {
    //     for (let i = 0; i < node.children.length; i++) {
    //       const item = node.children[i];
    //       i = handleTagsNode(item as RootContentType, i, node, parentIdx);
    //     }
    //     return curIdx;
    //   }
    //   if (node.type === "text") {
    //     while (isTag(node.value)) {
    //       const match = isTag(node.value);
    //       const [val, tag, attrs] = match;
    //       const startIdx = match.index;
    //       const isEnd = tag.startsWith("end");
    //       let outerText = "";
    //       node.value = node.value.replace(val, "");
    //       tags.push({ tag, attrs, isEnd, index: parentIdx + (isEnd ? 1 : 0) });
    //       const detachIdx = clearLineBreak(node, curIdx, parent);
    //       if (
    //         (!isEnd && detachIdx === 0 && startIdx === 0) ||
    //         (isEnd &&
    //           (isTag(node.value) ||
    //             (node.value.length === startIdx &&
    //               curIdx === parent.children.length - 1)))
    //       ) {
    //         detachNodes.push(null);
    //         continue;
    //       }
    //       if (isEnd) {
    //         const nextNodes = parent.children.splice(
    //           detachIdx + 1
    //         ) as PhrasingContent[];

    //         outerText = node.value.slice(startIdx);
    //         console.log(
    //           node.value,
    //           detachIdx,
    //           parent.children,
    //           nextNodes,
    //           outerText
    //         );
    //         if (outerText !== "") {
    //           node.value = node.value.slice(0, startIdx);
    //           nextNodes.unshift(createTextNode(outerText));
    //         }
    //         curIdx = detachIdx;
    //         detachNodes.push(
    //           nextNodes.length === 0 ? null : handleDetachNodes(nextNodes)
    //         );
    //       } else {
    //         const preNodes = parent.children.splice(
    //           0,
    //           detachIdx
    //         ) as PhrasingContent[];
    //         outerText = node.value.slice(0, startIdx);
    //         if (outerText !== "") {
    //           node.value = node.value.slice(startIdx);
    //           preNodes.push(createTextNode(outerText));
    //         }
    //         curIdx = 0;
    //         detachNodes.push(
    //           preNodes.length === 0 ? null : handleDetachNodes(preNodes)
    //         );
    //       }
    //       clearLineBreak(node, curIdx, parent);
    //     }
    //   }

    //   return curIdx;
    // };

    const tagsParentNodes: (RootContentType | Root)[] = [];

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
      }
    };

    visit(tree, "root", (node) => {
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        const item = children[i];
        if (EXCLUDE_TAGS.includes(item.type)) continue;
        // handleTagsNode(item as RootContentType, idx, node, idx);
        handleTagsNode(item as RootContentType, node, i, node, i);
      }

      // let addNum = 0;
      // tags.forEach((tag, index) => {
      //   if (tag.isEnd) {
      //     children.splice(tag.index + addNum, 0, createTag(tag));
      //     addNum++;
      //   }
      //   if (detachNodes[index]) {
      //     children.splice(tag.index + addNum, 0, ...detachNodes[index]);
      //     addNum += detachNodes[index].length;
      //   }
      //   if (!tag.isEnd) {
      //     children.splice(tag.index + addNum, 0, createTag(tag));
      //     addNum++;
      //   }
      // });
    });

    visit(tree, "paragraph", (node, index, parent) => {
      let i = 0;
      while (i < node.children.length) {
        const item = node.children[i];
        if (item.type === "text" && item.value == "") {
          node.children.splice(i, 1);
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
