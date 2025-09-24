---
title: 主题
---

# 主题

{% note info icon-palette modern %}
如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板
{% endnote %}

## 初始化项目
```bash
create-fispo <项目目录名> --theme
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
    ├── config.ts            # 项目配置相关代码文件
    ├── index.ts             # 项目入口文件
    ├── layout               # 布局组件目录
    │   ├── index.module.scss # 布局组件的样式文件
    │   ├── index.tsx        # 布局组件的入口文件
    │   ├── DocLayout        # 文档布局组件目录
    │   │   ├── index.module.scss # 文档布局组件的样式文件
    │   │   └── index.tsx    # 文档布局组件文件
    │   └── HomeLayout       # 首页布局组件目录
    │       ├── index.module.scss # 首页布局组件的样式文件
    │       └── index.tsx    # 首页布局组件文件
    ├── style                # 样式文件目录
    │   ├── base.css         # 基础样式文件
    │   ├── docs.css         # 文档页面样式文件
    │   └── vars.css         # 样式变量文件
    └── types                # 类型定义目录
        ├── index.ts         # 类型定义入口文件
        └── types.d.ts       # 类型定义文件
```

## 开发主题

{% note success icon-cog flat %}
完成初始化后可以使用`npx fispo dev`命令启动项目
{% endnote %}

## 组件 API

{% note primary icon-puzzle-piece modern %}
Fispo 提供了一系列预置组件，可以直接在主题开发中使用：
{% endnote %}

### Icon 组件

{% tip info icon-image %}
图标组件，用于显示各种图标。
{% endtip %}

#### 使用示例
```tsx
import { Icon } from 'fispo-core/theme'

// 基础使用
<Icon name="github" />

// 带尺寸设置
<Icon name="twitter" size={24} />

// 自定义样式
<Icon name="heart" size={32} color="#ff6b6b" />
```

#### 属性列表

| 属性名 | 类型 | 默认值 | 必需 | 描述 |
|--------|------|--------|------|------|
| name | `string` | - | ✅ | 图标名称 |
| size | `number` | `16` | ❌ | 图标大小（像素） |
| color | `string` | - | ❌ | 图标颜色 |
| className | `string` | - | ❌ | 自定义 CSS 类名 |
| style | `React.CSSProperties` | - | ❌ | 自定义行内样式 |

### Link 组件

{% tip success icon-link %}
链接组件，支持内部路由跳转和外部链接。
{% endtip %}

#### 使用示例
```tsx
import { Link } from 'fispo-core/theme'

// 内部链接
<Link to="/about">关于我们</Link>

// 外部链接
<Link to="https://github.com" external>GitHub</Link>

// 自定义链接
<Link to="/contact" className="custom-link" external={false}>
  联系我们
</Link>
```

#### 属性列表

| 属性名 | 类型 | 默认值 | 必需 | 描述 |
|--------|------|--------|------|------|
| to | `string` | - | ✅ | 链接地址 |
| external | `boolean` | `false` | ❌ | 是否为外部链接 |
| className | `string` | - | ❌ | 自定义 CSS 类名 |
| children | `React.ReactNode` | - | ✅ | 链接内容 |
| target | `string` | `_self` | ❌ | 链接目标窗口 |
| rel | `string` | - | ❌ | 链接关系属性 |

### Image 组件

{% tip warning icon-camera %}
图片组件，支持懒加载和响应式优化。
{% endtip %}

#### 使用示例
```tsx
import { Image } from 'fispo-core/theme'

// 基础图片
<Image src="/logo.png" alt="Logo" />

// 懒加载图片
<Image src="/banner.jpg" lazyload alt="Banner" />

// 响应式图片
<Image
  src="/hero-desktop.jpg"
  srcSet={{
    default: '/hero-mobile.jpg',
    tablet: '/hero-tablet.jpg',
    desktop: '/hero-desktop.jpg'
  }}
  alt="Hero"
/>

// 带加载状态
<Image
  src="/large-image.jpg"
  lazyload
  placeholder="/placeholder.jpg"
  alt="Large Image"
  onLoad={() => console.log('图片加载完成')}
  onError={() => console.log('图片加载失败')}
/>
```

#### 属性列表

| 属性名 | 类型 | 默认值 | 必需 | 描述 |
|--------|------|--------|------|------|
| src | `string` | - | ✅ | 图片地址 |
| alt | `string` | - | ✅ | 图片替代文本 |
| lazyload | `boolean` | `false` | ❌ | 是否启用懒加载 |
| placeholder | `string` | - | ❌ | 占位图片地址 |
| srcSet | `Record<string, string>` | - | ❌ | 响应式图片源集 |
| className | `string` | - | ❌ | 自定义 CSS 类名 |
| style | `React.CSSProperties` | - | ❌ | 自定义行内样式 |
| onLoad | `() => void` | - | ❌ | 图片加载完成回调 |
| onError | `() => void` | - | ❌ | 图片加载失败回调 |
| width | `number \| string` | - | ❌ | 图片宽度 |
| height | `number \| string` | - | ❌ | 图片高度 |

### GetLayoutRoutes 组件

{% tip error icon-route %}
路由配置组件，用于渲染和匹配定义的路由结构。
{% endtip %}

#### 使用示例
```tsx
import { GetLayoutRoutes } from 'fispo-core/theme'
import type { LayoutRoutes } from 'fispo-core/types'

// 基础使用
function Layout({ pageData }: { pageData: PageData }) {
  const routes: LayoutRoutes = [
    {
      path: "/",
      element: <HomeLayout pageData={pageData} />
    },
    {
      path: "/docs/*",
      element: <DocLayout pageData={pageData} />
    },
    {
      path: "/blog/*",
      element: <BlogLayout pageData={pageData} />
    },
    {
      path: "*",
      element: <NotFoundLayout pageData={pageData} />
    }
  ]

  return (
    <div className="layout">
      <GetLayoutRoutes routes={routes} />
    </div>
  )
}

// 动态路由配置
function DynamicLayout({ pageData }: { pageData: PageData }) {
  const routes: LayoutRoutes = useMemo(() => {
    const { pagePath } = pageData

    // 根据页面路径动态生成路由
    return [
      {
        path: "/",
        element: <HomeLayout pageData={pageData} />
      },
      {
        path: "/theme/*",
        element: <ThemeMarketLayout pageData={pageData} />
      },
      {
        path: "/plugin/*",
        element: <PluginMarketLayout pageData={pageData} />
      },
      {
        path: "*",
        element: <DocLayout pageData={pageData} />
      }
    ]
  }, [pageData])

  return (
    <div className="layout">
      <GetLayoutRoutes routes={routes} />
    </div>
  )
}
```

#### 属性列表

| 属性名 | 类型 | 默认值 | 必需 | 描述 |
|--------|------|--------|------|------|
| routes | `LayoutRoutes` | - | ✅ | 路由配置数组 |

#### LayoutRoutes 类型定义

`LayoutRoutes` 是一个路由配置数组，每个路由对象包含以下属性和类型：

| 属性名 | 类型 | 必需 | 描述 |
|--------|------|------|------|
| path | `string` | ✅ | 路由路径，支持通配符 `*` |
| element | `React.ReactElement` | ✅ | 要渲染的 React 元素 |

#### 路由路径说明

- **精确路径**：`"/"` 匹配根路径
- **通配符路径**：`"/docs/*"` 匹配 `/docs` 下的所有子路径
- **兜底路径**：`"*"` 匹配所有未匹配的路径，通常用于 404 页面

#### 使用注意事项

1. **路由匹配顺序**：按数组顺序从上到下匹配，第一个匹配的路由会被渲染
2. **通配符使用**：`*` 可以匹配任意多级路径，如 `/docs/article/how-to`
3. **组件传递**：每个路由的 `element` 可以接收 `pageData` 属性用于数据传递
4. **性能优化**：建议使用 `useMemo` 包装路由配置，避免不必要的重新渲染


## 页面数据结构

在 layout/index.ts 中，页面数据会作为 props 传入，您可以通过这些数据自由开发博客主题：

```ts
/**
 * 页面数据上下文的接口
 * 包含了网站配置、页面路径、前置元数据、页面类型、目录信息、标题、文章列表、标签和分类等信息
 */
export interface PageData {
  /**
   * 网站的用户配置信息
   */
  siteData: UserConfig;
  /**
   * 页面的路径
   */
  pagePath: string;
  /**
   * 页面的前置元数据
   */
  frontmatter: FrontMatter;
  /**
   * 页面的类型
   */
  pageType: PageType;
  /**
   * 页面的目录信息
   */
  toc?: Toc[];
  /**
   * 页面的标题
   */
  title: string;
  /**
   * 文章列表
   */
  articlesList?: ArticleData[];
  /**
   * 标签信息
   */
  tags?: Tags;
  /**
   * 分类信息
   */
  categories?: Categories;
  /**
   * 允许动态添加的任意键值对
   */
  [key: string]: unknown;
}
```

## 辅助函数

{% note modern icon-tools %}
Fispo 提供了多种辅助函数来简化主题开发：
{% endnote %}

### 存储管理

{% note info icon-database flat %}
提供本地存储和会话存储的统一接口，支持降级策略。
{% endnote %}

```tsx
import {
  localGetData, localSaveData, localRemoveData, localClear,
  sessionGetData, sessionSaveData, sessionRemoveData, sessionClear,
  inBrowser
} from 'fispo-core/helper'

// 本地存储操作
localSaveData('user-settings', { theme: 'dark' })
const settings = localGetData('user-settings')
localRemoveData('user-settings')
localClear()

// 会话存储操作
sessionSaveData('temp-data', { sessionId: '123' })
const tempData = sessionGetData('temp-data')

// 检查是否在浏览器环境
if (inBrowser()) {
  console.log('在浏览器中运行')
}
```

### 滚动管理

{% note success icon-arrows-alt-v flat %}
提供滚动事件管理、方向检测和锚点导航功能。
{% endnote %}

```tsx
import {
  scrollManager,
  type Direction,
  type ScrollCallback
} from 'fispo-core/helper'

// 初始化滚动管理器
scrollManager.init()

// 设置导航栏高度
scrollManager.setNavHeight(80)

// 设置导航栏是否滚动折叠
scrollManager.setNavIsScrollHidden(true)

// 添加滚动回调
const handleScroll: ScrollCallback = (direction, isTop) => {
  if (direction === 'down') {
    console.log('向下滚动')
  } else {
    console.log('向上滚动')
  }

  if (isTop) {
    console.log('已滚动到顶部')
  }
}

scrollManager.add(handleScroll)

// 滚动到指定元素
const targetElement = document.getElementById('section1')
scrollManager.scrollToTarget(targetElement, true) // 平滑滚动

// 移除回调
scrollManager.remove(handleScroll)

// 销毁滚动管理器
scrollManager.destroy()
```

### 主题管理

{% note warning icon-lightbulb flat %}
提供深色/浅色主题切换的多标签页同步功能。
{% endnote %}

```tsx
import { useTheme } from 'fispo-core/helper'
import { Icon } from 'fispo-core/theme'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-toggle">
      <span title="切换黑白主题" onClick={toggleTheme}>
        {/* 根据当前主题显示不同的图标 */}
        <Icon icon={theme === "light" ? "sun" : "moon"} />
      </span>
    </div>
  )
}

// 在导航栏中使用主题切换
function NavWithTheme() {
  const { theme, toggleTheme } = useTheme()

  const renderTools = () => (
    <div className="nav-tools">
      <div className="nav-tools-item">
        <span title="切换黑白主题" onClick={toggleTheme}>
          <Icon icon={theme === "light" ? "sun" : "moon"} />
        </span>
      </div>
      {/* 其他工具项 */}
    </div>
  )

  return <nav>{renderTools()}</nav>
}

// 自定义主题键
function CustomThemeToggle() {
  const { theme, toggleTheme } = useTheme({ themeKey: 'CUSTOM_THEME' })

  return (
    <div className="custom-theme-toggle">
      <span title="切换自定义主题" onClick={toggleTheme}>
        <Icon icon={theme === "light" ? "sun" : "moon"} />
        <span className="theme-label">自定义主题: {theme}</span>
      </span>
    </div>
  )
}
```

#### 实际应用示例

参考导航栏组件的实际实现：

```tsx
import React from 'react'
import { useTheme } from 'fispo-core/helper'
import { Icon } from 'fispo-core/theme'
import styles from './Nav.module.scss'

function NavTools() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="nav-tools-item">
        <span title="切换黑白主题" onClick={toggleTheme}>
          <Icon icon={theme === "light" ? "sun" : "moon"} />
        </span>
      </div>
      {/* 其他导航工具项 */}
    </>
  )
}

// 响应式导航栏
function ResponsiveNav() {
  const { theme, toggleTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  return (
    <nav>
      <div className="nav-left">
        {/* 左侧内容 */}
      </div>
      <div className="nav-right">
        <div className="nav-tools">
          <div className="nav-tools-item">
            <span title="切换黑白主题" onClick={toggleTheme}>
              <Icon icon={theme === "light" ? "sun" : "moon"} />
            </span>
          </div>
        </div>
        {/* 移动端菜单按钮 */}
        <div className="mobile-menu-toggle">
          <Icon icon="bars" />
        </div>
      </div>
    </nav>
  )
}
```

### 防抖函数

{% note primary icon-clock flat %}
提供函数防抖功能，优化高频事件处理性能。
{% endnote %}

```tsx
import { debounce } from 'fispo-core/helper'

// 创建防抖函数
const debouncedSearch = debounce((query: string) => {
  console.log('搜索:', query)
}, 300)

// 使用防抖函数
debouncedSearch('hello')
debouncedSearch('world') // 只会执行最后一次
```

### 交叉观察器

{% note default icon-eye flat %}
提供元素进入视口的检测功能，实现懒加载和动画触发。
{% endnote %}

```tsx
import { useIntersectionObserver } from 'fispo-core/helper'

function LazyComponent() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  })

  return (
    <div ref={ref}>
      {isIntersecting ? '内容已加载' : '加载中...'}
    </div>
  )
}
```

### 日期处理

{% note info icon-calendar-alt flat %}
提供日期格式化和相对时间处理功能。
{% endnote %}

```tsx
import { formatDate, formatTimeAgo } from 'fispo-core/helper'

// 格式化日期
const date = new Date()
const formattedDate = formatDate(date, 'YYYY-MM-DD') // 2024-01-01

// 格式化相对时间
const timeAgo = formatTimeAgo(new Date('2024-01-01')) // "2天前"
```