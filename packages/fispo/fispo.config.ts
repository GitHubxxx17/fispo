import { defineConfig } from "fispo-core";
import { preloaderPlugin } from "./../plugin-preloader/src/index";

export default defineConfig({
  base: "",
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
  },
  preloader: true,
  plugins: [preloaderPlugin()],
});
