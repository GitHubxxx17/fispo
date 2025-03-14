import { SiteConfig } from "shared/types";
import { preloaderPlugin } from "./preloader";

export function createFispoPlugins(config: SiteConfig) {
  return [preloaderPlugin(config)];
}
