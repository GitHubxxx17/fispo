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

/**
 * 自定义 remark 插件选项接口
 * @interface Options
 * @property {string} base - 基础路径（可选）
 */
interface Options {
  base?: string;
}

/**
 * mdast 根内容类型（扩展包含子节点数组）
 */
type RootContentType = RootContent & { children: RootContent[] };

/**
 * 标签元数据接口
 * @interface Tag
 * @property {string} tag - 标签名称（如 'note primary'）
 * @property {string[]} attrs - 标签属性数组
 * @property {boolean} isEnd - 是否为结束标签
 * @property {number} [index] - 标签在节点中的位置（可选）
 */
interface Tag {
  tag: string;
  attrs: string[];
  isEnd: boolean;
  index?: number;
}

/**
 * remark 插件：处理自定义标签和时间轴语法
 * @param {Options} [options] - 插件配置选项
 * @returns {Plugin<[Options], Root>} - 统一插件函数
 */
export const remarkPluginTags: Plugin<[Options], Root> = () => {
  return (tree) => {
    /** 标签父节点栈（用于嵌套标签处理） */
    const tagsParentNodes: (RootContentType | Root)[] = [];
    /** 标签语法正则表达式（支持中文和英文标签） */
    const tagRegex = /\{%\s*([\u4e00-\u9fa5\w\s-]+)\s*%\}/s;
    /** 排除处理的节点类型列表 */
    const EXCLUDE_TAGS = ["mdxjsEsm", "yaml", "break", "code", "heading"];
    /** 时间轴语法正则表达式（HTML 注释格式） */
    const timelineRegex = /<!--\s*(\S+)\s*(\S[\s\S]*?)\s*-->/;
    /** 链接语法正则表达式（Markdown 链接） */
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    /**
     * 判断文本是否包含标签语法
     * @param {string} text - 待检查的文本内容
     * @returns {RegExpMatchArray} - 是否匹配标签正则
     */
    const isTag = (text: string): RegExpMatchArray => {
      return text.match(tagRegex);
    };

    /**
     * 创建段落节点
     * @param {PhrasingContent[]} children - 段落子节点列表
     * @returns {Paragraph} - 生成的段落节点
     */
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

    /**
     * 创建文本节点
     * @param {string} value - 文本内容
     * @returns {Text} - 生成的文本节点
     */
    const createTextNode = (value: string): Text => {
      return {
        type: "text",
        value,
      };
    };

    /**
     * 创建链接节点
     * @param {string} text - 链接显示文本
     * @param {string} url - 链接地址
     * @returns {Link} - 生成的链接节点
     */
    const createLinkNode = (text: string, url: string): Link => {
      if (text === "") text = url;
      return {
        type: "link",
        url,
        children: [createTextNode(text)],
      };
    };

    /**
     * 创建 HTML 标签节点
     * @param {Tag} param0 - 标签配置对象
     * @param {Tag.tag} param0.tag - 标签名称
     * @param {Tag.attrs} param0.attrs - 标签属性数组
     * @param {Tag.isEnd} param0.isEnd - 是否为结束标签
     * @returns {Html} - 生成的 HTML 节点
     */
    const createTag = ({ isEnd, tag, attrs }: Tag): Html => {
      return {
        type: "html",
        value: isEnd ? `</div>` : `<div class="${tag} ${attrs.join(" ")}">`,
      };
    };

    /**
     * 创建时间轴标题节点（处理链接语法）
     * @param {string} text - 时间轴标题文本
     * @returns {RootContent[]} - 生成的标题节点数组（包含标签和段落）
     */
    const createTimelineTitleNode = (text: string): RootContent[] => {
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

    /**
     * 处理标签节点的核心逻辑
     * @param {RootContentType} node - 当前处理的节点
     * @param {RootContentType|Root} parentNode - 父节点
     * @param {number} parentIdx - 父节点中当前节点的索引
     * @param {RootContentType|Root} containerNode - 容器节点（用于标签嵌套）
     * @param {number} containerIdx - 容器节点中当前节点的索引
     */
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
      try {
        if (node.type === "text") {
          const textValue = node.value;
          const matchResult = isTag(textValue);

          if (!matchResult) return;

          const [matchedValue, tagWithAttrs] = matchResult;
          const [mainTag, ...attributeList] = tagWithAttrs
            .split(" ")
            .filter((item) => item.trim() !== "");

          const isEndTag = mainTag.startsWith("end");
          const matchPosition = matchResult.index;

          // 安全处理：确保节点值可被修改
          if (matchedValue === undefined || matchPosition === undefined) {
            return;
          }

          // 清理当前文本节点内容
          node.value = textValue.replace(matchedValue, "");
          const remainingContent = node.value.slice(matchPosition);

          // 处理父节点的子元素
          const parentChildArray = parentNode.children.splice(parentIdx + 1);
          const paragraphElement = createParagraphNode(
            parentChildArray as PhrasingContent[]
          );

          // 处理剩余文本并添加到段落
          if (remainingContent.trim() !== "") {
            node.value = node.value.slice(0, matchPosition);
            const textNode = createTextNode(remainingContent);
            paragraphElement.children.unshift(textNode);
          }

          // 确定容器节点并处理嵌套
          const targetContainer = isEndTag
            ? tagsParentNodes.pop()
            : containerNode;

          if (!targetContainer || !targetContainer.children) {
            return;
          }

          // 插入标签节点和段落到容器
          targetContainer.children.splice(
            containerIdx + 1,
            0,
            createTag({
              tag: mainTag,
              attrs: attributeList,
              isEnd: isEndTag,
            }),
            paragraphElement
          );

          // 处理标签栈（非结束标签时入栈）
          if (!isEndTag) {
            tagsParentNodes.push(containerNode);
          }
        } else if (node.type === "html") {
          const match = node.value.match(timelineRegex);
          if (!match) return;

          const [, tagName, content] = match;
          const isEndTag = tagName.startsWith("end");
          const matchStart = match.index;

          // 清理原始节点内容
          node.value = node.value.replace(match[0], "");
          const remainingText = node.value.slice(matchStart);

          // 处理父节点子元素
          const isRootLevel = containerNode.type === "root";
          const parentChildNodes = parentNode.children.splice(parentIdx + 1);
          const paragraphNode = isRootLevel
            ? parentChildNodes
            : createParagraphNode(parentChildNodes as PhrasingContent[]);

          // 生成时间轴标题节点
          const titleNodes = !isEndTag ? createTimelineTitleNode(content) : [];

          // 处理剩余文本
          if (remainingText) {
            const textNode = createTextNode(remainingText);
            if (isRootLevel) {
              (paragraphNode as RootContent[]).unshift(textNode);
            } else {
              (paragraphNode as Paragraph).children.unshift(textNode);
            }
          }

          // 插入节点到容器
          containerNode.children.splice(
            containerIdx + 1,
            0,
            createTag({ tag: "timeline-item", attrs: [], isEnd: isEndTag }),
            ...titleNodes,
            ...(isRootLevel ? (paragraphNode as any[]) : [paragraphNode])
          );
        }
      } catch (error) {
        console.error("标签处理错误:", error);
        // 可以添加重试逻辑或错误恢复机制
      }
    };

    /**
     * 根节点处理：遍历所有子节点并排除指定类型
     * @param {Root} node - 根节点
     */
    visit(tree, "root", (node) => {
      const children = node.children;
      for (let i = 0; i < children.length; i++) {
        const item = children[i];
        if (EXCLUDE_TAGS.includes(item.type)) continue;
        handleTagsNode(item as RootContentType, node, i, node, i);
      }
    });

    /**
     * 段落节点优化：移除空文本和无效换行
     * @param {Paragraph} node - 段落节点
     * @param {number} index - 段落节点在父节点中的索引
     * @param {RootContentType} parent - 父节点
     */
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

      if (node.children.length === 0) {
        parent.children.splice(index, 1);
      }
    });
  };
};
