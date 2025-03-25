import { SiteConfig } from "shared/types";
import { preloaderPlugin } from "./preloader";
import { golbalComponentsPlugin } from "./globalComponents";
import { lifecyclePlugin } from "./lifecycle";

export function createFispoPlugins(config: SiteConfig) {
  return [
    preloaderPlugin(config),
    golbalComponentsPlugin(config),
    lifecyclePlugin(config),
  ];
}
