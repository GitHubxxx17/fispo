import { defineConfig } from '../dist';

export default defineConfig({
  title: 'xxx的个人博客',
  themeConfig:{
    navMenus:[
      {
        title: "首页",
        path: "/",
      },
      {
        title: "标签",
        path: "/tag",
      },
      {
        title: "分类",
        path: "/sort",
      },
      {
        title: "关于",
        path: "/about",
      },
    ],
  }
});