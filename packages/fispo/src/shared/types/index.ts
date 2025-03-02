import { UserConfig as ViteConfiguration } from "vite";
import { ComponentType } from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// 文章列表
export interface ArticleData extends FrontMatter {
  path: string;
  info: string;
}

// 底部数据
export interface FooterData {
  message?: string;
  copyright?: string;
}

// 首页横幅数据
export interface BannerData {
  img?: string;
  subtitle?: string;
}

export interface ThemeConfig {
  footer?: FooterData;
  navMenus?: navMenuItem[];
  banner?: BannerData;
}

export interface UserConfig {
  title?: string;
  description?: string;
  themeConfig?: ThemeConfig;
  vite?: ViteConfiguration;
  author?: string;
  avatar?: string;
  backgroundImg?: string;
}

export interface SiteConfig {
  root: string;
  configPath: string;
  siteData: UserConfig;
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

export interface PageData {
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

// 导航栏菜单项
export interface navMenuItem {
  /** 菜单项名称 */
  title: string;
  /** 路径 */
  path: string;
  /** 图标 */
  icon?: IconName;
  /** 子菜单项 */
  children?: navMenuItem[];
}
