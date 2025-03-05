import { j as jsxRuntimeExports } from "./client-entry-Bqu_erpz.js";
const frontmatter = {
  "title": "HTTP",
  "categories": "笔记",
  "date": "2022-07-15 10:00:00",
  "tags": ["笔记", "HTTP"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/25.jpg"
};
const mdInfo = "HTTP起源HTTP起源于20世纪90年代初，由英国物理学家蒂姆·伯纳斯-李（Tim Berners-Lee）和他的团队在欧洲核子研究组织（CERN）开发出来。他们的目标是创建一种简单、通用的协议，使不同的计算机和系统可以互相通信和交换信息。最初的HTTP版本是HTTP/0.9，它非常简单，只支持获";
const toc = [{
  "id": "http起源",
  "text": "HTTP起源",
  "depth": 1
}, {
  "id": "http是什么",
  "text": "HTTP是什么？",
  "depth": 1
}, {
  "id": "http报文",
  "text": "HTTP报文",
  "depth": 1
}, {
  "id": "请求报文",
  "text": "请求报文",
  "depth": 2
}, {
  "id": "响应报文",
  "text": "响应报文",
  "depth": 2
}, {
  "id": "请求方法",
  "text": "请求方法",
  "depth": 2
}, {
  "id": "http状态码",
  "text": "HTTP状态码",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "http起源",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#http起源",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "HTTP起源"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["HTTP起源于20世纪90年代初，由英国物理学家蒂姆·伯纳斯-李（", jsxRuntimeExports.jsx(_components.code, {
          children: "Tim Berners-Lee"
        }), "）和他的团队在欧洲核子研究组织（CERN）开发出来。他们的目标是创建一种简单、通用的协议，使不同的计算机和系统可以", jsxRuntimeExports.jsx(_components.strong, {
          children: "互相通信"
        }), "和", jsxRuntimeExports.jsx(_components.strong, {
          children: "交换信息"
        }), "。", jsxRuntimeExports.jsx(_components.br, {}), "\n最初的HTTP版本是", jsxRuntimeExports.jsx(_components.code, {
          children: "HTTP/0.9"
        }), "，它非常简单，只支持获取HTML文档，并且没有头部信息和请求方法。随着互联网的发展，HTTP逐渐演化并推出了更高版本，如", jsxRuntimeExports.jsx(_components.code, {
          children: "HTTP/1.0"
        }), "、", jsxRuntimeExports.jsx(_components.code, {
          children: "HTTP/1.1"
        }), "和", jsxRuntimeExports.jsx(_components.code, {
          children: "HTTP/2"
        }), "。", jsxRuntimeExports.jsx(_components.br, {}), "\nHTTP协议的广泛应用使得互联网的发展变得更加便捷和高效，它成为了", jsxRuntimeExports.jsx(_components.strong, {
          children: "访问网页"
        }), "、", jsxRuntimeExports.jsx(_components.strong, {
          children: "发送电子邮件"
        }), "、", jsxRuntimeExports.jsx(_components.strong, {
          children: "下载文件"
        }), "等各种互联网活动的", jsxRuntimeExports.jsx(_components.strong, {
          children: "基础"
        }), "。"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "http是什么",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#http是什么",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "HTTP是什么？"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["全称：超文本传输协议（", jsxRuntimeExports.jsx(_components.code, {
        children: "HyperText Transfer Protocol"
      }), "）"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["功能：HTTP是一种用于在", jsxRuntimeExports.jsx(_components.strong, {
        children: "客户端"
      }), "和", jsxRuntimeExports.jsx(_components.strong, {
        children: "服务器"
      }), "之间传输超文本的协议。它是互联网数据传输的基础，使得互联网上的网页浏览、文件传输等活动变得便捷和高效。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["工作原理: ", jsxRuntimeExports.jsx(_components.strong, {
        children: "通过客户端和服务器之间的请求和响应来传输信息"
      }), "。客户端发送HTTP请求给服务器，服务器接收到请求后，根据请求的内容做出相应的动作，并将结果以HTTP响应的形式返回给客户端。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "http报文",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#http报文",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "HTTP报文"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "概念：用于HTTP协议交互的信息被称为HTTP报文。客户端的HTTP报文叫请求报文，服务端的HTTP报文叫响应报文。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "请求报文",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#请求报文",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "请求报文"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "HTTP请求报文由四个部分组成：请求行、请求头、空行、请求体。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["请求行：请求行由", jsxRuntimeExports.jsx(_components.code, {
          children: "请求方法字段"
        }), "、", jsxRuntimeExports.jsx(_components.code, {
          children: "URL字段"
        }), "和", jsxRuntimeExports.jsx(_components.code, {
          children: "HTTP协议版本字段"
        }), "3个字段组成，它们用空格分隔。比如 ", jsxRuntimeExports.jsx(_components.code, {
          children: "Post /form/login HTTP/1.1"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["请求头：由", jsxRuntimeExports.jsx(_components.code, {
          children: "key: value"
        }), "值的方式构成，告诉服务器客户端需要哪些内容，什么类型。"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "空行：它的作用是通过一个空行，告诉服务器请求头部到此为止。"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["请求体：若方法字段是", jsxRuntimeExports.jsx(_components.code, {
          children: "GET"
        }), "，则此项为空，没有数据。若方法字段是", jsxRuntimeExports.jsx(_components.code, {
          children: "POST"
        }), ",则通常来说此处放置的就是要提交的数据"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3525343851e42dfa8fe1d2cca69d315~tplv-k3u1fbpfcp-watermark.image?",
        alt: "1.png",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "响应报文",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#响应报文",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "响应报文"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "HTTP响应报文也由四部分组成：状态行、响应头、空行、响应体。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["响应行：响应行一般由", jsxRuntimeExports.jsx(_components.code, {
          children: "协议版本"
        }), "、", jsxRuntimeExports.jsx(_components.code, {
          children: "状态码"
        }), "及其", jsxRuntimeExports.jsx(_components.code, {
          children: "描述"
        }), "组成 比如 ", jsxRuntimeExports.jsx(_components.code, {
          children: "HTTP/1.1 200 OK"
        })]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "响应头：响应头用于描述服务器的基本信息，以及数据的描述，服务器通过这些数据的描述信息，可以通知客户端如何处理待会它回送的数据。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "空行：它的作用是通过一个空行，告诉服务器请求头部到此为止。"
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["响应体：响应体就是响应的消息体，如果是纯数据就是返回纯数据，如果请求的是HTML页面，那么返回的就是HTML代码，如果是JSON就是JSON数据，如此之类。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
          src: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/915406f07df44af88764108ad1bd4e1d~tplv-k3u1fbpfcp-watermark.image?",
          alt: "2.png",
          className: "article-img"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "请求方法",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#请求方法",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "请求方法"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "HTTP请求方法定义了客户端对服务器资源的操作方式。以下是常见的HTTP请求方法："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "方法"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "描述"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "GET"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用于从服务器获取资源，通常用于获取页面内容或数据。GET请求可以通过URL参数传递数据，但数据会明文显示在URL中。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "POST"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用于向服务器提交数据，通常用于发送表单数据或上传文件等。POST请求将数据放在请求主体中，而不是URL参数中，因此更适合处理敏感信息。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "PUT"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用于向服务器存储一个资源，可以替换现有资源或在指定位置创建新资源。PUT请求需要提供完整的资源表示，并将其放置在指定的URL位置。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "DELETE"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用于从服务器删除指定的资源。DELETE请求会删除指定URL位置上的资源。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "HEAD"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "类似于GET请求，但只返回响应头部，不返回实际的响应主体。HEAD请求常用于获取资源的元数据或检查资源是否存在。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "OPTIONS"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用于获取服务器支持的请求方法列表，也可以查询服务器的功能和配置选项。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "PATCH"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用于部分更新服务器上的资源。PATCH请求包含要应用于资源的更改内容，而不是替换整个资源。"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["除了上述常见的HTTP请求方法，还有一些不太常见的方法，如", jsxRuntimeExports.jsx(_components.code, {
        children: "TRACE"
      }), "、", jsxRuntimeExports.jsx(_components.code, {
        children: "CONNECT"
      }), "等。这些方法在实际的前端开发中使用较少，更多地被用于特定的场景和协议扩展。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["在前端开发中，通常使用", jsxRuntimeExports.jsx(_components.code, {
        children: "GET"
      }), "和", jsxRuntimeExports.jsx(_components.code, {
        children: "POST"
      }), "方法最为频繁。", jsxRuntimeExports.jsx(_components.code, {
        children: "GET"
      }), "用于从服务器获取数据或页面内容，而", jsxRuntimeExports.jsx(_components.code, {
        children: "POST"
      }), "则用于向服务器提交数据。使用适当的请求方法可以确保与服务器正确交互，并符合HTTP协议的规范。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "http状态码",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#http状态码",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "HTTP状态码"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "概念：HTTP状态码是服务器在接收到客户端的请求后，返回给客户端的响应中的一个数字代码。这个状态码提供了关于请求处理结果的信息，帮助客户端了解请求的状态和如何进一步处理。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "以下是常见的HTTP状态码、含义及其描述："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "状态码"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "含义"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "描述"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1xx"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "信息性状态码"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "表示请求已被接受，需要进一步处理。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Continue"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "服务器正在处理请求，客户端应继续发送剩余部分。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "101"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Switching Protocols"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "服务器已根据客户端的请求切换协议。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2xx"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "成功状态码"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "表示请求已成功接收、理解和处理。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "200"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "OK"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求成功，并返回所请求的数据。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "201"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Created"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求已成功处理，并创建了新的资源。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "204"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No Content"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求成功处理，但没有返回任何内容。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3xx"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "重定向状态码"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "表示请求需要进一步处理以完成。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "301"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moved Permanently"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求的资源已永久移动到新位置。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "302"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Found"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求的资源临时移动到不同的位置。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "304"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Not Modified"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "客户端缓存未过期，可以使用本地缓存的版本。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4xx"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "客户端错误状态码"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "表示客户端发送的请求有误或无法完成。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "400"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Bad Request"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求语法错误，服务器无法理解。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "401"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unauthorized"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求需要身份验证。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "404"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Not Found"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "请求的资源不存在。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5xx"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: jsxRuntimeExports.jsx(_components.strong, {
              children: "服务器错误状态码"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "表示服务器在处理请求时发生了错误。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "500"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Internal Server Error"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "服务器内部错误，无法完成请求。"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "503"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Service Unavailable"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "服务器暂时无法处理请求，通常是由于维护或过载。"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "这个表格将HTTP状态码按照类别进行了分组，并列出了常见的状态码与其含义。使用这个表格，你可以更方便地查找和记忆不同状态码的含义，以便在前端开发中进行正确的处理和适当的用户反馈。"
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
