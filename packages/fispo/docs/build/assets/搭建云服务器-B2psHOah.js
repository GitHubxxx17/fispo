import { j as jsxRuntimeExports } from "./client-entry-C5tUW8zu.js";
const frontmatter = {
  "title": "搭建云服务器",
  "categories": "项目部署",
  "date": "2023-07-14 20:00:00",
  "tags": ["项目部署"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/31.jpg"
};
const mdInfo = '1.注册阿里云账号<a href="https://www.aliyun.com/" target="_blank">阿里云官网</a>在<a href="https://developer.aliyun.com/plan/student">高校计划</a>进行学生认证，可以免费领取最高7个月的服务';
const toc = [{
  "id": "1注册阿里云账号-1",
  "text": "1.注册阿里云账号",
  "depth": 1
}, {
  "id": "2-安装centos宝塔面板-1",
  "text": "2. 安装CentOS宝塔面板",
  "depth": 1
}, {
  "id": "3-设置安全组-1",
  "text": "3. 设置安全组",
  "depth": 1
}, {
  "id": "4-浏览器访问宝塔面板-1",
  "text": "4. 浏览器访问宝塔面板",
  "depth": 1
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    h1: "h1",
    img: "img",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "1注册阿里云账号",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#1注册阿里云账号",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "1.注册阿里云账号"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: [jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.aliyun.com/",
          target: "_blank",
          children: "阿里云官网"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n在", jsxRuntimeExports.jsx(_components.a, {
          href: "https://developer.aliyun.com/plan/student",
          children: "高校计划"
        }), "进行学生认证，可以免费领取最高7个月的服务器", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
          src: "http://GitHubxxx17.github.io/img/server/1.png",
          alt: "",
          className: "article-img"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["修改以下两项", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/2.png",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n购买（{% del 白嫖%}）成功后，重置实例密码然后打开远程连接", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/3.png",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n通过Workbench远程连接，输入实例密码进入操作界面", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/4.png",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "2-安装centos宝塔面板",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#2-安装centos宝塔面板",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "2. 安装CentOS宝塔面板"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["进入", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.bt.cn/new/index.html",
        children: "宝塔"
      }), "官网注册账号，登录后进入后台>安装宝塔", jsxRuntimeExports.jsx(_components.br, {}), "\n将该命令复制粘贴到Workbench远程连接的面板上，并执行（因为我一开始选择的是centOS系统，所以复制第一行命令）", jsxRuntimeExports.jsx(_components.br, {}), "\nps:我一开始是通过下方的在线一键快速安装宝塔,但安装过程中卡住了，只能通过上面的方法", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/5.png",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["安装结束后,这里会显示宝塔后台地址和账号密码，把这部分截图保存", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/6.png",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "3-设置安全组",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#3-设置安全组",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "3. 设置安全组"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["在完成以上操作之后你会发现访问不了该网址，是因为刚装的系统没有放行8888端口，面板后台无法打开。所以我们得先配置一下安全组。", jsxRuntimeExports.jsx(_components.br, {}), "\n进入修改安全组界面", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/7.png",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n点击快速添加", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/8.png",
        alt: "",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n选中这几项完成配置", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/9.png",
        alt: "",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "4-浏览器访问宝塔面板",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#4-浏览器访问宝塔面板",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "4. 浏览器访问宝塔面板"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["然后我们再打开的宝塔后台地址网址就能正常啦", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "http://GitHubxxx17.github.io/img/server/10.png",
        alt: "",
        className: "article-img"
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
