import{jsx as n,jsxs as e,Fragment as i}from"react/jsx-runtime";import{u as r}from"../client-entry.js";import"react-dom/client";import"react";const t={title:"主题"},F="主题如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板初始化项目create-fispo <项目目录名> --theme文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock.",y=[{id:"主题",text:"主题",depth:1},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"开发主题",text:"开发主题",depth:2}];function a(s){const l={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...r(),...s.components},{CopyButton:c}=l;return c||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),e(i,{children:[e(l.h1,{id:"主题",children:[n(l.a,{className:"header-anchor",href:"#主题",children:n(l.span,{className:"icon icon-link"})}),"主题"]}),`
`,n(l.p,{children:"如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板"}),`
`,e(l.h2,{id:"初始化项目",children:[n(l.a,{className:"header-anchor",href:"#初始化项目",children:n(l.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,e(l.div,{className:"language-bash",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"bash"}),n(c,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#6F42C1"},children:"create-fispo"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"<"}),n(l.span,{style:{color:"#2B5581"},children:"项目目录"}),n(l.span,{style:{color:"#24292EFF"},children:"名"}),n(l.span,{style:{color:"#D32F2F"},children:">"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#2B5581"},children:"--theme"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"文件结构",children:[n(l.a,{className:"header-anchor",href:"#文件结构",children:n(l.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,n(l.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,e(l.div,{className:"language-md",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"md"}),n(c,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"."})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── fispo.config.ts          # 项目的配置文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── package-lock.json        # 锁定依赖包版本的文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── package.json             # 项目的元数据和依赖信息文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── tsconfig.json            # TypeScript 编译配置文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── tsup.config.ts           # tsup 打包工具的配置文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"├── docs                     # 存放博客相关内容"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│   ├── post                 # 文章目录（Markdown 文件）"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│   │   └── helloworld.md    # 示例文章"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│   └── public               # 存放公共资源文件的目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│       ├── 404.png          # 404 页面显示的图片"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│       ├── avatar.jpg       # 用户头像图片"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│       ├── banner.png       # 横幅图片"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│       ├── bg.png           # 背景图片"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│       ├── logo.png         # 项目 logo 图片"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│       └── cover            # 封面图片文件夹"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"│           └── a.jpg        # 封面示例图片"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"└── src                      # 源代码目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    ├── config.ts            # 项目配置相关代码文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    ├── index.ts             # 项目入口文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    ├── layout               # 布局组件目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   ├── index.module.scss # 布局组件的样式文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   ├── index.tsx        # 布局组件的入口文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   ├── DocLayout        # 文档布局组件目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   │   ├── index.module.scss # 文档布局组件的样式文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   │   └── index.tsx    # 文档布局组件文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   └── HomeLayout       # 首页布局组件目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │       ├── index.module.scss # 首页布局组件的样式文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │       └── index.tsx    # 首页布局组件文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    ├── style                # 样式文件目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   ├── base.css         # 基础样式文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   ├── docs.css         # 文档页面样式文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    │   └── vars.css         # 样式变量文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    └── types                # 类型定义目录"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"        ├── index.ts         # 类型定义入口文件"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"        └── types.d.ts       # 类型定义文件"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"开发主题",children:[n(l.a,{className:"header-anchor",href:"#开发主题",children:n(l.span,{className:"icon icon-link"})}),"开发主题"]}),`
`,e(l.p,{children:["完成初始化后可以使用",n(l.code,{children:"npx fispo dev"}),"命令启动项目"]}),`
`,n(l.p,{children:"页面的数据结构如下，在 layout/index.ts 中作为 props 传入，您可以通过这些数据自由开发博客主题"}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(c,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"/**"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" * 页面数据上下文的接口"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" * 包含了网站配置、页面路径、前置元数据、页面类型、目录信息、标题、文章列表、标签和分类等信息"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"export"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"PageData"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 网站的用户配置信息"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  siteData"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"UserConfig"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的路径"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  pagePath"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的前置元数据"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  frontmatter"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"FrontMatter"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的类型"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  pageType"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"PageType"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的目录信息"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  toc"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"Toc"}),n(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的标题"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 文章列表"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  articlesList"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"ArticleData"}),n(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 标签信息"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  tags"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"Tags"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 分类信息"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  categories"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"Categories"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 允许动态添加的任意键值对"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  [key"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:"]"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"unknown"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]})]})}function m(s={}){const{wrapper:l}={...r(),...s.components};return l?n(l,{...s,children:n(a,{...s})}):a(s)}export{m as default,t as frontmatter,F as mdInfo,y as toc};
