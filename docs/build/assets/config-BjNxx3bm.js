import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "配置项"
};
const mdInfo = "配置项在配置文件 fispo.config.ts 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。基础配置base类型：string默认值：/详情：部署站点的基础路径。用于配置站点在非根域名下的部署场景。必须是以斜杠开始和结束的绝对路径（如 /basePath）";
const toc = [{
  "id": "配置项",
  "text": "配置项",
  "depth": 1
}, {
  "id": "基础配置",
  "text": "基础配置",
  "depth": 2
}, {
  "id": "base",
  "text": "base",
  "depth": 3
}, {
  "id": "title",
  "text": "title",
  "depth": 3
}, {
  "id": "description",
  "text": "description",
  "depth": 3
}, {
  "id": "theme",
  "text": "theme",
  "depth": 3
}, {
  "id": "themeconfig",
  "text": "themeConfig",
  "depth": 3
}, {
  "id": "vite",
  "text": "vite",
  "depth": 3
}, {
  "id": "author",
  "text": "author",
  "depth": 3
}, {
  "id": "avatar",
  "text": "avatar",
  "depth": 3
}, {
  "id": "backgroundimg",
  "text": "backgroundImg",
  "depth": 3
}, {
  "id": "root-",
  "text": "root ",
  "depth": 3
}, {
  "id": "postdir",
  "text": "postDir",
  "depth": 3
}, {
  "id": "public",
  "text": "public",
  "depth": 3
}, {
  "id": "build",
  "text": "build",
  "depth": 3
}, {
  "id": "notfoundimg",
  "text": "notFoundImg",
  "depth": 3
}, {
  "id": "logo",
  "text": "logo",
  "depth": 3
}, {
  "id": "markdown",
  "text": "markdown",
  "depth": 3
}, {
  "id": "plugins",
  "text": "plugins",
  "depth": 3
}, {
  "id": "preloader",
  "text": "preloader",
  "depth": 3
}, {
  "id": "deploy",
  "text": "deploy",
  "depth": 3
}, {
  "id": "htmltags",
  "text": "htmlTags",
  "depth": 3
}, {
  "id": "highlighter",
  "text": "highlighter",
  "depth": 3
}, {
  "id": "默认主题配置",
  "text": "默认主题配置",
  "depth": 2
}, {
  "id": "navmenus",
  "text": "navMenus",
  "depth": 3
}, {
  "id": "banner",
  "text": "banner",
  "depth": 3
}, {
  "id": "sidebar",
  "text": "sidebar",
  "depth": 3
}, {
  "id": "card_author-作者卡片",
  "text": "card_author 作者卡片",
  "depth": 4
}, {
  "id": "card_announcement-公告卡片",
  "text": "card_announcement 公告卡片",
  "depth": 4
}, {
  "id": "card_recent_post-最近文章",
  "text": "card_recent_post 最近文章",
  "depth": 4
}, {
  "id": "card_categories-分类",
  "text": "card_categories 分类",
  "depth": 4
}, {
  "id": "card_tags-标签云",
  "text": "card_tags 标签云",
  "depth": 4
}, {
  "id": "card_webinfo-网站信息",
  "text": "card_webinfo 网站信息",
  "depth": 4
}, {
  "id": "footer",
  "text": "footer",
  "depth": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { CopyButton } = _components;
  if (!CopyButton) _missingMdxReference("CopyButton");
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "配置项",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#配置项",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "配置项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["在配置文件 ", jsxRuntimeExports.jsx(_components.code, {
        children: "fispo.config.ts"
      }), " 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "基础配置",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#基础配置",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "基础配置"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "base",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#base",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "base"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "/"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "部署站点的基础路径。用于配置站点在非根域名下的部署场景。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["必须是以斜杠开始和结束的绝对路径（如 ", jsxRuntimeExports.jsx(_components.code, {
          children: "/basePath"
        }), "）"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["会自动作为前缀添加到其他以 ", jsxRuntimeExports.jsx(_components.code, {
          children: "/"
        }), " 开头的路径中（head 标签中的属性除外）"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：若部署到 ", jsxRuntimeExports.jsx(_components.code, {
          children: "https://example.com/blog"
        }), "，应设置为 ", jsxRuntimeExports.jsx(_components.code, {
          children: '"/blog"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "title",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#title",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "title"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "fispo"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "网站的全局标题，将显示在浏览器标签页和默认的 SEO 信息中。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "建议保持简洁（通常不超过 60 个字符）"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: "XXX的个人博客"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "description",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#description",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "description"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "fispo"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "网站的元描述，用于 SEO 和社交媒体分享。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "建议控制在 150-160 个字符之间"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: '"专注于分享现代Web开发技术，包含Vue、React、Node.js等前沿技术实践"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "theme",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#theme",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "theme"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：无", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "指定使用的主题名称。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["npm 主题包（", jsxRuntimeExports.jsx(_components.code, {
          children: "npm-package-name"
        }), "）"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "需确保主题包已正确安装"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: '"particle"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "themeconfig",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#themeconfig",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "themeConfig"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "ThemeConfig"
      }), "（泛型参数）", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "<DefaultThemeConfig>"
      }), " ", jsxRuntimeExports.jsx(_components.a, {
        href: "./config#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE",
        target: "",
        rel: "",
        children: "默认主题配置"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "主题的个性化配置对象，具体配置项由所选主题决定。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "可包含导航栏配置、侧边栏配置等"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", "\n", jsxRuntimeExports.jsxs(_components.div, {
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
                    color: "#24292EFF"
                  },
                  children: "themeConfig"
                }), jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#212121"
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
                  children: "  navMenus"
                }), jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#212121"
                  },
                  children: ":"
                }), jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#24292EFF"
                  },
                  children: " ["
                })]
              }), "\n", jsxRuntimeExports.jsx(_components.span, {
                className: "line",
                children: jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#24292EFF"
                  },
                  children: "   {"
                })
              }), "\n", jsxRuntimeExports.jsxs(_components.span, {
                className: "line",
                children: [jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#24292EFF"
                  },
                  children: "      title"
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
                  children: '"首页"'
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
                  children: "      path"
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
                  children: '"/"'
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
                  children: "      icon"
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
                  children: '"home"'
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
                  children: "    }"
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
                  children: "    {"
                })
              }), "\n", jsxRuntimeExports.jsxs(_components.span, {
                className: "line",
                children: [jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#24292EFF"
                  },
                  children: "      title"
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
                  children: '"标签"'
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
                  children: "      path"
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
                  children: '"/tag"'
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
                  children: "      icon"
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
                  children: '"tag"'
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
                  children: "    }"
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
                  children: "    {"
                })
              }), "\n", jsxRuntimeExports.jsxs(_components.span, {
                className: "line",
                children: [jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#24292EFF"
                  },
                  children: "      title"
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
                  children: '"分类"'
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
                  children: "      path"
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
                  children: '"/category"'
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
                  children: "      icon"
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
                  children: '"folder-open"'
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
                  children: "    }"
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
                  children: "  ]"
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
                  children: "}"
                })
              }), "\n", jsxRuntimeExports.jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "vite",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#vite",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "vite"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "ViteConfiguration"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "{}"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Vite 构建工具的配置选项。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["支持所有 ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://vitejs.dev/config/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Vite 配置项"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["常用配置包括：", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "build"
            }), ": 构建选项"]
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "server"
            }), ": 开发服务器配置"]
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "plugins"
            }), ": Vite 插件"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", "\n", jsxRuntimeExports.jsxs(_components.div, {
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
                    color: "#24292EFF"
                  },
                  children: "vite"
                }), jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#212121"
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
                  children: "  server"
                }), jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#212121"
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
                  children: "    port"
                }), jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#212121"
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
                  children: "8080"
                })]
              }), "\n", jsxRuntimeExports.jsx(_components.span, {
                className: "line",
                children: jsxRuntimeExports.jsx(_components.span, {
                  style: {
                    color: "#24292EFF"
                  },
                  children: "  }"
                })
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
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "author",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#author",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "author"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "xxx"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "网站作者的名称，用于文章元数据和版权声明。"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "avatar",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#avatar",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "avatar"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "/avatar.jpg"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "作者头像的 URL 地址或本地路径。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["支持相对路径（相对于 ", jsxRuntimeExports.jsx(_components.code, {
          children: "public"
        }), " 目录）"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "推荐尺寸：正方形（如 200x200px）"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: '"/images/avatar.jpg"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "backgroundimg",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#backgroundimg",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "backgroundImg"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "/bg.png"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "网站背景图像的 URL 或本地路径。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: '"/images/bg-pattern.png"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "root-",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#root-",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "root ", jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "docs"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "项目的根目录路径。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "当配置文件不在项目根目录时需要配置"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: "src"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "postdir",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#postdir",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "postDir"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "/post"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "存放 Markdown 文章的目录路径。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["相对于 ", jsxRuntimeExports.jsx(_components.code, {
          children: "root"
        }), " 的路径"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "支持嵌套目录结构"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["示例：", jsxRuntimeExports.jsx(_components.code, {
          children: '"src/articles"'
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "public",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#public",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "public"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "public"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "静态资源目录路径。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "该目录下的文件会被直接复制到输出目录"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "build",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#build",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "build"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "build"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "构建输出的目标目录。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["相对于 ", jsxRuntimeExports.jsx(_components.code, {
          children: "root"
        }), " 的路径"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "notfoundimg",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#notfoundimg",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "notFoundImg"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "/404.png"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "自定义 404 页面显示的图片。"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "logo",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#logo",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "logo"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "string"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "/logo.png"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "网站 Logo 的 URL 或本地路径。"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "markdown",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#markdown",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "markdown"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "MarkdownOptions"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "{}"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Markdown 处理配置项。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "可用选项"
      }), "："]
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
              children: "MarkdownOptions"
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
              children: "   * remark 插件列表，用于在 Markdown 解析阶段进行处理"
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
              children: "  remarkPlugins"
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
              children: "   * rehype 插件列表，用于在 Markdown 转换为 HTML 阶段进行处理"
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
              children: "  rehypePlugins"
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
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "plugins",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#plugins",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "plugins"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "FispoPlugin[]"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "[]"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "要启用的插件列表。"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "preloader",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#preloader",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "preloader"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "boolean"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "false"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "是否启用页面预加载动画。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "启用后会在页面加载时显示加载动画"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "部分主题可能提供自定义动画的配置项"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "deploy",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#deploy",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "deploy"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "object"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "{ branch: gh-pages, repo: }"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "部署配置对象。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "可用选项"
      }), "："]
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
                color: "#24292EFF"
              },
              children: "deploy"
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
              children: "     * 部署的仓库地址"
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
              children: " string;"
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
              children: "     * 部署的分支名称"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     */"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    branch: string;"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "};"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "完整示例"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-js",
      children: [jsxRuntimeExports.jsxs(_components.div, {
        className: "highlight-tools",
        children: [jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "js"
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
              children: "deploy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: "  repo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " git@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "github"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ".com:myorg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#1976D2"
              },
              children: "myrepo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ".git"
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
              children: "  branch"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " gh"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "pages"
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
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "htmltags",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#htmltags",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "htmlTags"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "HtmlTagDescriptor[]"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "[]"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "自定义 HTML 标签注入配置。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "标签描述对象结构"
      }), "："]
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
              children: "HtmlTagDescriptor"
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
              children: "  tag"
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
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  attrs"
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
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  children"
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
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
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
              children: "[]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  injectTo"
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
              children: "head"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "body"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "head"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "prepend"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "body"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "prepend"
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
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-js",
      children: [jsxRuntimeExports.jsxs(_components.div, {
        className: "highlight-tools",
        children: [jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "js"
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
              children: "htmlTags"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " ["
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
              children: "// 添加 Google Analytics"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  {"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    tag"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " script"
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
              children: "    attrs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " { async"
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
                color: "#212121"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " src"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " https:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "//analytics.example.com/script.js },"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    injectTo: head"
            })
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
              children: "  "
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
                color: "#C2C3C5"
              },
              children: "// 添加自定义样式"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  {"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "      tag"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: '"link"'
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
              children: "      attrs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: "        rel"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: '"stylesheet"'
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
              children: "        href"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: '"/.fispo/custom.css"'
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
              children: "      }"
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
              children: "      injectTo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: '"head"'
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
              children: "    }"
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
              children: "]"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "highlighter",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#highlighter",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "highlighter"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "HighlighterOptions"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "{}"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "代码高亮配置项。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "可用选项"
      }), "："]
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
              children: "HighlighterOptions"
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
              children: "     * 预先加载的主题。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     *"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     * 默认值: nord"
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
              children: "    theme"
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
              children: "IThemeRegistration"
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
              children: "     * 预先加载的主题列表。"
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
              children: "    themes"
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
              children: "IThemeRegistration"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "[];"
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
              children: "     * 预先加载的语言列表。"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     *"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "     * 默认值为所有内置语言。"
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
              children: "    langs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Lang"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "ILanguageRegistration"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ")[];"
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
              children: "     * 用于加载主题和语言的路径。相对于包的根目录。"
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
              children: "    paths"
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
              children: "IHighlighterPaths"
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
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例"
      }), "："]
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
                color: "#24292EFF"
              },
              children: "highlighter"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: "  theme"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " github"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "light"
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
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "默认主题配置",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#默认主题配置",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "默认主题配置"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "navmenus",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#navmenus",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "navMenus"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "navMenuItem[]"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "[]"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "配置导航栏菜单项及其层级结构"]
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
              children: "navMenuItem"
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
              children: "/** 导航栏显示文字（必填） */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  title"
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/** 路由路径（必填） */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  path"
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/** 图标名称 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  icon"
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
              children: "IconName"
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/** 子菜单项 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  children"
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
              children: "navMenuItem"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "[];"
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
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: "IconName"
      }), "类型为 fontawesome 图标库中的图标类型。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["Fispo集成了 ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://fontawesome.com.cn/v5",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "fontawesome"
        }), " 图标库，您可以在该图标库的网站查找需要的图标。"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "banner",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#banner",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "banner"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型："
      }), jsxRuntimeExports.jsx(_components.code, {
        children: "BannerData"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: '{ img: "/banner.png" }'
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "首页横幅配置", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "配置项"
      }), "："]
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
              children: "BannerData"
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
              children: "/** 横幅图片地址 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  img"
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
              children: "/** 横幅副标题文字 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  subtitle"
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
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "示例"
      }), "："]
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
                color: "#24292EFF"
              },
              children: "banner"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: "  img"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: "'/images/home-bg.jpg'"
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
              children: "  subtitle"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#212121"
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
              children: "'记录技术成长之路'"
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
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "sidebar",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#sidebar",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "sidebar"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "Sidebar"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "{}"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "侧边栏综合配置", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "基础配置"
      }), "："]
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
              children: "Sidebar"
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
              children: "/** 是否启用侧边栏 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  enable"
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
              children: "boolean"
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/** 是否默认折叠 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  hide"
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
              children: "boolean"
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "/** 显示位置 */"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  position"
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
                color: "#22863A"
              },
              children: '"left"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: '"right"'
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
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 各卡片配置..."
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
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "card_author-作者卡片",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#card_author-作者卡片",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "card_author 作者卡片"]
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
                color: "#24292EFF"
              },
              children: "card_author"
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
              children: "  enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;       "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 是否显示"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  description"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " string;   "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 个性签名"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " {              "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 联系按钮"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;     "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 显示按钮"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    icon"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " IconName;      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 按钮图标"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    text"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " string;        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 按钮文字"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "    link"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " string;        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 跳转链接"
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
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "card_announcement-公告卡片",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#card_announcement-公告卡片",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "card_announcement 公告卡片"]
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
                color: "#24292EFF"
              },
              children: "card_announcement"
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
              children: "  enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;     "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 是否显示"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  content"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " string;     "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 公告内容（支持Markdown）"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "};"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "card_recent_post-最近文章",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#card_recent_post-最近文章",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "card_recent_post 最近文章"]
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
                color: "#24292EFF"
              },
              children: "card_recent_post"
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
              children: "  enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " number;       "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 显示数量（默认5）"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  sort"
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
                color: "#22863A"
              },
              children: '"date"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "|"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: '"updated"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: ";  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 排序方式"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "};"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "card_categories-分类",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#card_categories-分类",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "card_categories 分类"]
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
                color: "#24292EFF"
              },
              children: "card_categories"
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
              children: "  enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " number;       "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 显示前N个分类（默认8）"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "};"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "card_tags-标签云",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#card_tags-标签云",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "card_tags 标签云"]
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
                color: "#24292EFF"
              },
              children: "card_tags"
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
              children: "  enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " number;       "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 显示标签数量（默认15）"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "};"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "card_webinfo-网站信息",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#card_webinfo-网站信息",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "card_webinfo 网站信息"]
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
                color: "#24292EFF"
              },
              children: "card_webinfo"
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
              children: "  enable?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  post_count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 显示文章总数"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  last_push_date"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 最后更新时间"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  run_time"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D32F2F"
              },
              children: "?:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: " boolean;        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 站点运行时间"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "};"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.hr, {}), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "footer",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#footer",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "footer"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "类型"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "FooterData"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "默认值"
      }), "：", jsxRuntimeExports.jsx(_components.code, {
        children: "{}"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "详情"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", "页脚区域配置"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "配置项"
      }), "："]
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
              children: "FooterData"
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
              children: "  message"
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
              children: ";     "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 底部提示信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#24292EFF"
              },
              children: "  copyright"
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
              children: ";   "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#C2C3C5"
              },
              children: "// 版权声明"
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
