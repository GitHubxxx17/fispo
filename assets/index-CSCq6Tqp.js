import{jsx as r,jsxs as e,Fragment as h}from"react/jsx-runtime";import{e as l}from"./vendor-CuygkBdc.js";import"react";const s={title:"配置项",date:"2025-03-28 17:28:49",updated:"2025-05-28 18:47:49",info:"配置项在配置文件 fispo.config.ts 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。基础配置base类型：string默认值：/详情：部署站点的基础路径。用于配置站点在非根域名下的部署场景。必须是以斜杠开始和结束的绝对路径（如 /basePath）"},g=[{id:"配置项",text:"配置项",depth:1},{id:"基础配置",text:"基础配置",depth:2},{id:"base",text:"base",depth:3},{id:"title",text:"title",depth:3},{id:"description",text:"description",depth:3},{id:"theme",text:"theme",depth:3},{id:"themeconfig",text:"themeConfig",depth:3},{id:"vite",text:"vite",depth:3},{id:"author",text:"author",depth:3},{id:"avatar",text:"avatar",depth:3},{id:"backgroundimg",text:"backgroundImg",depth:3},{id:"root-",text:"root .",depth:3},{id:"postdir",text:"postDir",depth:3},{id:"public",text:"public",depth:3},{id:"build",text:"build",depth:3},{id:"notfoundimg",text:"notFoundImg",depth:3},{id:"logo",text:"logo",depth:3},{id:"markdown",text:"markdown",depth:3},{id:"plugins",text:"plugins",depth:3},{id:"preloader",text:"preloader",depth:3},{id:"deploy",text:"deploy",depth:3},{id:"htmltags",text:"htmlTags",depth:3},{id:"highlighter",text:"highlighter",depth:3},{id:"icons",text:"icons",depth:3},{id:"publish_date",text:"publish_date",depth:3},{id:"默认主题配置",text:"默认主题配置",depth:2},{id:"navmenus",text:"navMenus",depth:3},{id:"banner",text:"banner",depth:3},{id:"sidebar",text:"sidebar",depth:3},{id:"card_author-作者卡片",text:"card_author 作者卡片",depth:4},{id:"card_announcement-公告卡片",text:"card_announcement 公告卡片",depth:4},{id:"card_recent_post-最近文章",text:"card_recent_post 最近文章",depth:4},{id:"card_categories-分类",text:"card_categories 分类",depth:4},{id:"card_tags-标签云",text:"card_tags 标签云",depth:4},{id:"card_webinfo-网站信息",text:"card_webinfo 网站信息",depth:4},{id:"footer",text:"footer",depth:3},{id:"page_pv",text:"page_pv",depth:3}];function d(c){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...l(),...c.components},{CodeBlock:i}=n;return i||function(){throw new Error("Expected component `CodeBlock` to be defined: you likely forgot to import, pass, or provide it.")}(),e(h,{children:[e(n.h1,{id:"配置项",children:[r(n.a,{className:"header-anchor",href:"#配置项",children:r(n.span,{className:"icon icon-link"})}),"配置项"]}),`
`,e(n.p,{children:["在配置文件 ",r(n.code,{children:"fispo.config.ts"})," 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。"]}),`
`,r(n.hr,{}),`
`,e(n.h2,{id:"基础配置",children:[r(n.a,{className:"header-anchor",href:"#基础配置",children:r(n.span,{className:"icon icon-link"})}),"基础配置"]}),`
`,e(n.h3,{id:"base",children:[r(n.a,{className:"header-anchor",href:"#base",children:r(n.span,{className:"icon icon-link"})}),"base"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"/"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
部署站点的基础路径。用于配置站点在非根域名下的部署场景。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["必须是以斜杠开始和结束的绝对路径（如 ",r(n.code,{children:"/basePath"}),"）"]}),`
`,e(n.li,{children:["会自动作为前缀添加到其他以 ",r(n.code,{children:"/"})," 开头的路径中（head 标签中的属性除外）"]}),`
`,e(n.li,{children:["示例：若部署到 ",r(n.code,{children:"https://example.com/blog"}),"，应设置为 ",r(n.code,{children:'"/blog"'})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"title",children:[r(n.a,{className:"header-anchor",href:"#title",children:r(n.span,{className:"icon icon-link"})}),"title"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"fispo"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
网站的全局标题，将显示在浏览器标签页和默认的 SEO 信息中。`]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"建议保持简洁（通常不超过 60 个字符）"}),`
`,e(n.li,{children:["示例：",r(n.code,{children:"XXX的个人博客"})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"description",children:[r(n.a,{className:"header-anchor",href:"#description",children:r(n.span,{className:"icon icon-link"})}),"description"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"fispo"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
网站的元描述，用于 SEO 和社交媒体分享。`]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"建议控制在 150-160 个字符之间"}),`
`,e(n.li,{children:["示例：",r(n.code,{children:'"专注于分享现代Web开发技术，包含Vue、React、Node.js等前沿技术实践"'})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"theme",children:[r(n.a,{className:"header-anchor",href:"#theme",children:r(n.span,{className:"icon icon-link"})}),"theme"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"Theme"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：无",r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
指定使用的主题名称。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["npm 主题包（",r(n.code,{children:"npm-package-name"}),"）"]}),`
`,r(n.li,{children:"需确保主题包已正确安装"}),`
`,r(n.li,{children:"示例："}),`
`]}),`
`,r(i,{code:`import { defineConfig } from "fispo-core";\r
import theme from "@fispo/particle/config";\r
import { ThemeConfig } from "@fispo/particle";\r
\r
export default defineConfig<ThemeConfig>({\r
  title: "fispo的个人博客",\r
  author: "fispo",\r
  description: "学无止境",\r
  notFoundImg: "/404.png",\r
  theme: theme,\r
  themeConfig: {\r
    navMenus: [\r
      {\r
        title: "首页",\r
        path: "/",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "home",\r
        },\r
      },\r
      {\r
        title: "标签",\r
        path: "/tag",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "tag",\r
        },\r
      },\r
      {\r
        title: "分类",\r
        path: "/category",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "folder-open",\r
        },\r
      },\r
      {\r
        title: "关于",\r
        path: "/about/",\r
        icon: {\r
          prefix: "fas",\r
          iconName: "heart",\r
        },\r
      },\r
    ],\r
  },\r
});
`,language:"ts"}),`
`,e(n.p,{children:[r(n.strong,{children:"主题描述对象结构"}),"："]}),`
`,r(i,{code:`/**\r
 * 主题配置接口\r
 * @template ThemeConfig 特定主题的配置类型，默认为 unknown\r
 */\r
export interface Theme<ThemeConfig = unknown> {\r
  /**\r
   * 主题名称，需全局唯一\r
   * 示例："fispo-theme-default"\r
   */\r
  name: string;\r
\r
  /**\r
   * 主题布局文件的路径\r
   * 可以是绝对路径或相对于项目根目录的路径\r
   * 示例：join(__dirname, "..", "src", "index.ts")\r
   */\r
  layoutPath: string;\r
\r
  /**\r
   * 主题的配置选项\r
   * 不同主题可能有不同的配置结构\r
   */\r
  config: ThemeConfig;\r
\r
  /**\r
   * 主题内置的插件列表\r
   * 这些插件会在主题加载时自动注册\r
   */\r
  plugins?: FispoPlugin[];\r
}
`,language:"ts"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"themeconfig",children:[r(n.a,{className:"header-anchor",href:"#themeconfig",children:r(n.span,{className:"icon icon-link"})}),"themeConfig"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"ThemeConfig"}),"（泛型参数）",r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"<DefaultThemeConfig>"})," ",r(n.a,{href:"/fispo/config#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE",target:"",rel:"",children:"默认主题配置"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
主题的个性化配置对象，具体配置项由所选主题决定。`]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"可包含导航栏配置、侧边栏配置等"}),`
`,e(n.li,{children:[`示例：
`,r(i,{code:`themeConfig: {\r
  navMenus: [\r
    {\r
      title: "首页",\r
      path: "/",\r
      icon: {\r
        prefix: "fas",\r
        iconName: "home",\r
      },\r
    },\r
    {\r
      title: "标签",\r
      path: "/tag",\r
      icon: {\r
        prefix: "fas",\r
        iconName: "tag",\r
      },\r
    },\r
    {\r
      title: "分类",\r
      path: "/category",\r
      icon: {\r
        prefix: "fas",\r
        iconName: "folder-open",\r
      },\r
    },\r
    {\r
      title: "关于",\r
      path: "/about/",\r
      icon: {\r
        prefix: "fas",\r
        iconName: "heart",\r
      },\r
    },\r
  ],\r
},
`,language:"ts"}),`
`]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"vite",children:[r(n.a,{className:"header-anchor",href:"#vite",children:r(n.span,{className:"icon icon-link"})}),"vite"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"ViteConfiguration"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"{}"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
Vite 构建工具的配置选项。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["支持所有 ",r(n.a,{href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer",children:"Vite 配置项"})]}),`
`,e(n.li,{children:[`常用配置包括：
`,e(n.ul,{children:[`
`,e(n.li,{children:[r(n.code,{children:"build"}),": 构建选项"]}),`
`,e(n.li,{children:[r(n.code,{children:"server"}),": 开发服务器配置"]}),`
`,e(n.li,{children:[r(n.code,{children:"plugins"}),": Vite 插件"]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`示例：
`,r(i,{code:`vite: {\r
  server: {\r
    port: 8080\r
  }\r
}
`,language:"ts"}),`
`]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"author",children:[r(n.a,{className:"header-anchor",href:"#author",children:r(n.span,{className:"icon icon-link"})}),"author"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"xxx"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
网站作者的名称，用于文章元数据和版权声明。`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"avatar",children:[r(n.a,{className:"header-anchor",href:"#avatar",children:r(n.span,{className:"icon icon-link"})}),"avatar"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"/avatar.jpg"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
作者头像的 URL 地址或本地路径。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["支持相对路径（相对于 ",r(n.code,{children:"public"})," 目录）"]}),`
`,r(n.li,{children:"推荐尺寸：正方形（如 200x200px）"}),`
`,e(n.li,{children:["示例：",r(n.code,{children:'"/images/avatar.jpg"'})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"backgroundimg",children:[r(n.a,{className:"header-anchor",href:"#backgroundimg",children:r(n.span,{className:"icon icon-link"})}),"backgroundImg"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"/bg.png"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
网站背景图像的 URL 或本地路径。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["示例：",r(n.code,{children:'"/images/bg-pattern.png"'})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"root-",children:[r(n.a,{className:"header-anchor",href:"#root-",children:r(n.span,{className:"icon icon-link"})}),"root ."]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"docs"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
项目的根目录路径。`]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"当配置文件不在项目根目录时需要配置"}),`
`,e(n.li,{children:["示例：",r(n.code,{children:"src"})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"postdir",children:[r(n.a,{className:"header-anchor",href:"#postdir",children:r(n.span,{className:"icon icon-link"})}),"postDir"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"/post"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
存放 Markdown 文章的目录路径。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["相对于 ",r(n.code,{children:"root"})," 的路径"]}),`
`,r(n.li,{children:"支持嵌套目录结构"}),`
`,e(n.li,{children:["示例：",r(n.code,{children:'"src/articles"'})]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"public",children:[r(n.a,{className:"header-anchor",href:"#public",children:r(n.span,{className:"icon icon-link"})}),"public"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"public"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
静态资源目录路径。`]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"该目录下的文件会被直接复制到输出目录"}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"build",children:[r(n.a,{className:"header-anchor",href:"#build",children:r(n.span,{className:"icon icon-link"})}),"build"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"build"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
构建输出的目标目录。`]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["相对于 ",r(n.code,{children:"root"})," 的路径"]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"notfoundimg",children:[r(n.a,{className:"header-anchor",href:"#notfoundimg",children:r(n.span,{className:"icon icon-link"})}),"notFoundImg"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"/404.png"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
自定义 404 页面显示的图片。`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"logo",children:[r(n.a,{className:"header-anchor",href:"#logo",children:r(n.span,{className:"icon icon-link"})}),"logo"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"/logo.png"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
网站 Logo 的 URL 或本地路径。`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"markdown",children:[r(n.a,{className:"header-anchor",href:"#markdown",children:r(n.span,{className:"icon icon-link"})}),"markdown"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"MarkdownOptions"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"{}"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
Markdown 处理配置项。`,r(n.br,{}),`
`,r(n.strong,{children:"可用选项"}),"："]}),`
`,r(i,{code:`interface MarkdownOptions {\r
  /**\r
   * remark 插件列表，用于在 Markdown 解析阶段进行处理\r
   */\r
  remarkPlugins?: PluggableList;\r
  /**\r
   * rehype 插件列表，用于在 Markdown 转换为 HTML 阶段进行处理\r
   */\r
  rehypePlugins?: PluggableList;\r
}
`,language:"ts"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"plugins",children:[r(n.a,{className:"header-anchor",href:"#plugins",children:r(n.span,{className:"icon icon-link"})}),"plugins"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"FispoPlugin[]"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"[]"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"："]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"要启用的插件列表。"}),`
`,e(n.li,{children:["需要确保已安装了相关插件。",r(n.br,{}),`
`,r(n.strong,{children:"示例"}),"："]}),`
`]}),`
`,r(i,{code:`plugins: [\r
  preloaderPlugin(),\r
  aplayerPlugin({\r
    server: "netease",\r
    id: "2540031947",\r
    type: "playlist",\r
    mini: true,\r
  }),\r
],
`,language:"js"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"preloader",children:[r(n.a,{className:"header-anchor",href:"#preloader",children:r(n.span,{className:"icon icon-link"})}),"preloader"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"boolean"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"false"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
是否启用页面预加载动画。`]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"启用后会在页面加载时显示加载动画"}),`
`,r(n.li,{children:"部分主题可能提供自定义动画的配置项"}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"deploy",children:[r(n.a,{className:"header-anchor",href:"#deploy",children:r(n.span,{className:"icon icon-link"})}),"deploy"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"object"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"{ branch: gh-pages, repo: '' }"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
部署配置对象。`,r(n.br,{}),`
`,r(n.strong,{children:"可用选项"}),"："]}),`
`,r(i,{code:`deploy?: {\r
    /**\r
     * 部署的仓库地址\r
     */\r
    repo: string;\r
    /**\r
     * 部署的分支名称\r
     */\r
    branch: string;\r
};
`,language:"ts"}),`
`,e(n.p,{children:[r(n.strong,{children:"完整示例"}),"："]}),`
`,r(i,{code:`deploy: {\r
  repo: git@github.com:myorg/myrepo.git,\r
  branch: gh-pages\r
}
`,language:"js"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"htmltags",children:[r(n.a,{className:"header-anchor",href:"#htmltags",children:r(n.span,{className:"icon icon-link"})}),"htmlTags"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"HtmlTagDescriptor[]"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"[]"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
自定义 HTML 标签注入配置。`]}),`
`,e(n.p,{children:[r(n.strong,{children:"标签描述对象结构"}),"："]}),`
`,r(i,{code:`interface HtmlTagDescriptor {\r
  tag: string\r
  attrs?: Record<string, string>\r
  children?: string | string[]\r
  injectTo?: head | body | head-prepend | body-prepend\r
}
`,language:"ts"}),`
`,e(n.p,{children:[r(n.strong,{children:"示例"}),"："]}),`
`,r(i,{code:`htmlTags: [\r
  // 添加 Google Analytics\r
  {\r
    tag: script,\r
    attrs: { async: , src: https://analytics.example.com/script.js },\r
    injectTo: head\r
  },\r
  \r
  // 添加自定义样式\r
  {\r
      tag: "link",\r
      attrs: {\r
        rel: "stylesheet",\r
        href: "/.fispo/custom.css",\r
      },\r
      injectTo: "head",\r
    },\r
]
`,language:"js"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"highlighter",children:[r(n.a,{className:"header-anchor",href:"#highlighter",children:r(n.span,{className:"icon icon-link"})}),"highlighter"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"object"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:'{   dark: "github-dark", // 深色主题（默认值）   light: "github" // 浅色主题（默认值） }'}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
Markdown 代码高亮配置（基于 highlight.js 实现）`,r(n.br,{}),`
主题名称需与 highlight.js 官方主题库一致（见：`,r(n.a,{href:"https://highlightjs.org/demo",target:"_blank",rel:"noopener noreferrer",children:"https://highlightjs.org/demo"})," ）。"]}),`
`,e(n.p,{children:[r(n.strong,{children:"可用选项"}),"："]}),`
`,r(i,{code:`codeHighlight?: {\r
    /** 深色模式下的代码高亮主题 */\r
    dark?: HighlightJsTheme;\r
    /** 浅色模式下的代码高亮主题 */\r
    light?: HighlightJsTheme;\r
};
`,language:"ts"}),`
`,e(n.p,{children:[r(n.strong,{children:"示例"}),"："]}),`
`,r(i,{code:`codeHighlight: {\r
  dark: "tomorrow-night-bright",\r
  light: "tokyo-night-dark",\r
},
`,language:"ts"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"icons",children:[r(n.a,{className:"header-anchor",href:"#icons",children:r(n.span,{className:"icon icon-link"})}),"icons"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"IconLookup[]"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"[]"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
自定义图标配置，用于标签外挂中的图标显示`,r(n.br,{}),`
可通过`,r(n.a,{href:"/fispo/guide/writing/markdown#%E6%A0%87%E7%AD%BE%E5%A4%96%E6%8C%82",target:"",rel:"",children:"标签外挂"}),"的 ",r(n.code,{children:"icon-<name>"})," 语法引用此处定义的图标"]}),`
`,e(n.ol,{children:[`
`,r(n.li,{children:"使用外挂标签的自定义图标功能需先在此处注册才能在标签外挂中使用"}),`
`,r(n.li,{children:"标签外挂中使用时需添加前缀 icon-（如 star → icon-star）"}),`
`]}),`
`,e(n.p,{children:[r(n.strong,{children:"可用选项"}),"："]}),`
`,r(i,{code:`interface IconLookup {\r
  // 图标库前缀（用于区分不同图标集）\r
  prefix: IconPrefix;\r
  // 图标名称（需与前缀对应的图标库中的名称一致）\r
  iconName: IconName;\r
}
`,language:"ts"}),`
`,e(n.p,{children:[r(n.strong,{children:"示例"}),"："]}),`
`,r(i,{code:`icons: [\r
  {\r
    prefix: "fas",\r
    iconName: "palette",\r
  },\r
  {\r
    prefix: "fas",\r
    iconName: "pen-fancy",\r
  }\r
],
`,language:"ts"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"publish_date",children:[r(n.a,{className:"header-anchor",href:"#publish_date",children:r(n.span,{className:"icon icon-link"})}),"publish_date"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"string"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:'""'}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"："]}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"网站开始运行时间"}),`
`,r(n.li,{children:"示例：2025-01-01 00:00:00"}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h2,{id:"默认主题配置",children:[r(n.a,{className:"header-anchor",href:"#默认主题配置",children:r(n.span,{className:"icon icon-link"})}),"默认主题配置"]}),`
`,e(n.h3,{id:"navmenus",children:[r(n.a,{className:"header-anchor",href:"#navmenus",children:r(n.span,{className:"icon icon-link"})}),"navMenus"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"navMenuItem[]"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"[]"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
配置导航栏菜单项及其层级结构`]}),`
`,r(i,{code:`/**\r
 * 导航栏菜单项的接口定义\r
 * 用于描述导航栏中每个菜单项的结构和属性\r
 */\r
export interface NavMenuItem {\r
  /**\r
   * 菜单项的显示名称\r
   */\r
  title: string;\r
  /**\r
   * 菜单项对应的路径，点击菜单项时会导航到该路径\r
   */\r
  path: string;\r
  /**\r
   * 菜单项的图标\r
   * 使用 Font Awesome 的 IconLookup 类型，可通过 \`faHome\` 等形式引用\r
   * 示例: { prefix: 'fas', iconName: 'home' }\r
   */\r
  icon?: IconLookup;\r
  /**\r
   * 子菜单项数组，可选属性\r
   * 若该菜单项有子菜单，可通过此属性定义子菜单项\r
   */\r
  children?: NavMenuItem[];\r
}
`,language:"ts"}),`
`,e(n.p,{children:[r(n.code,{children:"IconLookup"}),"类型为 fontawesome 图标库中的图标类型。"]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["Fispo集成了 ",r(n.a,{href:"https://fontawesome.com.cn/v5",target:"_blank",rel:"noopener noreferrer",children:"fontawesome"})," 图标库，您可以在该图标库的网站查找需要的图标。"]}),`
`]}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"banner",children:[r(n.a,{className:"header-anchor",href:"#banner",children:r(n.span,{className:"icon icon-link"})}),"banner"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型："}),r(n.code,{children:"BannerData"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:'{ img: "/banner.png" }'}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
首页横幅配置`,r(n.br,{}),`
`,r(n.strong,{children:"配置项"}),"："]}),`
`,r(i,{code:`interface BannerData {\r
  /** 横幅图片地址 */\r
  img?: string;\r
  /** 横幅副标题文字 */\r
  subtitle?: string;\r
}
`,language:"ts"}),`
`,e(n.p,{children:[r(n.strong,{children:"示例"}),"："]}),`
`,r(i,{code:`banner: {\r
  img: '/images/home-bg.jpg',\r
  subtitle: '记录技术成长之路'\r
}
`,language:"ts"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"sidebar",children:[r(n.a,{className:"header-anchor",href:"#sidebar",children:r(n.span,{className:"icon icon-link"})}),"sidebar"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"Sidebar"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"{}"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
侧边栏综合配置`,r(n.br,{}),`
`,r(n.strong,{children:"基础配置"}),"："]}),`
`,r(i,{code:`interface Sidebar {\r
  /** 是否启用侧边栏 */\r
  enable?: boolean;\r
  /** 是否默认折叠 */\r
  hide?: boolean;\r
  /** 显示位置 */\r
  position?: "left" | "right";\r
  // 各卡片配置...\r
}
`,language:"ts"}),`
`,e(n.h4,{id:"card_author-作者卡片",children:[r(n.a,{className:"header-anchor",href:"#card_author-作者卡片",children:r(n.span,{className:"icon icon-link"})}),"card_author 作者卡片"]}),`
`,r(i,{code:`card_author?: {\r
  enable?: boolean;       // 是否显示\r
  description?: string;   // 个性签名\r
  button?: {              // 联系按钮\r
    enable?: boolean;     // 显示按钮\r
    icon?: IconName;      // 按钮图标\r
    text?: string;        // 按钮文字\r
    link?: string;        // 跳转链接\r
  };\r
}
`,language:"ts"}),`
`,e(n.h4,{id:"card_announcement-公告卡片",children:[r(n.a,{className:"header-anchor",href:"#card_announcement-公告卡片",children:r(n.span,{className:"icon icon-link"})}),"card_announcement 公告卡片"]}),`
`,r(i,{code:`card_announcement?: {\r
  enable?: boolean;     // 是否显示\r
  content?: string;     // 公告内容（支持Markdown）\r
};
`,language:"ts"}),`
`,e(n.h4,{id:"card_recent_post-最近文章",children:[r(n.a,{className:"header-anchor",href:"#card_recent_post-最近文章",children:r(n.span,{className:"icon icon-link"})}),"card_recent_post 最近文章"]}),`
`,r(i,{code:`card_recent_post?: {\r
  enable?: boolean;\r
  limit?: number;       // 显示数量（默认5）\r
  sort?: "date" | "updated";  // 排序方式\r
};
`,language:"ts"}),`
`,e(n.h4,{id:"card_categories-分类",children:[r(n.a,{className:"header-anchor",href:"#card_categories-分类",children:r(n.span,{className:"icon icon-link"})}),"card_categories 分类"]}),`
`,r(i,{code:`card_categories?: {\r
  enable?: boolean;\r
  limit?: number;       // 显示前N个分类（默认8）\r
};
`,language:"ts"}),`
`,e(n.h4,{id:"card_tags-标签云",children:[r(n.a,{className:"header-anchor",href:"#card_tags-标签云",children:r(n.span,{className:"icon icon-link"})}),"card_tags 标签云"]}),`
`,r(i,{code:`card_tags?: {\r
  enable?: boolean;\r
  limit?: number;       // 显示标签数量（默认15）\r
};
`,language:"ts"}),`
`,e(n.h4,{id:"card_webinfo-网站信息",children:[r(n.a,{className:"header-anchor",href:"#card_webinfo-网站信息",children:r(n.span,{className:"icon icon-link"})}),"card_webinfo 网站信息"]}),`
`,r(i,{code:`card_webinfo?: {\r
  enable?: boolean;\r
  post_count?: boolean;      // 显示文章总数\r
  last_push_date?: boolean;  // 最后更新时间\r
  run_time?: boolean;        // 站点运行时间\r
  site_uv?: boolean;        // 显示站点总访客数\r
  site_pv?: boolean;       // 显示站点总访问量\r
\r
};
`,language:"ts"}),`
`,r(n.hr,{}),`
`,e(n.h3,{id:"footer",children:[r(n.a,{className:"header-anchor",href:"#footer",children:r(n.span,{className:"icon icon-link"})}),"footer"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"FooterData"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"{}"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
页脚区域配置`]}),`
`,e(n.p,{children:[r(n.strong,{children:"配置项"}),"："]}),`
`,r(i,{code:`interface FooterData {\r
  message?: string;     // 底部提示信息\r
  copyright?: string;   // 版权声明\r
}
`,language:"ts"}),`
`,e(n.h3,{id:"page_pv",children:[r(n.a,{className:"header-anchor",href:"#page_pv",children:r(n.span,{className:"icon icon-link"})}),"page_pv"]}),`
`,e(n.p,{children:[r(n.strong,{children:"类型"}),"：",r(n.code,{children:"boolean"}),r(n.br,{}),`
`,r(n.strong,{children:"默认值"}),"：",r(n.code,{children:"true"}),r(n.br,{}),`
`,r(n.strong,{children:"详情"}),"：",r(n.br,{}),`
显示单页文章的访问量`]})]})}function p(c={}){const{wrapper:n}={...l(),...c.components};return n?r(n,{...c,children:r(d,{...c})}):d(c)}export{p as default,s as frontmatter,g as toc};
