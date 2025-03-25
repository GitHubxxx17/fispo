import { Plugin } from "vite";
import { SiteConfig } from "shared/types/index";

const SITE_LIFECYCLE_ID = "fispo:lifecycle";

export function lifecyclePlugin(config: SiteConfig): Plugin {
  return {
    name: "fispo:lifecycle",
    resolveId(id) {
      if (id === SITE_LIFECYCLE_ID) {
        return "\0" + SITE_LIFECYCLE_ID;
      }
    },
    async load(id) {
      if (id === "\0" + SITE_LIFECYCLE_ID) {
        try {
          const pugins = config.siteData.plugins;

          const lifecycle = {
            configBeforeResolved: [],
            configResolved: [],
            beforeRenderpage: [],
            afterRenderPage: [],
            pageClosed: [],
          };

          pugins.forEach((pugin) => {
            Object.keys(lifecycle).forEach((key) => {
              if (key in pugin) {
                lifecycle[key].push(pugin[key].toString());
              }
            });
          });

          return `
            import React from 'react';
            export const lifecycleList = ${JSON.stringify(lifecycle)};
          `;
        } catch (error) {
          console.error("插件加载失败:", error);
        }
      }
    },
  };
}
