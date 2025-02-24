import { UserConfig as ViteConfiguration } from "vite";

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
