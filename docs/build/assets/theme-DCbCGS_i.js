import{u as a,j as s}from"../client-entry.js";const i={title:"主题"},o="主题如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板初始化项目create-fispo <项目目录名> --theme文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock.",d=[{id:"主题",text:"主题",depth:1},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"开发主题",text:"开发主题",depth:2}];function c(n){const l={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...a(),...n.components},{CopyButton:e}=l;return e||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),s.jsxs(s.Fragment,{children:[s.jsxs(l.h1,{id:"主题",children:[s.jsx(l.a,{className:"header-anchor",href:"#主题",children:s.jsx(l.span,{className:"icon icon-link"})}),"主题"]}),`
`,s.jsx(l.p,{children:"如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板"}),`
`,s.jsxs(l.h2,{id:"初始化项目",children:[s.jsx(l.a,{className:"header-anchor",href:"#初始化项目",children:s.jsx(l.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,s.jsxs(l.div,{className:"language-bash",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"bash"}),s.jsx(e,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1"},children:"create-fispo"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"<"}),s.jsx(l.span,{style:{color:"#2B5581"},children:"项目目录"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"名"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:">"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#2B5581"},children:"--theme"})]}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h2,{id:"文件结构",children:[s.jsx(l.a,{className:"header-anchor",href:"#文件结构",children:s.jsx(l.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,s.jsx(l.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,s.jsxs(l.div,{className:"language-md",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"md"}),s.jsx(e,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"."})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── fispo.config.ts          # 项目的配置文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── package-lock.json        # 锁定依赖包版本的文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── package.json             # 项目的元数据和依赖信息文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── tsconfig.json            # TypeScript 编译配置文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── tsup.config.ts           # tsup 打包工具的配置文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"├── docs                     # 存放博客相关内容"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│   ├── post                 # 文章目录（Markdown 文件）"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│   │   └── helloworld.md    # 示例文章"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│   └── public               # 存放公共资源文件的目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│       ├── 404.png          # 404 页面显示的图片"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│       ├── avatar.jpg       # 用户头像图片"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│       ├── banner.png       # 横幅图片"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│       ├── bg.png           # 背景图片"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│       ├── logo.png         # 项目 logo 图片"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│       └── cover            # 封面图片文件夹"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"│           └── a.jpg        # 封面示例图片"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"└── src                      # 源代码目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ├── config.ts            # 项目配置相关代码文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ├── index.ts             # 项目入口文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ├── layout               # 布局组件目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   ├── index.module.scss # 布局组件的样式文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   ├── index.tsx        # 布局组件的入口文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   ├── DocLayout        # 文档布局组件目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   │   ├── index.module.scss # 文档布局组件的样式文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   │   └── index.tsx    # 文档布局组件文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   └── HomeLayout       # 首页布局组件目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │       ├── index.module.scss # 首页布局组件的样式文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │       └── index.tsx    # 首页布局组件文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ├── style                # 样式文件目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   ├── base.css         # 基础样式文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   ├── docs.css         # 文档页面样式文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    │   └── vars.css         # 样式变量文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    └── types                # 类型定义目录"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"        ├── index.ts         # 类型定义入口文件"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"        └── types.d.ts       # 类型定义文件"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h2,{id:"开发主题",children:[s.jsx(l.a,{className:"header-anchor",href:"#开发主题",children:s.jsx(l.span,{className:"icon icon-link"})}),"开发主题"]}),`
`,s.jsxs(l.p,{children:["完成初始化后可以使用",s.jsx(l.code,{children:"npx fispo dev"}),"命令启动项目"]}),`
`,s.jsx(l.p,{children:"页面的数据结构如下，在 layout/index.ts 中作为 props 传入，您可以通过这些数据自由开发博客主题"}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(e,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:" * 页面数据上下文的接口"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:" * 包含了网站配置、页面路径、前置元数据、页面类型、目录信息、标题、文章列表、标签和分类等信息"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:" */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"export"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"PageData"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 网站的用户配置信息"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  siteData"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"UserConfig"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的路径"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  pagePath"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的前置元数据"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  frontmatter"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"FrontMatter"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的类型"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  pageType"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"PageType"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的目录信息"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  toc"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Toc"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 页面的标题"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 文章列表"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  articlesList"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"ArticleData"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 标签信息"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  tags"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Tags"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 分类信息"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  categories"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Categories"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * 允许动态添加的任意键值对"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  [key"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"]"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"unknown"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]})]})}function h(n={}){const{wrapper:l}={...a(),...n.components};return l?s.jsx(l,{...n,children:s.jsx(c,{...n})}):c(n)}export{h as default,i as frontmatter,o as mdInfo,d as toc};
