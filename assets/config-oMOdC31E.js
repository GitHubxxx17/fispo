import { j as jsxRuntimeExports } from "./client-entry-DrQUHd3R.js";
const frontmatter = {
  "title": "配置项"
};
const mdInfo = "配置项";
const toc = [{
  "id": "配置项",
  "text": "配置项",
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
    id: "配置项",
    children: [jsxRuntimeExports.jsx(_components.a, {
      className: "header-anchor",
      href: "#配置项",
      children: jsxRuntimeExports.jsx(_components.span, {
        className: "icon icon-link"
      })
    }), "配置项"]
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
