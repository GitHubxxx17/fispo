import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "插件"
};
const mdInfo = '插件{% marketList %}<ul><li class="plugin-list-item"data-name="plugin-preloader"data-description="Fispo 的默认加载动画"data-url="https://github.com/GitHubxxx17';
const toc = [{
  "id": "插件",
  "text": "插件",
  "depth": 1
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h1: "h1",
    h3: "h3",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  }, { Link } = _components;
  if (!Link) _missingMdxReference("Link");
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
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "marketList",
      children: ["\n", jsxRuntimeExports.jsxs(_components.ul, {
        children: ["\n", jsxRuntimeExports.jsx(_components.li, {
          className: "plugin-list-item",
          children: jsxRuntimeExports.jsxs(_components.div, {
            className: "plugin-list-item-content",
            children: [jsxRuntimeExports.jsx(_components.h3, {
              children: jsxRuntimeExports.jsx(Link, {
                href: "https://github.com/GitHubxxx17/fispo/tree/main/packages/plugin-preloader",
                children: "plugin-preloader"
              })
            }), jsxRuntimeExports.jsx(_components.p, {
              children: "Fispo 的默认加载动画"
            }), jsxRuntimeExports.jsxs(_components.div, {
              className: "plugin-list-item-tags",
              children: [jsxRuntimeExports.jsx(_components.span, {
                children: "#official"
              }), jsxRuntimeExports.jsx(_components.span, {
                children: "#plugins"
              }), jsxRuntimeExports.jsx(_components.span, {
                children: "#preloader"
              })]
            })]
          })
        }), jsxRuntimeExports.jsx(_components.li, {
          className: "plugin-list-item",
          children: jsxRuntimeExports.jsxs(_components.div, {
            className: "plugin-list-item-content",
            children: [jsxRuntimeExports.jsx(_components.h3, {
              children: jsxRuntimeExports.jsx(Link, {
                href: "https://github.com/GitHubxxx17/fispo/tree/main/packages/plugin-aplayer",
                children: "plugin-aplayer"
              })
            }), jsxRuntimeExports.jsx(_components.p, {
              children: "基于 aplayer 封装的音乐播放器"
            }), jsxRuntimeExports.jsxs(_components.div, {
              className: "plugin-list-item-tags",
              children: [jsxRuntimeExports.jsx(_components.span, {
                children: "#official"
              }), jsxRuntimeExports.jsx(_components.span, {
                children: "#plugins"
              }), jsxRuntimeExports.jsx(_components.span, {
                children: "#aplayer"
              }), jsxRuntimeExports.jsx(_components.span, {
                children: "#musicPlayer"
              })]
            })]
          })
        })]
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
