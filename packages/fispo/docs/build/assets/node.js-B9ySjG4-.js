import { j as jsxRuntimeExports } from "./client-entry-O-7PYOJQ.js";
const frontmatter = {
  "title": "node.js",
  "categories": "笔记",
  "date": "2022-09-25 00:00:00",
  "tags": ["笔记"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/12.jpg"
};
const mdInfo = "初识node.js与内置模块回顾与思考为什么JavaScript可以再浏览器中被执行？待执行的JS代码JS解析引擎不同的浏览器使用不同的JS解析引擎为什么JS可以操作DOM还有BOM?每个浏览器中内置了DOM，BOM这样的API函数，因此浏览器中的javaScript才可以调用它们浏览器中JS的运行";
const toc = [{
  "id": "初识nodejs与内置模块",
  "text": "初识node.js与内置模块",
  "depth": 1
}, {
  "id": "回顾与思考",
  "text": "回顾与思考",
  "depth": 2
}, {
  "id": "nodejs简介",
  "text": "Node.js简介",
  "depth": 2
}, {
  "id": "终端中的快捷键",
  "text": "终端中的快捷键",
  "depth": 2
}, {
  "id": "fs文件系统模块",
  "text": "fs文件系统模块",
  "depth": 1
}, {
  "id": "什么是文件系统模块",
  "text": "什么是文件系统模块",
  "depth": 2
}, {
  "id": "读取指定文件中的内容",
  "text": "读取指定文件中的内容",
  "depth": 2
}, {
  "id": "判断文件是否读取成功",
  "text": "判断文件是否读取成功",
  "depth": 3
}, {
  "id": "向指定的文件中写入内容",
  "text": "向指定的文件中写入内容",
  "depth": 2
}, {
  "id": "判断文件是否读取成功-1",
  "text": "判断文件是否读取成功",
  "depth": 3
}, {
  "id": "案例考试成绩整理",
  "text": "案例：考试成绩整理",
  "depth": 2
}, {
  "id": "path路径模块",
  "text": "path路径模块",
  "depth": 1
}, {
  "id": "路径问题",
  "text": "路径问题",
  "depth": 2
}, {
  "id": "pathjoin语法格式",
  "text": "path.join()语法格式",
  "depth": 2
}, {
  "id": "pathbasename",
  "text": "path.basename()",
  "depth": 2
}, {
  "id": "pathextname",
  "text": "path.extname()",
  "depth": 2
}, {
  "id": "案例模块化html",
  "text": "案例：模块化html",
  "depth": 2
}, {
  "id": "http模块",
  "text": "http模块",
  "depth": 1
}, {
  "id": "基础概念",
  "text": "基础概念",
  "depth": 2
}, {
  "id": "创建最基本的web服务器",
  "text": "创建最基本的web服务器",
  "depth": 2
}, {
  "id": "模块化",
  "text": "模块化",
  "depth": 1
}, {
  "id": "模块化的基本概念",
  "text": "模块化的基本概念",
  "depth": 2
}, {
  "id": "nodejs中的模块化",
  "text": "Node.js中的模块化",
  "depth": 2
}, {
  "id": "模块化规范",
  "text": "模块化规范",
  "depth": 2
}, {
  "id": "npm与包",
  "text": "npm与包",
  "depth": 2
}, {
  "id": "包的基本概念",
  "text": "包的基本概念",
  "depth": 3
}, {
  "id": "包的命令",
  "text": "包的命令",
  "depth": 3
}, {
  "id": "规范的包结构",
  "text": "规范的包结构",
  "depth": 3
}, {
  "id": "模块的加载机制",
  "text": "模块的加载机制",
  "depth": 2
}, {
  "id": "目录作为模块",
  "text": "目录作为模块",
  "depth": 3
}, {
  "id": "express",
  "text": "express",
  "depth": 1
}, {
  "id": "express简介",
  "text": "express简介",
  "depth": 2
}, {
  "id": "express的使用",
  "text": "express的使用",
  "depth": 2
}, {
  "id": "托管静态资源",
  "text": "托管静态资源",
  "depth": 2
}, {
  "id": "express-路由",
  "text": "express 路由",
  "depth": 1
}, {
  "id": "路由的概念",
  "text": "路由的概念",
  "depth": 2
}, {
  "id": "express中路由的例子",
  "text": "express中路由的例子",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "初识nodejs与内置模块",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#初识nodejs与内置模块",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "初识node.js与内置模块"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "回顾与思考",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#回顾与思考",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "回顾与思考"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["为什么JavaScript可以再浏览器中被执行？", jsxRuntimeExports.jsx(_components.br, {}), "\n待执行的JS代码", jsxRuntimeExports.jsx(_components.br, {}), "\nJS解析引擎", jsxRuntimeExports.jsx(_components.br, {}), "\n不同的浏览器使用不同的JS解析引擎"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["为什么JS可以操作DOM还有BOM?", jsxRuntimeExports.jsx(_components.br, {}), "\n每个浏览器中内置了DOM，BOM这样的API函数，因此浏览器中的javaScript才可以调用它们"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["浏览器中JS的运行环境", jsxRuntimeExports.jsx(_components.br, {}), "\n运行环境是指代码正常运行所需要的必要环境", jsxRuntimeExports.jsx(_components.br, {}), "\nChrome浏览器运行环境：", jsxRuntimeExports.jsx(_components.br, {}), '\nV8引擎,"v8引擎负责解析和执行js代码"和', jsxRuntimeExports.jsx(_components.br, {}), '\n内置API函数,"内置API是由运行环境提供的特殊接口，只能在所属的运行环境中被调用",']
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "nodejs简介",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#nodejs简介",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Node.js简介"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["什么是Node.js?", jsxRuntimeExports.jsx(_components.br, {}), "\nNode.js是一个基于Chrome V8引擎的JS运行环境"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Node.js中的JS运行环境", jsxRuntimeExports.jsx(_components.br, {}), "\nV8引擎和内置API函数"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["浏览器是JS的前端运行环境", jsxRuntimeExports.jsx(_components.br, {}), "\nNode.js是Js的后端运行环境", jsxRuntimeExports.jsx(_components.br, {}), "\nNode.js中无法调用DOM和BOM等浏览器内置API"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      start: "3",
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Node.js可以做什么？", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
          src: "http://GitHubxxx17.github.io/img/node.js/1.jpg",
          alt: "",
          className: "article-img"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "终端中的快捷键",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#终端中的快捷键",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "终端中的快捷键"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/2.jpg",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "fs文件系统模块",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#fs文件系统模块",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "fs文件系统模块"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "什么是文件系统模块",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#什么是文件系统模块",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "什么是文件系统模块"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "fs模块是Node.js官方提供的、用来操作文件的模块，它提供了一系列的方法和属性，用来满足用户对文件的操作需求"
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "读取指定文件中的内容",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#读取指定文件中的内容",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "读取指定文件中的内容"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "fs.readFile(path[,options],callback)\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数1：必选参数，字符串，表示文件的路径"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数2：可选参数，表示以什么编码格式来读取文件"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "// 1.导入fs模块,来操作文件\r\nconst fs = require('fs')\r\n// 2.调用fs.readFile()方法读取文件\r\nfs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {\r\n    // 打印失败的结果，如果读取成功，则err的值为null\r\n    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined\r\n    console.log(err)\r\n    // 打印成功的结果\r\n    console.log(dataStr)\r\n\r\n})\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "判断文件是否读取成功",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#判断文件是否读取成功",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "判断文件是否读取成功"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "// 1.导入fs模块,来操作文件\r\nconst fs = require('fs')\r\n// 2.调用fs.readFile()方法读取文件\r\nfs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {\r\n    // 打印失败的结果，如果读取成功，则err的值为null\r\n    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined\r\n    if (err) {\r\n        return console.log('读取文件失败' + err.message)\r\n    }\r\n    console.log('读取文件成功' + dataStr)\r\n\r\n})\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "向指定的文件中写入内容",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#向指定的文件中写入内容",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "向指定的文件中写入内容"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "fs.writeFile(file, data[, options], callback)\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数1：必选参数，字符串，表示文件的存放路径"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数2：必选参数，表示要写入的内容"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数3：可选参数，表示以什么编码格式来读取文件，默认值是utf8"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "参数4：必选参数，文件写入完成后的回调函数。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "判断文件是否读取成功-1",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#判断文件是否读取成功-1",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "判断文件是否读取成功"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "// 1.导入fs模块,来操作文件\r\nconst fs = require('fs')\r\n// 2.调用fs.readFile()方法读取文件\r\nfs.writeFile('./file/1.txt', 'utf8', function (err, dataStr) {\r\n    // 打印失败的结果，如果读取成功，则err的值为null\r\n    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined\r\n    if (err) {\r\n        return console.log('读取文件失败' + err.message)\r\n    }\r\n    console.log('读取文件成功' + dataStr)\r\n\r\n})\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "案例考试成绩整理",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#案例考试成绩整理",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "案例：考试成绩整理"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/3.jpg",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "// 导入fs模块\r\nconst fs = require('fs')\r\n// 2.调用fs.readFile()方法读取文件\r\nfs.readFile('./file/2.txt', 'utf8', function (err, dataStr) {\r\n    // 打印失败的结果，如果读取成功，则err的值为null\r\n    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined\r\n    // 3.判断文件是否读取成功\r\n    if (err) {\r\n        return console.log('读取文件失败' + err.message)\r\n    }\r\n    console.log('读取文件成功' + dataStr)\r\n\r\n\r\n    // 4.1先把成绩的数据，按照空格进行分割\r\n    const arrOld = dataStr.split(' ')\r\n    // 4.2循环分割后的数组，对每一项的数据，进行字符串的替换操作\r\n    const arrNew = []\r\n    arrOld.forEach(item => {\r\n        arrNew.push(item.replace('=', ':'))\r\n    })\r\n    console.log(arrNew)\r\n    // 4.3把新数组中的每一项，进行合并，得到新的字符串\r\n    const newStr = arrNew.join('\\n\\r')\r\n    console.log(newStr)\r\n    // 5.调用fs.writeFile()方法，把处理完毕的成绩，写入到新文件中\r\n    fs.writeFile('./file/成绩ok.txt', newStr, function (err) {\r\n        if (err) {\r\n            return console.log('写入文件失败！' + err.message)\r\n        }\r\n        console.log('写入文件成功！')\r\n    })\r\n})\r\n\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "path路径模块",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#path路径模块",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "path路径模块"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "const path=require('path')\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "路径问题",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#路径问题",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "路径问题"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/4.jpg",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "pathjoin语法格式",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#pathjoin语法格式",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "path.join()语法格式"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "使用path.join方法，可以把多个路径片段拼接为较为完整的路径字符串"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "path.join([...paths])\r\npath.join(__dirname,[...paths])\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "pathbasename",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#pathbasename",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "path.basename()"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "使用该方法可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "path.basename(path[,ext])\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["参数：path:必选参数，表示一个路径的字符串", jsxRuntimeExports.jsx(_components.br, {}), "\next可选参数，表示文件拓展名", jsxRuntimeExports.jsx(_components.br, {}), "\n返回：表示路径中的最后一部分"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "pathextname",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#pathextname",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "path.extname()"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "使用该方法可以获取路径中的拓展名部分，语法格式如下"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "path.extname(path)\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "案例模块化html",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#案例模块化html",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "案例：模块化html"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: `const fs = require('fs');\r
\r
const path = require('path');\r
\r
const regStyle = /<style>[\\s\\S]*<\\/style>/\r
const regScript = /<script>[\\s\\S]*<\\/script>/\r
\r
fs.readFile(path.join(__dirname,'./login.html'),'utf8',(err,dataStr) => {\r
    if(err){\r
        return console.log('读取文件失败'+err.message);\r
    }\r
    resolveCSS(dataStr);\r
    resolveScript(dataStr);\r
    resolveHTML(dataStr)\r
})\r
\r
// 处理css样式\r
function resolveCSS(htmlStr){\r
    //使用正则表达式提取<style>\r
    const r1 = regStyle.exec(htmlStr);\r
    //将提取出来的字符串进行字符串的replace替换操作\r
    const newcss = r1[0].replace('<style>','').replace('</style>','');\r
    //将提取的样式写入login.css中\r
    fs.writeFile(path.join(__dirname,'./login/login.css'),newcss,(err) => {\r
        if(err){\r
            return console.log('css文件写入失败'+err.message);\r
        }\r
        console.log('css文件写入成功');\r
    })\r
}\r
\r
// 处理script样式\r
function resolveScript(htmlStr){\r
    //使用正则表达式提取<script>\r
    const r1 = regScript.exec(htmlStr);\r
    //将提取出来的字符串进行字符串的replace替换操作\r
    const newscript = r1[0].replace('<script>','').replace('<\/script>','');\r
    //将提取的样式写入login.js中\r
    fs.writeFile(path.join(__dirname,'./login/login.js'),newscript,(err) => {\r
        if(err){\r
            return console.log('js文件写入失败'+err.message);\r
        }\r
        console.log('js文件写入成功');\r
    })\r
}\r
\r
\r
// 处理html样式\r
function resolveHTML(htmlStr){\r
    //将提取出来的字符串进行字符串的replace替换操作\r
    const newhtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./login.css">').replace(regScript,'<script src="./login.js"><\/script>');\r
    //将提取的样式写入login.html中\r
    fs.writeFile(path.join(__dirname,'./login/login.html'),newhtml,(err) => {\r
        if(err){\r
            return console.log('html文件写入失败'+err.message);\r
        }\r
        console.log('html文件写入成功');\r
    })\r
}
`
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "http模块",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#http模块",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "http模块"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "基础概念",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#基础概念",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "基础概念"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["什么是客户端，什么是服务器？", jsxRuntimeExports.jsx(_components.br, {}), "\n在网络节点中，负责消费资源的电脑，叫做客户端。", jsxRuntimeExports.jsx(_components.br, {}), "\n负责对外提供网络资源的电脑，叫做服务器。", jsxRuntimeExports.jsx(_components.br, {}), "\nHttp模块是Node.js官方提供的，用来创建web服务器的模块。通过http模块提供的Http.createServer()方法，就能方便的把一台普通电脑，变成一台web服务器，从而对外提供Web资源服务。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "const http=require('http')\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/5.jpg",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/6.jpg",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/7.jpg",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/8.jpg",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "创建最基本的web服务器",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#创建最基本的web服务器",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "创建最基本的web服务器"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "const http = require('http');\r\nconst server = http.createServer();\r\n\r\nserver.on('request',(req,res) => {\r\n    //获取请求的url地址\r\n    const url = req.url;\r\n    //设置默认的响应内容为404 Not found\r\n    let content = '<h1>404 Not found</h1>';\r\n    //判断用户请求的是否为/或/index.html首页\r\n    //判断用户请求去的是否为/about.html关于页面\r\n    if(url === '/' || url === '/index.html'){\r\n        content = '<h1>首页</h1>'\r\n    }else if(url === 'about.html'){\r\n        content = '<h1>关于页面</h1>'\r\n    }\r\n    // 设置Content-Type响应头，解决中文乱码问题\r\n    res.setHeader('Content-Type','text/html;charset=utf-8')\r\n    // 将内容相应给客户端\r\n    res.end(content);\r\n})\r\n\r\nserver.listen(80,() => {\r\n    console.log('server run at http://192.168.43.169');\r\n})\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "模块化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#模块化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "模块化"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "模块化的基本概念",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#模块化的基本概念",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "模块化的基本概念"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["什么是模块化？", jsxRuntimeExports.jsx(_components.br, {}), "\n模块化是指解决一个复杂问题时，自顶向下逐层把系统划分为若干模块的过程。对于整个系统来说，模块是可组合、分解和变换的单元", jsxRuntimeExports.jsx(_components.br, {}), "\n编程领域中的模块化：就是遵守固定的规则，把一个大文件拆成独立并且互相依赖的多个小模块。", jsxRuntimeExports.jsx(_components.br, {}), "\n模块化规范", jsxRuntimeExports.jsx(_components.br, {}), "\n就是对代码进行模块化的拆分与组合时，需要遵守的规则", jsxRuntimeExports.jsx(_components.br, {}), "\n使用什么样的语法格式来引用模块", jsxRuntimeExports.jsx(_components.br, {}), "\n在模块中使用什么样的语法格式向外暴露成员"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "nodejs中的模块化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#nodejs中的模块化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Node.js中的模块化"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "根据模块来源的不同，将模块分为了三大类，分别是："
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "内置模块（fs，path，http）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "自定义模块（用户创建的每个Js文件）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "第三方模块（由第三方开发出来的模块）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["什么是模块作用域？", jsxRuntimeExports.jsx(_components.br, {}), "\n和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域", jsxRuntimeExports.jsx(_components.br, {}), "\n防止了全局变量污染的问题", jsxRuntimeExports.jsx(_components.br, {}), "\n向外共享模块作用域中的成员", jsxRuntimeExports.jsx(_components.br, {}), "\nmodule对象", jsxRuntimeExports.jsx(_components.br, {}), "\n在每个js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息", jsxRuntimeExports.jsx(_components.br, {}), "\nmodule.export对象", jsxRuntimeExports.jsx(_components.br, {}), "\n可以使用该对象将模块内的成员共享出去，供外界使用。外界用require方法导入自定义模块时，得到的就是Module.exports所指的对象", jsxRuntimeExports.jsx(_components.br, {}), "\nexports对象", jsxRuntimeExports.jsx(_components.br, {}), "\n由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象，最终共享的结果，还是以module.exports指向的结果为准", jsxRuntimeExports.jsx(_components.br, {}), "\nexports和module.exports的使用误区"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "模块化规范",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#模块化规范",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "模块化规范"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/9.jpg",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "npm与包",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#npm与包",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "npm与包"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "包的基本概念",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#包的基本概念",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "包的基本概念"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Node.js中的第三方模块又叫做包", jsxRuntimeExports.jsx(_components.br, {}), "\n从哪里搜索包：全球最大的包共享平台", jsxRuntimeExports.jsx(_components.br, {}), "\n从哪里下载包：下载包的服务器", jsxRuntimeExports.jsx(_components.br, {}), "\n如何下载包？npm包管理工具"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "包的命令",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#包的命令",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "包的命令"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "//安装包\r\nnpm i 包的完整名称\r\n\r\n//安装指定版本的包\r\nnpm i 包的完整名称@2.22.2\r\n\r\n//npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置文件\r\nnpm init -y\r\n\r\n//执行npm install 命令时，npm 包管理工具会先读取package.json中的dependencies节点\r\n//读取到记录的所有依赖包名称和版本号之后，包管理工具会把这些包一次性的下载到项目中去\r\nnpm install \r\n\r\n//卸载包\r\nnpm uninstall 包的完整名称\r\n\r\n//解决下包速度慢的问题\r\n//淘宝NPM镜像服务器\r\n//镜像：是一种文件存储形式每一个磁盘上的数据在另一个磁盘上存在完全相同的副本即为镜像\r\n//切换npm的下包镜像源。下包的镜像源，指的就是下包的服务器地址\r\nnpm config get registry\r\nnpm config set registry=https://registry.npm.taobao.org/\r\n\r\n//包的分类\r\nnpm i 包名-D //开发依赖包（会被记录到devDependencies节点下）\r\nnpm i 包名//核心依赖包（会被记录到）\r\n\r\n//全局包\r\nnpm i包名-g //全局安装指定的包\r\nnpm uninstall 包名-g//卸载全局安装的包\r\n\r\n//i5ting_toc是一个可以把md文档转为Html页面的小工具\r\n//将i5ting_toc安装为全局包\r\nnpm install -g i5ting_toc\r\n//调用,轻松实现md转换为html的功能\r\ni5ting_toc -f 要转换的md文件路径 -o\r\n\r\n\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["初次装包完成后，在项目文件夹下多一个叫做node_modules的文件夹和package-lock.json的配置文件，其中node_modules文件夹用来存放所有已安装到项目中的包。require（）导入第三方包时，就是从这个目录中查找并加载包", jsxRuntimeExports.jsx(_components.br, {}), "\npackage-lock.json配置文件用来记录node_modules目录下的每一个包的下载信息，例如包的版本号，下载地址等"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["安装指定版本的包：", jsxRuntimeExports.jsx(_components.br, {}), "\n默认情况下，会自定安装最新版本的包，如果需要安装指定版本的包，可以在包名之后，通过@符号指定具体的版本"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["包的语义化版本规范", jsxRuntimeExports.jsx(_components.br, {}), "\n包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0", jsxRuntimeExports.jsx(_components.br, {}), "\n其中每一位数字所代表的含义如下：第一位:大版本", jsxRuntimeExports.jsx(_components.br, {}), "\n第二位：功能版本 第三位：bug修复版本", jsxRuntimeExports.jsx(_components.br, {}), "\n只要前面的版本号增长了，则后面的版本号归零"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "规范的包结构",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#规范的包结构",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "规范的包结构"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/10.jpg",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "模块的加载机制",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#模块的加载机制",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "模块的加载机制"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["优先从缓存中加载", jsxRuntimeExports.jsx(_components.br, {}), "\n模块在第一次被加载后会被缓存。这也意味着多次调用require()不会导致模块的代码被多次执行。注意：不论是内置模块，自定义模块，还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "tabs 加载机制"
    }), "\n", "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "内置模块加载优先级最高。"
    }), "\n", "\n", "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["使用require（）加载自定义模块时，必须指定以./或…/开头的路径标识符。在加载自定义模块时，如果没有指定的话，则node模块就会把他当成内置模块或者第三方模块进行加载", jsxRuntimeExports.jsx(_components.br, {}), "\n同时，在使用require（）导入自定义模块时，如果省略了文件的拓展名，则node.js就会按顺序分别尝试加载以下的文件"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "按照确切的文件名进行加载"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "补全.js拓展名进行加载"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "补全.json拓展名进行加载"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "补全.node拓展名进行加载"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "加载失败，终端报错"
      }), "\n"]
    }), "\n", "\n", "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "如果传递给require()的模块标识符不是一个内置模块，也没有./等等开题，则Node.js会从当前模块的父目录开始，尝试从.node_modules文件夹中加载第三方模块。如果没有找到第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录"
    }), "\n", "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "目录作为模块",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#目录作为模块",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "目录作为模块"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/11.jpg",
        alt: "",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "express",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#express",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "express"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "express简介",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#express简介",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "express简介"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Express是基于Node.js平台，快速，开放，极简的Web开发框架", jsxRuntimeExports.jsx(_components.br, {}), "\n使用Express,我们可以方便、快速地创建web网站的服务器和api接口的服务器"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "express的使用",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#express的使用",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "express的使用"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "//1.导入express\r\nconst express = require('express')\r\nconst res = require('express/lib/response')\r\n//2.创建web服务器\r\nconst app = express()\r\n//4.监听客户端的GET和POST请求，并向客户端响应具体的内容\r\napp.get('/user', () => {\r\n    //调用express提高的res.send()方法，向客户端响应一个json对象\r\n    res.send({ name: 'zs', age: 20, gender: '男' })\r\n})\r\napp.post('/user', (req, res) => {\r\n    //调用express提供的res.send()方法，向客户端响应一个文本字符串\r\n    res.send('请求成功')\r\n})\r\napp.get('/', (req, res) => {\r\n    //通过req.query可以获取到客户端发送过来的查询参数\r\n    //注意：在默认情况下，req.query是一个空对象\r\n    console.log(req.query)\r\n    res.send(req.query)\r\n\r\n})\r\n//url地址中，我们开业通过：参数名的形式，匹配动态参数值\r\napp.get('/user/:id', (req, res) => {\r\n    //req.params默认是一个空对象\r\n    //里面存放这通过：动态匹配到的参数值\r\n    console.log(req.params)\r\n    res.send(req.params)\r\n})\r\n//3.启动web服务器\r\napp.listen(80, () => {\r\n    console.log('express server running at http://127.0.0.1')\r\n})\n"
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "托管静态资源",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#托管静态资源",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "托管静态资源"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/12.jpg",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/13.jpg",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/node.js/14.jpg",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "express-路由",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#express-路由",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "express 路由"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "路由的概念",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#路由的概念",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "路由的概念"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["广义上来讲，路由就是映射关系", jsxRuntimeExports.jsx(_components.br, {}), "\n在Express中，路由指的是客户端请求与服务器处理函数之间的映射关系", jsxRuntimeExports.jsx(_components.br, {}), "\nExpress中的路由分三部分组成，分别是请求的类型，请求的URL地址，处理函数。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "express中路由的例子",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#express中路由的例子",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "express中路由的例子"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "//匹配GET请求，且请求URL为/\r\napp.get('/',function(req,res){\r\nres.send('Hello World!')\r\n})\r\n//匹配post请求，且请求URL为/\r\napp.post('/',function(req,res){\r\nres.send('Got a POST request')\r\n})\n"
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
