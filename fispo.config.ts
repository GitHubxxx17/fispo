import { defineConfig } from "fispo-core";

export default defineConfig({
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
  },
});
