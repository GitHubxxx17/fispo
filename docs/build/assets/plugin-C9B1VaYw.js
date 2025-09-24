import{jsx as e,jsxs as r,Fragment as l}from"react/jsx-runtime";import{e as t}from"./vendor-CuygkBdc.js";import"react";const g={title:"插件",date:"2025-09-24 19:22:04",updated:"2025-09-24 19:40:01",info:"插件如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板初始化项目create-fispo <项目目录名> --plugin文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock"},m=[{id:"插件",text:"插件",depth:1},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"开发插件",text:"开发插件",depth:2},{id:"fispoplugin-接口详解",text:"FispoPlugin 接口详解",depth:2},{id:"基础配置",text:"基础配置",depth:3},{id:"markdown-处理",text:"Markdown 处理",depth:3},{id:"文件监听",text:"文件监听",depth:3},{id:"生命周期钩子",text:"生命周期钩子",depth:3},{id:"configbeforeresolved",text:"configBeforeResolved",depth:4},{id:"configresolved",text:"configResolved",depth:4},{id:"beforerenderpage",text:"beforeRenderpage",depth:4},{id:"afterrenderpage",text:"afterRenderPage",depth:4},{id:"pageclosed",text:"pageClosed",depth:4},{id:"预加载动画",text:"预加载动画",depth:3},{id:"全局组件",text:"全局组件",depth:3},{id:"完整插件示例",text:"完整插件示例",depth:3}];function s(o){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",span:"span",...t(),...o.components},{CodeBlock:a,Icon:i}=n;return a||c("CodeBlock"),i||c("Icon"),r(l,{children:[r(n.h1,{id:"插件",children:[e(n.a,{className:"header-anchor",href:"#插件",children:e(n.span,{className:"icon icon-link"})}),"插件"]}),`
`,r(n.div,{className:"note info icon-plug modern",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"plug"})}),`
`,e(n.p,{children:"如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板"}),`
`]}),`
`,r(n.h2,{id:"初始化项目",children:[e(n.a,{className:"header-anchor",href:"#初始化项目",children:e(n.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,e(a,{code:`create-fispo <项目目录名> --plugin
`,language:"bash"}),`
`,r(n.h2,{id:"文件结构",children:[e(n.a,{className:"header-anchor",href:"#文件结构",children:e(n.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,e(n.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,e(a,{code:`.\r
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
    ├── index.ts             # 项目入口文件\r
    └── types                # 类型定义目录\r
        └── types.d.ts       # 类型定义文件
`,language:"md"}),`
`,r(n.h2,{id:"开发插件",children:[e(n.a,{className:"header-anchor",href:"#开发插件",children:e(n.span,{className:"icon icon-link"})}),"开发插件"]}),`
`,r(n.div,{className:"note success icon-cog flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"cog"})}),`
`,r(n.p,{children:["完成初始化后可以使用",e(n.code,{children:"npx fispo dev"}),"命令启动项目"]}),`
`]}),`
`,r(n.h2,{id:"fispoplugin-接口详解",children:[e(n.a,{className:"header-anchor",href:"#fispoplugin-接口详解",children:e(n.span,{className:"icon icon-link"})}),"FispoPlugin 接口详解"]}),`
`,r(n.div,{className:"note primary icon-cogs modern",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"cogs"})}),`
`,e(n.p,{children:"Fispo 插件系统提供了丰富的配置选项和生命周期钩子，让您可以深度定制站点行为。"}),`
`]}),`
`,r(n.h3,{id:"基础配置",children:[e(n.a,{className:"header-anchor",href:"#基础配置",children:e(n.span,{className:"icon icon-link"})}),"基础配置"]}),`
`,r(n.div,{className:"tip info icon-cog",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"cog"})}),`
`,e(n.p,{children:"配置插件的基本属性，如名称、路径别名、全局常量和 Vite 构建设置。"}),`
`]}),`
`,e(a,{code:`import { FispoPlugin } from 'fispo-core/plugin'\r
import { vitePlugin as Plugin } from 'vite'\r
\r
const myPlugin: FispoPlugin = {\r
  name: 'my-custom-plugin',\r
\r
  // 路径别名配置\r
  alias: {\r
    '@': '/src',\r
    '@components': '/src/components',\r
    '@utils': '/src/utils'\r
  },\r
\r
  // 全局常量定义\r
  define: {\r
    'process.env.NODE_ENV': '"development"',\r
    'APP_VERSION': '"1.0.0"',\r
    '__VUE_OPTIONS_API__': 'true'\r
  },\r
\r
  // Vite 配置\r
  vite: {\r
    build: {\r
      rollupOptions: {\r
        output: {\r
          manualChunks: {\r
            vendor: ['react', 'react-dom']\r
          }\r
        }\r
      }\r
    },\r
    css: {\r
      preprocessorOptions: {\r
        scss: {\r
          additionalData: '@import "@/styles/variables.scss";'\r
        }\r
      }\r
    }\r
  }\r
}
`,language:"ts"}),`
`,r(n.h3,{id:"markdown-处理",children:[e(n.a,{className:"header-anchor",href:"#markdown-处理",children:e(n.span,{className:"icon icon-link"})}),"Markdown 处理"]}),`
`,r(n.div,{className:"tip success icon-file-alt",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"file-alt"})}),`
`,e(n.p,{children:"通过配置 remark 和 rehype 插件来扩展 Markdown 的处理能力。"}),`
`]}),`
`,e(a,{code:`import remarkGfm from 'remark-gfm'\r
import remarkPrism from 'remark-prism'\r
import rehypeAutolinkHeadings from 'rehype-autolink-headings'\r
import rehypeSlug from 'rehype-slug'\r
\r
const markdownPlugin: FispoPlugin = {\r
  name: 'markdown-enhancement',\r
\r
  markdown: {\r
    // remark 插件 - 处理 Markdown 语法\r
    remarkPlugins: [\r
      remarkGfm, // GitHub 风格的 Markdown\r
      [remarkPrism, { ignoreMissing: true }] // 代码高亮\r
    ],\r
\r
    // rehype 插件 - 处理 HTML 输出\r
    rehypePlugins: [\r
      rehypeSlug, // 为标题生成 slug\r
      [rehypeAutolinkHeadings, { behavior: 'wrap' }] // 自动链接标题\r
    ]\r
  }\r
}
`,language:"ts"}),`
`,r(n.h3,{id:"文件监听",children:[e(n.a,{className:"header-anchor",href:"#文件监听",children:e(n.span,{className:"icon icon-link"})}),"文件监听"]}),`
`,r(n.div,{className:"tip warning icon-sync",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"sync"})}),`
`,e(n.p,{children:"配置需要监听的文件，以便在文件变化时触发重新构建。"}),`
`]}),`
`,e(a,{code:`const fileWatcherPlugin: FispoPlugin = {\r
  name: 'file-watcher',\r
\r
  watchFiles: [\r
    'src/config.ts',\r
    'src/styles/variables.css',\r
    'custom-scripts/*.js'\r
  ]\r
}
`,language:"ts"}),`
`,r(n.h3,{id:"生命周期钩子",children:[e(n.a,{className:"header-anchor",href:"#生命周期钩子",children:e(n.span,{className:"icon icon-link"})}),"生命周期钩子"]}),`
`,r(n.div,{className:"note primary icon-hourglass-half flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"hourglass-half"})}),`
`,e(n.p,{children:"生命周期钩子提供了在插件运行不同阶段执行自定义逻辑的能力。"}),`
`]}),`
`,r(n.h4,{id:"configbeforeresolved",children:[e(n.a,{className:"header-anchor",href:"#configbeforeresolved",children:e(n.span,{className:"icon icon-link"})}),"configBeforeResolved"]}),`
`,r(n.div,{className:"tip info icon-play-circle",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"play-circle"})}),`
`,e(n.p,{children:"在配置解析之前执行，适合进行预处理操作。"}),`
`]}),`
`,e(a,{code:`const configPlugin: FispoPlugin = {\r
  name: 'config-preprocessor',\r
\r
  configBeforeResolved: () => {\r
    console.log('配置解析前的预处理...')\r
    // 可以在这里进行一些环境检查或配置初始化\r
  }\r
}
`,language:"ts"}),`
`,r(n.h4,{id:"configresolved",children:[e(n.a,{className:"header-anchor",href:"#configresolved",children:e(n.span,{className:"icon icon-link"})}),"configResolved"]}),`
`,r(n.div,{className:"tip success icon-check-circle",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"check-circle"})}),`
`,e(n.p,{children:"在配置解析完成后执行，可以访问完整的配置上下文。"}),`
`]}),`
`,e(a,{code:`const configResolvedPlugin: FispoPlugin = {\r
  name: 'config-processor',\r
\r
  configResolved: (config) => {\r
    console.log('配置解析完成:', config)\r
    // 可以在这里修改或扩展配置\r
    // 添加自定义的全局数据\r
    config.siteData.customSettings = {\r
      enableAnalytics: true,\r
      debugMode: false\r
    }\r
  }\r
}
`,language:"ts"}),`
`,r(n.h4,{id:"beforerenderpage",children:[e(n.a,{className:"header-anchor",href:"#beforerenderpage",children:e(n.span,{className:"icon icon-link"})}),"beforeRenderpage"]}),`
`,r(n.div,{className:"tip warning icon-pencil-alt",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"pencil-alt"})}),`
`,e(n.p,{children:"在页面渲染之前执行，可以修改页面数据。"}),`
`]}),`
`,e(a,{code:`const preRenderPlugin: FispoPlugin = {\r
  name: 'pre-render-processor',\r
\r
  beforeRenderpage: (pageData) => {\r
    console.log('页面渲染前处理:', pageData.pagePath)\r
\r
    // 添加自定义数据\r
    pageData.customData = {\r
      generatedAt: new Date().toISOString(),\r
      version: '1.0.0'\r
    }\r
\r
    // 修改标题\r
    if (pageData.frontmatter?.title) {\r
      pageData.title = \`[自定义] \${pageData.frontmatter.title}\`\r
    }\r
\r
    // 预处理文章列表\r
    if (pageData.articlesList) {\r
      pageData.articlesList = pageData.articlesList.map(article => ({\r
        ...article,\r
        readTime: Math.ceil(article.content.length / 500) // 估算阅读时间\r
      }))\r
    }\r
  }\r
}
`,language:"ts"}),`
`,r(n.h4,{id:"afterrenderpage",children:[e(n.a,{className:"header-anchor",href:"#afterrenderpage",children:e(n.span,{className:"icon icon-link"})}),"afterRenderPage"]}),`
`,r(n.div,{className:"tip info icon-flag",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"flag"})}),`
`,e(n.p,{children:"在页面渲染完成后执行，适合进行后处理操作。"}),`
`]}),`
`,e(a,{code:`const postRenderPlugin: FispoPlugin = {\r
  name: 'post-render-processor',\r
\r
  afterRenderPage: (pageData) => {\r
    console.log('页面渲染完成:', pageData.pagePath)\r
\r
    // 可以在这里进行数据统计、日志记录等\r
    logPageView(pageData.pagePath)\r
\r
    // 或者触发一些副作用\r
    if (pageData.pageType === 'article') {\r
      updateReadingHistory(pageData.title)\r
    }\r
  }\r
}
`,language:"ts"}),`
`,r(n.h4,{id:"pageclosed",children:[e(n.a,{className:"header-anchor",href:"#pageclosed",children:e(n.span,{className:"icon icon-link"})}),"pageClosed"]}),`
`,r(n.div,{className:"tip error icon-power-off",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"power-off"})}),`
`,e(n.p,{children:"在页面关闭时执行，适合进行清理操作。"}),`
`]}),`
`,e(a,{code:`const cleanupPlugin: FispoPlugin = {\r
  name: 'cleanup-handler',\r
\r
  pageClosed: (pageData) => {\r
    console.log('页面关闭:', pageData.pagePath)\r
\r
    // 清理资源\r
    cleanupResources(pageData.pagePath)\r
\r
    // 保存用户数据\r
    saveUnsavedChanges(pageData)\r
\r
    // 发送统计数据\r
    sendAnalyticsData(pageData)\r
  }\r
}
`,language:"ts"}),`
`,r(n.h3,{id:"预加载动画",children:[e(n.a,{className:"header-anchor",href:"#预加载动画",children:e(n.span,{className:"icon icon-link"})}),"预加载动画"]}),`
`,r(n.div,{className:"tip success icon-spinner",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"spinner"})}),`
`,e(n.p,{children:"自定义页面预加载动画，提升用户体验。"}),`
`]}),`
`,e(a,{code:`const preloaderPlugin: FispoPlugin = {\r
  name: 'custom-preloader',\r
\r
  preloader: '/src/components/CustomPreloader.tsx'\r
}
`,language:"ts"}),`
`,r(n.p,{children:[e(n.code,{children:"CustomPreloader.tsx"})," 示例："]}),`
`,e(a,{code:`// src/components/CustomPreloader.tsx\r
import React, { useEffect, useState } from 'react'\r
\r
export default function CustomPreloader() {\r
  const [progress, setProgress] = useState(0)\r
\r
  useEffect(() => {\r
    const timer = setInterval(() => {\r
      setProgress(prev => {\r
        if (prev >= 100) {\r
          clearInterval(timer)\r
          return 100\r
        }\r
        return prev + 10\r
      })\r
    }, 100)\r
\r
    return () => clearInterval(timer)\r
  }, [])\r
\r
  return (\r
    <div className="custom-preloader">\r
      <div className="preloader-spinner">\r
        <div className="spinner-icon"></div>\r
      </div>\r
      <div className="preloader-progress">\r
        <div\r
          className="progress-bar"\r
          style={{ width: \`\${progress}%\` }}\r
        ></div>\r
      </div>\r
      <div className="preloader-text">加载中... {progress}%</div>\r
    </div>\r
  )\r
}
`,language:"tsx"}),`
`,r(n.h3,{id:"全局组件",children:[e(n.a,{className:"header-anchor",href:"#全局组件",children:e(n.span,{className:"icon icon-link"})}),"全局组件"]}),`
`,r(n.div,{className:"tip primary icon-th-large",children:[e(n.span,{className:"tip-icon",children:e(i,{icon:"th-large"})}),`
`,e(n.p,{children:"在页面上挂载全局组件，实现全局功能。"}),`
`]}),`
`,e(a,{code:`const globalComponentsPlugin: FispoPlugin = {\r
  name: 'global-components',\r
\r
  globalComponents: {\r
    path: '/src/components/GlobalComponents.tsx',\r
    props: {\r
      theme: 'default',\r
      showNotifications: true\r
    }\r
  }\r
}
`,language:"ts"}),`
`,r(n.p,{children:[e(n.code,{children:"GlobalComponents.tsx"})," 示例："]}),`
`,e(a,{code:`// src/components/GlobalComponents.tsx\r
import React from 'react'\r
import { usePageData } from '@runtime/hooks'\r
\r
interface GlobalComponentsProps {\r
  theme: string\r
  showNotifications: boolean\r
}\r
\r
export default function GlobalComponents({ theme, showNotifications }: GlobalComponentsProps) {\r
  const { pageData } = usePageData()\r
\r
  return (\r
    <>\r
      {/* 全局通知组件 */}\r
      {showNotifications && (\r
        <div className="global-notification">\r
          欢迎访问 {pageData.siteData.title}!\r
        </div>\r
      )}\r
\r
      {/* 全局主题样式 */}\r
      <div className={\`theme-\${theme}\`}>\r
        {/* 全局背景效果 */}\r
        <div className="global-background"></div>\r
\r
        {/* 全局返回顶部按钮 */}\r
        <button\r
          className="back-to-top"\r
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}\r
        >\r
          ↑\r
        </button>\r
      </div>\r
    </>\r
  )\r
}
`,language:"tsx"}),`
`,r(n.h3,{id:"完整插件示例",children:[e(n.a,{className:"header-anchor",href:"#完整插件示例",children:e(n.span,{className:"icon icon-link"})}),"完整插件示例"]}),`
`,r(n.div,{className:"note warning icon-star flat",children:[e(n.span,{className:"note-icon",children:e(i,{icon:"star"})}),`
`,e(n.p,{children:"综合运用所有功能的高级插件示例。"}),`
`]}),`
`,e(a,{code:`// src/index.ts\r
import { FispoPlugin } from 'fispo-core/plugin'\r
import remarkGfm from 'remark-gfm'\r
import rehypeSlug from 'rehype-slug'\r
\r
const comprehensivePlugin: FispoPlugin = {\r
  name: 'comprehensive-plugin',\r
\r
  // 基础配置\r
  alias: {\r
    '@': '/src',\r
    '@lib': '/src/lib'\r
  },\r
\r
  define: {\r
    'APP_VERSION': '"2.0.0"'\r
  },\r
\r
  // Markdown 增强\r
  markdown: {\r
    remarkPlugins: [remarkGfm],\r
    rehypePlugins: [rehypeSlug]\r
  },\r
\r
  // Vite 配置\r
  vite: {\r
    css: {\r
      preprocessorOptions: {\r
        scss: {\r
          additionalData: '@import "@/styles/variables.scss";'\r
        }\r
      }\r
    }\r
  },\r
\r
  // 文件监听\r
  watchFiles: ['src/config/*.ts'],\r
\r
  // 预加载动画\r
  preloader: '/src/components/CustomPreloader.tsx',\r
\r
  // 全局组件\r
  globalComponents: {\r
    path: '/src/components/GlobalComponents.tsx',\r
    props: {\r
      theme: 'modern',\r
      showNotifications: true\r
    }\r
  },\r
\r
  // 生命周期钩子\r
  configBeforeResolved: () => {\r
    console.log('开始配置处理...')\r
  },\r
\r
  configResolved: (config) => {\r
    config.siteData.customSettings = {\r
      featureFlags: {\r
        newDesign: true,\r
        experimental: false\r
      }\r
    }\r
  },\r
\r
  beforeRenderpage: (pageData) => {\r
    // 添加 SEO 相关数据\r
    pageData.seoData = generateSEOData(pageData)\r
  },\r
\r
  afterRenderPage: (pageData) => {\r
    // 记录页面访问\r
    trackPageView(pageData.pagePath)\r
  },\r
\r
  pageClosed: (pageData) => {\r
    // 清理资源\r
    cleanupPageResources(pageData.pagePath)\r
  }\r
}\r
\r
export default comprehensivePlugin
`,language:"ts"})]})}function f(o={}){const{wrapper:n}={...t(),...o.components};return n?e(n,{...o,children:e(s,{...o})}):s(o)}function c(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default,g as frontmatter,m as toc};
