import{jsx as e,jsxs as r,Fragment as o}from"react/jsx-runtime";import{e as l}from"./vendor-CuygkBdc.js";import"react";const p={title:"主题",date:"2025-09-24 19:34:17",updated:"2025-09-24 19:34:17",info:"主题如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板初始化项目create-fispo <项目目录名> --theme文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock."},g=[{id:"主题",text:"主题",depth:1},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"开发主题",text:"开发主题",depth:2},{id:"组件-api",text:"组件 API",depth:2},{id:"icon-组件",text:"Icon 组件",depth:3},{id:"使用示例",text:"使用示例",depth:4},{id:"属性列表",text:"属性列表",depth:4},{id:"link-组件",text:"Link 组件",depth:3},{id:"使用示例-1",text:"使用示例",depth:4},{id:"属性列表-1",text:"属性列表",depth:4},{id:"image-组件",text:"Image 组件",depth:3},{id:"使用示例-2",text:"使用示例",depth:4},{id:"属性列表-2",text:"属性列表",depth:4},{id:"getlayoutroutes-组件",text:"GetLayoutRoutes 组件",depth:3},{id:"使用示例-3",text:"使用示例",depth:4},{id:"属性列表-3",text:"属性列表",depth:4},{id:"layoutroutes-类型定义",text:"LayoutRoutes 类型定义",depth:4},{id:"路由路径说明",text:"路由路径说明",depth:4},{id:"使用注意事项",text:"使用注意事项",depth:4},{id:"页面数据结构",text:"页面数据结构",depth:2},{id:"辅助函数",text:"辅助函数",depth:2},{id:"存储管理",text:"存储管理",depth:3},{id:"滚动管理",text:"滚动管理",depth:3},{id:"主题管理",text:"主题管理",depth:3},{id:"实际应用示例",text:"实际应用示例",depth:4},{id:"防抖函数",text:"防抖函数",depth:3},{id:"交叉观察器",text:"交叉观察器",depth:3},{id:"日期处理",text:"日期处理",depth:3}];function d(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components},{CodeBlock:c,Icon:i}=n;return c||a("CodeBlock"),i||a("Icon"),r(o,{children:[r(n.h1,{id:"主题",children:[e(n.a,{className:"header-anchor",href:"#主题",children:e(n.span,{className:"icon icon-link"})}),"主题"]}),`
`,r(n.div,{className:"note info icon-palette modern",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"palette"})}),`
`,e(n.p,{children:"如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板"}),`
`]}),`
`,r(n.h2,{id:"初始化项目",children:[e(n.a,{className:"header-anchor",href:"#初始化项目",children:e(n.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,e(c,{code:`create-fispo <项目目录名> --theme
`,language:"bash"}),`
`,r(n.h2,{id:"文件结构",children:[e(n.a,{className:"header-anchor",href:"#文件结构",children:e(n.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,e(n.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,e(c,{code:`.\r
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
`,r(n.h2,{id:"开发主题",children:[e(n.a,{className:"header-anchor",href:"#开发主题",children:e(n.span,{className:"icon icon-link"})}),"开发主题"]}),`
`,r(n.div,{className:"note success icon-cog flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"cog"})}),`
`,r(n.p,{children:["完成初始化后可以使用",e(n.code,{children:"npx fispo dev"}),"命令启动项目"]}),`
`]}),`
`,r(n.h2,{id:"组件-api",children:[e(n.a,{className:"header-anchor",href:"#组件-api",children:e(n.span,{className:"icon icon-link"})}),"组件 API"]}),`
`,r(n.div,{className:"note primary icon-puzzle-piece modern",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"puzzle-piece"})}),`
`,e(n.p,{children:"Fispo 提供了一系列预置组件，可以直接在主题开发中使用："}),`
`]}),`
`,r(n.h3,{id:"icon-组件",children:[e(n.a,{className:"header-anchor",href:"#icon-组件",children:e(n.span,{className:"icon icon-link"})}),"Icon 组件"]}),`
`,r(n.div,{className:"tip info icon-image",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"image"})}),`
`,e(n.p,{children:"图标组件，用于显示各种图标。"}),`
`]}),`
`,r(n.h4,{id:"使用示例",children:[e(n.a,{className:"header-anchor",href:"#使用示例",children:e(n.span,{className:"icon icon-link"})}),"使用示例"]}),`
`,e(c,{code:`import { Icon } from 'fispo-core/theme'\r
\r
// 基础使用\r
<Icon name="github" />\r
\r
// 带尺寸设置\r
<Icon name="twitter" size={24} />\r
\r
// 自定义样式\r
<Icon name="heart" size={32} color="#ff6b6b" />
`,language:"tsx"}),`
`,r(n.h4,{id:"属性列表",children:[e(n.a,{className:"header-anchor",href:"#属性列表",children:e(n.span,{className:"icon icon-link"})}),"属性列表"]}),`















































`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{children:"属性名"}),e(n.th,{children:"类型"}),e(n.th,{children:"默认值"}),e(n.th,{children:"必需"}),e(n.th,{children:"描述"})]})}),r(n.tbody,{children:[r(n.tr,{children:[e(n.td,{children:"name"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"✅"}),e(n.td,{children:"图标名称"})]}),r(n.tr,{children:[e(n.td,{children:"size"}),e(n.td,{children:e(n.code,{children:"number"})}),e(n.td,{children:e(n.code,{children:"16"})}),e(n.td,{children:"❌"}),e(n.td,{children:"图标大小（像素）"})]}),r(n.tr,{children:[e(n.td,{children:"color"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"图标颜色"})]}),r(n.tr,{children:[e(n.td,{children:"className"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"自定义 CSS 类名"})]}),r(n.tr,{children:[e(n.td,{children:"style"}),e(n.td,{children:e(n.code,{children:"React.CSSProperties"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"自定义行内样式"})]})]})]}),`
`,r(n.h3,{id:"link-组件",children:[e(n.a,{className:"header-anchor",href:"#link-组件",children:e(n.span,{className:"icon icon-link"})}),"Link 组件"]}),`
`,r(n.div,{className:"tip success icon-link",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"link"})}),`
`,e(n.p,{children:"链接组件，支持内部路由跳转和外部链接。"}),`
`]}),`
`,r(n.h4,{id:"使用示例-1",children:[e(n.a,{className:"header-anchor",href:"#使用示例-1",children:e(n.span,{className:"icon icon-link"})}),"使用示例"]}),`
`,e(c,{code:`import { Link } from 'fispo-core/theme'\r
\r
// 内部链接\r
<Link to="/about">关于我们</Link>\r
\r
// 外部链接\r
<Link to="https://github.com" external>GitHub</Link>\r
\r
// 自定义链接\r
<Link to="/contact" className="custom-link" external={false}>\r
  联系我们\r
</Link>
`,language:"tsx"}),`
`,r(n.h4,{id:"属性列表-1",children:[e(n.a,{className:"header-anchor",href:"#属性列表-1",children:e(n.span,{className:"icon icon-link"})}),"属性列表"]}),`






















































`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{children:"属性名"}),e(n.th,{children:"类型"}),e(n.th,{children:"默认值"}),e(n.th,{children:"必需"}),e(n.th,{children:"描述"})]})}),r(n.tbody,{children:[r(n.tr,{children:[e(n.td,{children:"to"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"✅"}),e(n.td,{children:"链接地址"})]}),r(n.tr,{children:[e(n.td,{children:"external"}),e(n.td,{children:e(n.code,{children:"boolean"})}),e(n.td,{children:e(n.code,{children:"false"})}),e(n.td,{children:"❌"}),e(n.td,{children:"是否为外部链接"})]}),r(n.tr,{children:[e(n.td,{children:"className"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"自定义 CSS 类名"})]}),r(n.tr,{children:[e(n.td,{children:"children"}),e(n.td,{children:e(n.code,{children:"React.ReactNode"})}),e(n.td,{children:"-"}),e(n.td,{children:"✅"}),e(n.td,{children:"链接内容"})]}),r(n.tr,{children:[e(n.td,{children:"target"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:e(n.code,{children:"_self"})}),e(n.td,{children:"❌"}),e(n.td,{children:"链接目标窗口"})]}),r(n.tr,{children:[e(n.td,{children:"rel"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"链接关系属性"})]})]})]}),`
`,r(n.h3,{id:"image-组件",children:[e(n.a,{className:"header-anchor",href:"#image-组件",children:e(n.span,{className:"icon icon-link"})}),"Image 组件"]}),`
`,r(n.div,{className:"tip warning icon-camera",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"camera"})}),`
`,e(n.p,{children:"图片组件，支持懒加载和响应式优化。"}),`
`]}),`
`,r(n.h4,{id:"使用示例-2",children:[e(n.a,{className:"header-anchor",href:"#使用示例-2",children:e(n.span,{className:"icon icon-link"})}),"使用示例"]}),`
`,e(c,{code:`import { Image } from 'fispo-core/theme'\r
\r
// 基础图片\r
<Image src="/logo.png" alt="Logo" />\r
\r
// 懒加载图片\r
<Image src="/banner.jpg" lazyload alt="Banner" />\r
\r
// 响应式图片\r
<Image\r
  src="/hero-desktop.jpg"\r
  srcSet={{\r
    default: '/hero-mobile.jpg',\r
    tablet: '/hero-tablet.jpg',\r
    desktop: '/hero-desktop.jpg'\r
  }}\r
  alt="Hero"\r
/>\r
\r
// 带加载状态\r
<Image\r
  src="/large-image.jpg"\r
  lazyload\r
  placeholder="/placeholder.jpg"\r
  alt="Large Image"\r
  onLoad={() => console.log('图片加载完成')}\r
  onError={() => console.log('图片加载失败')}\r
/>
`,language:"tsx"}),`
`,r(n.h4,{id:"属性列表-2",children:[e(n.a,{className:"header-anchor",href:"#属性列表-2",children:e(n.span,{className:"icon icon-link"})}),"属性列表"]}),`

























































































`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{children:"属性名"}),e(n.th,{children:"类型"}),e(n.th,{children:"默认值"}),e(n.th,{children:"必需"}),e(n.th,{children:"描述"})]})}),r(n.tbody,{children:[r(n.tr,{children:[e(n.td,{children:"src"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"✅"}),e(n.td,{children:"图片地址"})]}),r(n.tr,{children:[e(n.td,{children:"alt"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"✅"}),e(n.td,{children:"图片替代文本"})]}),r(n.tr,{children:[e(n.td,{children:"lazyload"}),e(n.td,{children:e(n.code,{children:"boolean"})}),e(n.td,{children:e(n.code,{children:"false"})}),e(n.td,{children:"❌"}),e(n.td,{children:"是否启用懒加载"})]}),r(n.tr,{children:[e(n.td,{children:"placeholder"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"占位图片地址"})]}),r(n.tr,{children:[e(n.td,{children:"srcSet"}),e(n.td,{children:e(n.code,{children:"Record<string, string>"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"响应式图片源集"})]}),r(n.tr,{children:[e(n.td,{children:"className"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"自定义 CSS 类名"})]}),r(n.tr,{children:[e(n.td,{children:"style"}),e(n.td,{children:e(n.code,{children:"React.CSSProperties"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"自定义行内样式"})]}),r(n.tr,{children:[e(n.td,{children:"onLoad"}),e(n.td,{children:e(n.code,{children:"() => void"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"图片加载完成回调"})]}),r(n.tr,{children:[e(n.td,{children:"onError"}),e(n.td,{children:e(n.code,{children:"() => void"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"图片加载失败回调"})]}),r(n.tr,{children:[e(n.td,{children:"width"}),e(n.td,{children:e(n.code,{children:"number | string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"图片宽度"})]}),r(n.tr,{children:[e(n.td,{children:"height"}),e(n.td,{children:e(n.code,{children:"number | string"})}),e(n.td,{children:"-"}),e(n.td,{children:"❌"}),e(n.td,{children:"图片高度"})]})]})]}),`
`,r(n.h3,{id:"getlayoutroutes-组件",children:[e(n.a,{className:"header-anchor",href:"#getlayoutroutes-组件",children:e(n.span,{className:"icon icon-link"})}),"GetLayoutRoutes 组件"]}),`
`,r(n.div,{className:"tip error icon-route",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"route"})}),`
`,e(n.p,{children:"路由配置组件，用于渲染和匹配定义的路由结构。"}),`
`]}),`
`,r(n.h4,{id:"使用示例-3",children:[e(n.a,{className:"header-anchor",href:"#使用示例-3",children:e(n.span,{className:"icon icon-link"})}),"使用示例"]}),`
`,e(c,{code:`import { GetLayoutRoutes } from 'fispo-core/theme'\r
import type { LayoutRoutes } from 'fispo-core/types'\r
\r
// 基础使用\r
function Layout({ pageData }: { pageData: PageData }) {\r
  const routes: LayoutRoutes = [\r
    {\r
      path: "/",\r
      element: <HomeLayout pageData={pageData} />\r
    },\r
    {\r
      path: "/docs/*",\r
      element: <DocLayout pageData={pageData} />\r
    },\r
    {\r
      path: "/blog/*",\r
      element: <BlogLayout pageData={pageData} />\r
    },\r
    {\r
      path: "*",\r
      element: <NotFoundLayout pageData={pageData} />\r
    }\r
  ]\r
\r
  return (\r
    <div className="layout">\r
      <GetLayoutRoutes routes={routes} />\r
    </div>\r
  )\r
}\r
\r
// 动态路由配置\r
function DynamicLayout({ pageData }: { pageData: PageData }) {\r
  const routes: LayoutRoutes = useMemo(() => {\r
    const { pagePath } = pageData\r
\r
    // 根据页面路径动态生成路由\r
    return [\r
      {\r
        path: "/",\r
        element: <HomeLayout pageData={pageData} />\r
      },\r
      {\r
        path: "/theme/*",\r
        element: <ThemeMarketLayout pageData={pageData} />\r
      },\r
      {\r
        path: "/plugin/*",\r
        element: <PluginMarketLayout pageData={pageData} />\r
      },\r
      {\r
        path: "*",\r
        element: <DocLayout pageData={pageData} />\r
      }\r
    ]\r
  }, [pageData])\r
\r
  return (\r
    <div className="layout">\r
      <GetLayoutRoutes routes={routes} />\r
    </div>\r
  )\r
}
`,language:"tsx"}),`
`,r(n.h4,{id:"属性列表-3",children:[e(n.a,{className:"header-anchor",href:"#属性列表-3",children:e(n.span,{className:"icon icon-link"})}),"属性列表"]}),`



















`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{children:"属性名"}),e(n.th,{children:"类型"}),e(n.th,{children:"默认值"}),e(n.th,{children:"必需"}),e(n.th,{children:"描述"})]})}),e(n.tbody,{children:r(n.tr,{children:[e(n.td,{children:"routes"}),e(n.td,{children:e(n.code,{children:"LayoutRoutes"})}),e(n.td,{children:"-"}),e(n.td,{children:"✅"}),e(n.td,{children:"路由配置数组"})]})})]}),`
`,r(n.h4,{id:"layoutroutes-类型定义",children:[e(n.a,{className:"header-anchor",href:"#layoutroutes-类型定义",children:e(n.span,{className:"icon icon-link"})}),"LayoutRoutes 类型定义"]}),`
`,r(n.p,{children:[e(n.code,{children:"LayoutRoutes"})," 是一个路由配置数组，每个路由对象包含以下属性和类型："]}),`























`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{children:"属性名"}),e(n.th,{children:"类型"}),e(n.th,{children:"必需"}),e(n.th,{children:"描述"})]})}),r(n.tbody,{children:[r(n.tr,{children:[e(n.td,{children:"path"}),e(n.td,{children:e(n.code,{children:"string"})}),e(n.td,{children:"✅"}),r(n.td,{children:["路由路径，支持通配符 ",e(n.code,{children:"*"})]})]}),r(n.tr,{children:[e(n.td,{children:"element"}),e(n.td,{children:e(n.code,{children:"React.ReactElement"})}),e(n.td,{children:"✅"}),e(n.td,{children:"要渲染的 React 元素"})]})]})]}),`
`,r(n.h4,{id:"路由路径说明",children:[e(n.a,{className:"header-anchor",href:"#路由路径说明",children:e(n.span,{className:"icon icon-link"})}),"路由路径说明"]}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:[e(n.strong,{children:"精确路径"}),"：",e(n.code,{children:'"/"'})," 匹配根路径"]}),`
`,r(n.li,{children:[e(n.strong,{children:"通配符路径"}),"：",e(n.code,{children:'"/docs/*"'})," 匹配 ",e(n.code,{children:"/docs"})," 下的所有子路径"]}),`
`,r(n.li,{children:[e(n.strong,{children:"兜底路径"}),"：",e(n.code,{children:'"*"'})," 匹配所有未匹配的路径，通常用于 404 页面"]}),`
`]}),`
`,r(n.h4,{id:"使用注意事项",children:[e(n.a,{className:"header-anchor",href:"#使用注意事项",children:e(n.span,{className:"icon icon-link"})}),"使用注意事项"]}),`
`,r(n.ol,{children:[`
`,r(n.li,{children:[e(n.strong,{children:"路由匹配顺序"}),"：按数组顺序从上到下匹配，第一个匹配的路由会被渲染"]}),`
`,r(n.li,{children:[e(n.strong,{children:"通配符使用"}),"：",e(n.code,{children:"*"})," 可以匹配任意多级路径，如 ",e(n.code,{children:"/docs/article/how-to"})]}),`
`,r(n.li,{children:[e(n.strong,{children:"组件传递"}),"：每个路由的 ",e(n.code,{children:"element"})," 可以接收 ",e(n.code,{children:"pageData"})," 属性用于数据传递"]}),`
`,r(n.li,{children:[e(n.strong,{children:"性能优化"}),"：建议使用 ",e(n.code,{children:"useMemo"})," 包装路由配置，避免不必要的重新渲染"]}),`
`]}),`
`,r(n.h2,{id:"页面数据结构",children:[e(n.a,{className:"header-anchor",href:"#页面数据结构",children:e(n.span,{className:"icon icon-link"})}),"页面数据结构"]}),`
`,e(n.p,{children:"在 layout/index.ts 中，页面数据会作为 props 传入，您可以通过这些数据自由开发博客主题："}),`
`,e(c,{code:`/**\r
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
`,language:"ts"}),`
`,r(n.h2,{id:"辅助函数",children:[e(n.a,{className:"header-anchor",href:"#辅助函数",children:e(n.span,{className:"icon icon-link"})}),"辅助函数"]}),`
`,r(n.div,{className:"note modern icon-tools",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"tools"})}),`
`,e(n.p,{children:"Fispo 提供了多种辅助函数来简化主题开发："}),`
`]}),`
`,r(n.h3,{id:"存储管理",children:[e(n.a,{className:"header-anchor",href:"#存储管理",children:e(n.span,{className:"icon icon-link"})}),"存储管理"]}),`
`,r(n.div,{className:"note info icon-database flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"database"})}),`
`,e(n.p,{children:"提供本地存储和会话存储的统一接口，支持降级策略。"}),`
`]}),`
`,e(c,{code:`import {\r
  localGetData, localSaveData, localRemoveData, localClear,\r
  sessionGetData, sessionSaveData, sessionRemoveData, sessionClear,\r
  inBrowser\r
} from 'fispo-core/helper'\r
\r
// 本地存储操作\r
localSaveData('user-settings', { theme: 'dark' })\r
const settings = localGetData('user-settings')\r
localRemoveData('user-settings')\r
localClear()\r
\r
// 会话存储操作\r
sessionSaveData('temp-data', { sessionId: '123' })\r
const tempData = sessionGetData('temp-data')\r
\r
// 检查是否在浏览器环境\r
if (inBrowser()) {\r
  console.log('在浏览器中运行')\r
}
`,language:"tsx"}),`
`,r(n.h3,{id:"滚动管理",children:[e(n.a,{className:"header-anchor",href:"#滚动管理",children:e(n.span,{className:"icon icon-link"})}),"滚动管理"]}),`
`,r(n.div,{className:"note success icon-arrows-alt-v flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"arrows-alt-v"})}),`
`,e(n.p,{children:"提供滚动事件管理、方向检测和锚点导航功能。"}),`
`]}),`
`,e(c,{code:`import {\r
  scrollManager,\r
  type Direction,\r
  type ScrollCallback\r
} from 'fispo-core/helper'\r
\r
// 初始化滚动管理器\r
scrollManager.init()\r
\r
// 设置导航栏高度\r
scrollManager.setNavHeight(80)\r
\r
// 设置导航栏是否滚动折叠\r
scrollManager.setNavIsScrollHidden(true)\r
\r
// 添加滚动回调\r
const handleScroll: ScrollCallback = (direction, isTop) => {\r
  if (direction === 'down') {\r
    console.log('向下滚动')\r
  } else {\r
    console.log('向上滚动')\r
  }\r
\r
  if (isTop) {\r
    console.log('已滚动到顶部')\r
  }\r
}\r
\r
scrollManager.add(handleScroll)\r
\r
// 滚动到指定元素\r
const targetElement = document.getElementById('section1')\r
scrollManager.scrollToTarget(targetElement, true) // 平滑滚动\r
\r
// 移除回调\r
scrollManager.remove(handleScroll)\r
\r
// 销毁滚动管理器\r
scrollManager.destroy()
`,language:"tsx"}),`
`,r(n.h3,{id:"主题管理",children:[e(n.a,{className:"header-anchor",href:"#主题管理",children:e(n.span,{className:"icon icon-link"})}),"主题管理"]}),`
`,r(n.div,{className:"note warning icon-lightbulb flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"lightbulb"})}),`
`,e(n.p,{children:"提供深色/浅色主题切换的多标签页同步功能。"}),`
`]}),`
`,e(c,{code:`import { useTheme } from 'fispo-core/helper'\r
import { Icon } from 'fispo-core/theme'\r
\r
function ThemeToggle() {\r
  const { theme, toggleTheme } = useTheme()\r
\r
  return (\r
    <div className="theme-toggle">\r
      <span title="切换黑白主题" onClick={toggleTheme}>\r
        {/* 根据当前主题显示不同的图标 */}\r
        <Icon icon={theme === "light" ? "sun" : "moon"} />\r
      </span>\r
    </div>\r
  )\r
}\r
\r
// 在导航栏中使用主题切换\r
function NavWithTheme() {\r
  const { theme, toggleTheme } = useTheme()\r
\r
  const renderTools = () => (\r
    <div className="nav-tools">\r
      <div className="nav-tools-item">\r
        <span title="切换黑白主题" onClick={toggleTheme}>\r
          <Icon icon={theme === "light" ? "sun" : "moon"} />\r
        </span>\r
      </div>\r
      {/* 其他工具项 */}\r
    </div>\r
  )\r
\r
  return <nav>{renderTools()}</nav>\r
}\r
\r
// 自定义主题键\r
function CustomThemeToggle() {\r
  const { theme, toggleTheme } = useTheme({ themeKey: 'CUSTOM_THEME' })\r
\r
  return (\r
    <div className="custom-theme-toggle">\r
      <span title="切换自定义主题" onClick={toggleTheme}>\r
        <Icon icon={theme === "light" ? "sun" : "moon"} />\r
        <span className="theme-label">自定义主题: {theme}</span>\r
      </span>\r
    </div>\r
  )\r
}
`,language:"tsx"}),`
`,r(n.h4,{id:"实际应用示例",children:[e(n.a,{className:"header-anchor",href:"#实际应用示例",children:e(n.span,{className:"icon icon-link"})}),"实际应用示例"]}),`
`,e(n.p,{children:"参考导航栏组件的实际实现："}),`
`,e(c,{code:`import React from 'react'\r
import { useTheme } from 'fispo-core/helper'\r
import { Icon } from 'fispo-core/theme'\r
import styles from './Nav.module.scss'\r
\r
function NavTools() {\r
  const { theme, toggleTheme } = useTheme()\r
\r
  return (\r
    <>\r
      <div className="nav-tools-item">\r
        <span title="切换黑白主题" onClick={toggleTheme}>\r
          <Icon icon={theme === "light" ? "sun" : "moon"} />\r
        </span>\r
      </div>\r
      {/* 其他导航工具项 */}\r
    </>\r
  )\r
}\r
\r
// 响应式导航栏\r
function ResponsiveNav() {\r
  const { theme, toggleTheme } = useTheme()\r
  const [isMobile, setIsMobile] = useState(false)\r
\r
  return (\r
    <nav>\r
      <div className="nav-left">\r
        {/* 左侧内容 */}\r
      </div>\r
      <div className="nav-right">\r
        <div className="nav-tools">\r
          <div className="nav-tools-item">\r
            <span title="切换黑白主题" onClick={toggleTheme}>\r
              <Icon icon={theme === "light" ? "sun" : "moon"} />\r
            </span>\r
          </div>\r
        </div>\r
        {/* 移动端菜单按钮 */}\r
        <div className="mobile-menu-toggle">\r
          <Icon icon="bars" />\r
        </div>\r
      </div>\r
    </nav>\r
  )\r
}
`,language:"tsx"}),`
`,r(n.h3,{id:"防抖函数",children:[e(n.a,{className:"header-anchor",href:"#防抖函数",children:e(n.span,{className:"icon icon-link"})}),"防抖函数"]}),`
`,r(n.div,{className:"note primary icon-clock flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"clock"})}),`
`,e(n.p,{children:"提供函数防抖功能，优化高频事件处理性能。"}),`
`]}),`
`,e(c,{code:`import { debounce } from 'fispo-core/helper'\r
\r
// 创建防抖函数\r
const debouncedSearch = debounce((query: string) => {\r
  console.log('搜索:', query)\r
}, 300)\r
\r
// 使用防抖函数\r
debouncedSearch('hello')\r
debouncedSearch('world') // 只会执行最后一次
`,language:"tsx"}),`
`,r(n.h3,{id:"交叉观察器",children:[e(n.a,{className:"header-anchor",href:"#交叉观察器",children:e(n.span,{className:"icon icon-link"})}),"交叉观察器"]}),`
`,r(n.div,{className:"note default icon-eye flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"eye"})}),`
`,e(n.p,{children:"提供元素进入视口的检测功能，实现懒加载和动画触发。"}),`
`]}),`
`,e(c,{code:`import { useIntersectionObserver } from 'fispo-core/helper'\r
\r
function LazyComponent() {\r
  const { ref, isIntersecting } = useIntersectionObserver({\r
    threshold: 0.1,\r
    rootMargin: '100px'\r
  })\r
\r
  return (\r
    <div ref={ref}>\r
      {isIntersecting ? '内容已加载' : '加载中...'}\r
    </div>\r
  )\r
}
`,language:"tsx"}),`
`,r(n.h3,{id:"日期处理",children:[e(n.a,{className:"header-anchor",href:"#日期处理",children:e(n.span,{className:"icon icon-link"})}),"日期处理"]}),`
`,r(n.div,{className:"note info icon-calendar-alt flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"calendar-alt"})}),`
`,e(n.p,{children:"提供日期格式化和相对时间处理功能。"}),`
`]}),`
`,e(c,{code:`import { formatDate, formatTimeAgo } from 'fispo-core/helper'\r
\r
// 格式化日期\r
const date = new Date()\r
const formattedDate = formatDate(date, 'YYYY-MM-DD') // 2024-01-01\r
\r
// 格式化相对时间\r
const timeAgo = formatTimeAgo(new Date('2024-01-01')) // "2天前"
`,language:"tsx"})]})}function u(t={}){const{wrapper:n}={...l(),...t.components};return n?e(n,{...t,children:e(d,{...t})}):d(t)}function a(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default,p as frontmatter,g as toc};
