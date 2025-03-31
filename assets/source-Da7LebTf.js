import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "资源处理"
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
