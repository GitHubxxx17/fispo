import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "主题"
};
const mdInfo = '主题{% marketList %}<ul><li class="theme-list-item"data-name="fish in the pool"data-img="/theme/1.png"data-description="fispo的默认主题"data-url="https://git';
const toc = [{
  "id": "主题",
  "text": "主题",
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
  }, { Icon, Image, Link } = _components;
  if (!Icon) _missingMdxReference("Icon");
  if (!Image) _missingMdxReference("Image");
  if (!Link) _missingMdxReference("Link");
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "主题",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#主题",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "主题"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "marketList",
      children: ["\n", jsxRuntimeExports.jsxs(_components.ul, {
        children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
          className: "theme-list-item",
          children: [jsxRuntimeExports.jsx(_components.div, {
            className: "theme-list-item-img",
            children: jsxRuntimeExports.jsxs(Link, {
              href: "https://githubxxx17.github.io/testblog/",
              children: [jsxRuntimeExports.jsx(Image, {
                src: "/theme/1.png"
              }), jsxRuntimeExports.jsxs(_components.div, {
                className: "theme-list-item-img-text",
                children: [jsxRuntimeExports.jsx(Icon, {
                  icon: "eye"
                }), jsxRuntimeExports.jsx(_components.span, {
                  children: "点击预览网站"
                })]
              })]
            })
          }), jsxRuntimeExports.jsxs(_components.div, {
            className: "theme-list-item-content",
            children: [jsxRuntimeExports.jsx(_components.h3, {
              children: jsxRuntimeExports.jsx(Link, {
                href: "https://githubxxx17.github.io/testblog/",
                children: "fish in the pool"
              })
            }), jsxRuntimeExports.jsx(_components.p, {
              children: "fispo的默认主题"
            })]
          })]
        }), jsxRuntimeExports.jsxs(_components.li, {
          className: "theme-list-item",
          children: [jsxRuntimeExports.jsx(_components.div, {
            className: "theme-list-item-img",
            children: jsxRuntimeExports.jsxs(Link, {
              href: "https://githubxxx17.github.io/testblog/",
              children: [jsxRuntimeExports.jsx(Image, {
                src: "/theme/1.png"
              }), jsxRuntimeExports.jsxs(_components.div, {
                className: "theme-list-item-img-text",
                children: [jsxRuntimeExports.jsx(Icon, {
                  icon: "eye"
                }), jsxRuntimeExports.jsx(_components.span, {
                  children: "点击预览网站"
                })]
              })]
            })
          }), jsxRuntimeExports.jsxs(_components.div, {
            className: "theme-list-item-content",
            children: [jsxRuntimeExports.jsx(_components.h3, {
              children: jsxRuntimeExports.jsx(Link, {
                href: "https://githubxxx17.github.io/testblog/",
                children: "fish in the pool"
              })
            }), jsxRuntimeExports.jsx(_components.p, {
              children: "fispo的默认主题"
            })]
          })]
        }), jsxRuntimeExports.jsxs(_components.li, {
          className: "theme-list-item",
          children: [jsxRuntimeExports.jsx(_components.div, {
            className: "theme-list-item-img",
            children: jsxRuntimeExports.jsxs(Link, {
              href: "https://githubxxx17.github.io/testblog/",
              children: [jsxRuntimeExports.jsx(Image, {
                src: "/theme/1.png"
              }), jsxRuntimeExports.jsxs(_components.div, {
                className: "theme-list-item-img-text",
                children: [jsxRuntimeExports.jsx(Icon, {
                  icon: "eye"
                }), jsxRuntimeExports.jsx(_components.span, {
                  children: "点击预览网站"
                })]
              })]
            })
          }), jsxRuntimeExports.jsxs(_components.div, {
            className: "theme-list-item-content",
            children: [jsxRuntimeExports.jsx(_components.h3, {
              children: jsxRuntimeExports.jsx(Link, {
                href: "https://githubxxx17.github.io/testblog/",
                children: "fish in the pool"
              })
            }), jsxRuntimeExports.jsx(_components.p, {
              children: "fispo的默认主题"
            })]
          })]
        }), jsxRuntimeExports.jsxs(_components.li, {
          className: "theme-list-item",
          children: [jsxRuntimeExports.jsx(_components.div, {
            className: "theme-list-item-img",
            children: jsxRuntimeExports.jsxs(Link, {
              href: "https://githubxxx17.github.io/testblog/",
              children: [jsxRuntimeExports.jsx(Image, {
                src: "/theme/1.png"
              }), jsxRuntimeExports.jsxs(_components.div, {
                className: "theme-list-item-img-text",
                children: [jsxRuntimeExports.jsx(Icon, {
                  icon: "eye"
                }), jsxRuntimeExports.jsx(_components.span, {
                  children: "点击预览网站"
                })]
              })]
            })
          }), jsxRuntimeExports.jsxs(_components.div, {
            className: "theme-list-item-content",
            children: [jsxRuntimeExports.jsx(_components.h3, {
              children: jsxRuntimeExports.jsx(Link, {
                href: "https://githubxxx17.github.io/testblog/",
                children: "fish in the pool"
              })
            }), jsxRuntimeExports.jsx(_components.p, {
              children: "fispo的默认主题"
            })]
          })]
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
