import { defineConfig } from "fispo-core";
import { ThemeConfig } from "./packages/theme-docs/src/types/index";
import theme from "./packages/theme-docs/src/config";

export default defineConfig<ThemeConfig>({
  base: "/fispo",
  title: "Fispo",
  author: "XXX17",
  description: "专为构建现代化博客而设计的静态站点生成器",
  notFoundImg: "/404.png",
  theme: theme,
  themeConfig: {
    navMenus: [
      {
        title: "指南",
        path: "/guide",
      },
      {
        title: "配置项",
        path: "/config",
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
          ],
        },
        {
          text: "写作",
          items: [
            {
              text: "markdown 扩展",
              link: "/guide/writing/markdown",
            },
            {
              text: "frontmatter",
              link: "/guide/writing/frontmatter",
            },
            {
              text: "资源处理",
              link: "/guide/writing/source",
            },
          ],
        },
        {
          text: "部署",
          items: [
            {
              text: "GitHub Pages",
              link: "/guide/deploy/githubPages",
            },
          ],
        },
        {
          text: "自定义",
          items: [
            {
              text: "主题",
              link: "/guide/customize/theme",
            },
            {
              text: "插件",
              link: "/guide/customize/plugin",
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
