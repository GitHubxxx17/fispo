import{jsx as e,jsxs as r,Fragment as d}from"react/jsx-runtime";import{e as a}from"./vendor-CuygkBdc.js";import"react";const h={title:"建站"},p="安装环境准备在开始搭建Fispo博客系统前，请确保已完成以下工具的安装：Node.js运行环境要求版本：18.0.0及以上官方下载地址：Node.jsGit版本控制工具官方下载地址：GitMarkdown编辑器推荐使用：VSCode（需安装Markdown插件）其他支持 Markdown 语法的编辑",f=[{id:"安装",text:"安装",depth:1},{id:"环境准备",text:"环境准备",depth:2},{id:"安装-fispo-初始化工具",text:"安装 Fispo 初始化工具",depth:2},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"配置文件",text:"配置文件",depth:2},{id:"启动项目",text:"启动项目",depth:2}];function c(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...a(),...o.components},{CodeBlock:i}=n;return i||function(){throw new Error("Expected component `CodeBlock` to be defined: you likely forgot to import, pass, or provide it.")}(),r(d,{children:[r(n.h1,{id:"安装",children:[e(n.a,{className:"header-anchor",href:"#安装",children:e(n.span,{className:"icon icon-link"})}),"安装"]}),`
`,r(n.h2,{id:"环境准备",children:[e(n.a,{className:"header-anchor",href:"#环境准备",children:e(n.span,{className:"icon icon-link"})}),"环境准备"]}),`
`,e(n.p,{children:"在开始搭建Fispo博客系统前，请确保已完成以下工具的安装："}),`
`,r(n.ol,{children:[`
`,r(n.li,{children:[e(n.strong,{children:"Node.js运行环境"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"要求版本：18.0.0及以上"}),`
`,r(n.li,{children:["官方下载地址：",e(n.a,{href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})]}),`
`]}),`
`]}),`
`,r(n.li,{children:[e(n.strong,{children:"Git版本控制工具"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["官方下载地址：",e(n.a,{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer",children:"Git"})]}),`
`]}),`
`]}),`
`,r(n.li,{children:[e(n.strong,{children:"Markdown编辑器"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["推荐使用：",e(n.a,{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer",children:"VSCode"}),"（需安装Markdown插件）"]}),`
`,e(n.li,{children:"其他支持 Markdown 语法的编辑器也可使用"}),`
`]}),`
`]}),`
`]}),`
`,r(n.h2,{id:"安装-fispo-初始化工具",children:[e(n.a,{className:"header-anchor",href:"#安装-fispo-初始化工具",children:e(n.span,{className:"icon icon-link"})}),"安装 Fispo 初始化工具"]}),`
`,e(n.p,{children:"完成环境配置后，通过 npm 全局安装 Fispo 初始化工具："}),`
`,e(i,{code:`npm install -g @fispo/create-fispo
`,language:"sh"}),`
`,r(n.h2,{id:"初始化项目",children:[e(n.a,{className:"header-anchor",href:"#初始化项目",children:e(n.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,e(n.p,{children:"执行以下命令创建博客项目："}),`
`,e(i,{code:`create-fispo <项目目录名>
`,language:"bash"}),`
`,r(n.h2,{id:"文件结构",children:[e(n.a,{className:"header-anchor",href:"#文件结构",children:e(n.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,e(n.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,e(i,{code:`.\r
└── docs                     # 存放博客相关内容\r
    ├── post                 # 文章目录（Markdown/MDX）\r
    └── public               # 存放公共资源文件的目录\r
├── .gitignore\r
├── .npmrc\r
├── fispo.config.ts          # 配置文件\r
├── package.json\r
├── README.md\r
└── package.json
`,language:"md"}),`
`,r(n.h2,{id:"配置文件",children:[e(n.a,{className:"header-anchor",href:"#配置文件",children:e(n.span,{className:"icon icon-link"})}),"配置文件"]}),`
`,r(n.p,{children:["通过",e(n.code,{children:"fispo.config.ts"}),"文件进行站点配置，基础配置示例如下："]}),`
`,e(i,{code:`import { defineConfig } from "fispo-core";\r
\r
export default defineConfig({\r
  // 站点基础信息\r
  title: "XXX17的个人博客",\r
  author: "XXX17",\r
  description: "学无止境",\r
  \r
  // 主题配置\r
  themeConfig: {\r
    navMenus: [\r
      {\r
        title: "首页",\r
        path: "/",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "home",\r
        },\r
      },\r
      {\r
        title: "标签",\r
        path: "/tag",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "tag",\r
        },\r
      },\r
      {\r
        title: "分类",\r
        path: "/category",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "folder-open",\r
        },\r
      },\r
      {\r
        title: "关于",\r
        path: "/about/",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "heart",\r
        },\r
      },\r
    ],\r
  },\r
});
`,language:"typescript"}),`
`,r(n.p,{children:["完整配置说明请参考：",e(n.a,{href:"../../config",target:"",rel:"",children:"配置项"})]}),`
`,r(n.h2,{id:"启动项目",children:[e(n.a,{className:"header-anchor",href:"#启动项目",children:e(n.span,{className:"icon icon-link"})}),"启动项目"]}),`
`,r(n.p,{children:["工具已自动在",e(n.code,{children:"package.json"}),"中注入以下脚本："]}),`
`,e(i,{code:`{\r
  "scripts": {\r
    "dev": "fispo dev",      // 开发服务器（含热更新）\r
    "build": "fispo build",  // 生产环境构建\r
    "preview": "fispo preview", // 构建后预览\r
    "deploy": "fispo deploy" // 部署到服务器\r
  }\r
}
`,language:"json"}),`
`,r(n.p,{children:[e(n.code,{children:"dev"})," 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它："]}),`
`,e(i,{code:`npm run dev
`,language:"sh"}),`
`,e(n.p,{children:"除了 npm 脚本，还可以直接调用 Fispo:"}),`
`,e(i,{code:`npx fispo dev
`,language:"sh"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["开发服务器默认会运行在 ",e(n.code,{children:"http://localhost:5173"})," 上。在浏览器中访问 URL 以查看新站点的运行情况吧！"]}),`
`]})]})}function m(o={}){const{wrapper:n}={...a(),...o.components};return n?e(n,{...o,children:e(c,{...o})}):c(o)}export{m as default,h as frontmatter,p as mdInfo,f as toc};
