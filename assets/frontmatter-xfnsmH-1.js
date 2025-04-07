import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "frontmatter"
};
const mdInfo = "frontmatterFront-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束：---title: Hello Worlddate: 2025/4/1 20:46:25---配置属性名描述title文章的标题d";
const toc = [{
  "id": "frontmatter",
  "text": "frontmatter",
  "depth": 1
}, {
  "id": "配置",
  "text": "配置",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "配置",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#配置",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "配置"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "属性名"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "描述"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "title"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "文章的标题"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "description"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "文章的描述信息"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "categories"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "文章所属的分类"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "date"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "文章的发布日期"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "tags"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "文章的标签列表"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "cover"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "文章的封面图片地址"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "分类和标签"
      }), ":", jsxRuntimeExports.jsx(_components.br, {}), "\n只有文章支持分类和标签。一篇文章只能所属一个分类，另外一篇文章可以有多个标签。"]
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
