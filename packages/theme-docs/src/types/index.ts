import { IconName } from "fispo-core/theme";
import { FrontMatter } from "fispo-core/types";

// 导航栏菜单项
export interface navMenuItem {
  title: string;
  path: string;
  icon?: IconName;
  children?: navMenuItem[];
}

export interface Sidebar {
  [path: string]: SidebarGroup[];
}

export interface SidebarGroup {
  text?: string;
  items: SidebarItem[];
}

export type SidebarItem =
  | { text: string; link: string }
  | { text: string; link?: string; items: SidebarItem[] };

export interface ThemeConfig {
  navMenus?: navMenuItem[];
  sidebar?: Sidebar;
}

export interface Feature {
  icon: string;
  title: string;
  details: string;
}

export interface HomeFrontmatter extends FrontMatter {
  features: Feature[];
  buttons: {
    text: string;
    link: string;
  }[];
}
