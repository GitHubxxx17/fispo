import { IconName } from "@fortawesome/fontawesome-svg-core";

/**
 * 导航栏菜单项的接口定义
 * 用于描述导航栏中每个菜单项的结构和属性
 */
export interface navMenuItem {
  /**
   * 菜单项的显示名称
   */
  title: string;
  /**
   * 菜单项对应的路径，点击菜单项时会导航到该路径
   */
  path: string;
  /**
   * 菜单项的图标名称，可选属性
   * 图标名称类型为 IconName，具体类型需根据项目中 IconName 的定义确定
   */
  icon?: IconName;
  /**
   * 子菜单项数组，可选属性
   * 若该菜单项有子菜单，可通过此属性定义子菜单项
   */
  children?: navMenuItem[];
}

/**
 * 首页横幅数据的接口定义
 * 用于描述首页横幅所包含的数据结构和属性
 */
export interface BannerData {
  /**
   * 横幅显示的图片地址，可选属性
   */
  img?: string;
  /**
   * 横幅的副标题，可选属性
   */
  subtitle?: string;
}

/**
 * 侧边栏配置的接口定义
 * 用于配置侧边栏的各种属性和卡片显示情况
 */
export interface Sidebar {
  /**
   * 侧边栏的开关状态，可选属性
   * 设置为 true 时侧边栏显示，设置为 false 时侧边栏隐藏
   */
  enable?: boolean;
  /**
   * 侧边栏的收起和显示状态，可选属性
   * 设置为 true 时侧边栏收起，设置为 false 时侧边栏展开
   */
  hide?: boolean;
  /**
   * 侧边栏的位置，可选属性
   * 可选值为 "left" 或 "right"，分别表示侧边栏显示在左侧或右侧
   */
  position?: "left" | "right";
  /**
   * 作者信息卡片的配置，可选属性
   */
  card_author?: {
    /**
     * 作者信息卡片的开关状态，可选属性
     * 设置为 true 时显示作者信息卡片，设置为 false 时隐藏
     */
    enable?: boolean;
    /**
     * 作者的签名描述信息，可选属性
     */
    description?: string;
    /**
     * 作者信息卡片上按钮的配置，可选属性
     */
    button?: {
      /**
       * 按钮的开关状态，可选属性
       * 设置为 true 时显示按钮，设置为 false 时隐藏
       */
      enable?: boolean;
      /**
       * 按钮的图标名称，可选属性
       * 图标名称类型为 IconName，具体类型需根据项目中 IconName 的定义确定
       */
      icon?: IconName;
      /**
       * 按钮显示的文本内容，可选属性
       */
      text?: string;
      /**
       * 按钮点击后跳转的链接，可选属性
       */
      link?: string;
    };
  };
  /**
   * 公告卡片的配置，可选属性
   */
  card_announcement?: {
    /**
     * 公告卡片的开关状态，可选属性
     * 设置为 true 时显示公告卡片，设置为 false 时隐藏
     */
    enable?: boolean;
    /**
     * 公告卡片显示的内容，可选属性
     */
    content?: string;
  };
  /**
   * 最近文章卡片的配置，可选属性
   */
  card_recent_post?: {
    /**
     * 最近文章卡片的开关状态，可选属性
     * 设置为 true 时显示最近文章卡片，设置为 false 时隐藏
     */
    enable?: boolean;
    /**
     * 最近文章卡片显示文章的数量限制，可选属性
     */
    limit?: number;
    /**
     * 最近文章的排序方式，可选属性
     * 可选值为 "date" 或 "updated"，分别表示按发布日期或更新日期排序
     */
    sort?: "date" | "updated";
  };
  /**
   * 分类卡片的配置，可选属性
   */
  card_categories?: {
    /**
     * 分类卡片的开关状态，可选属性
     * 设置为 true 时显示分类卡片，设置为 false 时隐藏
     */
    enable?: boolean;
    /**
     * 分类卡片显示分类的数量限制，可选属性
     */
    limit?: number;
  };
  /**
   * 标签卡片的配置，可选属性
   */
  card_tags?: {
    /**
     * 标签卡片的开关状态，可选属性
     * 设置为 true 时显示标签卡片，设置为 false 时隐藏
     */
    enable?: boolean;
    /**
     * 标签卡片显示标签的数量限制，可选属性
     */
    limit?: number;
  };
  /**
   * 网站信息卡片的配置，可选属性
   */
  card_webinfo?: {
    /**
     * 网站信息卡片的开关状态，可选属性
     * 设置为 true 时显示网站信息卡片，设置为 false 时隐藏
     */
    enable?: boolean;
    /**
     * 是否显示文章数量信息，可选属性
     * 设置为 true 时显示文章数量，设置为 false 时不显示
     */
    post_count?: boolean;
    /**
     * 是否显示最后推送日期信息，可选属性
     * 设置为 true 时显示最后推送日期，设置为 false 时不显示
     */
    last_push_date?: boolean;
    /**
     * 是否显示网站运行时间信息，可选属性
     * 设置为 true 时显示网站运行时间，设置为 false 时不显示
     */
    run_time?: boolean;
  };
}

/**
 * 底部数据的接口定义
 * 用于描述页面底部显示的数据结构和属性
 */
export interface FooterData {
  /**
   * 底部显示的消息内容，可选属性
   */
  message?: string;
  /**
   * 底部显示的版权信息，可选属性
   */
  copyright?: string;
}

/**
 * 默认主题配置的接口定义
 * 整合了导航栏菜单、首页横幅、侧边栏和底部数据的配置信息
 */
export interface DefaultThemeConfig {
  /**
   * 导航栏菜单项数组，可选属性
   * 用于配置导航栏显示的菜单项
   */
  navMenus?: navMenuItem[];
  /**
   * 首页横幅数据，可选属性
   * 用于配置首页横幅的显示内容
   */
  banner?: BannerData;
  /**
   * 侧边栏配置，可选属性
   * 用于配置侧边栏的各种属性和卡片显示情况
   */
  sidebar?: Sidebar;
  /**
   * 底部数据，可选属性
   * 用于配置页面底部显示的内容
   */
  footer?: FooterData;
}
