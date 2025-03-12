import { defineConfig } from "fispo-core";

export default defineConfig({
  title: "XXX17的个人博客",
  author: "XXX17",
  description: "学无止境",
  notFoundImg: "/404.png",
  theme: "particle",
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
  },
});
