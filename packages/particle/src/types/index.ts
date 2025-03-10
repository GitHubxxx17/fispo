import { IconName } from "fispo-core/theme";

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
