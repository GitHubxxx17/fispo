import { j as jsxRuntimeExports } from "./client-entry-C5tUW8zu.js";
const frontmatter = {
  "title": "vue3笔记（四）",
  "categories": "笔记",
  "date": "2023-2-27 00:00:00",
  "tags": ["笔记"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/22.jpg"
};
const mdInfo = "Vue3简介vue3简介<!-- timeline 性能的提升 -->打包大小减少41%初次渲染快55%, 更新渲染快133%内存减少54%<!-- endtimeline --><!-- timeline 源码的升级-->使用Proxy代替defineProperty实现响应式重写虚拟DOM的实现";
const toc = [{
  "id": "vue3简介-1",
  "text": "Vue3简介",
  "depth": 1
}, {
  "id": "创建vue30工程-1",
  "text": "创建Vue3.0工程",
  "depth": 1
}, {
  "id": "使用-vue-cli-创建a-hrefhttpsclivuejsorgzhguidecreating-a-projecthtmlvue-create官方文档vue-createa-1",
  "text": '使用 vue-cli 创建（<a href="https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create">官方文档vue-create</a>）',
  "depth": 2
}, {
  "id": "使用-vite-创建a-hrefhttpsv3cnvuejsorgguideinstallationhtmlvite官方文档vitea-1",
  "text": '使用 vite 创建（<a href="https://v3.cn.vuejs.org/guide/installation.html#vite">官方文档vite</a>）',
  "depth": 2
}, {
  "id": "分析文件目录-1",
  "text": "分析文件目录",
  "depth": 1
}, {
  "id": "mainjs-1",
  "text": "main.js",
  "depth": 2
}, {
  "id": "appvue-1",
  "text": "App.vue",
  "depth": 2
}, {
  "id": "常用-composition-api-1",
  "text": "常用 Composition API",
  "depth": 1
}, {
  "id": "setup-1",
  "text": "setup",
  "depth": 2
}, {
  "id": "ref函数-1",
  "text": "ref函数",
  "depth": 2
}, {
  "id": "reactive函数-1",
  "text": "reactive函数",
  "depth": 2
}, {
  "id": "vue3中的响应式原理-1",
  "text": "Vue3中的响应式原理",
  "depth": 2
}, {
  "id": "reactive对比ref-1",
  "text": "reactive对比ref",
  "depth": 2
}, {
  "id": "setup的两个注意点-1",
  "text": "setup的两个注意点",
  "depth": 2
}, {
  "id": "计算属性与监视-1",
  "text": "计算属性与监视",
  "depth": 2
}, {
  "id": "computed函数-1",
  "text": "computed函数",
  "depth": 3
}, {
  "id": "watch函数-1",
  "text": "watch函数",
  "depth": 3
}, {
  "id": "watcheffect函数-1",
  "text": "watchEffect函数",
  "depth": 3
}, {
  "id": "vue3生命周期-1",
  "text": "Vue3生命周期",
  "depth": 2
}, {
  "id": "自定义hook函数-1",
  "text": "自定义hook函数",
  "depth": 2
}, {
  "id": "toref-1",
  "text": "toRef",
  "depth": 2
}, {
  "id": "其它-composition-api组合api-1",
  "text": "其它 Composition API（组合API）",
  "depth": 1
}, {
  "id": "shallowreactive-与-shallowref-1",
  "text": "shallowReactive 与 shallowRef",
  "depth": 2
}, {
  "id": "readonly-与-shallowreadonly-1",
  "text": "readonly 与 shallowReadonly",
  "depth": 2
}, {
  "id": "toraw-与-markraw-1",
  "text": "toRaw 与 markRaw",
  "depth": 2
}, {
  "id": "customref-1",
  "text": "customRef",
  "depth": 2
}, {
  "id": "provide-与-inject-1",
  "text": "provide 与 inject",
  "depth": 2
}, {
  "id": "响应式数据的判断api-1",
  "text": "响应式数据的判断API",
  "depth": 2
}, {
  "id": "composition-api-的优势-1",
  "text": "Composition API 的优势",
  "depth": 1
}, {
  "id": "options-api配置项api-存在的问题vue2-1",
  "text": "Options API(配置项API) 存在的问题（Vue2）",
  "depth": 2
}, {
  "id": "composition-api组合api-的优势vue3-1",
  "text": "Composition API(组合API) 的优势（Vue3）",
  "depth": 2
}, {
  "id": "新的组件-1",
  "text": "新的组件",
  "depth": 1
}, {
  "id": "fragment-1",
  "text": "Fragment",
  "depth": 2
}, {
  "id": "teleport标签-1",
  "text": "Teleport(标签)",
  "depth": 2
}, {
  "id": "suspense标签-1",
  "text": "Suspense（标签）",
  "depth": 2
}, {
  "id": "其他-1",
  "text": "其他",
  "depth": 1
}, {
  "id": "全局api的转移-1",
  "text": "全局API的转移",
  "depth": 2
}, {
  "id": "其他改变-1",
  "text": "其他改变",
  "depth": 2
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
    img: "img",
    li: "li",
    ol: "ol",
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
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "vue3简介",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#vue3简介",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Vue3简介"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "vue3简介"
    }), "\n", "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "打包大小减少41%"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "初次渲染快55%, 更新渲染快133%"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "内存减少54%"
      }), "\n"]
    }), "\n", "\n", "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["使用", jsxRuntimeExports.jsx(_components.code, {
        children: "Proxy"
      }), "代替", jsxRuntimeExports.jsx(_components.code, {
        children: "defineProperty"
      }), "实现响应式", jsxRuntimeExports.jsx(_components.br, {}), "\n重写虚拟", jsxRuntimeExports.jsx(_components.code, {
        children: "DOM"
      }), "的实现和", jsxRuntimeExports.jsx(_components.code, {
        children: "Tree-Shaking"
      })]
    }), "\n", "\n", "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Vue3可以更好的支持", jsxRuntimeExports.jsx(_components.code, {
        children: "TypeScript"
      })]
    }), "\n", "\n", "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Composition API（组合API）", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "setup"
        }), "配置", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "ref"
        }), "与", jsxRuntimeExports.jsx(_components.code, {
          children: "reactive"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "watch"
        }), "与", jsxRuntimeExports.jsx(_components.code, {
          children: "watchEffect"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "provide"
        }), "与 ", jsxRuntimeExports.jsx(_components.code, {
          children: "inject"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["新的内置组件", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "Fragment"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "Teleport"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "Suspense"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["其他改变", jsxRuntimeExports.jsx(_components.br, {}), "\n新的生命周期钩子", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
          children: "data"
        }), "选项应始终被声明为一个函数", jsxRuntimeExports.jsx(_components.br, {}), "\n移除", jsxRuntimeExports.jsx(_components.code, {
          children: "keyCode"
        }), "支持作为", jsxRuntimeExports.jsx(_components.code, {
          children: "v-on"
        }), "的修饰符"]
      }), "\n"]
    }), "\n", "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "创建vue30工程",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#创建vue30工程",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "创建Vue3.0工程"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "使用-vue-cli-创建官方文档vue-create",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#使用-vue-cli-创建官方文档vue-create",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "使用 vue-cli 创建（", jsxRuntimeExports.jsx(_components.a, {
        href: "https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create",
        children: "官方文档vue-create"
      }), "）"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-cmd",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "cmd"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "## 查看@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "/cli版本，确保@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "/cli版本在4"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: ".5"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ".0以上"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "version"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "## 安装或者升级你的@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cli"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "npm "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "install"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "g"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " @"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cli"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "## 创建"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "vue create vue_test"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "## 启动"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "cd vue_test"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "npm run serve"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "使用-vite-创建官方文档vite",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#使用-vite-创建官方文档vite",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "使用 vite 创建（", jsxRuntimeExports.jsx(_components.a, {
        href: "https://v3.cn.vuejs.org/guide/installation.html#vite",
        children: "官方文档vite"
      }), "）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.a, {
        href: "https://vitejs.cn",
        children: "vite官网"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["什么是vite？—— 新一代前端构建工具。", jsxRuntimeExports.jsx(_components.br, {}), "\n优势如下："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "开发环境中，无需打包操作，可快速的冷启动。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "轻量快速的热重载（HMR）。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "真正的按需编译，不再等待整个应用编译完成。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "传统（Webpack）构建与 Vite 构建对比图"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/vue/6.png",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/vue/7.png",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "分析文件目录",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#分析文件目录",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "分析文件目录"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "mainjs",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#mainjs",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "main.js"]
    }), "\n", "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./App.vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "productionTip"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "false"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "render"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "h"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "h"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "$mount"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "#app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "createApp"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./App.vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 创建应用实例对象——app(类似于之前Vue2中的vm，但app是轻量级（部分API），vm是重量级（所有的API）)"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "createApp"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "console"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 挂载"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "mount"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "#app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "appvue",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#appvue",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "App.vue"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["我们再来看看组件，在", jsxRuntimeExports.jsx(_components.code, {
        children: "template"
      }), "标签里可以没有根标签了"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-html",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "html"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "<!-- Vue3组件中的模板结构可以没有根标签 -->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<img"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "alt"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Vue logo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "src"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./assets/logo.png"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "HelloWorld"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "msg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Welcome to Your Vue.js App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "常用-composition-api",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#常用-composition-api",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "常用 Composition API"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "setup",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#setup",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "setup"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.ol, {
        children: ["\n", jsxRuntimeExports.jsx(_components.li, {
          children: "setup是Vue3中一个新的配置项，值为一个函数。"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "2",
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "setup是所有Composition API（组合API） 表演的舞台 。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "组件中所用到的：数据、方法等等配置项，均要配置在setup中。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "setup函数的两种返回值："
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "若返回一个对象，则对象中的属性、方法，在模板（template标签）中均可以直接使用。(setup中的重点)"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "若返回一个渲染函数：则可以自定义渲染内容。（了解的内容）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "注意点"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "尽量不要与Vue2的配置混用"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Vue2.x配置（data、methos、computed…）中可以访问到setup中的属性、方法。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "但在setup中不能访问到Vue2.x配置（data、methos、computed…）。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果有重名, setup优先。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "2",
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "setup函数配置具体实现："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的setup函数配置"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Vue3的setup配置"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "性别："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "个人介绍：我是"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ",性别"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 定义"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "男"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 定义函数调用"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "personInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "alert"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "我是"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "性别为:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 将变量或者函数返回 ,返回的是一个对象 ，放回的属性就可以直接在template标签中直接使用，不需要使用this"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "personInfo"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "ref函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#ref函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "ref函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.ol, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
          children: [jsxRuntimeExports.jsx(_components.strong, {
            children: "作用"
          }), ": 定义一个 ref 响应式的数据"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "2",
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "语法"
        }), ": ", jsxRuntimeExports.jsx(_components.code, {
          children: "const xxx = ref(initValue)"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "JS中操作数据"
        }), "： ", jsxRuntimeExports.jsx(_components.code, {
          children: "xxx.value"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "模板中读取数据"
        }), ": 不需要", jsxRuntimeExports.jsx(_components.code, {
          children: ".value"
        }), "，直接：", jsxRuntimeExports.jsx(_components.code, {
          children: "<div>{{xxx}}</div>"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "使用ref函数需要注意三点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "接收的数据可以是：基本类型、也可以是对象类型。"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["基本类型的数据：响应式依然是靠", jsxRuntimeExports.jsx(_components.code, {
          children: "Object.defineProperty()"
        }), "的get与set完成的。"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "对象类型的数据：内部求助了Vue3.0中的一个新函数—— reactive函数。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "ref函数的具体实现:"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的setup函数配置"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "个人信息"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "性别："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="changeInfo">修改信息</button>'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 导入reactive"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 定义变量,使用ref函数响应式声明"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "男"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 定义修改信息函数"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "changeInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "shier1122"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "女"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 返回值，上面定义的变量、函数、方法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "changeInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "job"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "reactive函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#reactive函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "reactive函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.ol, {
        children: ["\n", jsxRuntimeExports.jsx(_components.li, {
          children: "reactive只能定义一个对象、数组类型的响应式数据（基本类型不要用它，要用ref函数）"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "2",
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "语法"
        }), "：", jsxRuntimeExports.jsx(_components.code, {
          children: "const 代理对象= reactive(源对象)"
        }), "接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "reactive定义的响应式数据是深层次的。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "个人信息"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "性别："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "工作："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "薪水："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="changeInfo">修改信息</button>'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 导入reactive"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 使用reactive创建对象数据类型"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "男"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "全栈工程师"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "40k"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 使用reactive创建数组数据类型"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "hobby"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "学习"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "跑步"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "编程"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "])"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 定义修改信息函数"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "changeInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "shier22"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "女"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// reactive修改对象数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "45k"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "产品经理"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// reactive 修改数组数据：通过索引值修改"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "hobby"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "] "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "打王者"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 返回值，上面定义的变量、函数、方法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "changeInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "vue3中的响应式原理",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#vue3中的响应式原理",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Vue3中的响应式原理"]
    }), "\n", "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "实现原理"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "对象类型"
        }), "：通过", jsxRuntimeExports.jsx(_components.code, {
          children: "Object.defineProperty()"
        }), "对属性的读取、修改进行拦截（数据劫持）。"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "数组类型"
        }), "：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Object"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "defineProperty"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "data"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{},"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "存在问题"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "新增属性、删除属性, 界面不会更新。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "直接通过下标修改数组, 界面不会自动更新。"
      }), "\n"]
    }), "\n", "\n", "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "实现原理"
      }), ":"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "通过Proxy（代理）"
        }), ": 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "通过Reflect（反射）"
        }), ": 对源对象的属性进行操作。", jsxRuntimeExports.jsx(_components.br, {}), "\nMDN文档中描述的", jsxRuntimeExports.jsx(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",
          children: "Proxy"
        }), "与", jsxRuntimeExports.jsx(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",
          children: "Reflect"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Proxy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "data"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 拦截读取属性值"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "target"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Reflect"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "target"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 拦截设置属性值或添加新属性"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "target"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Reflect"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "target"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 拦截删除属性"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "deleteProperty"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "target"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Reflect"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "deleteProperty"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "target"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "prop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "proxy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "tom"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Proxy具体实现案例"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "个人信息"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "性别："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "年龄："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "工作："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "薪水："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="changeInfo">修改信息</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="deleteInfo">删除工作</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="addAge">添加年龄</button>'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 导入reactive"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 使用reactive创建对象数据类型"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "男"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "全栈工程师"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "40k"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 使用reactive创建数组数据类型"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "hobby"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "学习"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "跑步"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "编程"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "])"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 定义修改信息函数"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "changeInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "shier22"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sex"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "女"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// reactive修改对象数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "45k"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "产品经理"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// reactive 修改数组数据：通过索引值修改"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "hobby"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "] "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "打王者"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// Vue3中增删改查"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addAge"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "18"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "deleteInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "       "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "delete"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "type"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 返回值，上面定义的变量、函数、方法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "changeInfo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "addAge"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "deleteInfo"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "reactive对比ref",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#reactive对比ref",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "reactive对比ref"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "从定义数据角度对比"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "ref用来定义：基本类型数据。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "reactive用来定义：对象（或数组）类型数据。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "备注"
      }), "：ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过", jsxRuntimeExports.jsx(_components.code, {
        children: "reactive"
      }), "转为代理对象。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "从原理角度对比"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["ref通过", jsxRuntimeExports.jsx(_components.code, {
          children: "Object.defineProperty()"
        }), "的get与set来实现响应式（数据劫持）。"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "从使用角度对比"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["ref定义的数据：操作数据需要", jsxRuntimeExports.jsx(_components.code, {
          children: ".value"
        }), "，读取数据时模板中直接读取不需要", jsxRuntimeExports.jsx(_components.code, {
          children: ".value"
        }), "。"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["reactive定义的数据：操作数据与读取数据：均不需要", jsxRuntimeExports.jsx(_components.code, {
          children: ".value"
        }), "。"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "setup的两个注意点",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#setup的两个注意点",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "setup的两个注意点"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "setup执行的时机"
      }), "：在beforeCreate之前执行一次，this是undefined。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "setup的参数"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "props"
      }), "：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "context"
      }), "：上下文对象"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "attrs"
        }), ": 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于", jsxRuntimeExports.jsx(_components.code, {
          children: "this.$attrs"
        }), "。"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "slots"
        }), ": 收到的插槽内容, 相当于 ", jsxRuntimeExports.jsx(_components.code, {
          children: "this.$slots"
        }), "。"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "emit"
        }), ": 分发自定义事件的函数, 相当于 ", jsxRuntimeExports.jsx(_components.code, {
          children: "this.$emit"
        }), "。"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "计算属性与监视",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#计算属性与监视",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "计算属性与监视"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "computed函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#computed函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "computed函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["与Vue2.x中", jsxRuntimeExports.jsx(_components.code, {
        children: "computed"
      }), "配置功能一致", jsxRuntimeExports.jsx(_components.br, {}), "\n在Vue3中的计算属性属于一个组合，需要引入，", jsxRuntimeExports.jsx(_components.code, {
        children: "computed"
      }), "函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "computed"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//计算属性——简写"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fullName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "computed"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lastName"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//计算属性——完整"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fullName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "computed"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "(){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lastName"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameArr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "split"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameArr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lastName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameArr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "具体实现名字合并案例"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "个人信息"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  姓："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<input"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "text"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-model"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "><br><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  名："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<input"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "text"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-model"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.lastName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "><br><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<span>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "全名： "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fullName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</span><br><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  修改名字："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<input"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "text"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-model"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.fullName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 导入reactive,在"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "computed"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ' from "vue";'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "ComputedDemo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 使用reactive创建对象数据类型"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "十"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "lastName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "二"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "/*// 简单写法（只读）将computed组合创建在person对象中,将值返回"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      person.fullName = computed(() => {"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "        return person.firstName + '-' + person.lastName"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      })*/"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 完整写法（读写）将computed组合创建在person对象中,将值返回"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fullName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "computed"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "(){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lastName"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameArray"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "split"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "firstName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameArray"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lastName"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameArray"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 返回值，上面定义的变量、函数、方法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "watch函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#watch函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "watch函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["与Vue2.x中watch配置功能一致", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "两个小“坑”"
      }), "："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "监视reactive定义的响应式数据中某个属性时：deep配置有效。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "当前求和结果"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="sum++">sum+1</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<hr>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "msg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "当前信息："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "msg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: `@click="msg+='@'">信息修改</button>`
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<hr>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "年龄:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.job.salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "薪资:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person.job."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "K"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: `@click="person.name+='~'">姓名修改</button>`
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="person.age++">年龄增加</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="person.job.salary++">薪资++</button>'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 引入需要的组合"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "watch"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "WatchDemo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 监视的数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "msg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Vue3"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "19"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "job1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "全栈"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "88"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//情况一：监视ref定义的响应式数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "/*watch(sum, (newValue, oldValue) => {"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "        console.log('sum变化了', newValue, oldValue)"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      }, {immediate: true})"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      //情况二：监视多个ref定义的响应式数据"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      watch([sum, msg], (newValue, oldValue) => {"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "        console.log('sum或msg变化了', newValue, oldValue)"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      })"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      /!* 情况三：监视reactive定义的响应式数据(也就是监视的是person整个对象，则会自动强制开启深度监视)"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "            若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "            若watch监视的是reactive定义的响应式数据，则强制开启了深度监视"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      *!/"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      watch(person, (newValue, oldValue) => {"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "        console.log('person变化了', newValue, oldValue)"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      }, {immediate: true, deep: false}) //此处的deep配置不再奏效"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      //情况四：监视reactive定义的响应式数据中的某个属性"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      watch(() => person.job, (newValue, oldValue) => {"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "        console.log('person的job变化了', newValue, oldValue)"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      }, {immediate: true, deep: true})"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      //情况五：监视reactive定义的响应式数据中的某些属性"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      watch([() => person.job, () => person.name], (newValue, oldValue) => {"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "        console.log('person的job变化了', newValue, oldValue)"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "      }, {immediate: true, deep: true})"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "*/"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//特殊情况"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "watch"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "newValue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " oldValue) => "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "console"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person的job变化了"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "newValue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "oldValue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "deep"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "true"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "msg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "watcheffect函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#watcheffect函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "watchEffect函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "watch的套路是"
        }), "：既要指明监视的属性，也要指明监视的回调。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "watchEffect的套路是"
        }), "：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "watchEffect有点像computed"
        }), "："]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "watchEffect"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "x1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "x2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "console"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "watchEffect配置的回调执行了"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "vue3生命周期",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#vue3生命周期",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Vue3生命周期"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "beforeDestroy"
        }), "改名为 ", jsxRuntimeExports.jsx(_components.code, {
          children: "beforeUnmount"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "destroyed"
        }), "改名为 ", jsxRuntimeExports.jsx(_components.code, {
          children: "unmounted"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "beforeCreate"
        }), "==>", jsxRuntimeExports.jsx(_components.code, {
          children: "setup()"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "created"
        }), " ==>", jsxRuntimeExports.jsx(_components.code, {
          children: "setup()"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "beforeMount"
        }), " ==>", jsxRuntimeExports.jsx(_components.code, {
          children: "onBeforeMount"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "mounted"
        }), "==>", jsxRuntimeExports.jsx(_components.code, {
          children: "onMounted"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "beforeUpdate"
        }), "==>", jsxRuntimeExports.jsx(_components.code, {
          children: "onBeforeUpdate"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "updated"
        }), " ==>", jsxRuntimeExports.jsx(_components.code, {
          children: "onUpdated"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "beforeUnmount"
        }), " ==>", jsxRuntimeExports.jsx(_components.code, {
          children: "onBeforeUnmount"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["u", jsxRuntimeExports.jsx(_components.code, {
          children: "nmounted"
        }), " ==>", jsxRuntimeExports.jsx(_components.code, {
          children: "onUnmounted"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["使用组合式 API 名称时，在前面添加 ", jsxRuntimeExports.jsx(_components.code, {
        children: "onXxxx"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/vue/8.png",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "自定义hook函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#自定义hook函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "自定义hook函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["什么是hook？—— 本质是一个函数，把setup函数中使用到的Composition API（组合式API）进行了封装。", jsxRuntimeExports.jsx(_components.br, {}), "\n类似于vue2.x中的mixin。", jsxRuntimeExports.jsx(_components.br, {}), "\n自定义hook的优势："]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "复用代码。"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["让setup中的逻辑更清楚易懂。", jsxRuntimeExports.jsx(_components.br, {}), "\n在工程目录下创建一个hooks文件夹，里面的文件命名规则useXxxx 明起意"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["使用案例", jsxRuntimeExports.jsx(_components.br, {}), "\nhooks/usePont.js"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 引入需要的组合"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "onBeforeMount"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "onBeforeUnmount"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 创建函数 点击函数并且暴露出去"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 实现鼠标点击获取坐标数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "x"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "y"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 实现方法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "doPoint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "x"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pageX"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "y"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pageY"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "console"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "点击坐标为：("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pageX"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pageY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 调用生命周期钩子-- 挂载之前 添加事件"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "onBeforeMount"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "window"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addEventListener"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "mousemove"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "doPoint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 调用生命周期钩子-- 卸载挂载之前 移除事件"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "onBeforeUnmount"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "window"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "removeEventListener"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "mousemove"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "doPoint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 必须返回point 不然没有数据传入，报错"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "CustomHooksDemo.vue"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "当前求和结果:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="sum++">sum+1</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<hr>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<h1>当前鼠标坐标为:({{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point.x"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "}},{{point.y}})</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 引入需要的组合"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "usePoint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "../hooks/usePoint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "CustomHooksDemo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      console.log("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "组合setup--------"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 监视的数据"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "      let sum = ref(0)"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 调用引入的usePoint函数"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "      let point = usePoint()"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "      return {sum,point}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "    },"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "  }"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Test.vue"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "当前鼠标坐标为:("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " point."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "x"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " point."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "y"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 引入需要的组合"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: '  import usePoint from "../hooks/usePoint";'
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 调用usePoint函数，使用里面的鼠标移动来获取到坐标"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      const "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "usePoint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "point"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "APP.vue"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的自定义hook"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="isShowDate'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '!isShowDate">隐藏/显示</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<LifecycleDemo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "isShowDate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<hr>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 引入组件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: '  import LifecycleDemo from "./components/CustomHooksDemo";'
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: '  import Test from "./components/Test";'
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 引入组合"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " from 'vue'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 注册组件"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "components"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "LifecycleDemo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isShowDate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "true"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isShowDate"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "toref",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#toref",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "toRef"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "作用"
        }), "：创建一个 ref 对象，其value值指向另一个对象中的某个属性。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "语法"
        }), "：", jsxRuntimeExports.jsx(_components.code, {
          children: "const name = toRef(person,'name')"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "应用"
        }), ": 要将响应式对象中的某个属性单独提供给外部使用时。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "扩展"
        }), "：toRefs与toRef功能一致，但可以批量创建多个 ref 对象，语法：", jsxRuntimeExports.jsx(_components.code, {
          children: "toRefs(person)"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "年龄:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "person.job.salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "薪资:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "person.job."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "K"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: `@click="person.name+='~'">姓名修改</button>`
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="person.age++">年龄增加</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="person.job.salary++">薪资++</button>'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 引入toRef、toRefs组合"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "toRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "toRefs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "toRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 监视的数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "19"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "job1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "全栈"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "88"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// toRef"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nameRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "toRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "); "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 第一个参数为数据对象，第二个参数为数据对象的属性"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// toRef 写法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "toRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "toRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// toRefs写法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "toRefs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 将person中多个属性返回给模板使用"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "其它-composition-api组合api",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#其它-composition-api组合api",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "其它 Composition API（组合API）"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "shallowreactive-与-shallowref",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#shallowreactive-与-shallowref",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "shallowReactive 与 shallowRef"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "shallowReactive"
        }), "：只处理对象最外层属性的响应式（浅响应式）。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "shallowRef"
        }), "：只处理基本数据类型的响应式，不进行对象的响应式处理。", jsxRuntimeExports.jsx(_components.br, {}), "\n什么时候使用?", jsxRuntimeExports.jsx(_components.br, {}), "\n如果有一个对象数据，结构比较深， 但变化时只是外层属性变化 ===> ", jsxRuntimeExports.jsx(_components.code, {
          children: "shallowReactive"
        }), "。", jsxRuntimeExports.jsx(_components.br, {}), "\n如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> ", jsxRuntimeExports.jsx(_components.code, {
          children: "shallowRef"
        }), "。"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "readonly-与-shallowreadonly",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#readonly-与-shallowreadonly",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "readonly 与 shallowReadonly"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "readonly"
      }), ": 让一个响应式数据变为只读的（深只读）。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "shallowReadonly"
      }), "：让一个响应式数据变为只读的（浅只读）。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "应用场景"
      }), ": 不希望数据被修改时。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "姓名:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "年龄:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h1>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "薪资:"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " job.job1."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "K"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1><br>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: `@click="name+='~'">姓名修改</button>`
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="age++">年龄增加</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="job.job1.salary++">薪资++</button>'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 引入组合"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "toRefs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "readonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "shallowReadonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "toRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 监视的数据"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Shier"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "19"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "job1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "jobs11"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "全栈"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "88"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 全部只读的"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "readonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 浅层的是只读，深层的为是可修改的"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "shallowReadonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// toRefs写法"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "toRefs"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "person"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "toraw-与-markraw",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#toraw-与-markraw",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "toRaw 与 markRaw"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "toRaw"
        }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "作用"
        }), "：将一个由reactive生成的响应式对象转为普通对象。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "使用场景"
        }), "：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "markRaw"
        }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "作用"
        }), "：标记一个对象，使其永远不会再成为响应式对象。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "应用场景"
        }), ":"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "有些值不应被设置为响应式的，例如复杂的第三方类库等。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "customref",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#customref",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "customRef"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "作用"
      }), "：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。有两个参数："]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "trigger()"
        }), "：用来触发修改的内容，然后去更新模板"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "track()"
        }), "：追踪", jsxRuntimeExports.jsx(_components.br, {}), "\n必须具有返回值"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "实现防抖效果："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<input"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "type"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "text"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-model"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "keyword"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h3>{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "keyword"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h3>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "customRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " from 'vue'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "		"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "		"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// let keyword = ref('hello') //使用Vue准备好的内置ref"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//自定义一个myRef"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			function "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "myRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "delay"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "timer"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//通过customRef去实现自定义"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "customRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "track"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "trigger"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "					"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "						"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "get"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "(){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "							"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "track"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//告诉Vue这个value值是需要被“追踪”的"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "							"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "						"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "						"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "newValue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "){"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "							"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "clearTimeout"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "timer"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "							"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "timer"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setTimeout"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "								"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "newValue"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "								"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "trigger"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//告诉Vue去更新界面"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "							"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "delay"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "						"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "					"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "keyword"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "myRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "hello"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "500"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//使用程序员自定义的ref"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "keyword"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "		"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "provide-与-inject",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#provide-与-inject",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "provide 与 inject"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "作用"
      }), "：实现祖与后代组件间通信", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "套路"
      }), "：父组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来开始使用这些数据", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "具体写法"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n祖组件中："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "......"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "car"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "奔驰"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "price"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "40万"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "provide"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "car"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "car"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "......"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "后代组件中："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "props"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "context"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "......"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "car"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "inject"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "car"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "car"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "......"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["具体的实现案例", jsxRuntimeExports.jsx(_components.br, {}), "\nAPP.vue 作为祖组件"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的自定义hook"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " APP祖组件 爷爷："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "---年龄："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 引入组件"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "provide"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ' from "vue";'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: '  import Child from "./components/Child";'
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "components"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "88"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 将数据提供出去"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "provide"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "scoped"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .app "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gray"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "padding"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": 10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "px"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</style>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Child.vue 子组件", jsxRuntimeExports.jsx(_components.br, {}), "\n不在子组件中注入祖组件中的属性"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Child组件 儿子"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Son"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "inject"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " from 'vue'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import Son from './Son'"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "components"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Son"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "scoped"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .child "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "orange"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "padding"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": 10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "px"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</style>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Son.vue 孙组件"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "son"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Son组件 我的爷爷名字："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "grandfather."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "---爷爷年龄："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "grandfather."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "price"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 导入inject"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "inject"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ' from "vue";'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Son"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 将信息注入"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "inject"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "grandfather"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "scoped"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .son "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "green"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</style>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "响应式数据的判断api",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#响应式数据的判断api",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "响应式数据的判断API"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "isRef"
        }), ": 检查一个值是否为一个 ref 对象", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "isReactive"
        }), ": 检查一个对象是否是由 reactive 创建的响应式代理", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "isReadonly"
        }), ": 检查一个对象是否是由 readonly 创建的只读代理", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
          children: "isProxy"
        }), ": 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的API"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " APP"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 引入组件"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "provide"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "readonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isProxy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isReadonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isReactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ' from "vue";'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "reactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "88"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 将数据提供出去"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demoRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "isRef"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demoReactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "isReactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sumReactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "isReactive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sumReadOnly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "isReadonly"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demoProxy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "isProxy"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      console.log("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "demoReactive---"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " demoReactive)  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// true"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      console.log("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "demoRef---"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " demoRef) "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// false  由reactive创建"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      console.log("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "sumReactive---"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " sumReactive) "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// false 由reactive创建"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      console.log("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "sumReadOnly---"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " sumReadOnly) "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// false 可修改的"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      console.log("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "demoProxy---"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " demoProxy) "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// true 由reactive创建 都是使用代理的"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "demo"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "composition-api-的优势",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#composition-api-的优势",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Composition API 的优势"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "options-api配置项api-存在的问题vue2",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#options-api配置项api-存在的问题vue2",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Options API(配置项API) 存在的问题（Vue2）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/vue/9.image",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/vue/10.image",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "composition-api组合api-的优势vue3",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#composition-api组合api-的优势vue3",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Composition API(组合API) 的优势（Vue3）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "新的组件",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#新的组件",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "新的组件"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "fragment",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#fragment",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Fragment"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["在Vue2中组件的结构必须有一个根标签", jsxRuntimeExports.jsx(_components.br, {}), "\n在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中", jsxRuntimeExports.jsx(_components.br, {}), "\n好处: 减少标签层级, 减小内存占用"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "teleport标签",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#teleport标签",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Teleport(标签)"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="isShowDialog=true">打开弹窗</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "指定在哪个标签下面添加"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<teleport"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "to"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "body"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      <!--点击了按钮之后顺便携带弹窗属性-->"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "isShowDialog"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "mask"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "dialog"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "弹窗"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h3>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "文本内容"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h3>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<button"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: '@click="isShowDialog=false">关闭弹窗</button>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</teleport>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "export"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Dialog"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isShowDialog"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "false"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "isShowDialog"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "<style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "scoped"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .mask "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "position"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "absolute"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "top"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "bottom"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "left"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "right"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "rgb"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0.5"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .dialog "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "position"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "absolute"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "text"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "align"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "center"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "top"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "%"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "left"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "%"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "transform"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "translate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "%"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "%"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "width"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": 400"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "px"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "height"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": 400"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "px"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": #00"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a4ff"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</style>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "suspense标签",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#suspense标签",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Suspense（标签）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "等待异步组件时渲染一些额外内容，让应用有更好的用户体验"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "使用步骤"
      }), "：", jsxRuntimeExports.jsx(_components.br, {}), "\n异步引入组件"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// import Child from 'vue'// 静态引入"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "defineAsyncComponent"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "defineAsyncComponent"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./components/Child.vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "))"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["使用", jsxRuntimeExports.jsx(_components.code, {
        children: "Suspense"
      }), "包裹组件，并配置好", jsxRuntimeExports.jsx(_components.code, {
        children: "default"
      }), "与 ", jsxRuntimeExports.jsx(_components.code, {
        children: "fallback"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "		"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h3>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "我是App组件"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h3>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "		"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Suspense"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-slot"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-slot"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "fallback"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "				"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h3>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "加载中....."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h3>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "			"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "		"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Suspense"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "具体实现案例"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "Child.vue"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h2>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Child儿子组件 "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h2>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ' from "vue";'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 异步"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "async"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setup"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ref"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      let "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "p"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Promise"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "resolve"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "reject"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setTimeout"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "resolve"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sum"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      return await "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "p"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "scoped"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .child "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "orange"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "padding"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": 10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "px"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</style>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "APP.vue"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<!--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue3的自定义hook"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-->"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "app"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h3>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "我是App组件"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h3>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Suspense"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-slot"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<template"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-slot"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "fallback"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<h3>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "加载中....."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h3>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Suspense"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</div>"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</template>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 引入组件"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: '  //import Child from "./components/Child"; // 静态引入'
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  // 异步引入"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  import "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "defineAsyncComponent"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " from 'vue'"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  const Child = defineAsyncComponent(()=>import('./components/Child'))"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "App"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "components"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Child"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<style"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "scoped"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  .app "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "background"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "color"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gray"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "padding"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": 10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "px"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</style>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "其他",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#其他",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "其他"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "全局api的转移",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#全局api的转移",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "全局API的转移"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue 2.x 有许多全局 API 和配置。"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["例如：", jsxRuntimeExports.jsx(_components.strong, {
        children: "注册全局组件"
      }), "、", jsxRuntimeExports.jsx(_components.strong, {
        children: "注册全局指令"
      }), "等。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//注册全局组件"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "component"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "MyButton"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "data"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "template"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: '<button @click="count++">Clicked {{ count }} times.</button>'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//注册全局指令"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Vue"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "directive"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "focus"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "inserted"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "el"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "el"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "focus"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue3.0中对这些API做出了调整："
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["将全局的API，即：", jsxRuntimeExports.jsx(_components.code, {
        children: "Vue.xxx"
      }), "调整到应用实例（", jsxRuntimeExports.jsx(_components.code, {
        children: "app"
      }), "）上"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "2.x 全局 API（Vue）"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "3.x 实例 API (app)"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.config.xxxx"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "app.config.xxxx"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.config.productionTip"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue3中移除"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.component"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "app.component"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.directive"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "app.directive"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.mixin"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "app.mixin"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.use"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "app.use"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vue.prototype"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "app.config.globalProperties"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "其他改变",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#其他改变",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "其他改变"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsx(_components.p, {
          children: "data选项应始终被声明为一个函数。"
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
          children: ["过度类名的更改：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
            children: "Vue2.x"
          }), "写法"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-css",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "css"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-enter"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-leave-to"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opacity"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-leave"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-enter-to"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opacity"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
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
        children: "Vue3.x"
      }), "写法"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-css",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "css"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-enter-from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-leave-to"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opacity"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-leave-from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-enter-to"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opacity"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "3",
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
          children: ["移除", jsxRuntimeExports.jsx(_components.code, {
            children: "keyCode"
          }), "作为 ", jsxRuntimeExports.jsx(_components.code, {
            children: "v-on"
          }), " 的修饰符，同时也不再支持", jsxRuntimeExports.jsx(_components.code, {
            children: "config.keyCodes"
          })]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
          children: ["移除", jsxRuntimeExports.jsx(_components.code, {
            children: "v-on.native"
          }), "修饰符", jsxRuntimeExports.jsx(_components.br, {}), "\n父组件中绑定事件:"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-html",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "html"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<my-component"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-on:close"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "handleComponentEvent"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "v-on:click"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "handleNativeClickEvent"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "子组件中声明自定义事件:"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-javascript",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "javascript"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<script>"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  export default "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "{"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "emits"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "close"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<\/script>"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "5",
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["移除过滤器（filter）", jsxRuntimeExports.jsx(_components.br, {}), "\n过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。"]
      }), "\n"]
    })]
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
