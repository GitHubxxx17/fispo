import { defineConfig } from "fispo-core";
import { ThemeConfig } from "./packages/theme-docs/src/types/index";

export default defineConfig<ThemeConfig>({
  base: "/fispo",
  title: "Fispo",
  author: "XXX17",
  description: "专为构建现代化博客而设计的静态站点生成器",
  notFoundImg: "/404.png",
  theme: "theme-docs",
  themeConfig: {
    navMenus: [
      {
        title: "指南",
        path: "/guide",
      },
      {
        title: "配置项",
        path: "/guide/introduction/config",
      },
      {
        title: "主题",
        path: "/theme",
      },
      {
        title: "插件",
        path: "/plugin",
      },
    ],
    sidebar: {
      "/guide": [
        {
          text: "简介",
          items: [
            {
              text: "什么是Fispo",
              link: "/guide",
            },
            {
              text: "建站",
              link: "/guide/introduction/setup",
            },
            {
              text: "配置项",
              link: "/guide/introduction/config",
            },
          ],
        },
      ],
    },
  },
  highlighter: {
    theme: "min-light",
  },
});
