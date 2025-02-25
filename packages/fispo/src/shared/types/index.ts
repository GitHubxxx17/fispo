import { UserConfig as ViteConfiguration } from "vite";
import { ComponentType } from "react";

export type NavItemWithLink = {
  text: string;
  link: string;
};

export interface ArticleList {
  [path: string]: Article[];
}

export type Article = {
  title: string;
  link: string;
  createTime: string;
  updateTime: string;
  tag: string[];
  sort: string;
};

export interface Footer {
  message?: string;
  copyright?: string;
}

export interface ThemeConfig {
  nav?: NavItemWithLink[];
  articleList?: ArticleList;
  footer?: Footer;
}

export interface UserConfig {
  title?: string;
  description?: string;
  themeConfig?: ThemeConfig;
  vite?: ViteConfiguration;
}

export interface SiteConfig {
  root: string;
  configPath: string;
  siteData: UserConfig;
}

export type PageType = "home" | "article" | "tag" | "404";

export interface Header {
  id: string;
  text: string;
  depth: number;
}

export interface FrontMatter {
  title?: string;
  description?: string;
  pageType?: PageType;
  sidebar?: boolean;
  outline?: boolean;
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
