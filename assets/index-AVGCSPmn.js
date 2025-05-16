import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "buttons": [{
    "text": "立即上手",
    "link": "/guide"
  }, {
    "text": "GitHub",
    "link": "https://github.com/GitHubxxx17/fispo"
  }],
  "features": [{
    "title": "Vite: 极速的开发响应速度",
    "details": "基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。",
    "icon": "🚀"
  }, {
    "title": "MDX: Markdown & React 组件来写内容",
    "details": "MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。",
    "icon": "📦"
  }, {
    "title": "TypeScript: 优秀的类型支持",
    "details": "使用 TypeScript 编写，提供了优秀的类型支持，让你的开发更加顺畅。",
    "icon": "🔑"
  }, {
    "title": "扩展性强: 提供多种自定义能力",
    "details": "通过其扩展机制，你可以轻松的扩展 Fispo 的主题 UI 和构建能力。",
    "icon": "🎨"
  }]
};
const mdInfo = "";
const toc = [];
function _createMdxContent(props) {
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
