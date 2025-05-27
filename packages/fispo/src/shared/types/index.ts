import { HtmlTagDescriptor, UserConfig as ViteConfiguration } from "vite";
import { ComponentType } from "react";
import { DefaultThemeConfig } from "./default-theme";
import type { PluggableList } from "unified";
import { FispoPlugin } from "./plugin";
import { RouteObject } from "react-router-dom";
import { NavMenuItem } from "./default-theme";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { HighlightJsTheme } from "./highlight";

/**
 * 定义 Markdown 配置选项的接口
 * 包含用于处理 Markdown 的 remark 和 rehype 插件列表
 */
export interface MarkdownOptions {
  /**
   * remark 插件列表，用于在 Markdown 解析阶段进行处理
   */
  remarkPlugins?: PluggableList;
  /**
   * rehype 插件列表，用于在 Markdown 转换为 HTML 阶段进行处理
   */
  rehypePlugins?: PluggableList;
}

/**
 * 用户配置的接口，可用于自定义网站的各种设置
 * @template ThemeConfig 主题配置的类型，默认为 DefaultThemeConfig
 */
export interface UserConfig<ThemeConfig = DefaultThemeConfig> {
  /**
   * 网站的基础路径，通常用于部署时的路径配置
   */
  base?: string;
  /**
   * 网站的标题
   */
  title?: string;
  /**
   * 网站的描述信息
   */
  description?: string;
  /**
   * 网站使用的主题名称
   */
  theme?: Theme<ThemeConfig>;
  /**
   * 主题的配置信息
   */
  themeConfig?: ThemeConfig;
  /**
   * Vite 的配置选项
   */
  vite?: ViteConfiguration;
  /**
   * 网站作者的名称
   */
  author?: string;
  /**
   * 网站作者的头像图片地址
   */
  avatar?: string;
  /**
   * 网站的背景图片地址
   */
  backgroundImg?: string;
  /**
   * 项目的根目录路径
   */
  root?: string;
  /**
   * 文章存放的目录路径
   */
  postDir?: string;
  /**
   * 静态资源的公共目录路径
   */
  public?: string;
  /**
   * 构建输出的目录路径
   */
  build?: string;
  /**
   * 404 页面显示的图片地址
   */
  notFoundImg?: string;
  /**
   * 网站的 logo 图片地址
   */
  logo?: string;
  /**
   * Markdown 相关的配置选项
   */
  markdown?: MarkdownOptions;
  /**
   * 网站使用的插件列表
   */
  plugins?: FispoPlugin[];
  /**
   * 是否启用预加载功能
   */
  preloader?: boolean;
  /**
   * 部署相关的配置信息
   */
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
  /**
   * 要插入到 HTML 文档中的标签描述符数组。
   * 可用于添加自定义的元标签、脚本标签或样式标签等。
   */
  htmlTags?: HtmlTagDescriptor[];
  /**
   * Markdown 代码高亮配置（基于 highlight.js 实现）
   *
   * @description
   * 用于配置代码块在 **深色模式** 和 **浅色模式** 下的语法高亮主题。
   *
   * @example
   * ```typescript
   * codeHighlight: {
   *   dark: "github-dark", // 深色主题（默认值）
   *   light: "github" // 浅色主题（默认值）
   * }
   * ```
   *
   * @remarks
   * - 若未配置 `dark` 或 `light`，将分别使用默认值 `github-dark` 和 `github`。
   * - 主题名称需与 highlight.js 官方主题库一致（见：https://highlightjs.org/static/demo/）。
   */
  codeHighlight?: {
    /** 深色模式下的代码高亮主题 */
    dark?: HighlightJsTheme;
    /** 浅色模式下的代码高亮主题 */
    light?: HighlightJsTheme;
  };
  /**
   * 自定义图标配置，用于标签外挂中的图标显示
   * 可通过标签外挂的 `icon-<name>` 语法引用此处定义的图标
   *
   * 示例配置：
   * ```typescript
   * icons: [{ prefix: 'fas', iconName: 'star' }]
   * ```
   *
   * 对应的标签外挂用法：
   * ```md
   * {% note primary icon-star %}
   * 这是一个带有星星图标的提示
   * {% endnote %}
   * ```
   *
   * 注意：
   * 1. 使用外挂标签的自定义图标功能需先在此处注册才能在标签外挂中使用
   * 2. 标签外挂中使用时需添加前缀 icon-（如 star → icon-star）
   */
  icons?: IconLookup[];
}

/**
 * 网站配置的接口，包含了网站的基础配置信息
 */
export interface SiteConfig {
  /**
   * 网站的基础路径
   */
  base: string;
  /**
   * 项目的根目录路径
   */
  root: string;
  /**
   * 配置文件的路径
   */
  configPath: string;
  /**
   * 用户配置的信息
   */
  siteData: UserConfig;
  /**
   * 文章存放的目录路径
   */
  postDir: string;
  /**
   * 构建输出的目录路径
   */
  build: string;
  /**
   * 静态资源的公共目录路径
   */
  public: string;
  /**
   * 网站的 logo 图片地址
   */
  logo: string;
  /**
   * 部署相关的配置信息
   */
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
}

/**
 * 页面类型的枚举类型
 * 包含了不同类型的页面，如主页、文章页、自定义页和 404 页
 */
export type PageType = "home" | "article" | "custom" | "404";

/**
 * 目录项（TOC）的接口
 * 用于表示文章中的标题信息
 */
export interface Toc {
  /**
   * 标题的唯一标识符
   */
  id: string;
  /**
   * 标题的文本内容
   */
  text: string;
  /**
   * 标题的层级深度
   */
  depth: number;
}

/**
 * 文章前置元数据的接口
 * 包含了文章的标题、描述、分类、日期、标签和封面等信息
 */
export interface FrontMatter {
  /**
   * 文章的标题
   */
  title?: string;
  /**
   * 文章的描述信息
   */
  description?: string;
  /**
   * 文章所属的分类
   */
  categories?: string;
  /**
   * 文章的发布日期
   */
  date?: string;
  /**
   * 文章的更新日期
   */
  updated?: string;
  /**
   * 文章的标签列表
   */
  tags?: string[];
  /**
   * 文章的封面图片地址
   */
  cover?: string;
  /**
   * 文章的信息
   */
  info?: string;
}

/**
 * 标签的接口
 * 以标签名为键，文章路径列表为值
 */
export interface Tags {
  [tag: string]: string[];
}

/**
 * 分类的接口
 * 以分类名为键，文章路径列表为值
 */
export interface Categories {
  [category: string]: string[];
}

/**
 * 文章数据的接口
 * 包含了文章的前置元数据以及文章的路径和信息
 */
export interface ArticleData extends FrontMatter {
  /**
   * 文章的路径
   */
  path: string;
}

/**
 * 页面数据上下文的接口
 * 包含了网站配置、页面路径、前置元数据、页面类型、目录信息、标题、文章列表、标签和分类等信息
 */
export interface PageDataContext {
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
   * 当前代码高亮主题
   */
  curCodeTheme?: HighlightJsTheme;
}

/**
 * 页面模块的接口
 * 包含了页面的默认组件、前置元数据、目录信息、Markdown 信息等
 */
export interface PageModule {
  /**
   * 页面的默认组件
   */
  default: ComponentType;
  /**
   * 页面的前置元数据
   */
  frontmatter?: FrontMatter;
  /**
   * 页面的目录信息
   */
  toc: Toc[];
  /**
   * Markdown 的信息
   */
  mdInfo: string;
  /**
   * 其他未知的属性
   */
  [key: string]: unknown;
}

/**
 * 路由的接口
 * 包含了路由的路径、元素、文件路径和预加载方法
 */
export interface Route {
  /**
   * 路由的路径
   */
  path: string;
  /**
   * 路由对应的 React 元素
   */
  element: React.ReactElement;
  /**
   * 路由对应的文件路径
   */
  filePath: string;
  /**
   * 预加载页面模块的方法
   */
  preload: () => Promise<PageModule>;
}

/**
 * 页面数据的接口定义，继承自 PageDataContext 接口
 * 该接口除了包含 PageDataContext 接口的所有属性外，
 * 还允许添加任意额外的键值对，键为字符串类型，值为未知类型。
 *
 * 主要用于：
 * 1. 在构建过程中存储页面的元数据
 * 2. 传递自定义的页面属性到主题模板
 * 3. 通过 frontmatter 或插件动态扩展页面数据
 */
export interface PageData extends PageDataContext {
  /**
   * 允许动态添加的任意键值对
   */
  [key: string]: unknown;
}

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

/**
 * 布局组件路由配置
 * 基于 React Router 的 RouteObject 扩展
 * 用于定义页面与布局组件之间的映射关系
 *
 * 示例：
 * [
 *   {
 *     path: "/",
 *     element: <HomeLayout />,
 *     children: [...]
 *   },
 *   {
 *     path: "/posts/:id",
 *     element: <PostLayout />
 *   }
 * ]
 */
export type LayoutRoutes = RouteObject[];

/**
 * 基础主题配置接口
 * 定义了所有主题都可以使用的通用配置选项
 */
export interface BaseThemeConfig {
  /**
   * 导航菜单配置
   * 定义网站顶部或侧边导航栏的菜单项
   */
  navMenus?: NavMenuItem[];
}

export { NavMenuItem };
