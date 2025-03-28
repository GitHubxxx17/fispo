import { j as jsxRuntimeExports } from "./client-entry-DrQUHd3R.js";
const frontmatter = {
  "title": "建站"
};
const mdInfo = "安装";
const toc = [{
  "id": "安装",
  "text": "安装",
  "depth": 1
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    span: "span",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(_components.h1, {
    id: "安装",
    children: [jsxRuntimeExports.jsx(_components.a, {
      className: "header-anchor",
      href: "#安装",
      children: jsxRuntimeExports.jsx(_components.span, {
        className: "icon icon-link"
      })
    }), "安装"]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
