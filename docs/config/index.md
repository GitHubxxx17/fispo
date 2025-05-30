---
title: 配置项
---

# 配置项

在配置文件 `fispo.config.ts` 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。

---

## 基础配置

### base
**类型**：`string`  
**默认值**：`/`  
**详情**：  
部署站点的基础路径。用于配置站点在非根域名下的部署场景。  
- 必须是以斜杠开始和结束的绝对路径（如 `/basePath`）
- 会自动作为前缀添加到其他以 `/` 开头的路径中（head 标签中的属性除外）
- 示例：若部署到 `https://example.com/blog`，应设置为 `"/blog"`

---

### title
**类型**：`string`  
**默认值**：`fispo`  
**详情**：  
网站的全局标题，将显示在浏览器标签页和默认的 SEO 信息中。  
- 建议保持简洁（通常不超过 60 个字符）
- 示例：`XXX的个人博客`

---

### description
**类型**：`string`  
**默认值**：`fispo`  
**详情**：  
网站的元描述，用于 SEO 和社交媒体分享。  
- 建议控制在 150-160 个字符之间
- 示例：`"专注于分享现代Web开发技术，包含Vue、React、Node.js等前沿技术实践"`

---

### theme
**类型**：`Theme`  
**默认值**：无 
**详情**：  
指定使用的主题名称。  
- npm 主题包（`npm-package-name`）
- 需确保主题包已正确安装
- 示例：
```ts
import { defineConfig } from "fispo-core";
import theme from "@fispo/particle/config";
import { ThemeConfig } from "@fispo/particle";

export default defineConfig<ThemeConfig>({
  title: "fispo的个人博客",
  author: "fispo",
  description: "学无止境",
  notFoundImg: "/404.png",
  theme: theme,
  themeConfig: {
    navMenus: [
      {
        title: "首页",
        path: "/",
        icon: {
          prefix: "fas",
          iconName: "home",
        },
      },
      {
        title: "标签",
        path: "/tag",
        icon: {
          prefix: "fas",
          iconName: "tag",
        },
      },
      {
        title: "分类",
        path: "/category",
        icon: {
          prefix: "fas",
          iconName: "folder-open",
        },
      },
      {
        title: "关于",
        path: "/about/",
        icon: {
          prefix: "fas",
          iconName: "heart",
        },
      },
    ],
  },
});
```

**主题描述对象结构**：
```ts
/**
 * 主题配置接口
 * @template ThemeConfig 特定主题的配置类型，默认为 unknown
 */
export interface Theme<ThemeConfig = unknown> {
  /**
   * 主题名称，需全局唯一
   * 示例："fispo-theme-default"
   */
  name: string;

  /**
   * 主题布局文件的路径
   * 可以是绝对路径或相对于项目根目录的路径
   * 示例：join(__dirname, "..", "src", "index.ts")
   */
  layoutPath: string;

  /**
   * 主题的配置选项
   * 不同主题可能有不同的配置结构
   */
  config: ThemeConfig;

  /**
   * 主题内置的插件列表
   * 这些插件会在主题加载时自动注册
   */
  plugins?: FispoPlugin[];
}
```
---

### themeConfig
**类型**：`ThemeConfig`（泛型参数）  
**默认值**：`<DefaultThemeConfig>` [默认主题配置](#默认主题配置)
**详情**：  
主题的个性化配置对象，具体配置项由所选主题决定。  
- 可包含导航栏配置、侧边栏配置等
- 示例：
  ```ts
  themeConfig: {
    navMenus: [
      {
        title: "首页",
        path: "/",
        icon: {
          prefix: "fas",
          iconName: "home",
        },
      },
      {
        title: "标签",
        path: "/tag",
        icon: {
          prefix: "fas",
          iconName: "tag",
        },
      },
      {
        title: "分类",
        path: "/category",
        icon: {
          prefix: "fas",
          iconName: "folder-open",
        },
      },
      {
        title: "关于",
        path: "/about/",
        icon: {
          prefix: "fas",
          iconName: "heart",
        },
      },
    ],
  },
  ```

---

### vite
**类型**：`ViteConfiguration`  
**默认值**：`{}`  
**详情**：  
Vite 构建工具的配置选项。  
- 支持所有 [Vite 配置项](https://vitejs.dev/config/)
- 常用配置包括：
  - `build`: 构建选项
  - `server`: 开发服务器配置
  - `plugins`: Vite 插件
- 示例：
  ```ts
  vite: {
    server: {
      port: 8080
    }
  }
  ```

---

### author
**类型**：`string`  
**默认值**：`xxx`  
**详情**：  
网站作者的名称，用于文章元数据和版权声明。  

---

### avatar
**类型**：`string`  
**默认值**：`/avatar.jpg`  
**详情**：  
作者头像的 URL 地址或本地路径。  
- 支持相对路径（相对于 `public` 目录）
- 推荐尺寸：正方形（如 200x200px）
- 示例：`"/images/avatar.jpg"`

---

### backgroundImg
**类型**：`string`  
**默认值**：`/bg.png`  
**详情**：  
网站背景图像的 URL 或本地路径。  
- 示例：`"/images/bg-pattern.png"`

---

### root .  
**类型**：`string`  
**默认值**：`docs`  
**详情**：  
项目的根目录路径。  
- 当配置文件不在项目根目录时需要配置
- 示例：`src`

---

### postDir
**类型**：`string`  
**默认值**：`/post`  
**详情**：  
存放 Markdown 文章的目录路径。  
- 相对于 `root` 的路径
- 支持嵌套目录结构
- 示例：`"src/articles"`

---

### public
**类型**：`string`  
**默认值**：`public`  
**详情**：  
静态资源目录路径。  
- 该目录下的文件会被直接复制到输出目录

---

### build
**类型**：`string`  
**默认值**：`build`  
**详情**：  
构建输出的目标目录。  
- 相对于 `root` 的路径

---

### notFoundImg
**类型**：`string`  
**默认值**：`/404.png`  
**详情**：  
自定义 404 页面显示的图片。  

---

### logo
**类型**：`string`  
**默认值**：`/logo.png`  
**详情**：  
网站 Logo 的 URL 或本地路径。 

---

### markdown
**类型**：`MarkdownOptions`  
**默认值**：`{}`  
**详情**：  
Markdown 处理配置项。  
**可用选项**：
```ts
interface MarkdownOptions {
  /**
   * remark 插件列表，用于在 Markdown 解析阶段进行处理
   */
  remarkPlugins?: PluggableList;
  /**
   * rehype 插件列表，用于在 Markdown 转换为 HTML 阶段进行处理
   */
  rehypePlugins?: PluggableList;
}
```


---

### plugins
**类型**：`FispoPlugin[]`  
**默认值**：`[]`  
**详情**：  
- 要启用的插件列表。  
- 需要确保已安装了相关插件。
**示例**：
```js
plugins: [
  preloaderPlugin(),
  aplayerPlugin({
    server: "netease",
    id: "2540031947",
    type: "playlist",
    mini: true,
  }),
],
```
---

### preloader
**类型**：`boolean`  
**默认值**：`false`  
**详情**：  
是否启用页面预加载动画。  
- 启用后会在页面加载时显示加载动画
- 部分主题可能提供自定义动画的配置项

---

### deploy
**类型**：`object`  
**默认值**：`{ branch: gh-pages, repo: '' }`  
**详情**：  
部署配置对象。  
**可用选项**：
``` ts
deploy?: {
    /**
     * 部署的仓库地址
     */
    repo: string;
    /**
     * 部署的分支名称
     */
    branch: string;
};
```
**完整示例**：
```js
deploy: {
  repo: git@github.com:myorg/myrepo.git,
  branch: gh-pages
}
```

---

### htmlTags
**类型**：`HtmlTagDescriptor[]`  
**默认值**：`[]`  
**详情**：  
自定义 HTML 标签注入配置。  

**标签描述对象结构**：
```ts
interface HtmlTagDescriptor {
  tag: string
  attrs?: Record<string, string>
  children?: string | string[]
  injectTo?: head | body | head-prepend | body-prepend
}
```

**示例**：
```js
htmlTags: [
  // 添加 Google Analytics
  {
    tag: script,
    attrs: { async: , src: https://analytics.example.com/script.js },
    injectTo: head
  },
  
  // 添加自定义样式
  {
      tag: "link",
      attrs: {
        rel: "stylesheet",
        href: "/.fispo/custom.css",
      },
      injectTo: "head",
    },
]
```

---

### highlighter
**类型**：`object`  
**默认值**：`{
  dark: "github-dark", // 深色主题（默认值）
  light: "github" // 浅色主题（默认值）
}`  
**详情**：  
Markdown 代码高亮配置（基于 highlight.js 实现）
主题名称需与 highlight.js 官方主题库一致（见：https://highlightjs.org/demo ）。

**可用选项**：
```ts
codeHighlight?: {
    /** 深色模式下的代码高亮主题 */
    dark?: HighlightJsTheme;
    /** 浅色模式下的代码高亮主题 */
    light?: HighlightJsTheme;
};
```

**示例**：
``` ts
codeHighlight: {
  dark: "tomorrow-night-bright",
  light: "tokyo-night-dark",
},
```

---

### icons
**类型**：`IconLookup[]`  
**默认值**：`[]`  
**详情**：  
自定义图标配置，用于标签外挂中的图标显示
可通过[标签外挂](/guide/writing/markdown#标签外挂)的 `icon-<name>` 语法引用此处定义的图标
  1. 使用外挂标签的自定义图标功能需先在此处注册才能在标签外挂中使用
  2. 标签外挂中使用时需添加前缀 icon-（如 star → icon-star）

**可用选项**：
```ts
interface IconLookup {
  // 图标库前缀（用于区分不同图标集）
  prefix: IconPrefix;
  // 图标名称（需与前缀对应的图标库中的名称一致）
  iconName: IconName;
}
```

**示例**：
``` ts
icons: [
  {
    prefix: "fas",
    iconName: "palette",
  },
  {
    prefix: "fas",
    iconName: "pen-fancy",
  }
],
```

---
### publish_date
**类型**：`string`  
**默认值**：`""`  
**详情**：  
- 网站开始运行时间
- 示例：2025-01-01 00:00:00
---


## 默认主题配置

### navMenus
**类型**：`navMenuItem[]`
**默认值**：`[]`
**详情**：
配置导航栏菜单项及其层级结构
```ts
/**
 * 导航栏菜单项的接口定义
 * 用于描述导航栏中每个菜单项的结构和属性
 */
export interface NavMenuItem {
  /**
   * 菜单项的显示名称
   */
  title: string;
  /**
   * 菜单项对应的路径，点击菜单项时会导航到该路径
   */
  path: string;
  /**
   * 菜单项的图标
   * 使用 Font Awesome 的 IconLookup 类型，可通过 `faHome` 等形式引用
   * 示例: { prefix: 'fas', iconName: 'home' }
   */
  icon?: IconLookup;
  /**
   * 子菜单项数组，可选属性
   * 若该菜单项有子菜单，可通过此属性定义子菜单项
   */
  children?: NavMenuItem[];
}
```
`IconLookup`类型为 fontawesome 图标库中的图标类型。

>Fispo集成了 [fontawesome](https://fontawesome.com.cn/v5) 图标库，您可以在该图标库的网站查找需要的图标。


---

### banner
**类型：**`BannerData`
**默认值**：`{ img: "/banner.png" }`
**详情**：
首页横幅配置
**配置项**：
```ts
interface BannerData {
  /** 横幅图片地址 */
  img?: string;
  /** 横幅副标题文字 */
  subtitle?: string;
}
```
**示例**：
```ts
banner: {
  img: '/images/home-bg.jpg',
  subtitle: '记录技术成长之路'
}
```

---


### sidebar

**类型**：`Sidebar`
**默认值**：`{}`
**详情**：
侧边栏综合配置
**基础配置**：
```ts
interface Sidebar {
  /** 是否启用侧边栏 */
  enable?: boolean;
  /** 是否默认折叠 */
  hide?: boolean;
  /** 显示位置 */
  position?: "left" | "right";
  // 各卡片配置...
}
```

#### card_author 作者卡片
```ts
card_author?: {
  enable?: boolean;       // 是否显示
  description?: string;   // 个性签名
  button?: {              // 联系按钮
    enable?: boolean;     // 显示按钮
    icon?: IconName;      // 按钮图标
    text?: string;        // 按钮文字
    link?: string;        // 跳转链接
  };
}
```

#### card_announcement 公告卡片
```ts
card_announcement?: {
  enable?: boolean;     // 是否显示
  content?: string;     // 公告内容（支持Markdown）
};
```

#### card_recent_post 最近文章
```ts
card_recent_post?: {
  enable?: boolean;
  limit?: number;       // 显示数量（默认5）
  sort?: "date" | "updated";  // 排序方式
};
```

#### card_categories 分类
```ts
card_categories?: {
  enable?: boolean;
  limit?: number;       // 显示前N个分类（默认8）
};
```

#### card_tags 标签云
```ts
card_tags?: {
  enable?: boolean;
  limit?: number;       // 显示标签数量（默认15）
};
```
#### card_webinfo 网站信息
```ts
card_webinfo?: {
  enable?: boolean;
  post_count?: boolean;      // 显示文章总数
  last_push_date?: boolean;  // 最后更新时间
  run_time?: boolean;        // 站点运行时间
  site_uv?: boolean;        // 显示站点总访客数
  site_pv?: boolean;       // 显示站点总访问量

};
```

---

### footer
**类型**：`FooterData`
**默认值**：`{}`
**详情**：
页脚区域配置

**配置项**：
```ts
interface FooterData {
  message?: string;     // 底部提示信息
  copyright?: string;   // 版权声明
}
```


### page_pv
**类型**：`boolean`
**默认值**：`true`
**详情**：
显示单页文章的访问量

