import { mergeConfig, Plugin } from "vite";
import { SiteConfig } from "shared/types/index";

const SITE_THEME_ID = "fispo:theme";

export function pluginTheme(config: SiteConfig): Plugin {
  const theme = config.siteData.theme;
  const themeEntryPath = theme.layoutPath;
  return {
    name: "fispo:theme",
    config(config) {
      return mergeConfig(config, {
        resolve: {
          alias: {
            "@theme": themeEntryPath,
          },
        },
      });
    },
    resolveId(id) {
      if (id === SITE_THEME_ID) {
        return "\0" + SITE_THEME_ID;
      }
    },
    async load(id) {
      if (id === "\0" + SITE_THEME_ID) {
        try {
          return `
            import React from 'react';
            import ThemeLayout from '@theme';
            export default ThemeLayout;
          `;
        } catch (error) {
          console.error("主题加载失败:", error);
          throw new Error(`
            Failed to load theme: ${theme.name}
            请确保已安装该主题包并包含正确的 Layout 组件
            运行命令: npm install @fispo/${theme.name}
          `);
        }
      }
    },
  };
}
