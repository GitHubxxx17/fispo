import { UserConfig as ViteConfiguration } from "vite";
import { ComponentType } from "react";
import { DefaultThemeConfig } from "./default-theme";
import type { PluggableList } from "unified";
import { FispoPlugin } from "./plugin";

export interface MarkdownOptions {
  remarkPlugins?: PluggableList;
  rehypePlugins?: PluggableList;
}

export interface UserConfig<ThemeConfig = DefaultThemeConfig> {
  base?: string;
  title?: string;
  description?: string;
  theme?: string;
  themeConfig?: ThemeConfig;
  vite?: ViteConfiguration;
  author?: string;
  avatar?: string;
  backgroundImg?: string;
  root?: string;
  postDir?: string;
  public?: string;
  build?: string;
  notFoundImg?: string;
  logo?: string;
  markdown?: MarkdownOptions;
  plugins?: FispoPlugin[];
  preloader?: boolean;
  deploy?: {
    repo: string;
    branch: string;
  };
}

export interface SiteConfig {
  base: string;
  root: string;
  configPath: string;
  siteData: UserConfig;
  postDir: string;
  build: string;
  public: string;
  logo: string;
  deploy?: {
    repo: string;
    branch: string;
  };
}

export type PageType = "home" | "article" | "custom" | "404";

export interface Toc {
  id: string;
  text: string;
  depth: number;
}

export interface FrontMatter {
  title?: string;
  description?: string;
  categories?: string;
  date?: string;
  tags?: string[];
  cover?: string;
}

// 标签
export interface Tags {
  [tag: string]: string[];
}

// 目录
export interface Categories {
  [category: string]: string[];
}

// 文章列表
export interface ArticleData extends FrontMatter {
  path: string;
  info: string;
}

export interface PageDataContext {
  siteData: UserConfig;
  pagePath: string;
  frontmatter: FrontMatter;
  pageType: PageType;
  toc?: Toc[];
  title: string;
  articlesList?: ArticleData[];
  tags?: Tags;
  categories?: Categories;
}

export interface PageModule {
  default: ComponentType;
  frontmatter?: FrontMatter;
  toc: Toc[];
  mdInfo: string;
  [key: string]: unknown;
}

export interface Route {
  path: string;
  element: React.ReactElement;
  filePath: string;
  preload: () => Promise<PageModule>;
}

export interface PageData extends PageDataContext {
  [key: string]: unknown;
}
