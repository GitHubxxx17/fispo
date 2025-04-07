import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "GitHub Pages"
};
const mdInfo = "GitHub Pages{% note info flat %}在部署项目前，您需确保有远程仓库，满足上述条件后即可使用命令将项目部署到远程仓库。{% endnote %}部署命令是通过 GitHub Actions 部署 GitHub Pages。首先，如果仓库以 username.github.";
const toc = [{
  "id": "github-pages",
  "text": "GitHub Pages",
  "depth": 1
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    h1: "h1",
    p: "p",
    pre: "pre",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  }, { CopyButton, Icon } = _components;
  if (!CopyButton) _missingMdxReference("CopyButton");
  if (!Icon) _missingMdxReference("Icon");
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "github-pages",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#github-pages",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "GitHub Pages"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "note info flat",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "note-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "info-circle",
          className: "fas"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "在部署项目前，您需确保有远程仓库，满足上述条件后即可使用命令将项目部署到远程仓库。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["部署命令是通过 ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://docs.github.com/zh/actions",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "GitHub Actions"
      }), " 部署 GitHub Pages。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["首先，如果仓库以 ", jsxRuntimeExports.jsx(_components.code, {
        children: "username.github.io"
      }), " 命名就不需要更改配置项中的 base，否则需要将 base 修改成您的远程仓库名称。", jsxRuntimeExports.jsx(_components.br, {}), "\n另外还需要添加部署相关的配置 deploy，分支默认为 gh-pages"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-ts",
      children: [jsxRuntimeExports.jsxs(_components.div, {
        className: "highlight-tools",
        children: [jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "ts"
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
                color: "#D32F2F"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "defineConfig"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "({"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  base"
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
              children: '"/fispo"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  deploy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " {"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    repo"
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
              children: '"https://github.com/<username>/<project>"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    branch"
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
              children: '"gh-pages"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  }"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "})"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "完成配置后在终端使用部署命令："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-sh",
      children: [jsxRuntimeExports.jsxs(_components.div, {
        className: "highlight-tools",
        children: [jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "sh"
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
                color: "#6F42C1"
              },
              children: "npm"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "run"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "build"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: "&&"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "npm"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "run"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "deploy"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "# 或者"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "npx"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "fispo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "build"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: "&&"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "npx"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "fispo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "deploy"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["使用命令后会自动初始化git仓库并在本地创建 ", jsxRuntimeExports.jsx(_components.code, {
        children: ".github/workflows/gh-pages.yml"
      }), " 文件，之后会把所有文件 push 到远程仓库。", jsxRuntimeExports.jsx(_components.br, {}), "\n完成部署后在 GitHub 仓库的设置中，导航至 Settings > Pages > Build and deployment 。将分支更改为 ph-pages 并保存。", jsxRuntimeExports.jsx(_components.br, {}), "\n最后可前往 username.github.io/repository 查看网页。"]
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
