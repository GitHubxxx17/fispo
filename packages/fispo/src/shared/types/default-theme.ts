import { IconName } from "@fortawesome/fontawesome-svg-core";

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

// 首页横幅数据
export interface BannerData {
  img?: string;
  subtitle?: string;
}

export interface Sidebar {
  /** 侧边栏开关 */
  enable?: boolean;
  /** 侧边栏收起和显示 */
  hide?: boolean;
  /** 侧边栏位置 */
  position?: "left" | "right";
  /** 作者信息 */
  card_author?: {
    /** 开关 */
    enable?: boolean;
    /** 作者签名 */
    description?: string;
    /** 按钮 */
    button?: {
      /** 开关 */
      enable?: boolean;
      icon?: IconName;
      text?: string;
      link?: string;
    };
  };
  /** 公告卡片 */
  card_announcement?: {
    enable?: boolean;
    content?: string;
  };
  /** 最近文章 */
  card_recent_post?: {
    enable?: boolean;
    limit?: number;
    sort?: "date" | "updated";
  };
  /** 分类卡片 */
  card_categories?: {
    enable?: boolean;
    limit?: number;
  };
  /** 标签卡片 */
  card_tags?: {
    enable?: boolean;
    limit?: number;
  };
  /** 网站信息卡片 */
  card_webinfo?: {
    enable?: boolean;
    post_count?: boolean;
    last_push_date?: boolean;
    run_time?: boolean;
  };
}

// 底部数据
export interface FooterData {
  message?: string;
  copyright?: string;
}

export interface DefaultThemeConfig {
  navMenus?: navMenuItem[];
  banner?: BannerData;
  sidebar?: Sidebar;
  footer?: FooterData;
}
