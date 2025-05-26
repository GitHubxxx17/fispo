import{jsx as r,jsxs as s,Fragment as c}from"react/jsx-runtime";import{e as a}from"./vendor-CuygkBdc.js";import"react";const l={title:"主题"},h="主题如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板初始化项目create-fispo <项目目录名> --theme文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock.",g=[{id:"主题",text:"主题",depth:1},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"开发主题",text:"开发主题",depth:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",span:"span",...a(),...e.components},{CodeBlock:o}=n;return o||function(){throw new Error("Expected component `CodeBlock` to be defined: you likely forgot to import, pass, or provide it.")}(),s(c,{children:[s(n.h1,{id:"主题",children:[r(n.a,{className:"header-anchor",href:"#主题",children:r(n.span,{className:"icon icon-link"})}),"主题"]}),`
`,r(n.p,{children:"如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板"}),`
`,s(n.h2,{id:"初始化项目",children:[r(n.a,{className:"header-anchor",href:"#初始化项目",children:r(n.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,r(o,{code:`create-fispo <项目目录名> --theme
`,language:"bash"}),`
`,s(n.h2,{id:"文件结构",children:[r(n.a,{className:"header-anchor",href:"#文件结构",children:r(n.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,r(n.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,r(o,{code:`.\r
├── fispo.config.ts          # 项目的配置文件\r
├── package-lock.json        # 锁定依赖包版本的文件\r
├── package.json             # 项目的元数据和依赖信息文件\r
├── tsconfig.json            # TypeScript 编译配置文件\r
├── tsup.config.ts           # tsup 打包工具的配置文件\r
├── docs                     # 存放博客相关内容\r
│   ├── post                 # 文章目录（Markdown 文件）\r
│   │   └── helloworld.md    # 示例文章\r
│   └── public               # 存放公共资源文件的目录\r
│       ├── 404.png          # 404 页面显示的图片\r
│       ├── avatar.jpg       # 用户头像图片\r
│       ├── banner.png       # 横幅图片\r
│       ├── bg.png           # 背景图片\r
│       ├── logo.png         # 项目 logo 图片\r
│       └── cover            # 封面图片文件夹\r
│           └── a.jpg        # 封面示例图片\r
└── src                      # 源代码目录\r
    ├── config.ts            # 项目配置相关代码文件\r
    ├── index.ts             # 项目入口文件\r
    ├── layout               # 布局组件目录\r
    │   ├── index.module.scss # 布局组件的样式文件\r
    │   ├── index.tsx        # 布局组件的入口文件\r
    │   ├── DocLayout        # 文档布局组件目录\r
    │   │   ├── index.module.scss # 文档布局组件的样式文件\r
    │   │   └── index.tsx    # 文档布局组件文件\r
    │   └── HomeLayout       # 首页布局组件目录\r
    │       ├── index.module.scss # 首页布局组件的样式文件\r
    │       └── index.tsx    # 首页布局组件文件\r
    ├── style                # 样式文件目录\r
    │   ├── base.css         # 基础样式文件\r
    │   ├── docs.css         # 文档页面样式文件\r
    │   └── vars.css         # 样式变量文件\r
    └── types                # 类型定义目录\r
        ├── index.ts         # 类型定义入口文件\r
        └── types.d.ts       # 类型定义文件
`,language:"md"}),`
`,s(n.h2,{id:"开发主题",children:[r(n.a,{className:"header-anchor",href:"#开发主题",children:r(n.span,{className:"icon icon-link"})}),"开发主题"]}),`
`,s(n.p,{children:["完成初始化后可以使用",r(n.code,{children:"npx fispo dev"}),"命令启动项目"]}),`
`,r(n.p,{children:"页面的数据结构如下，在 layout/index.ts 中作为 props 传入，您可以通过这些数据自由开发博客主题"}),`
`,r(o,{code:`/**\r
 * 页面数据上下文的接口\r
 * 包含了网站配置、页面路径、前置元数据、页面类型、目录信息、标题、文章列表、标签和分类等信息\r
 */\r
export interface PageData {\r
  /**\r
   * 网站的用户配置信息\r
   */\r
  siteData: UserConfig;\r
  /**\r
   * 页面的路径\r
   */\r
  pagePath: string;\r
  /**\r
   * 页面的前置元数据\r
   */\r
  frontmatter: FrontMatter;\r
  /**\r
   * 页面的类型\r
   */\r
  pageType: PageType;\r
  /**\r
   * 页面的目录信息\r
   */\r
  toc?: Toc[];\r
  /**\r
   * 页面的标题\r
   */\r
  title: string;\r
  /**\r
   * 文章列表\r
   */\r
  articlesList?: ArticleData[];\r
  /**\r
   * 标签信息\r
   */\r
  tags?: Tags;\r
  /**\r
   * 分类信息\r
   */\r
  categories?: Categories;\r
  /**\r
   * 允许动态添加的任意键值对\r
   */\r
  [key: string]: unknown;\r
}
`,language:"ts"})]})}function m(e={}){const{wrapper:n}={...a(),...e.components};return n?r(n,{...e,children:r(t,{...e})}):t(e)}export{m as default,l as frontmatter,h as mdInfo,g as toc};
