import{jsx as n,jsxs as e,Fragment as i}from"react/jsx-runtime";import{u as a}from"../client-entry.js";import"react-dom/client";import"react";const p={title:"配置项"},F="配置项在配置文件 fispo.config.ts 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。基础配置base类型：string默认值：/详情：部署站点的基础路径。用于配置站点在非根域名下的部署场景。必须是以斜杠开始和结束的绝对路径（如 /basePath）",y=[{id:"配置项",text:"配置项",depth:1},{id:"基础配置",text:"基础配置",depth:2},{id:"base",text:"base",depth:3},{id:"title",text:"title",depth:3},{id:"description",text:"description",depth:3},{id:"theme",text:"theme",depth:3},{id:"themeconfig",text:"themeConfig",depth:3},{id:"vite",text:"vite",depth:3},{id:"author",text:"author",depth:3},{id:"avatar",text:"avatar",depth:3},{id:"backgroundimg",text:"backgroundImg",depth:3},{id:"root-",text:"root .",depth:3},{id:"postdir",text:"postDir",depth:3},{id:"public",text:"public",depth:3},{id:"build",text:"build",depth:3},{id:"notfoundimg",text:"notFoundImg",depth:3},{id:"logo",text:"logo",depth:3},{id:"markdown",text:"markdown",depth:3},{id:"plugins",text:"plugins",depth:3},{id:"preloader",text:"preloader",depth:3},{id:"deploy",text:"deploy",depth:3},{id:"htmltags",text:"htmlTags",depth:3},{id:"highlighter",text:"highlighter",depth:3},{id:"默认主题配置",text:"默认主题配置",depth:2},{id:"navmenus",text:"navMenus",depth:3},{id:"banner",text:"banner",depth:3},{id:"sidebar",text:"sidebar",depth:3},{id:"card_author-作者卡片",text:"card_author 作者卡片",depth:4},{id:"card_announcement-公告卡片",text:"card_announcement 公告卡片",depth:4},{id:"card_recent_post-最近文章",text:"card_recent_post 最近文章",depth:4},{id:"card_categories-分类",text:"card_categories 分类",depth:4},{id:"card_tags-标签云",text:"card_tags 标签云",depth:4},{id:"card_webinfo-网站信息",text:"card_webinfo 网站信息",depth:4},{id:"footer",text:"footer",depth:3}];function r(c){const l={a:"a",blockquote:"blockquote",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...c.components},{CopyButton:s}=l;return s||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),e(i,{children:[e(l.h1,{id:"配置项",children:[n(l.a,{className:"header-anchor",href:"#配置项",children:n(l.span,{className:"icon icon-link"})}),"配置项"]}),`
`,e(l.p,{children:["在配置文件 ",n(l.code,{children:"fispo.config.ts"})," 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。"]}),`
`,n(l.hr,{}),`
`,e(l.h2,{id:"基础配置",children:[n(l.a,{className:"header-anchor",href:"#基础配置",children:n(l.span,{className:"icon icon-link"})}),"基础配置"]}),`
`,e(l.h3,{id:"base",children:[n(l.a,{className:"header-anchor",href:"#base",children:n(l.span,{className:"icon icon-link"})}),"base"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"/"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
部署站点的基础路径。用于配置站点在非根域名下的部署场景。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["必须是以斜杠开始和结束的绝对路径（如 ",n(l.code,{children:"/basePath"}),"）"]}),`
`,e(l.li,{children:["会自动作为前缀添加到其他以 ",n(l.code,{children:"/"})," 开头的路径中（head 标签中的属性除外）"]}),`
`,e(l.li,{children:["示例：若部署到 ",n(l.code,{children:"https://example.com/blog"}),"，应设置为 ",n(l.code,{children:'"/blog"'})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"title",children:[n(l.a,{className:"header-anchor",href:"#title",children:n(l.span,{className:"icon icon-link"})}),"title"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"fispo"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
网站的全局标题，将显示在浏览器标签页和默认的 SEO 信息中。`]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"建议保持简洁（通常不超过 60 个字符）"}),`
`,e(l.li,{children:["示例：",n(l.code,{children:"XXX的个人博客"})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"description",children:[n(l.a,{className:"header-anchor",href:"#description",children:n(l.span,{className:"icon icon-link"})}),"description"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"fispo"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
网站的元描述，用于 SEO 和社交媒体分享。`]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"建议控制在 150-160 个字符之间"}),`
`,e(l.li,{children:["示例：",n(l.code,{children:'"专注于分享现代Web开发技术，包含Vue、React、Node.js等前沿技术实践"'})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"theme",children:[n(l.a,{className:"header-anchor",href:"#theme",children:n(l.span,{className:"icon icon-link"})}),"theme"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"Theme"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：无",n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
指定使用的主题名称。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["npm 主题包（",n(l.code,{children:"npm-package-name"}),"）"]}),`
`,n(l.li,{children:"需确保主题包已正确安装"}),`
`,n(l.li,{children:"示例："}),`
`]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"import"}),n(l.span,{style:{color:"#24292EFF"},children:" { defineConfig } "}),n(l.span,{style:{color:"#D32F2F"},children:"from"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo-core"'}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"import"}),n(l.span,{style:{color:"#24292EFF"},children:" theme "}),n(l.span,{style:{color:"#D32F2F"},children:"from"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"@fispo/particle/config"'}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"import"}),n(l.span,{style:{color:"#24292EFF"},children:" { ThemeConfig } "}),n(l.span,{style:{color:"#D32F2F"},children:"from"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"@fispo/particle"'}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"export"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"default"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"defineConfig"}),n(l.span,{style:{color:"#24292EFF"},children:"<"}),n(l.span,{style:{color:"#6F42C1"},children:"ThemeConfig"}),n(l.span,{style:{color:"#24292EFF"},children:">({"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo的个人博客"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  author"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fispo"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  description"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"学无止境"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  notFoundImg"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/404.png"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  theme"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" theme"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  themeConfig"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    navMenus"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"首页"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"home"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"标签"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/tag"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"tag"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"分类"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/category"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"folder-open"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"关于"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/about/"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"          iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"heart"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    ]"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"});"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.strong,{children:"主题描述对象结构"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"/**"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" * 主题配置接口"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#C2C3C5"},children:" * "}),n(l.span,{style:{color:"#D32F2F"},children:"@template"}),n(l.span,{style:{color:"#C2C3C5"},children:" ThemeConfig 特定主题的配置类型，默认为 unknown"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"export"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"Theme"}),n(l.span,{style:{color:"#24292EFF"},children:"<"}),n(l.span,{style:{color:"#6F42C1"},children:"ThemeConfig"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"="}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"unknown"}),n(l.span,{style:{color:"#24292EFF"},children:"> {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 主题名称，需全局唯一"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:'   * 示例："fispo-theme-default"'})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  name"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 主题布局文件的路径"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 可以是绝对路径或相对于项目根目录的路径"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:'   * 示例：join(__dirname, "..", "src", "index.ts")'})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  layoutPath"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 主题的配置选项"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 不同主题可能有不同的配置结构"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  config"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"ThemeConfig"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 主题内置的插件列表"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 这些插件会在主题加载时自动注册"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  plugins"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"FispoPlugin"}),n(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"themeconfig",children:[n(l.a,{className:"header-anchor",href:"#themeconfig",children:n(l.span,{className:"icon icon-link"})}),"themeConfig"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"ThemeConfig"}),"（泛型参数）",n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"<DefaultThemeConfig>"})," ",n(l.a,{href:"/fispo/config#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE",target:"",rel:"",children:"默认主题配置"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
主题的个性化配置对象，具体配置项由所选主题决定。`]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"可包含导航栏配置、侧边栏配置等"}),`
`,e(l.li,{children:[`示例：
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"themeConfig"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  navMenus"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"首页"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"home"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"标签"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/tag"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"tag"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"分类"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/category"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"folder-open"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"关于"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/about/"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      icon"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        prefix"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"fas"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        iconName"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"heart"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  ]"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"}"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"vite",children:[n(l.a,{className:"header-anchor",href:"#vite",children:n(l.span,{className:"icon icon-link"})}),"vite"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"ViteConfiguration"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"{}"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
Vite 构建工具的配置选项。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["支持所有 ",n(l.a,{href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer",children:"Vite 配置项"})]}),`
`,e(l.li,{children:[`常用配置包括：
`,e(l.ul,{children:[`
`,e(l.li,{children:[n(l.code,{children:"build"}),": 构建选项"]}),`
`,e(l.li,{children:[n(l.code,{children:"server"}),": 开发服务器配置"]}),`
`,e(l.li,{children:[n(l.code,{children:"plugins"}),": Vite 插件"]}),`
`]}),`
`]}),`
`,e(l.li,{children:[`示例：
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"vite"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  server"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    port"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"8080"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  }"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"author",children:[n(l.a,{className:"header-anchor",href:"#author",children:n(l.span,{className:"icon icon-link"})}),"author"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"xxx"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
网站作者的名称，用于文章元数据和版权声明。`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"avatar",children:[n(l.a,{className:"header-anchor",href:"#avatar",children:n(l.span,{className:"icon icon-link"})}),"avatar"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"/avatar.jpg"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
作者头像的 URL 地址或本地路径。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["支持相对路径（相对于 ",n(l.code,{children:"public"})," 目录）"]}),`
`,n(l.li,{children:"推荐尺寸：正方形（如 200x200px）"}),`
`,e(l.li,{children:["示例：",n(l.code,{children:'"/images/avatar.jpg"'})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"backgroundimg",children:[n(l.a,{className:"header-anchor",href:"#backgroundimg",children:n(l.span,{className:"icon icon-link"})}),"backgroundImg"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"/bg.png"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
网站背景图像的 URL 或本地路径。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["示例：",n(l.code,{children:'"/images/bg-pattern.png"'})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"root-",children:[n(l.a,{className:"header-anchor",href:"#root-",children:n(l.span,{className:"icon icon-link"})}),"root ."]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"docs"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
项目的根目录路径。`]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"当配置文件不在项目根目录时需要配置"}),`
`,e(l.li,{children:["示例：",n(l.code,{children:"src"})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"postdir",children:[n(l.a,{className:"header-anchor",href:"#postdir",children:n(l.span,{className:"icon icon-link"})}),"postDir"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"/post"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
存放 Markdown 文章的目录路径。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["相对于 ",n(l.code,{children:"root"})," 的路径"]}),`
`,n(l.li,{children:"支持嵌套目录结构"}),`
`,e(l.li,{children:["示例：",n(l.code,{children:'"src/articles"'})]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"public",children:[n(l.a,{className:"header-anchor",href:"#public",children:n(l.span,{className:"icon icon-link"})}),"public"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"public"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
静态资源目录路径。`]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"该目录下的文件会被直接复制到输出目录"}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"build",children:[n(l.a,{className:"header-anchor",href:"#build",children:n(l.span,{className:"icon icon-link"})}),"build"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"build"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
构建输出的目标目录。`]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["相对于 ",n(l.code,{children:"root"})," 的路径"]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"notfoundimg",children:[n(l.a,{className:"header-anchor",href:"#notfoundimg",children:n(l.span,{className:"icon icon-link"})}),"notFoundImg"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"/404.png"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
自定义 404 页面显示的图片。`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"logo",children:[n(l.a,{className:"header-anchor",href:"#logo",children:n(l.span,{className:"icon icon-link"})}),"logo"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"string"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"/logo.png"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
网站 Logo 的 URL 或本地路径。`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"markdown",children:[n(l.a,{className:"header-anchor",href:"#markdown",children:n(l.span,{className:"icon icon-link"})}),"markdown"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"MarkdownOptions"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"{}"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
Markdown 处理配置项。`,n(l.br,{}),`
`,n(l.strong,{children:"可用选项"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"MarkdownOptions"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * remark 插件列表，用于在 Markdown 解析阶段进行处理"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  remarkPlugins"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"PluggableList"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * rehype 插件列表，用于在 Markdown 转换为 HTML 阶段进行处理"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  rehypePlugins"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"PluggableList"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"plugins",children:[n(l.a,{className:"header-anchor",href:"#plugins",children:n(l.span,{className:"icon icon-link"})}),"plugins"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"FispoPlugin[]"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"[]"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"："]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"要启用的插件列表。"}),`
`,e(l.li,{children:["需要确保已安装了相关插件。",n(l.br,{}),`
`,n(l.strong,{children:"示例"}),"："]}),`
`]}),`
`,e(l.div,{className:"language-js",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"js"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"plugins"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#6F42C1"},children:"preloaderPlugin"}),n(l.span,{style:{color:"#24292EFF"},children:"()"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#6F42C1"},children:"aplayerPlugin"}),n(l.span,{style:{color:"#24292EFF"},children:"({"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    server"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"netease"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    id"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"2540031947"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    type"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"playlist"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    mini"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"true"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  })"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"]"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"preloader",children:[n(l.a,{className:"header-anchor",href:"#preloader",children:n(l.span,{className:"icon icon-link"})}),"preloader"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"boolean"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"false"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
是否启用页面预加载动画。`]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"启用后会在页面加载时显示加载动画"}),`
`,n(l.li,{children:"部分主题可能提供自定义动画的配置项"}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"deploy",children:[n(l.a,{className:"header-anchor",href:"#deploy",children:n(l.span,{className:"icon icon-link"})}),"deploy"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"object"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"{ branch: gh-pages, repo: '' }"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
部署配置对象。`,n(l.br,{}),`
`,n(l.strong,{children:"可用选项"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"deploy"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 部署的仓库地址"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    repo"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" string;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 部署的分支名称"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    branch: string;"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.strong,{children:"完整示例"}),"："]}),`
`,e(l.div,{className:"language-js",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"js"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"deploy"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  repo"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" git@"}),n(l.span,{style:{color:"#1976D2"},children:"github"}),n(l.span,{style:{color:"#24292EFF"},children:".com:myorg"}),n(l.span,{style:{color:"#D32F2F"},children:"/"}),n(l.span,{style:{color:"#1976D2"},children:"myrepo"}),n(l.span,{style:{color:"#24292EFF"},children:".git"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  branch"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" gh"}),n(l.span,{style:{color:"#D32F2F"},children:"-"}),n(l.span,{style:{color:"#24292EFF"},children:"pages"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"htmltags",children:[n(l.a,{className:"header-anchor",href:"#htmltags",children:n(l.span,{className:"icon icon-link"})}),"htmlTags"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"HtmlTagDescriptor[]"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"[]"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
自定义 HTML 标签注入配置。`]}),`
`,e(l.p,{children:[n(l.strong,{children:"标签描述对象结构"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"HtmlTagDescriptor"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  tag"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  attrs"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"Record"}),n(l.span,{style:{color:"#24292EFF"},children:"<"}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#212121"},children:","}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  children"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:"[]"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  injectTo"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"head"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"body"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"head"}),n(l.span,{style:{color:"#24292EFF"},children:"-"}),n(l.span,{style:{color:"#6F42C1"},children:"prepend"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"body"}),n(l.span,{style:{color:"#24292EFF"},children:"-"}),n(l.span,{style:{color:"#6F42C1"},children:"prepend"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.strong,{children:"示例"}),"："]}),`
`,e(l.div,{className:"language-js",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"js"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"htmlTags"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 添加 Google Analytics"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    tag"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" script"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    attrs"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" { async"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#212121"},children:","}),n(l.span,{style:{color:"#24292EFF"},children:" src"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" https:"}),n(l.span,{style:{color:"#C2C3C5"},children:"//analytics.example.com/script.js },"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"    injectTo: head"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  "})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 添加自定义样式"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  {"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      tag"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"link"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      attrs"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        rel"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"stylesheet"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"        href"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"/.fispo/custom.css"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"      injectTo"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"head"'}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    }"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"]"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"highlighter",children:[n(l.a,{className:"header-anchor",href:"#highlighter",children:n(l.span,{className:"icon icon-link"})}),"highlighter"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"HighlighterOptions"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"{}"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
代码高亮配置项。`]}),`
`,e(l.p,{children:[n(l.strong,{children:"可用选项"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"HighlighterOptions"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 预先加载的主题。"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     *"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 默认值: nord"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    theme"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"IThemeRegistration"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 预先加载的主题列表。"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    themes"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"IThemeRegistration"}),n(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 预先加载的语言列表。"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     *"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 默认值为所有内置语言。"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    langs"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" ("}),n(l.span,{style:{color:"#6F42C1"},children:"Lang"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"ILanguageRegistration"}),n(l.span,{style:{color:"#24292EFF"},children:")[];"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     * 用于加载主题和语言的路径。相对于包的根目录。"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    paths"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"IHighlighterPaths"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.strong,{children:"示例"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"highlighter"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  theme"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" github"}),n(l.span,{style:{color:"#D32F2F"},children:"-"}),n(l.span,{style:{color:"#24292EFF"},children:"light"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"默认主题配置",children:[n(l.a,{className:"header-anchor",href:"#默认主题配置",children:n(l.span,{className:"icon icon-link"})}),"默认主题配置"]}),`
`,e(l.h3,{id:"navmenus",children:[n(l.a,{className:"header-anchor",href:"#navmenus",children:n(l.span,{className:"icon icon-link"})}),"navMenus"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"navMenuItem[]"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"[]"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
配置导航栏菜单项及其层级结构`]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"/**"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" * 导航栏菜单项的接口定义"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" * 用于描述导航栏中每个菜单项的结构和属性"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:" */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"export"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"NavMenuItem"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 菜单项的显示名称"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  title"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 菜单项对应的路径，点击菜单项时会导航到该路径"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  path"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 菜单项的图标"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 使用 Font Awesome 的 IconLookup 类型，可通过 `faHome` 等形式引用"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 示例: { prefix: 'fas', iconName: 'home' }"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  icon"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"IconLookup"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 子菜单项数组，可选属性"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   * 若该菜单项有子菜单，可通过此属性定义子菜单项"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  children"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"NavMenuItem"}),n(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.code,{children:"IconLookup"}),"类型为 fontawesome 图标库中的图标类型。"]}),`
`,e(l.blockquote,{children:[`
`,e(l.p,{children:["Fispo集成了 ",n(l.a,{href:"https://fontawesome.com.cn/v5",target:"_blank",rel:"noopener noreferrer",children:"fontawesome"})," 图标库，您可以在该图标库的网站查找需要的图标。"]}),`
`]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"banner",children:[n(l.a,{className:"header-anchor",href:"#banner",children:n(l.span,{className:"icon icon-link"})}),"banner"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型："}),n(l.code,{children:"BannerData"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:'{ img: "/banner.png" }'}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
首页横幅配置`,n(l.br,{}),`
`,n(l.strong,{children:"配置项"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"BannerData"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/** 横幅图片地址 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  img"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/** 横幅副标题文字 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  subtitle"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:[n(l.strong,{children:"示例"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"banner"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  img"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:"'/images/home-bg.jpg'"}),n(l.span,{style:{color:"#212121"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  subtitle"}),n(l.span,{style:{color:"#212121"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:"'记录技术成长之路'"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"sidebar",children:[n(l.a,{className:"header-anchor",href:"#sidebar",children:n(l.span,{className:"icon icon-link"})}),"sidebar"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"Sidebar"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"{}"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
侧边栏综合配置`,n(l.br,{}),`
`,n(l.strong,{children:"基础配置"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"Sidebar"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/** 是否启用侧边栏 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"boolean"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/** 是否默认折叠 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  hide"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"boolean"}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"/** 显示位置 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  position"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"left"'}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"right"'}),n(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 各卡片配置..."})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"card_author-作者卡片",children:[n(l.a,{className:"header-anchor",href:"#card_author-作者卡片",children:n(l.span,{className:"icon icon-link"})}),"card_author 作者卡片"]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"card_author"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;       "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 是否显示"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  description"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" string;   "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 个性签名"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  button"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {              "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 联系按钮"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;     "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 显示按钮"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    icon"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" IconName;      "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 按钮图标"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    text"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" string;        "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 按钮文字"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"    link"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" string;        "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 跳转链接"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"  };"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"card_announcement-公告卡片",children:[n(l.a,{className:"header-anchor",href:"#card_announcement-公告卡片",children:n(l.span,{className:"icon icon-link"})}),"card_announcement 公告卡片"]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"card_announcement"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;     "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 是否显示"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  content"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" string;     "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 公告内容（支持Markdown）"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"card_recent_post-最近文章",children:[n(l.a,{className:"header-anchor",href:"#card_recent_post-最近文章",children:n(l.span,{className:"icon icon-link"})}),"card_recent_post 最近文章"]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"card_recent_post"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  limit"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" number;       "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 显示数量（默认5）"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  sort"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"date"'}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#D32F2F"},children:"|"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#22863A"},children:'"updated"'}),n(l.span,{style:{color:"#24292EFF"},children:";  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 排序方式"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"card_categories-分类",children:[n(l.a,{className:"header-anchor",href:"#card_categories-分类",children:n(l.span,{className:"icon icon-link"})}),"card_categories 分类"]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"card_categories"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  limit"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" number;       "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 显示前N个分类（默认8）"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"card_tags-标签云",children:[n(l.a,{className:"header-anchor",href:"#card_tags-标签云",children:n(l.span,{className:"icon icon-link"})}),"card_tags 标签云"]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"card_tags"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  limit"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" number;       "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 显示标签数量（默认15）"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"card_webinfo-网站信息",children:[n(l.a,{className:"header-anchor",href:"#card_webinfo-网站信息",children:n(l.span,{className:"icon icon-link"})}),"card_webinfo 网站信息"]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"card_webinfo"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),n(l.span,{style:{color:"#D32F2F"},children:":"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  post_count"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;      "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 显示文章总数"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  last_push_date"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;  "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 最后更新时间"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  run_time"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" boolean;        "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 站点运行时间"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.hr,{}),`
`,e(l.h3,{id:"footer",children:[n(l.a,{className:"header-anchor",href:"#footer",children:n(l.span,{className:"icon icon-link"})}),"footer"]}),`
`,e(l.p,{children:[n(l.strong,{children:"类型"}),"：",n(l.code,{children:"FooterData"}),n(l.br,{}),`
`,n(l.strong,{children:"默认值"}),"：",n(l.code,{children:"{}"}),n(l.br,{}),`
`,n(l.strong,{children:"详情"}),"：",n(l.br,{}),`
页脚区域配置`]}),`
`,e(l.p,{children:[n(l.strong,{children:"配置项"}),"："]}),`
`,e(l.div,{className:"language-ts",children:[e(l.div,{className:"highlight-tools",children:[n(l.span,{className:"lang",children:"ts"}),n(s,{})]}),n(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e(l.code,{children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D32F2F"},children:"interface"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#6F42C1"},children:"FooterData"}),n(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  message"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";     "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 底部提示信息"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#24292EFF"},children:"  copyright"}),n(l.span,{style:{color:"#D32F2F"},children:"?:"}),n(l.span,{style:{color:"#24292EFF"},children:" "}),n(l.span,{style:{color:"#1976D2"},children:"string"}),n(l.span,{style:{color:"#24292EFF"},children:";   "}),n(l.span,{style:{color:"#C2C3C5"},children:"// 版权声明"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]})]})}function m(c={}){const{wrapper:l}={...a(),...c.components};return l?n(l,{...c,children:n(r,{...c})}):r(c)}export{m as default,p as frontmatter,F as mdInfo,y as toc};
