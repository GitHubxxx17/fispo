import { j as jsxRuntimeExports } from "./client-entry-Bq6ifpqd.js";
const frontmatter = {
  "title": "数组sort()详解",
  "categories": "笔记",
  "date": "2023-4-15 00:08:45",
  "tags": ["笔记"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/19.jpg"
};
const mdInfo = "数组sort()语法：arr.sort([compareFunction])compareFunction这个参数是可填可不填的语法：arr.sort([compareFunction])compareFunction这个参数是可填可不填的compareFunction 是一个函数,用来指定按某种顺";
const toc = [{
  "id": "数组sort",
  "text": "数组sort()",
  "depth": 1
}, {
  "id": "默认排序",
  "text": "默认排序",
  "depth": 2
}, {
  "id": "升序",
  "text": "升序",
  "depth": 2
}, {
  "id": "降序",
  "text": "降序",
  "depth": 2
}, {
  "id": "sort源码原理",
  "text": "sort源码原理",
  "depth": 1
}, {
  "id": "sort的其他语法",
  "text": "sort的其他语法",
  "depth": 1
}, {
  "id": "将数组的奇数和偶数分离",
  "text": "将数组的奇数和偶数分离",
  "depth": 2
}, {
  "id": "打乱数组",
  "text": "打乱数组",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "数组sort",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#数组sort",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "数组sort()"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "语法：arr.sort([compareFunction])"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "compareFunction这个参数是可填可不填的"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "语法：arr.sort([compareFunction])"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "compareFunction这个参数是可填可不填的"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "compareFunction 是一个函数,用来指定按某种顺序进行排列的函数。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "该排序方法会改变原始数组"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "默认排序",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#默认排序",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "默认排序"]
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
              children: "arr1"
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
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "40"
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
              children: "5"
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
              children: "2"
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
              children: "3"
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
              children: "1"
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
              children: "6"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
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
              children: "arr2"
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
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "40"
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
              children: "5"
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
              children: "2"
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
              children: "3"
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
              children: "1"
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
              children: "6"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
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
              children: "arr1"
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
              children: "arr2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//[ 1, 2, 3, 40, 5, 6 ] [ '1', '2', '3', '40', '5', '6' ][ '1', '2', 3', '40', '5', '6' ]//[ 1, 2, 3, 40, 5, 6 ] [ '1', '2', '3', '40', '5', '6' ][ '1', '2', 3', '40', '5', '6' ]"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "升序",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#升序",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "升序"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "原理"
        }), ":sort()里面的函数返回值如果大于0，则a、b交换位置；（数组原本位置为a在b的前面）", jsxRuntimeExports.jsx(_components.br, {}), "\n如果返回值小于0，则a、b不交换位置；", jsxRuntimeExports.jsx(_components.br, {}), "\n如果返回值等于0，则a、b的位置不变。"]
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
              children: "arr"
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
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "40"
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
              children: "5"
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
              children: "2"
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
              children: "3"
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
              children: "1"
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
              children: "6"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
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
              children: "a"
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
              children: "b"
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
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
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
              children: "return"
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
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "else"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
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
              children: "return"
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
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
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
              children: "else"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
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
              children: "return"
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
                color: "#81A1C1"
              },
              children: ";"
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
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// [1,2,3,5,6,40]"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//简写"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
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
              children: "a"
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
              children: "b"
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
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
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
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "降序",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#降序",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "降序"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "原理和升序同理"
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
              children: "arr"
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
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "40"
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
              children: "5"
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
              children: "2"
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
              children: "3"
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
              children: "1"
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
              children: "6"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
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
              children: "a"
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
              children: "b"
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
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
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
              children: "return"
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
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "else"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
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
              children: "return"
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
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
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
              children: "else"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
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
              children: "return"
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
                color: "#81A1C1"
              },
              children: ";"
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
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// [ 40, 6, 5, 3, 2, 1 ]"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//简写"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
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
              children: "a"
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
              children: "b"
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
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
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
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "sort源码原理",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#sort源码原理",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "sort源码原理"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "在v8源码sort部分中，对于需要排序的元素个数n，具体排序策略有几下中情形："
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "当 n<=10 时，采用插入排序；"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "当 n>10 时，采用三路快速排序；"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "10< n <=1000，采用中位数作为哨兵元素；"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "n>1000，每隔 200~215 个元素挑出一个元素，放到一个新数组中，然后对它排序，找到中间位置的数，以此作为中位数。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "sort的其他语法",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#sort的其他语法",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "sort的其他语法"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "将数组的奇数和偶数分离",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#将数组的奇数和偶数分离",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "将数组的奇数和偶数分离"]
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
              children: "arr"
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
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
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
              children: "3"
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
              children: "1"
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
              children: "2"
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
              children: "5"
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
              children: "1"
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
              children: "2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
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
              children: "a"
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
              children: "b"
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
                color: "#81A1C1"
              },
              children: "if"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "%"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=="
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
                color: "#D8DEE9FF"
              },
              children: ") "
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
                color: "#81A1C1"
              },
              children: "-"
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
                color: "#81A1C1"
              },
              children: ";"
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
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//[1, 5, 1, 3, 2, 2, 2]"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "打乱数组",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#打乱数组",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "打乱数组"]
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
              children: "arr"
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
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
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
              children: "2"
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
              children: "3"
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
              children: "4"
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
              children: "5"
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
              children: "6"
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
              children: "7"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "sort"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
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
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
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
              children: "b"
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
              children: "Math"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "random"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
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
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//Math.random()方法在(0,1)开区间随机取值"
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
                color: "#81A1C1"
              },
              children: ";"
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
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//[2, 1, 3, 7, 5, 4, 6]"
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
