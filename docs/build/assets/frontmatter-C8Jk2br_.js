import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "frontmatter"
};
const mdInfo = "frontmatterFront-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束：---title: Hello Worlddate: 2025/4/1 20:46:25---";
const toc = [{
  "id": "frontmatter",
  "text": "frontmatter",
  "depth": 1
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h1: "h1",
    p: "p",
    pre: "pre",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  }, { CopyButton } = _components;
  if (!CopyButton) _missingMdxReference("CopyButton");
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "frontmatter",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#frontmatter",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "frontmatter"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-md",
      children: [jsxRuntimeExports.jsxs(_components.div, {
        className: "highlight-tools",
        children: [jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "md"
        }), jsxRuntimeExports.jsx(CopyButton, {})]
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki min-light",
        style: {
          backgroundColor: "#ffffff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "---"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "title"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: "Hello World"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "date"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: "2025/4/1 20:46:25"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "---"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    })]
  });
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
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
