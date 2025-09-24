---
title: 插件
---

# 插件

{% note info icon-plug modern %}
如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板
{% endnote %}

## 初始化项目
```bash
create-fispo <项目目录名> --plugin
```

## 文件结构
初始化后，您的项目文件夹将如下所示：

``` md
.
├── fispo.config.ts          # 项目的配置文件
├── package-lock.json        # 锁定依赖包版本的文件
├── package.json             # 项目的元数据和依赖信息文件
├── tsconfig.json            # TypeScript 编译配置文件
├── tsup.config.ts           # tsup 打包工具的配置文件
├── docs                     # 存放博客相关内容
│   ├── post                 # 文章目录（Markdown 文件）
│   │   └── helloworld.md    # 示例文章
│   └── public               # 存放公共资源文件的目录
│       ├── 404.png          # 404 页面显示的图片
│       ├── avatar.jpg       # 用户头像图片
│       ├── banner.png       # 横幅图片
│       ├── bg.png           # 背景图片
│       ├── logo.png         # 项目 logo 图片
│       └── cover            # 封面图片文件夹
│           └── a.jpg        # 封面示例图片
└── src                      # 源代码目录
    ├── index.ts             # 项目入口文件
    └── types                # 类型定义目录
        └── types.d.ts       # 类型定义文件
```

## 开发插件

{% note success icon-cog flat %}
完成初始化后可以使用`npx fispo dev`命令启动项目
{% endnote %}

## FispoPlugin 接口详解

{% note primary icon-cogs modern %}
Fispo 插件系统提供了丰富的配置选项和生命周期钩子，让您可以深度定制站点行为。
{% endnote %}

### 基础配置

{% tip info icon-cog %}
配置插件的基本属性，如名称、路径别名、全局常量和 Vite 构建设置。
{% endtip %}

```ts
import { FispoPlugin } from 'fispo-core/plugin'
import { vitePlugin as Plugin } from 'vite'

const myPlugin: FispoPlugin = {
  name: 'my-custom-plugin',

  // 路径别名配置
  alias: {
    '@': '/src',
    '@components': '/src/components',
    '@utils': '/src/utils'
  },

  // 全局常量定义
  define: {
    'process.env.NODE_ENV': '"development"',
    'APP_VERSION': '"1.0.0"',
    '__VUE_OPTIONS_API__': 'true'
  },

  // Vite 配置
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    }
  }
}
```

### Markdown 处理

{% tip success icon-file-alt %}
通过配置 remark 和 rehype 插件来扩展 Markdown 的处理能力。
{% endtip %}

```ts
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const markdownPlugin: FispoPlugin = {
  name: 'markdown-enhancement',

  markdown: {
    // remark 插件 - 处理 Markdown 语法
    remarkPlugins: [
      remarkGfm, // GitHub 风格的 Markdown
      [remarkPrism, { ignoreMissing: true }] // 代码高亮
    ],

    // rehype 插件 - 处理 HTML 输出
    rehypePlugins: [
      rehypeSlug, // 为标题生成 slug
      [rehypeAutolinkHeadings, { behavior: 'wrap' }] // 自动链接标题
    ]
  }
}
```

### 文件监听

{% tip warning icon-sync %}
配置需要监听的文件，以便在文件变化时触发重新构建。
{% endtip %}

```ts
const fileWatcherPlugin: FispoPlugin = {
  name: 'file-watcher',

  watchFiles: [
    'src/config.ts',
    'src/styles/variables.css',
    'custom-scripts/*.js'
  ]
}
```

### 生命周期钩子

{% note primary icon-hourglass-half flat %}
生命周期钩子提供了在插件运行不同阶段执行自定义逻辑的能力。
{% endnote %}

#### configBeforeResolved

{% tip info icon-play-circle %}
在配置解析之前执行，适合进行预处理操作。
{% endtip %}

```ts
const configPlugin: FispoPlugin = {
  name: 'config-preprocessor',

  configBeforeResolved: () => {
    console.log('配置解析前的预处理...')
    // 可以在这里进行一些环境检查或配置初始化
  }
}
```

#### configResolved

{% tip success icon-check-circle %}
在配置解析完成后执行，可以访问完整的配置上下文。
{% endtip %}

```ts
const configResolvedPlugin: FispoPlugin = {
  name: 'config-processor',

  configResolved: (config) => {
    console.log('配置解析完成:', config)
    // 可以在这里修改或扩展配置
    // 添加自定义的全局数据
    config.siteData.customSettings = {
      enableAnalytics: true,
      debugMode: false
    }
  }
}
```

#### beforeRenderpage

{% tip warning icon-pencil-alt %}
在页面渲染之前执行，可以修改页面数据。
{% endtip %}

```ts
const preRenderPlugin: FispoPlugin = {
  name: 'pre-render-processor',

  beforeRenderpage: (pageData) => {
    console.log('页面渲染前处理:', pageData.pagePath)

    // 添加自定义数据
    pageData.customData = {
      generatedAt: new Date().toISOString(),
      version: '1.0.0'
    }

    // 修改标题
    if (pageData.frontmatter?.title) {
      pageData.title = `[自定义] ${pageData.frontmatter.title}`
    }

    // 预处理文章列表
    if (pageData.articlesList) {
      pageData.articlesList = pageData.articlesList.map(article => ({
        ...article,
        readTime: Math.ceil(article.content.length / 500) // 估算阅读时间
      }))
    }
  }
}
```

#### afterRenderPage

{% tip info icon-flag %}
在页面渲染完成后执行，适合进行后处理操作。
{% endtip %}

```ts
const postRenderPlugin: FispoPlugin = {
  name: 'post-render-processor',

  afterRenderPage: (pageData) => {
    console.log('页面渲染完成:', pageData.pagePath)

    // 可以在这里进行数据统计、日志记录等
    logPageView(pageData.pagePath)

    // 或者触发一些副作用
    if (pageData.pageType === 'article') {
      updateReadingHistory(pageData.title)
    }
  }
}
```

#### pageClosed

{% tip error icon-power-off %}
在页面关闭时执行，适合进行清理操作。
{% endtip %}

```ts
const cleanupPlugin: FispoPlugin = {
  name: 'cleanup-handler',

  pageClosed: (pageData) => {
    console.log('页面关闭:', pageData.pagePath)

    // 清理资源
    cleanupResources(pageData.pagePath)

    // 保存用户数据
    saveUnsavedChanges(pageData)

    // 发送统计数据
    sendAnalyticsData(pageData)
  }
}
```

### 预加载动画

{% tip success icon-spinner %}
自定义页面预加载动画，提升用户体验。
{% endtip %}

```ts
const preloaderPlugin: FispoPlugin = {
  name: 'custom-preloader',

  preloader: '/src/components/CustomPreloader.tsx'
}
```

`CustomPreloader.tsx` 示例：

```tsx
// src/components/CustomPreloader.tsx
import React, { useEffect, useState } from 'react'

export default function CustomPreloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="custom-preloader">
      <div className="preloader-spinner">
        <div className="spinner-icon"></div>
      </div>
      <div className="preloader-progress">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="preloader-text">加载中... {progress}%</div>
    </div>
  )
}
```

### 全局组件

{% tip primary icon-th-large %}
在页面上挂载全局组件，实现全局功能。
{% endtip %}

```ts
const globalComponentsPlugin: FispoPlugin = {
  name: 'global-components',

  globalComponents: {
    path: '/src/components/GlobalComponents.tsx',
    props: {
      theme: 'default',
      showNotifications: true
    }
  }
}
```

`GlobalComponents.tsx` 示例：

```tsx
// src/components/GlobalComponents.tsx
import React from 'react'
import { usePageData } from '@runtime/hooks'

interface GlobalComponentsProps {
  theme: string
  showNotifications: boolean
}

export default function GlobalComponents({ theme, showNotifications }: GlobalComponentsProps) {
  const { pageData } = usePageData()

  return (
    <>
      {/* 全局通知组件 */}
      {showNotifications && (
        <div className="global-notification">
          欢迎访问 {pageData.siteData.title}!
        </div>
      )}

      {/* 全局主题样式 */}
      <div className={`theme-${theme}`}>
        {/* 全局背景效果 */}
        <div className="global-background"></div>

        {/* 全局返回顶部按钮 */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </>
  )
}
```

### 完整插件示例

{% note warning icon-star flat %}
综合运用所有功能的高级插件示例。
{% endnote %}

```ts
// src/index.ts
import { FispoPlugin } from 'fispo-core/plugin'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

const comprehensivePlugin: FispoPlugin = {
  name: 'comprehensive-plugin',

  // 基础配置
  alias: {
    '@': '/src',
    '@lib': '/src/lib'
  },

  define: {
    'APP_VERSION': '"2.0.0"'
  },

  // Markdown 增强
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
  },

  // Vite 配置
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    }
  },

  // 文件监听
  watchFiles: ['src/config/*.ts'],

  // 预加载动画
  preloader: '/src/components/CustomPreloader.tsx',

  // 全局组件
  globalComponents: {
    path: '/src/components/GlobalComponents.tsx',
    props: {
      theme: 'modern',
      showNotifications: true
    }
  },

  // 生命周期钩子
  configBeforeResolved: () => {
    console.log('开始配置处理...')
  },

  configResolved: (config) => {
    config.siteData.customSettings = {
      featureFlags: {
        newDesign: true,
        experimental: false
      }
    }
  },

  beforeRenderpage: (pageData) => {
    // 添加 SEO 相关数据
    pageData.seoData = generateSEOData(pageData)
  },

  afterRenderPage: (pageData) => {
    // 记录页面访问
    trackPageView(pageData.pagePath)
  },

  pageClosed: (pageData) => {
    // 清理资源
    cleanupPageResources(pageData.pagePath)
  }
}

export default comprehensivePlugin
```

