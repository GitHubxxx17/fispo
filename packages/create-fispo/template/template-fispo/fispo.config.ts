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
        icon: {
          prefix: "fas",
          iconName: "home",
        },
      },
      {
        title: "标签",
        path: "/tag",
        icon: {
          prefix: "fas",
          iconName: "tag",
        },
      },
      {
        title: "分类",
        path: "/category",
        icon: {
          prefix: "fas",
          iconName: "folder-open",
        },
      },
      {
        title: "关于",
        path: "/about/",
        icon: {
          prefix: "fas",
          iconName: "heart",
        },
      },
    ],
  },
  codeHighlight: {
    dark: "tomorrow-night-bright",
    light: "tokyo-night-dark",
  },
});
