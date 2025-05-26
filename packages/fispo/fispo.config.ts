import { defineConfig } from "fispo-core";
// import { preloaderPlugin } from "./../plugin-preloader/src/index";
// import { aplayerPlugin } from "./../plugin-aplayer/src/index";
import theme from "./../particle/dist/config.js";

export default defineConfig({
  base: "/fispo",
  title: "XXX17的个人博客",
  author: "XXX17",
  description: "学无止境",
  notFoundImg: "/404.png",
  theme: theme,
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
  preloader: true,
  plugins: [
    // aplayerPlugin({
    //   server: "netease",
    //   id: "2540031947",
    //   type: "playlist",
    //   mini: true,
    // }),
  ],
  deploy: {
    repo: "https://github.com/GitHubxxx17/testblog.git",
    branch: "gh-page",
  },
  htmlTags: [
    {
      tag: "link",
      attrs: {
        rel: "stylesheet",
        href: "/.fispo/custom.css",
      },
      injectTo: "head",
    },
  ],
  icons: [
    {
      prefix: "fas",
      iconName: "palette",
    },
    {
      prefix: "fas",
      iconName: "pen-fancy",
    },
    {
      prefix: "fas",
      iconName: "coffee",
    },
    {
      prefix: "fas",
      iconName: "times",
    },
    {
      prefix: "fas",
      iconName: "atom",
    },
    {
      prefix: "fas",
      iconName: "eye",
    },
  ],
  codeHighlight: {
    dark: "tomorrow-night-bright",
    light: "tokyo-night-dark",
  },
});
