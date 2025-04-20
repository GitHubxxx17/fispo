import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "插件"
};
const mdInfo = "插件如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板初始化项目create-fispo <项目目录名> --plugin文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock";
const toc = [{
  "id": "插件",
  "text": "插件",
  "depth": 1
}, {
  "id": "初始化项目",
  "text": "初始化项目",
  "depth": 2
}, {
  "id": "文件结构",
  "text": "文件结构",
  "depth": 2
}, {
  "id": "开发插件",
  "text": "开发插件",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
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
      id: "插件",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#插件",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "插件"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板"
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "初始化项目",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#初始化项目",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "初始化项目"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-bash",
      children: [jsxRuntimeExports.jsxs(_components.div, {
        className: "highlight-tools",
        children: [jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "bash"
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
              children: "create-fispo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "项目目录"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#2B5581"
              },
              children: "--plugin"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "文件结构",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#文件结构",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "文件结构"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "初始化后，您的项目文件夹将如下所示："
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
              children: "├── fispo.config.ts          # 项目的配置文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├── package-lock.json        # 锁定依赖包版本的文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├── package.json             # 项目的元数据和依赖信息文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├── tsconfig.json            # TypeScript 编译配置文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├── tsup.config.ts           # tsup 打包工具的配置文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "├── docs                     # 存放博客相关内容"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│   ├── post                 # 文章目录（Markdown 文件）"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│   │   └── helloworld.md    # 示例文章"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│   └── public               # 存放公共资源文件的目录"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│       ├── 404.png          # 404 页面显示的图片"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│       ├── avatar.jpg       # 用户头像图片"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│       ├── banner.png       # 横幅图片"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│       ├── bg.png           # 背景图片"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│       ├── logo.png         # 项目 logo 图片"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│       └── cover            # 封面图片文件夹"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "│           └── a.jpg        # 封面示例图片"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "└── src                      # 源代码目录"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    ├── index.ts             # 项目入口文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    └── types                # 类型定义目录"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "        └── types.d.ts       # 类型定义文件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "开发插件",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#开发插件",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "开发插件"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["完成初始化后可以使用", jsxRuntimeExports.jsx(_components.code, {
        children: "npx fispo dev"
      }), "命令启动项目"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "页面的数据结构如下"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "可以在自定义插件中添加 markdown 相关的插件以及 vite 相关插件"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "通过生命周期的钩子函数控制页面的数据以及渲染"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "插入页面加载动画组件"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "在页面上挂载全局组件"
      }), "\n"]
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
              children: "interface"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "FispoPlugin"
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 插件的名称"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  name"
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
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的别名配置，用于在项目中为模块路径设置别名。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 键为别名，值为实际的模块路径。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 例如：{ '@': 'src' } 表示将 '@' 别名映射到 'src' 目录。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  alias"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Record"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ">;"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的全局常量定义配置，用于在项目中定义全局可用的常量。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 键为常量名，值为常量值（以字符串形式表示）。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: `   * 例如：{ 'process.env.NODE_ENV': '"development"' } 表示定义一个全局常量 process.env.NODE_ENV 并赋值为 "development"。`
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  define"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Record"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ">;"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的 Markdown 处理配置，包含 remark 和 rehype 插件的配置。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  markdown"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
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
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     * 可选的 remark 插件列表，用于在 Markdown 解析阶段对 Markdown 内容进行转换和处理。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     * remark 是一个用于处理 Markdown 的工具，这些插件可以扩展 remark 的功能。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    remarkPlugins"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "PluggableList"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     * 可选的 rehype 插件列表，用于在 Markdown 转换为 HTML 阶段对 HTML 内容进行转换和处理。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     * rehype 是一个用于处理 HTML 的工具，这些插件可以扩展 rehype 的功能。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    rehypePlugins"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "PluggableList"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  };"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的 Vite 配置，用于对 Vite 构建工具进行自定义配置。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  vite"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "UserConfig"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的文件监听列表，用于指定需要监听变化的文件路径。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 当这些文件发生变化时，可能会触发相应的重新构建或其他操作。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  watchFiles"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "[];"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的钩子函数，在配置解析之前执行。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可以在这个函数中对配置进行一些预处理操作。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "configBeforeResolved"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " () "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "void"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的钩子函数，在配置解析完成后执行。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 该函数接收一个 PageDataContext 类型的参数，并返回一个 PageData 类型的值。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可以在这个函数中对解析后的配置进行进一步的处理和修改。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "configResolved"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " (config"
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
                color: "#6F42C1"
              },
              children: "PageDataContext"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "void"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的预加载动画配置，用于指定预加载动画的模块路径。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  preloader"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的全局组件配置，用于指定全局组件的模块路径。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  globalComponents"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
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
              children: "    path"
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
                color: "#1976D2"
              },
              children: "string"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    props"
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
                color: "#1976D2"
              },
              children: "any"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  };"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的钩子函数，在页面渲染之前执行。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 此函数接收一个 PageData 类型的参数，可用于在页面渲染前对页面数据进行修改、数据准备等操作，"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "beforeRenderpage"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " (pageData"
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
                color: "#6F42C1"
              },
              children: "PageData"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "void"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的钩子函数，在页面渲染完成后执行。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 此函数接收一个 PageData 类型的参数，可用于在页面渲染完成后进行一些后续处理，"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "afterRenderPage"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " (pageData"
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
                color: "#6F42C1"
              },
              children: "PageData"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "void"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/**"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 可选的钩子函数，在页面关闭时执行。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 此函数接收一个 PageData 类型的参数，可用于在页面关闭时进行资源清理、数据保存等操作，"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   * 例如释放占用的内存、保存用户未提交的表单数据等。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "   */"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "pageClosed"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " (pageData"
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
                color: "#6F42C1"
              },
              children: "PageData"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "void"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "}"
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
