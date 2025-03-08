import { defineConfig } from "fispo-core";

export default defineConfig({
  title: "fispo的个人博客",
  author: "fispo",
  description: "学无止境",
  notFoundImg: "/404.png",
  themeConfig: {
    navMenus: [
      {
        title: "首页",
        path: "/",
        icon: "home",
      },
      {
        title: "标签",
        path: "/tag",
        icon: "tag",
      },
      {
        title: "分类",
        path: "/category",
        icon: "folder-open",
      },
      {
        title: "关于",
        path: "/about",
        icon: "heart",
      },
    ],
    sidebar: {
      card_author: {
        button: {
          link: "https://github.com/GitHubxxx17/fispo",
        },
      },
      card_announcement: {
        enable: true,
        content: "网站正在更新中······",
      },
    },
  },
});
