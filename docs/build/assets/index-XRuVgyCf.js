import{u as r,j as s}from"../client-entry.js";const i={title:"配置项"},o="配置项在配置文件 fispo.config.ts 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。基础配置base类型：string默认值：/详情：部署站点的基础路径。用于配置站点在非根域名下的部署场景。必须是以斜杠开始和结束的绝对路径（如 /basePath）",d=[{id:"配置项",text:"配置项",depth:1},{id:"基础配置",text:"基础配置",depth:2},{id:"base",text:"base",depth:3},{id:"title",text:"title",depth:3},{id:"description",text:"description",depth:3},{id:"theme",text:"theme",depth:3},{id:"themeconfig",text:"themeConfig",depth:3},{id:"vite",text:"vite",depth:3},{id:"author",text:"author",depth:3},{id:"avatar",text:"avatar",depth:3},{id:"backgroundimg",text:"backgroundImg",depth:3},{id:"root-",text:"root .",depth:3},{id:"postdir",text:"postDir",depth:3},{id:"public",text:"public",depth:3},{id:"build",text:"build",depth:3},{id:"notfoundimg",text:"notFoundImg",depth:3},{id:"logo",text:"logo",depth:3},{id:"markdown",text:"markdown",depth:3},{id:"plugins",text:"plugins",depth:3},{id:"preloader",text:"preloader",depth:3},{id:"deploy",text:"deploy",depth:3},{id:"htmltags",text:"htmlTags",depth:3},{id:"highlighter",text:"highlighter",depth:3},{id:"默认主题配置",text:"默认主题配置",depth:2},{id:"navmenus",text:"navMenus",depth:3},{id:"banner",text:"banner",depth:3},{id:"sidebar",text:"sidebar",depth:3},{id:"card_author-作者卡片",text:"card_author 作者卡片",depth:4},{id:"card_announcement-公告卡片",text:"card_announcement 公告卡片",depth:4},{id:"card_recent_post-最近文章",text:"card_recent_post 最近文章",depth:4},{id:"card_categories-分类",text:"card_categories 分类",depth:4},{id:"card_tags-标签云",text:"card_tags 标签云",depth:4},{id:"card_webinfo-网站信息",text:"card_webinfo 网站信息",depth:4},{id:"footer",text:"footer",depth:3}];function c(e){const l={a:"a",blockquote:"blockquote",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...e.components},{CopyButton:n}=l;return n||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),s.jsxs(s.Fragment,{children:[s.jsxs(l.h1,{id:"配置项",children:[s.jsx(l.a,{className:"header-anchor",href:"#配置项",children:s.jsx(l.span,{className:"icon icon-link"})}),"配置项"]}),`
`,s.jsxs(l.p,{children:["在配置文件 ",s.jsx(l.code,{children:"fispo.config.ts"})," 中可以定义站点的全局配置。无论使用什么主题，基础配置选项适用于每个 Fispo 站点。"]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h2,{id:"基础配置",children:[s.jsx(l.a,{className:"header-anchor",href:"#基础配置",children:s.jsx(l.span,{className:"icon icon-link"})}),"基础配置"]}),`
`,s.jsxs(l.h3,{id:"base",children:[s.jsx(l.a,{className:"header-anchor",href:"#base",children:s.jsx(l.span,{className:"icon icon-link"})}),"base"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"/"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
部署站点的基础路径。用于配置站点在非根域名下的部署场景。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["必须是以斜杠开始和结束的绝对路径（如 ",s.jsx(l.code,{children:"/basePath"}),"）"]}),`
`,s.jsxs(l.li,{children:["会自动作为前缀添加到其他以 ",s.jsx(l.code,{children:"/"})," 开头的路径中（head 标签中的属性除外）"]}),`
`,s.jsxs(l.li,{children:["示例：若部署到 ",s.jsx(l.code,{children:"https://example.com/blog"}),"，应设置为 ",s.jsx(l.code,{children:'"/blog"'})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"title",children:[s.jsx(l.a,{className:"header-anchor",href:"#title",children:s.jsx(l.span,{className:"icon icon-link"})}),"title"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"fispo"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
网站的全局标题，将显示在浏览器标签页和默认的 SEO 信息中。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"建议保持简洁（通常不超过 60 个字符）"}),`
`,s.jsxs(l.li,{children:["示例：",s.jsx(l.code,{children:"XXX的个人博客"})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"description",children:[s.jsx(l.a,{className:"header-anchor",href:"#description",children:s.jsx(l.span,{className:"icon icon-link"})}),"description"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"fispo"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
网站的元描述，用于 SEO 和社交媒体分享。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"建议控制在 150-160 个字符之间"}),`
`,s.jsxs(l.li,{children:["示例：",s.jsx(l.code,{children:'"专注于分享现代Web开发技术，包含Vue、React、Node.js等前沿技术实践"'})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"theme",children:[s.jsx(l.a,{className:"header-anchor",href:"#theme",children:s.jsx(l.span,{className:"icon icon-link"})}),"theme"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"Theme"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：无",s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
指定使用的主题名称。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["npm 主题包（",s.jsx(l.code,{children:"npm-package-name"}),"）"]}),`
`,s.jsx(l.li,{children:"需确保主题包已正确安装"}),`
`,s.jsx(l.li,{children:"示例："}),`
`]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"import"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" { defineConfig } "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"from"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo-core"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"import"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" theme "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"from"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"@fispo/particle/config"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"import"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" { ThemeConfig } "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"from"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"@fispo/particle"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsx(l.span,{className:"line"}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"export"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"default"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"defineConfig"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"<"}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"ThemeConfig"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:">({"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo的个人博客"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  author"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"fispo"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  description"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"学无止境"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  notFoundImg"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/404.png"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  theme"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" theme"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  themeConfig"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    navMenus"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"首页"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"home"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"标签"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/tag"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"tag"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"分类"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/category"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"folder-open"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"      {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"关于"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/about"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"heart"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    ]"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"});"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"主题描述对象结构"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Theme"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"<"}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"ThemeConfig"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"="}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"unknown"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"> {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  name"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  layoutPath"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  config"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"ThemeConfig"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  plugins"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"FispoPlugin"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"themeconfig",children:[s.jsx(l.a,{className:"header-anchor",href:"#themeconfig",children:s.jsx(l.span,{className:"icon icon-link"})}),"themeConfig"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"ThemeConfig"}),"（泛型参数）",s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"<DefaultThemeConfig>"})," ",s.jsx(l.a,{href:"/fispo/config#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE",target:"",rel:"",children:"默认主题配置"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
主题的个性化配置对象，具体配置项由所选主题决定。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"可包含导航栏配置、侧边栏配置等"}),`
`,s.jsxs(l.li,{children:[`示例：
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"themeConfig"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  navMenus"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"   {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"首页"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"home"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"标签"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/tag"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"tag"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"分类"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/category"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"folder-open"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  ]"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"vite",children:[s.jsx(l.a,{className:"header-anchor",href:"#vite",children:s.jsx(l.span,{className:"icon icon-link"})}),"vite"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"ViteConfiguration"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"{}"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
Vite 构建工具的配置选项。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["支持所有 ",s.jsx(l.a,{href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer",children:"Vite 配置项"})]}),`
`,s.jsxs(l.li,{children:[`常用配置包括：
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:[s.jsx(l.code,{children:"build"}),": 构建选项"]}),`
`,s.jsxs(l.li,{children:[s.jsx(l.code,{children:"server"}),": 开发服务器配置"]}),`
`,s.jsxs(l.li,{children:[s.jsx(l.code,{children:"plugins"}),": Vite 插件"]}),`
`]}),`
`]}),`
`,s.jsxs(l.li,{children:[`示例：
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"vite"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  server"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    port"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"8080"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  }"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"author",children:[s.jsx(l.a,{className:"header-anchor",href:"#author",children:s.jsx(l.span,{className:"icon icon-link"})}),"author"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"xxx"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
网站作者的名称，用于文章元数据和版权声明。`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"avatar",children:[s.jsx(l.a,{className:"header-anchor",href:"#avatar",children:s.jsx(l.span,{className:"icon icon-link"})}),"avatar"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"/avatar.jpg"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
作者头像的 URL 地址或本地路径。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["支持相对路径（相对于 ",s.jsx(l.code,{children:"public"})," 目录）"]}),`
`,s.jsx(l.li,{children:"推荐尺寸：正方形（如 200x200px）"}),`
`,s.jsxs(l.li,{children:["示例：",s.jsx(l.code,{children:'"/images/avatar.jpg"'})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"backgroundimg",children:[s.jsx(l.a,{className:"header-anchor",href:"#backgroundimg",children:s.jsx(l.span,{className:"icon icon-link"})}),"backgroundImg"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"/bg.png"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
网站背景图像的 URL 或本地路径。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["示例：",s.jsx(l.code,{children:'"/images/bg-pattern.png"'})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"root-",children:[s.jsx(l.a,{className:"header-anchor",href:"#root-",children:s.jsx(l.span,{className:"icon icon-link"})}),"root ."]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"docs"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
项目的根目录路径。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"当配置文件不在项目根目录时需要配置"}),`
`,s.jsxs(l.li,{children:["示例：",s.jsx(l.code,{children:"src"})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"postdir",children:[s.jsx(l.a,{className:"header-anchor",href:"#postdir",children:s.jsx(l.span,{className:"icon icon-link"})}),"postDir"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"/post"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
存放 Markdown 文章的目录路径。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["相对于 ",s.jsx(l.code,{children:"root"})," 的路径"]}),`
`,s.jsx(l.li,{children:"支持嵌套目录结构"}),`
`,s.jsxs(l.li,{children:["示例：",s.jsx(l.code,{children:'"src/articles"'})]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"public",children:[s.jsx(l.a,{className:"header-anchor",href:"#public",children:s.jsx(l.span,{className:"icon icon-link"})}),"public"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"public"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
静态资源目录路径。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"该目录下的文件会被直接复制到输出目录"}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"build",children:[s.jsx(l.a,{className:"header-anchor",href:"#build",children:s.jsx(l.span,{className:"icon icon-link"})}),"build"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"build"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
构建输出的目标目录。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsxs(l.li,{children:["相对于 ",s.jsx(l.code,{children:"root"})," 的路径"]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"notfoundimg",children:[s.jsx(l.a,{className:"header-anchor",href:"#notfoundimg",children:s.jsx(l.span,{className:"icon icon-link"})}),"notFoundImg"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"/404.png"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
自定义 404 页面显示的图片。`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"logo",children:[s.jsx(l.a,{className:"header-anchor",href:"#logo",children:s.jsx(l.span,{className:"icon icon-link"})}),"logo"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"string"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"/logo.png"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
网站 Logo 的 URL 或本地路径。`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"markdown",children:[s.jsx(l.a,{className:"header-anchor",href:"#markdown",children:s.jsx(l.span,{className:"icon icon-link"})}),"markdown"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"MarkdownOptions"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"{}"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
Markdown 处理配置项。`,s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"可用选项"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"MarkdownOptions"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * remark 插件列表，用于在 Markdown 解析阶段进行处理"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  remarkPlugins"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"PluggableList"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   * rehype 插件列表，用于在 Markdown 转换为 HTML 阶段进行处理"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"   */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  rehypePlugins"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"PluggableList"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"plugins",children:[s.jsx(l.a,{className:"header-anchor",href:"#plugins",children:s.jsx(l.span,{className:"icon icon-link"})}),"plugins"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"FispoPlugin[]"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"[]"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"："]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"要启用的插件列表。"}),`
`,s.jsxs(l.li,{children:["需要确保已安装了相关插件。",s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"示例"}),"："]}),`
`]}),`
`,s.jsxs(l.div,{className:"language-js",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"js"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"plugins"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"preloaderPlugin"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"()"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"aplayerPlugin"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"({"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    server"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"netease"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    id"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"2540031947"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    type"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"playlist"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    mini"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"true"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  })"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"]"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"preloader",children:[s.jsx(l.a,{className:"header-anchor",href:"#preloader",children:s.jsx(l.span,{className:"icon icon-link"})}),"preloader"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"boolean"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"false"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
是否启用页面预加载动画。`]}),`
`,s.jsxs(l.ul,{children:[`
`,s.jsx(l.li,{children:"启用后会在页面加载时显示加载动画"}),`
`,s.jsx(l.li,{children:"部分主题可能提供自定义动画的配置项"}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"deploy",children:[s.jsx(l.a,{className:"header-anchor",href:"#deploy",children:s.jsx(l.span,{className:"icon icon-link"})}),"deploy"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"object"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"{ branch: gh-pages, repo: }"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
部署配置对象。`,s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"可用选项"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"deploy"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 部署的仓库地址"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    repo"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" string;"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 部署的分支名称"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    branch: string;"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"完整示例"}),"："]}),`
`,s.jsxs(l.div,{className:"language-js",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"js"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"deploy"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  repo"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" git@"}),s.jsx(l.span,{style:{color:"#1976D2"},children:"github"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:".com:myorg"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"/"}),s.jsx(l.span,{style:{color:"#1976D2"},children:"myrepo"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:".git"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  branch"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" gh"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"-"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"pages"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"htmltags",children:[s.jsx(l.a,{className:"header-anchor",href:"#htmltags",children:s.jsx(l.span,{className:"icon icon-link"})}),"htmlTags"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"HtmlTagDescriptor[]"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"[]"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
自定义 HTML 标签注入配置。`]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"标签描述对象结构"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"HtmlTagDescriptor"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  tag"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  attrs"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Record"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"<"}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#212121"},children:","}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:">"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  children"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"[]"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  injectTo"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"head"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"body"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"head"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"-"}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"prepend"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"body"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"-"}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"prepend"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"示例"}),"："]}),`
`,s.jsxs(l.div,{className:"language-js",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"js"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"htmlTags"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" ["})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 添加 Google Analytics"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    tag"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" script"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    attrs"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" { async"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#212121"},children:","}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" src"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" https:"}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"//analytics.example.com/script.js },"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"    injectTo: head"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 添加自定义样式"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  {"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      tag"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"link"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      attrs"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        rel"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"stylesheet"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"        href"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"/.fispo/custom.css"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"      injectTo"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"head"'}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    }"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"]"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"highlighter",children:[s.jsx(l.a,{className:"header-anchor",href:"#highlighter",children:s.jsx(l.span,{className:"icon icon-link"})}),"highlighter"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"HighlighterOptions"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"{}"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
代码高亮配置项。`]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"可用选项"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"HighlighterOptions"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 预先加载的主题。"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     *"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 默认值: nord"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    theme"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"IThemeRegistration"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 预先加载的主题列表。"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    themes"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"IThemeRegistration"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 预先加载的语言列表。"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     *"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 默认值为所有内置语言。"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    langs"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" ("}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Lang"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"ILanguageRegistration"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:")[];"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/**"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     * 用于加载主题和语言的路径。相对于包的根目录。"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#C2C3C5"},children:"     */"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    paths"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"IHighlighterPaths"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"示例"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"highlighter"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  theme"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" github"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"-"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"light"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h2,{id:"默认主题配置",children:[s.jsx(l.a,{className:"header-anchor",href:"#默认主题配置",children:s.jsx(l.span,{className:"icon icon-link"})}),"默认主题配置"]}),`
`,s.jsxs(l.h3,{id:"navmenus",children:[s.jsx(l.a,{className:"header-anchor",href:"#navmenus",children:s.jsx(l.span,{className:"icon icon-link"})}),"navMenus"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"navMenuItem[]"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"[]"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
配置导航栏菜单项及其层级结构`]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"navMenuItem"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 导航栏显示文字（必填） */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  title"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 路由路径（必填） */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  path"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 图标名称 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"IconName"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 子菜单项 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  children"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"navMenuItem"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:"[];"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.code,{children:"IconName"}),"类型为 fontawesome 图标库中的图标类型。"]}),`
`,s.jsxs(l.blockquote,{children:[`
`,s.jsxs(l.p,{children:["Fispo集成了 ",s.jsx(l.a,{href:"https://fontawesome.com.cn/v5",target:"_blank",rel:"noopener noreferrer",children:"fontawesome"})," 图标库，您可以在该图标库的网站查找需要的图标。"]}),`
`]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"banner",children:[s.jsx(l.a,{className:"header-anchor",href:"#banner",children:s.jsx(l.span,{className:"icon icon-link"})}),"banner"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型："}),s.jsx(l.code,{children:"BannerData"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:'{ img: "/banner.png" }'}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
首页横幅配置`,s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"配置项"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"BannerData"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 横幅图片地址 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  img"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 横幅副标题文字 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  subtitle"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"示例"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"banner"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  img"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:"'/images/home-bg.jpg'"}),s.jsx(l.span,{style:{color:"#212121"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  subtitle"}),s.jsx(l.span,{style:{color:"#212121"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:"'记录技术成长之路'"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"sidebar",children:[s.jsx(l.a,{className:"header-anchor",href:"#sidebar",children:s.jsx(l.span,{className:"icon icon-link"})}),"sidebar"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"Sidebar"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"{}"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
侧边栏综合配置`,s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"基础配置"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"Sidebar"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 是否启用侧边栏 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"boolean"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 是否默认折叠 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  hide"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"boolean"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"/** 显示位置 */"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  position"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"left"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"right"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 各卡片配置..."})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h4,{id:"card_author-作者卡片",children:[s.jsx(l.a,{className:"header-anchor",href:"#card_author-作者卡片",children:s.jsx(l.span,{className:"icon icon-link"})}),"card_author 作者卡片"]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"card_author"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;       "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 是否显示"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  description"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" string;   "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 个性签名"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  button"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {              "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 联系按钮"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;     "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 显示按钮"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    icon"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" IconName;      "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 按钮图标"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    text"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" string;        "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 按钮文字"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"    link"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" string;        "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 跳转链接"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"  };"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h4,{id:"card_announcement-公告卡片",children:[s.jsx(l.a,{className:"header-anchor",href:"#card_announcement-公告卡片",children:s.jsx(l.span,{className:"icon icon-link"})}),"card_announcement 公告卡片"]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"card_announcement"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;     "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 是否显示"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  content"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" string;     "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 公告内容（支持Markdown）"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h4,{id:"card_recent_post-最近文章",children:[s.jsx(l.a,{className:"header-anchor",href:"#card_recent_post-最近文章",children:s.jsx(l.span,{className:"icon icon-link"})}),"card_recent_post 最近文章"]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"card_recent_post"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  limit"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" number;       "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 显示数量（默认5）"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  sort"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"date"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"|"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#22863A"},children:'"updated"'}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 排序方式"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h4,{id:"card_categories-分类",children:[s.jsx(l.a,{className:"header-anchor",href:"#card_categories-分类",children:s.jsx(l.span,{className:"icon icon-link"})}),"card_categories 分类"]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"card_categories"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  limit"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" number;       "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 显示前N个分类（默认8）"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h4,{id:"card_tags-标签云",children:[s.jsx(l.a,{className:"header-anchor",href:"#card_tags-标签云",children:s.jsx(l.span,{className:"icon icon-link"})}),"card_tags 标签云"]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"card_tags"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  limit"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" number;       "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 显示标签数量（默认15）"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsxs(l.h4,{id:"card_webinfo-网站信息",children:[s.jsx(l.a,{className:"header-anchor",href:"#card_webinfo-网站信息",children:s.jsx(l.span,{className:"icon icon-link"})}),"card_webinfo 网站信息"]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"card_webinfo"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  enable?"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  post_count"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;      "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 显示文章总数"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  last_push_date"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;  "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 最后更新时间"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  run_time"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" boolean;        "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 站点运行时间"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"};"})}),`
`,s.jsx(l.span,{className:"line"})]})})]}),`
`,s.jsx(l.hr,{}),`
`,s.jsxs(l.h3,{id:"footer",children:[s.jsx(l.a,{className:"header-anchor",href:"#footer",children:s.jsx(l.span,{className:"icon icon-link"})}),"footer"]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"类型"}),"：",s.jsx(l.code,{children:"FooterData"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"默认值"}),"：",s.jsx(l.code,{children:"{}"}),s.jsx(l.br,{}),`
`,s.jsx(l.strong,{children:"详情"}),"：",s.jsx(l.br,{}),`
页脚区域配置`]}),`
`,s.jsxs(l.p,{children:[s.jsx(l.strong,{children:"配置项"}),"："]}),`
`,s.jsxs(l.div,{className:"language-ts",children:[s.jsxs(l.div,{className:"highlight-tools",children:[s.jsx(l.span,{className:"lang",children:"ts"}),s.jsx(n,{})]}),s.jsx(l.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D32F2F"},children:"interface"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#6F42C1"},children:"FooterData"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  message"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";     "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 底部提示信息"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292EFF"},children:"  copyright"}),s.jsx(l.span,{style:{color:"#D32F2F"},children:"?:"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(l.span,{style:{color:"#1976D2"},children:"string"}),s.jsx(l.span,{style:{color:"#24292EFF"},children:";   "}),s.jsx(l.span,{style:{color:"#C2C3C5"},children:"// 版权声明"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292EFF"},children:"}"})}),`
`,s.jsx(l.span,{className:"line"})]})})]})]})}function h(e={}){const{wrapper:l}={...r(),...e.components};return l?s.jsx(l,{...e,children:s.jsx(c,{...e})}):c(e)}export{h as default,i as frontmatter,o as mdInfo,d as toc};
