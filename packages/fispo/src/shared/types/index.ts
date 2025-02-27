import { UserConfig as ViteConfiguration } from "vite";
import { ComponentType } from "react";

export interface ArticleList {
  [path: string]: FrontMatter;
}

export interface Footer {
  message?: string;
  copyright?: string;
}

export interface ThemeConfig {
  footer?: Footer;
  navMenus?: navMenuItem[];
}

export interface UserConfig {
  title?: string;
  description?: string;
  themeConfig?: ThemeConfig;
  vite?: ViteConfiguration;
  articleList?: ArticleList;
}

export interface SiteConfig {
  root: string;
  configPath: string;
  siteData: UserConfig;
}

export type PageType = "home" | "article" | "custom" | "404";

export interface Header {
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

export interface PageData {
  siteData: UserConfig;
  pagePath: string;
  frontmatter: FrontMatter;
  pageType: PageType;
  toc?: Header[];
}

export interface PageModule {
  default: ComponentType;
  frontmatter?: FrontMatter;
  [key: string]: unknown;
}

// 导航栏菜单项
export interface navMenuItem {
  /** 菜单项名称 */
  title: string;
  /** 路径 */
  path: string;
  /** 图标 */
  icon?: string;
  /** 子菜单项 */
  children?: navMenuItem[];
}
