import{u as r,j as s}from"../client-entry.js";const o={title:"建站"},i="安装环境准备在开始搭建Fispo博客系统前，请确保已完成以下工具的安装：Node.js运行环境要求版本：18.0.0及以上官方下载地址：Node.jsGit版本控制工具官方下载地址：GitMarkdown编辑器推荐使用：VSCode（需安装Markdown插件）其他支持 Markdown 语法的编辑",d=[{id:"安装",text:"安装",depth:1},{id:"环境准备",text:"环境准备",depth:2},{id:"安装-fispo-初始化工具",text:"安装 Fispo 初始化工具",depth:2},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"配置文件",text:"配置文件",depth:2},{id:"启动项目",text:"启动项目",depth:2}];function c(e){const l={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...e.components},{CopyButton:n}=l;return n||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),s.jsxs(s.Fragment,{children:[s.jsxs(l.h1,{id:"安装",children:[s.jsx(l.a,{className:"header-anchor",href:"#安装",children:s.jsx(l.span,{className:"icon icon-link"})}),"安装"]}),`
`,s.jsxs(l.h2,{id:"环境准备",children:[s.jsx(l.a,{className:"header-anchor",href:"#环境准备",children:s.jsx(l.span,{className:"icon icon-link"})}),"环境准备"]}),`
`,s.jsx(l.p,{children:"在开始搭建Fispo博客系统前，请确保已完成以下工具的安装："}),`
`,s.jsxs(l.ol,{children:[`
`,s.jsxs(l.li,{children:[s.jsx(l.strong,{children:"Node.js运行环境"}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"要求版本：18.0.0及以上"}),`
`,s.jsxs(l.li,{children:["官方下载地址：",s.jsx(l.a,{href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})]}),`
`]}),`
`]}),`
`,s.jsxs(l.li,{children:[s.jsx(l.strong,{children:"Git版本控制工具"}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["官方下载地址：",s.jsx(l.a,{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer",children:"Git"})]}),`
`]}),`
`]}),`
`,s.jsxs(l.li,{children:[s.jsx(l.strong,{children:"Markdown编辑器"}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["推荐使用：",s.jsx(l.a,{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer",children:"VSCode"}),"（需安装Markdown插件）"]}),`
`,s.jsx(l.li,{children:"其他支持 Markdown 语法的编辑器也可使用"}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(l.h2,{id:"安装-fispo-初始化工具",children:[s.jsx(l.a,{className:"header-anchor",href:"#安装-fispo-初始化工具",children:s.jsx(l.span,{className:"icon icon-link"})}),"安装 Fispo 初始化工具"]}),`
`,s.jsx(l.p,{children:"完成环境配置后，通过 npm 全局安装 Fispo 初始化工具："}),`
`,s.jsxs(l.div,{className:"language-sh",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"sh"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1"},children:"npm"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"install"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"-g"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"@fispo/create-fispo"})]}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h2,{id:"初始化项目",children:[s.jsx(l.a,{className:"header-anchor",href:"#初始化项目",children:s.jsx(l.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,s.jsx(l.p,{children:"执行以下命令创建博客项目："}),`
`,s.jsxs(l.div,{className:"language-bash",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"bash"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1"},children:"create-fispo"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"<"}),s.jsx(l.span,{style:{color:"#2B5581"},children:"项目目录"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"名"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:">"})]}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h2,{id:"文件结构",children:[s.jsx(l.a,{className:"header-anchor",href:"#文件结构",children:s.jsx(l.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,s.jsx(l.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,s.jsxs(l.div,{className:"language-md",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"md"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"."})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"└── docs                     # 存放博客相关内容"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ├── post                 # 文章目录（Markdown/MDX）"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    └── public               # 存放公共资源文件的目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── .gitignore"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── .npmrc"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── fispo.config.ts          # 配置文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── package.json"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── README.md"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"└── package.json"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h2,{id:"配置文件",children:[s.jsx(l.a,{className:"header-anchor",href:"#配置文件",children:s.jsx(l.span,{className:"icon icon-link"})}),"配置文件"]}),`
`,s.jsxs(l.p,{children:["通过",s.jsx(l.code,{children:"fispo.config.ts"}),"文件进行站点配置，基础配置示例如下："]}),`
`,s.jsxs(l.div,{className:"language-typescript",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"typescript"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"import"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" { defineConfig } "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"from"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo-core"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsx(l.span,{className:"line"}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"export"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"default"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"defineConfig"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"({"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 站点基础信息"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"XXX17的个人博客"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  author"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"XXX17"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  description"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"学无止境"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 主题配置"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  themeConfig"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    navMenus"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"首页"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"home"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"标签"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/tag"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"tag"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"分类"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/category"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"folder-open"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"关于"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/about"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"heart"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ]"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"});"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:["完整配置说明请参考：",s.jsx(l.a,{href:"../../config",target:"",rel:"",children:"配置项"})]}),`
`,s.jsxs(l.h2,{id:"启动项目",children:[s.jsx(l.a,{className:"header-anchor",href:"#启动项目",children:s.jsx(l.span,{className:"icon icon-link"})}),"启动项目"]}),`
`,s.jsxs(l.p,{children:["工具已自动在",s.jsx(l.code,{children:"package.json"}),"中注入以下脚本："]}),`
`,s.jsxs(l.div,{className:"language-json",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"json"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"{"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:'"scripts"'}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:'"dev"'}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo dev"'}),s.jsx(l.span,{style:{color:"#212121"},children:","}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"      "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 开发服务器（含热更新）"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:'"build"'}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo build"'}),s.jsx(l.span,{style:{color:"#212121"},children:","}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 生产环境构建"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:'"preview"'}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo preview"'}),s.jsx(l.span,{style:{color:"#212121"},children:","}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 构建后预览"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:'"deploy"'}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo deploy"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 部署到服务器"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  }"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.code,{children:"dev"})," 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它："]}),`
`,s.jsxs(l.div,{className:"language-sh",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"sh"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1"},children:"npm"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"run"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"dev"})]}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.p,{children:"除了 npm 脚本，还可以直接调用 Fispo:"}),`
`,s.jsxs(l.div,{className:"language-sh",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"sh"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1"},children:"npx"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"fispo"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"dev"})]}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.blockquote,{children:[`
`,s.jsxs(l.p,{children:["开发服务器默认会运行在 ",s.jsx(l.code,{children:"http://localhost:5173"})," 上。在浏览器中访问 URL 以查看新站点的运行情况吧！"]}),`
`]})]})}function h(e={}){const{wrapper:l}={...r(),...e.components};return l?s.jsx(l,{...e,children:s.jsx(c,{...e})}):c(e)}export{h as default,o as frontmatter,i as mdInfo,d as toc};
