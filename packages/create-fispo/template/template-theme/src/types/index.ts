import { IconName } from "fispo-core/theme";

// 导航栏菜单项
export interface navMenuItem {
  title: string;
  path: string;
  icon?: IconName;
  children?: navMenuItem[];
}

export interface ThemeConfig {
  navMenus?: navMenuItem[];
}
