import { BaseThemeConfig } from "fispo-core/types";
export { NavMenuItem } from "fispo-core/types";

export interface Banner {
  img?: string;
  title?: string;
  subTitle?: string;
}

export interface ThemeConfig extends BaseThemeConfig {
  banner?: Banner;
}
