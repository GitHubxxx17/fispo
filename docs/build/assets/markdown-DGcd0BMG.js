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
}, {
  "id": "frontmatter",
  "text": "frontmatter",
  "depth": 2
}, {
  "id": "标签外挂",
  "text": "标签外挂",
  "depth": 2
}, {
  "id": "引用-note",
  "text": "引用 note",
  "depth": 3
}, {
  "id": "上标标签-tip",
  "text": "上标标签 tip",
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
    hr: "hr",
    li: "li",
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
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { CopyButton, Icon } = _components;
  if (!CopyButton) _missingMdxReference("CopyButton");
  if (!Icon) _missingMdxReference("Icon");
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
      children: ["内部链接将转换为单页导航的路由链接。", jsxRuntimeExports.jsx(_components.br, {}), "\n例如，给定以下目录结构："]
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
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "frontmatter",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#frontmatter",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "frontmatter"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。"
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
              children: "Blogging Like a Hacker"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "lang"
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
              children: "en-US"
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
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["此数据将可用于页面的其余部分，以及所有自定义和主题组件。", jsxRuntimeExports.jsx(_components.br, {}), "\n更多信息，参见", jsxRuntimeExports.jsx(_components.a, {
        href: "./frontmatter",
        target: "",
        rel: "",
        children: "frontmatter"
      }), "。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "标签外挂",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#标签外挂",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "标签外挂"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "引用-note",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#引用-note",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "引用 note"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Fispo 的标签外挂参考了 Hexo 独有的功能标签外挂，并不是标准的 Markdown 格式。"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note warning modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "exclamation-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "用法"
      }), "："]
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
                color: "#24292EFF"
              },
              children: "{% note ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "no-icon"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "icon"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] %}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "Any content (support inline tags too.io)."
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "用法"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "class"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】标识，不同的标识有不同的配色（ default / primary / success / info / warning / danger ）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "no-icon"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】不显示 icon"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "icon"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】以icon-开头标识icon"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "style"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】可以覆盖配置中的 style（simple/modern/flat/disabled）"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note primary icon-palette flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "palette"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "simple"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例代码"
      }), "："]
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
              children: "{% note simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "默认 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note default simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "default 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note primary simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "primary 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note success simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "success 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note info simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "info 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note warning simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "warning 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note danger simple %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "danger 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "样式预览"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note simple",
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "默认 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note default simple",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "circle-right",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "default 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note primary simple",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "plus-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "primary 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note success simple",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "check-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "success 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note info simple",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "info-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "info 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note warning simple",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "exclamation-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "warning 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note danger simple",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "minus-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "danger 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note primary icon-pen-fancy flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "pen-fancy"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "modern"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例代码"
      }), "："]
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
              children: "{% note modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "默认 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note default modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "default 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note primary modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "primary 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note success modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "success 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note info modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "info 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note warning modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "warning 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note danger modern %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "danger 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "样式预览"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note modern",
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "默认 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note default modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "circle-right",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "default 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note primary modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "plus-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "primary 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note success modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "check-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "success 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note info modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "info-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "info 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note warning modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "exclamation-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "warning 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note danger modern",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "minus-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "danger 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note primary icon-coffee flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "coffee"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "flat"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例代码"
      }), "："]
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
              children: "{% note flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "默认 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note default flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "default 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note primary flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "primary 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note success flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "success 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note info flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "info 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note warning flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "warning 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% note danger flat %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "danger 提示块标签"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "样式预览"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note flat",
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "默认 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note default flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "circle-right",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "default 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note primary flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "plus-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "primary 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note success flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "check-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "success 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note info flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "info-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "info 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note warning flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "exclamation-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "warning 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {}), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note danger flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "minus-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "danger 提示块标签"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "上标标签-tip",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#上标标签-tip",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "上标标签 tip"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip info",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "info"
        })
      }), "\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["tip的样式参考自 ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://akilar.top/posts/615e2dec/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Akilarの糖果屋"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "用法"
      }), "："]
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
                color: "#24292EFF"
              },
              children: "{% tip ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "no-icon"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "icon"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "] %}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "Any content"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% endnote %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "用法"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "class"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】标识，不同的标识有不同的配色（ default/success/error/warning/bolt/ban/home/sync/cogs/key/bell ）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "no-icon"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】不显示 icon"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "icon"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "【可选】以icon-开头标识icon"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例代码"
      }), "："]
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
              children: "{% tip %}default{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip info %}info{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip success %}success{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip error %}error{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip warning %}warning{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip bolt %}bolt{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip ban %}ban{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip home %}home{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip sync %}sync{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip cogs %}cogs{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip key %}key{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip bell %}bell{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "{% tip fa-atom %}自定义font awesome图标{% endtip %}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "样式预览"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip",
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "default"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip info",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "info"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "info"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip success",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "check"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "success"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip error",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "times"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "error"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip warning",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "exclamation"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "warning"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip bolt",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "bolt"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "bolt"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip ban",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "ban"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "ban"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip home",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "home"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "home"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip sync",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "sync"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "sync"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip cogs",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "cogs"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "cogs"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip key",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "key"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "key"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip bell",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "bell"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "bell"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip icon-atom",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "atom"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "自定义font awesome图标"
      }), "\n"]
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
