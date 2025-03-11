import { Plugin } from "vite";
import { SiteConfig } from "shared/types/index";

const SITE_THEME_ID = "fispo:theme";

export function pluginTheme(config: SiteConfig): Plugin {
  return {
    name: "fispo:theme",
    resolveId(id) {
      if (id === SITE_THEME_ID) {
        return "\0" + SITE_THEME_ID;
      }
    },
    async load(id) {
      if (id === "\0" + SITE_THEME_ID) {
        try {
          const theme = config.siteData.theme;
          const themeEntryPath = theme
            ? `@fispo/${config.siteData.theme}/src/Layout/index.tsx`
            : `@theme-default/Layout/index.tsx`;

          return `
            import React from 'react';
            import ThemeLayout from '${themeEntryPath}';
            export default ThemeLayout;
          `;
        } catch (error) {
          console.error("主题加载失败:", error);
          throw new Error(`
            Failed to load theme: ${config.siteData.theme}
            请确保已安装该主题包并包含正确的 Layout 组件
            运行命令: npm install ${config.siteData.theme}
          `);
        }
      }
    },
  };
}
