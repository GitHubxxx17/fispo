import { defineConfig } from '../dist';

export default defineConfig({
  title: 'xxx17的个人博客',
  backgroundImg: '/2.webp',
  author: 'xxx17',
  description: '学无止境',
  avatar: '/banner.jpg',
  themeConfig:{
    banner: {
      img: '/banner.jpg'
    },
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
        path: "/category",
      },
      {
        title: "关于",
        path: "/about",
      },
    ],
  }
});