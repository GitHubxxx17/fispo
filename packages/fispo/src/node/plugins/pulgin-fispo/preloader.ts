import { Plugin } from "vite";
import { SiteConfig } from "shared/types/index";

const SITE_PRELOADER_ID = "fispo:preloader";

export function preloaderPlugin(config: SiteConfig): Plugin {
  return {
    name: "fispo:preloader",
    resolveId(id) {
      if (id === SITE_PRELOADER_ID) {
        return "\0" + SITE_PRELOADER_ID;
      }
    },
    async load(id) {
      if (id === "\0" + SITE_PRELOADER_ID) {
        try {
          const pugins = config.siteData.plugins;
          const callbackList = pugins
            .map((item) => item.preloader)
            .filter(Boolean);

          if (callbackList.length > 1) {
            console.warn(
              `页面加载动画插件共${callbackList.length}，默认使用第一个加载动画插件，可通过调整插件顺序切换动画`
            );
          }

          if (callbackList.length === 0) {
            return `
            import React from "react";
            import {Preloader} from 'shared/components';
            export default Preloader;
          `;
          }

          return `
            import React from 'react';
            import Preloader from '${callbackList[0]()}';
            export default Preloader;
          `;
        } catch (error) {
          console.error("插件加载失败:", error);
          throw new Error(`
            Failed to load plugin: ${config.siteData.theme}
            请确保已安装该插件并包含正确的动画组件
            运行命令: npm install ${config.siteData.theme}
          `);
        }
      }
    },
  };
}
