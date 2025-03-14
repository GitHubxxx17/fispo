import { UserConfig } from "vite";
import type { PluggableList } from "unified";
import { PageDataContext, PageData } from ".";

export interface FispoPlugin {
  /**
   * Name of the plugin.
   */
  name: string;
  /**
   * Resolve.alias in build tool config.
   */
  alias?: Record<string, string>;
  /**
   * Define in build tool config.
   */
  define?: Record<string, string>;
  /**
   * Markdown options.
   */
  markdown?: {
    remarkPlugins?: PluggableList;
    rehypePlugins?: PluggableList;
  };
  /**
   * vite config.
   */
  vite?: UserConfig;
  /**
   * To ensure hmr works properly, we need to watch some files.
   */
  watchFiles?: string[];
  configResolved?: (config: PageDataContext) => PageData;
  preloader?: (config?: PageData) => string;
  golbalComponents?: (config: PageData) => React.ReactNode;
}
