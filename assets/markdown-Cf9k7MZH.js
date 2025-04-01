import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "markdown 扩展"
};
const mdInfo = 'Markdown 扩展Fispo 带有内置的 Markdown 扩展。链接外部链接和内部链接都会被处理。外部链接所有的外部链接都会被加上target="_blank" rel="noreferrer"，点击会在新标签页打开外部网站，例如：reactvite内部链接内部链接将转换为单页导航的路由链接。';
const toc = [{
  "id": "markdown-扩展",
  "text": "Markdown 扩展",
  "depth": 1
}, {
  "id": "链接",
  "text": "链接",
  "depth": 2
}, {
  "id": "外部链接",
  "text": "外部链接",
  "depth": 3
}, {
  "id": "内部链接",
  "text": "内部链接",
  "depth": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { CopyButton } = _components;
  if (!CopyButton) _missingMdxReference("CopyButton");
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "markdown-扩展",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#markdown-扩展",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Markdown 扩展"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Fispo 带有内置的 Markdown 扩展。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "链接",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#链接",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "链接"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "外部链接和内部链接都会被处理。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "外部链接",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#外部链接",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "外部链接"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["所有的外部链接都会被加上", jsxRuntimeExports.jsx(_components.code, {
        children: 'target="_blank" rel="noreferrer"'
      }), "，点击会在新标签页打开外部网站，例如："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://react.docschina.org/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "react"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://vitejs.cn/vite3-cn/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "vite"
        })
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "内部链接",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#内部链接",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "内部链接"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["内部链接将转换为单页导航的路由链接。", jsxRuntimeExports.jsx(_components.br, {}), "\n", "例如，给定以下目录结构："]
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
              children: "."
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├─ index.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├─ foo"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│  ├─ index.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│  ├─ a.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│  └─ b.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "└─ bar"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "   ├─ index.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "   ├─ a.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "   └─ b.md"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "假设现在处于 foo/a.md 文件中："
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
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "Home"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(/)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 将用户导航至根目录下的 index.html -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "foo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(/foo/)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 将用户导航至目录 foo 下的 index.html -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "foo heading"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(./#heading)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "foo a - heading"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(#heading)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 将用户锚定到当前文件中的一个标题上 -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "bar - three"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(../bar/three)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 可以省略扩展名 -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "bar - three"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(../bar/a.md)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 可以添加 .md -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F",
                textDecoration: "underline"
              },
              children: "bar - four"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2",
                textDecoration: "underline"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A",
                textDecoration: "underline"
              },
              children: "(../bar/b.html)"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " <!-- 或者可以添加 .html -->"
            })]
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
