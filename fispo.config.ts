import { defineConfig } from "./packages/fispo";

export default defineConfig({
  title: "XXX17的个人博客",
  author: "XXX17",
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
      card_categories: {
        limit: 1,
      },
      card_recent_post: {
        sort: "date",
      },
      card_announcement: {
        enable: true,
        content: "网站正在更新中······",
      },
    },
  },
});
