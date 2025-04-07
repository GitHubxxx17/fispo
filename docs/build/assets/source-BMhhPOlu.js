import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "资源处理"
};
const mdInfo = "资源处理根目录根目录是存放所有资源的地方，包括文章、图片、js和css等文件资源，默认存放在 docs 文件夹下，如果需要修改存放的位置可在 fispo.config.ts 文件配置中修改 root 配置项。public目录图片和字体等静态资源可以放置在根目录下的 public 目录中。例如，如果项";
const toc = [{
  "id": "资源处理",
  "text": "资源处理",
  "depth": 1
}, {
  "id": "根目录",
  "text": "根目录",
  "depth": 2
}, {
  "id": "public目录",
  "text": "public目录",
  "depth": 2
}, {
  "id": "post目录",
  "text": "post目录",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "资源处理",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#资源处理",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "资源处理"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "根目录",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#根目录",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "根目录"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["根目录是存放所有资源的地方，包括文章、图片、js和css等文件资源，默认存放在 docs 文件夹下，如果需要修改存放的位置可在 ", jsxRuntimeExports.jsx(_components.code, {
        children: "fispo.config.ts"
      }), " 文件配置中修改 root 配置项。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "public目录",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#public目录",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "public目录"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["图片和字体等静态资源可以放置在根目录下的 public 目录中。例如，如果项目根目录是 ./docs，并且使用默认源目录位置，那么 public 目录将是 ./docs/public。", jsxRuntimeExports.jsx(_components.br, {}), "\n放置在 public 中的资源将按原样复制到输出目录的根目录中。例如 public/icon.png 在源代码中使用 /icon.png 引用。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "post目录",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#post目录",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "post目录"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "文章资源的存放目录默认为根目录下的 post 目录中。"
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
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
