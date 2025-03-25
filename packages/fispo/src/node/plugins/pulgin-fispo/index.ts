import { SiteConfig } from "shared/types";
import { preloaderPlugin } from "./preloader";
import { golbalComponentsPlugin } from "./globalComponents";
import { lifecyclePlugin } from "./lifecycle";
import { customCssPlugin } from "./customCss";

export function createFispoPlugins(config: SiteConfig) {
  return [
    preloaderPlugin(config),
    golbalComponentsPlugin(config),
    lifecyclePlugin(config),
    customCssPlugin(config),
  ];
}
