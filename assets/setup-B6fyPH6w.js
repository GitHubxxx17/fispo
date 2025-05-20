import{jsx as n,jsxs as e,Fragment as o}from"react/jsx-runtime";import{u as a}from"../client-entry.js";import"react-dom/client";import"react";const t={title:"建站"},F="安装环境准备在开始搭建Fispo博客系统前，请确保已完成以下工具的安装：Node.js运行环境要求版本：18.0.0及以上官方下载地址：Node.jsGit版本控制工具官方下载地址：GitMarkdown编辑器推荐使用：VSCode（需安装Markdown插件）其他支持 Markdown 语法的编辑",y=[{id:"安装",text:"安装",depth:1},{id:"环境准备",text:"环境准备",depth:2},{id:"安装-fispo-初始化工具",text:"安装 Fispo 初始化工具",depth:2},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"配置文件",text:"配置文件",depth:2},{id:"启动项目",text:"启动项目",depth:2}];function r(c){const l={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...c.components},{CopyButton:s}=l;return s||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),e(o,{children:[e(l.h1,{id:"安装",children:[n(l.a,{className:"header-anchor",href:"#安装",children:n(l.span,{className:"icon icon-link"})}),"安装"]}),`
`,e(l.h2,{id:"环境准备",children:[n(l.a,{className:"header-anchor",href:"#环境准备",children:n(l.span,{className:"icon icon-link"})}),"环境准备"]}),`
`,n(l.p,{children:"在开始搭建Fispo博客系统前，请确保已完成以下工具的安装："}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:[n(l.strong,{children:"Node.js运行环境"}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"要求版本：18.0.0及以上"}),`
`,e(l.li,{children:["官方下载地址：",n(l.a,{href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})]}),`
`]}),`
`]}),`
`,e(l.li,{children:[n(l.strong,{children:"Git版本控制工具"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["官方下载地址：",n(l.a,{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer",children:"Git"})]}),`
`]}),`
`]}),`
`,e(l.li,{children:[n(l.strong,{children:"Markdown编辑器"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["推荐使用：",n(l.a,{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer",children:"VSCode"}),"（需安装Markdown插件）"]}),`
`,n(l.li,{children:"其他支持 Markdown 语法的编辑器也可使用"}),`
`]}),`
`]}),`
`]}),`
`,e(l.h2,{id:"安装-fispo-初始化工具",children:[n(l.a,{className:"header-anchor",href:"#安装-fispo-初始化工具",children:n(l.span,{className:"icon icon-link"})}),"安装 Fispo 初始化工具"]}),`
`,n(l.p,{children:"完成环境配置后，通过 npm 全局安装 Fispo 初始化工具："}),`
`,e(l.div,{className:"language-sh",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"sh"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#6F42C1"},children:"npm"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"install"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"-g"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"@fispo/create-fispo"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"初始化项目",children:[n(l.a,{className:"header-anchor",href:"#初始化项目",children:n(l.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,n(l.p,{children:"执行以下命令创建博客项目："}),`
`,e(l.div,{className:"language-bash",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"bash"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#6F42C1"},children:"create-fispo"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"<"}),n(l.span,{style:{color:"#2B5581"},children:"项目目录"}),n(l.span,{style:{color:"#24292EFF"},children:"名"}),n(l.span,{style:{color:"#D32F2F"},children:">"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"文件结构",children:[n(l.a,{className:"header-anchor",href:"#文件结构",children:n(l.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,n(l.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,e(l.div,{className:"language-md",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"md"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"."})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"└── docs                     # 存放博客相关内容"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    ├── post                 # 文章目录（Markdown/MDX）"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    └── public               # 存放公共资源文件的目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── .gitignore"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── .npmrc"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── fispo.config.ts          # 配置文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── package.json"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── README.md"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"└── package.json"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"配置文件",children:[n(l.a,{className:"header-anchor",href:"#配置文件",children:n(l.span,{className:"icon icon-link"})}),"配置文件"]}),`
`,e(l.p,{children:["通过",n(l.code,{children:"fispo.config.ts"}),"文件进行站点配置，基础配置示例如下："]}),`
`,e(l.div,{className:"language-typescript",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"typescript"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"import"}),n(l.span,{style:{color:"#24292EFF"},children:" { defineConfig } "}),n(l.span,{style:{color:"#D32F2F"},children:"from"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo-core"'}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"export"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"default"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"defineConfig"}),n(l.span,{style:{color:"#24292EFF"},children:"({"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 站点基础信息"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"XXX17的个人博客"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  author"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"XXX17"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  description"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"学无止境"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  "})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 主题配置"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  themeConfig"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    navMenus"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"首页"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"home"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"标签"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/tag"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"tag"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"分类"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/category"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"folder-open"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"关于"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/about/"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"heart"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    ]"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"});"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:["完整配置说明请参考：",n(l.a,{href:"../../config",target:"",rel:"",children:"配置项"})]}),`
`,e(l.h2,{id:"启动项目",children:[n(l.a,{className:"header-anchor",href:"#启动项目",children:n(l.span,{className:"icon icon-link"})}),"启动项目"]}),`
`,e(l.p,{children:["工具已自动在",n(l.code,{children:"package.json"}),"中注入以下脚本："]}),`
`,e(l.div,{className:"language-json",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"json"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"{"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#D32F2F"},children:'"scripts"'}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#D32F2F"},children:'"dev"'}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo dev"'}),n(l.span,{style:{color:"#212121"},children:","}),n(l.span,{style:{color:"#24292EFF"},children:"      "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 开发服务器（含热更新）"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#D32F2F"},children:'"build"'}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo build"'}),n(l.span,{style:{color:"#212121"},children:","}),n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 生产环境构建"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#D32F2F"},children:'"preview"'}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo preview"'}),n(l.span,{style:{color:"#212121"},children:","}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 构建后预览"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#D32F2F"},children:'"deploy"'}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo deploy"'}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 部署到服务器"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  }"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.code,{children:"dev"})," 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它："]}),`
`,e(l.div,{className:"language-sh",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"sh"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#6F42C1"},children:"npm"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"run"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"dev"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:"除了 npm 脚本，还可以直接调用 Fispo:"}),`
`,e(l.div,{className:"language-sh",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"sh"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#6F42C1"},children:"npx"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"fispo"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"dev"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:["开发服务器默认会运行在 ",n(l.code,{children:"http://localhost:5173"})," 上。在浏览器中访问 URL 以查看新站点的运行情况吧！"]}),`
`]})]})}function m(c={}){const{wrapper:l}={...a(),...c.components};return l?n(l,{...c,children:n(r,{...c})}):r(c)}export{m as default,t as frontmatter,F as mdInfo,y as toc};
