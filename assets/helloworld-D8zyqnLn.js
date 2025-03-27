import { j as jsxRuntimeExports } from "./client-entry-BNv0a_B-.js";
const frontmatter = {
  "title": "hello world",
  "categories": "test",
  "date": "2022-07-15 10:00:00",
  "tags": ["test"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/25.jpg"
};
const mdInfo = "hello world";
const toc = [{
  "id": "hello-world",
  "text": "hello world",
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
    id: "hello-world",
    children: [jsxRuntimeExports.jsx(_components.a, {
      className: "header-anchor",
      href: "#hello-world",
      children: jsxRuntimeExports.jsx(_components.span, {
        className: "icon icon-link"
      })
    }), "hello world"]
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
