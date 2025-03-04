import { defineConfig } from "../../../../src/node";

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
        icon: 'home'
      },
      {
        title: "标签",
        path: "/tag",
        icon: 'tag'
      },
      {
        title: "分类",
        path: "/category",
        icon: 'folder-open'
      },
      {
        title: "关于",
        path: "/about",
        icon: 'heart'
      },
    ],
    sidebar: {
      card_author: {
        button: {
          link: "https://github.com/GitHubxxx17/fispo"
        }
      },
      card_categories: {
        limit: 1
      },
      card_recent_post: {
        sort: 'date'
      },
      card_announcement: {
        enable: true,
        content: '网站正在更新中······'
      }
    }
  }
});