import { IconName } from "fispo-core/theme";
import { FrontMatter } from "fispo-core/types";

// 导航栏菜单项
export interface navMenuItem {
  title: string;
  path: string;
  icon?: IconName;
  children?: navMenuItem[];
}

export interface Banner {
  img?: string;
  title?: string;
  subTitle?: string;
}

export interface ThemeConfig {
  navMenus?: navMenuItem[];
  banner?: Banner;
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
