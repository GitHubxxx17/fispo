import { FrontMatter } from "fispo-core/types";
import { BaseThemeConfig } from "fispo-core/types";
export { NavMenuItem } from "fispo-core/types";

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

export interface ThemeConfig extends BaseThemeConfig {
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
