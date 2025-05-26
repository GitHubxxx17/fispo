import{jsx as e,jsxs as i,Fragment as s}from"react/jsx-runtime";import{e as d}from"./vendor-CuygkBdc.js";import"react";const m={title:"markdown 扩展"},f='Markdown 扩展Fispo 带有内置的 Markdown 扩展。链接外部链接和内部链接都会被处理。外部链接所有的外部链接都会被加上target="_blank" rel="noreferrer"，点击会在新标签页打开外部网站，例如：reactvite内部链接内部链接将转换为单页导航的路由链接。',N=[{id:"markdown-扩展",text:"Markdown 扩展",depth:1},{id:"链接",text:"链接",depth:2},{id:"外部链接",text:"外部链接",depth:3},{id:"内部链接",text:"内部链接",depth:3},{id:"frontmatter",text:"frontmatter",depth:2},{id:"标签外挂",text:"标签外挂",depth:2},{id:"引用-note",text:"引用 note",depth:3},{id:"上标标签-tip",text:"上标标签 tip",depth:3},{id:"时间轴",text:"时间轴",depth:3}];function l(a){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...a.components},{CodeBlock:c,Icon:r}=n;return c||t("CodeBlock"),r||t("Icon"),i(s,{children:[i(n.h1,{id:"markdown-扩展",children:[e(n.a,{className:"header-anchor",href:"#markdown-扩展",children:e(n.span,{className:"icon icon-link"})}),"Markdown 扩展"]}),`
`,e(n.p,{children:"Fispo 带有内置的 Markdown 扩展。"}),`
`,i(n.h2,{id:"链接",children:[e(n.a,{className:"header-anchor",href:"#链接",children:e(n.span,{className:"icon icon-link"})}),"链接"]}),`
`,e(n.p,{children:"外部链接和内部链接都会被处理。"}),`
`,i(n.h3,{id:"外部链接",children:[e(n.a,{className:"header-anchor",href:"#外部链接",children:e(n.span,{className:"icon icon-link"})}),"外部链接"]}),`
`,i(n.p,{children:["所有的外部链接都会被加上",e(n.code,{children:'target="_blank" rel="noreferrer"'}),"，点击会在新标签页打开外部网站，例如："]}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer",children:"react"})}),`
`,e(n.li,{children:e(n.a,{href:"https://vitejs.cn/vite3-cn/",target:"_blank",rel:"noopener noreferrer",children:"vite"})}),`
`]}),`
`,i(n.h3,{id:"内部链接",children:[e(n.a,{className:"header-anchor",href:"#内部链接",children:e(n.span,{className:"icon icon-link"})}),"内部链接"]}),`
`,i(n.p,{children:["内部链接将转换为单页导航的路由链接。",e(n.br,{}),`
例如，给定以下目录结构：`]}),`
`,e(c,{code:`.\r
├─ index.md\r
├─ foo\r
│  ├─ index.md\r
│  ├─ a.md\r
│  └─ b.md\r
└─ bar\r
   ├─ index.md\r
   ├─ a.md\r
   └─ b.md
`,language:"md"}),`
`,e(n.p,{children:"假设现在处于 foo/a.md 文件中："}),`
`,e(c,{code:`[Home](/) <!-- 将用户导航至根目录下的 index.html -->\r
[foo](/foo/) <!-- 将用户导航至目录 foo 下的 index.html -->\r
[foo heading](./#heading) <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->\r
[foo a - heading](#heading) <!-- 将用户锚定到当前文件中的一个标题上 -->\r
[bar - three](../bar/three) <!-- 可以省略扩展名 -->\r
[bar - three](../bar/a.md) <!-- 可以添加 .md -->\r
[bar - four](../bar/b.html) <!-- 或者可以添加 .html -->
`,language:"md"}),`
`,e(n.hr,{}),`
`,i(n.h2,{id:"frontmatter",children:[e(n.a,{className:"header-anchor",href:"#frontmatter",children:e(n.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,e(n.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。"}),`
`,e(c,{code:`---\r
title: Blogging Like a Hacker\r
lang: en-US\r
---
`,language:"md"}),`
`,i(n.p,{children:["此数据将可用于页面的其余部分，以及所有自定义和主题组件。",e(n.br,{}),`
更多信息，参见`,e(n.a,{href:"./frontmatter",target:"",rel:"",children:"frontmatter"}),"。"]}),`
`,i(n.h2,{id:"标签外挂",children:[e(n.a,{className:"header-anchor",href:"#标签外挂",children:e(n.span,{className:"icon icon-link"})}),"标签外挂"]}),`
`,i(n.h3,{id:"引用-note",children:[e(n.a,{className:"header-anchor",href:"#引用-note",children:e(n.span,{className:"icon icon-link"})}),"引用 note"]}),`
`,e(n.p,{children:"Fispo 的标签外挂参考了 Hexo 独有的功能标签外挂，并不是标准的 Markdown 格式。"}),`
`,i(n.div,{className:"note warning modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。"}),`
`]}),`
`,i(n.p,{children:[e(n.strong,{children:"用法"}),"："]}),`
`,e(c,{code:`{% note [class] [no-icon] [icon] [style] %}\r
Any content (support inline tags too.io).\r
{% endnote %}
`,language:"md"}),`

























`,i(n.table,{children:[e(n.thead,{children:i(n.tr,{children:[e(n.th,{style:{textAlign:"center"},children:"名称"}),e(n.th,{style:{textAlign:"center"},children:"用法"})]})}),i(n.tbody,{children:[i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"class"}),e(n.td,{style:{textAlign:"center"},children:"【可选】标识，不同的标识有不同的配色（ default / primary / success / info / warning / danger ）"})]}),i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"no-icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】不显示 icon"})]}),i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】以icon-开头标识icon"})]}),i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"style"}),e(n.td,{style:{textAlign:"center"},children:"【可选】可以覆盖配置中的 style（simple/modern/flat/disabled）"})]})]})]}),`
`,i(n.div,{className:"note primary icon-palette flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"palette"})}),`
`,e(n.p,{children:"simple"}),`
`]}),`
`,i(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,e(c,{code:`{% note simple %}\r
默认 提示块标签\r
{% endnote %}\r
\r
{% note default simple %}\r
default 提示块标签\r
{% endnote %}\r
\r
{% note primary simple %}\r
primary 提示块标签\r
{% endnote %}\r
\r
{% note success simple %}\r
success 提示块标签\r
{% endnote %}\r
\r
{% note info simple %}\r
info 提示块标签\r
{% endnote %}\r
\r
{% note warning simple %}\r
warning 提示块标签\r
{% endnote %}\r
\r
{% note danger simple %}\r
danger 提示块标签\r
{% endnote %}
`,language:"md"}),`
`,i(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,i(n.div,{className:"note simple",children:[`
`,e(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note default simple",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"circle-right",className:"fas"})}),`
`,e(n.p,{children:"default 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note primary simple",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"plus-circle",className:"fas"})}),`
`,e(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note success simple",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"check-circle",className:"fas"})}),`
`,e(n.p,{children:"success 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note info simple",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"info-circle",className:"fas"})}),`
`,e(n.p,{children:"info 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note warning simple",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note danger simple",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"minus-circle",className:"fas"})}),`
`,e(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note primary icon-pen-fancy flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"pen-fancy"})}),`
`,e(n.p,{children:"modern"}),`
`]}),`
`,i(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,e(c,{code:`{% note modern %}\r
默认 提示块标签\r
{% endnote %}\r
\r
{% note default modern %}\r
default 提示块标签\r
{% endnote %}\r
\r
{% note primary modern %}\r
primary 提示块标签\r
{% endnote %}\r
\r
{% note success modern %}\r
success 提示块标签\r
{% endnote %}\r
\r
{% note info modern %}\r
info 提示块标签\r
{% endnote %}\r
\r
{% note warning modern %}\r
warning 提示块标签\r
{% endnote %}\r
\r
{% note danger modern %}\r
danger 提示块标签\r
{% endnote %}
`,language:"md"}),`
`,i(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,i(n.div,{className:"note modern",children:[`
`,e(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note default modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"circle-right",className:"fas"})}),`
`,e(n.p,{children:"default 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note primary modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"plus-circle",className:"fas"})}),`
`,e(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note success modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"check-circle",className:"fas"})}),`
`,e(n.p,{children:"success 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note info modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"info-circle",className:"fas"})}),`
`,e(n.p,{children:"info 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note warning modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note danger modern",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"minus-circle",className:"fas"})}),`
`,e(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note primary icon-coffee flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"coffee"})}),`
`,e(n.p,{children:"flat"}),`
`]}),`
`,i(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,e(c,{code:`{% note flat %}\r
默认 提示块标签\r
{% endnote %}\r
\r
{% note default flat %}\r
default 提示块标签\r
{% endnote %}\r
\r
{% note primary flat %}\r
primary 提示块标签\r
{% endnote %}\r
\r
{% note success flat %}\r
success 提示块标签\r
{% endnote %}\r
\r
{% note info flat %}\r
info 提示块标签\r
{% endnote %}\r
\r
{% note warning flat %}\r
warning 提示块标签\r
{% endnote %}\r
\r
{% note danger flat %}\r
danger 提示块标签\r
{% endnote %}
`,language:"md"}),`
`,i(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,i(n.div,{className:"note flat",children:[`
`,e(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note default flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"circle-right",className:"fas"})}),`
`,e(n.p,{children:"default 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note primary flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"plus-circle",className:"fas"})}),`
`,e(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note success flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"check-circle",className:"fas"})}),`
`,e(n.p,{children:"success 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note info flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"info-circle",className:"fas"})}),`
`,e(n.p,{children:"info 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note warning flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,i(n.div,{className:"note danger flat",children:[e(n.span,{className:"note-icon",children:e(r,{icon:"minus-circle",className:"fas"})}),`
`,e(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,i(n.h3,{id:"上标标签-tip",children:[e(n.a,{className:"header-anchor",href:"#上标标签-tip",children:e(n.span,{className:"icon icon-link"})}),"上标标签 tip"]}),`
`,i(n.div,{className:"tip info",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"info"})}),`
`,i(n.p,{children:["tip的样式参考自 ",e(n.a,{href:"https://akilar.top/posts/615e2dec/",target:"_blank",rel:"noopener noreferrer",children:"Akilarの糖果屋"})]}),`
`]}),`
`,i(n.p,{children:[e(n.strong,{children:"用法"}),"："]}),`
`,e(c,{code:`{% tip [class] [no-icon] [icon] %}\r
Any content\r
{% endnote %}
`,language:"md"}),`





















`,i(n.table,{children:[e(n.thead,{children:i(n.tr,{children:[e(n.th,{style:{textAlign:"center"},children:"名称"}),e(n.th,{style:{textAlign:"center"},children:"用法"})]})}),i(n.tbody,{children:[i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"class"}),e(n.td,{style:{textAlign:"center"},children:"【可选】标识，不同的标识有不同的配色（ default/success/error/warning/bolt/ban/home/sync/cogs/key/bell ）"})]}),i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"no-icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】不显示 icon"})]}),i(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】以icon-开头标识icon"})]})]})]}),`
`,i(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,e(c,{code:`{% tip %}default{% endtip %}\r
{% tip info %}info{% endtip %}\r
{% tip success %}success{% endtip %}\r
{% tip error %}error{% endtip %}\r
{% tip warning %}warning{% endtip %}\r
{% tip bolt %}bolt{% endtip %}\r
{% tip ban %}ban{% endtip %}\r
{% tip home %}home{% endtip %}\r
{% tip sync %}sync{% endtip %}\r
{% tip cogs %}cogs{% endtip %}\r
{% tip key %}key{% endtip %}\r
{% tip bell %}bell{% endtip %}\r
{% tip fa-atom %}自定义font awesome图标{% endtip %}
`,language:"md"}),`
`,i(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,i(n.div,{className:"tip",children:[`
`,e(n.p,{children:"default"}),`
`]}),`
`,i(n.div,{className:"tip info",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"info"})}),`
`,e(n.p,{children:"info"}),`
`]}),`
`,i(n.div,{className:"tip success",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"check"})}),`
`,e(n.p,{children:"success"}),`
`]}),`
`,i(n.div,{className:"tip error",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"times"})}),`
`,e(n.p,{children:"error"}),`
`]}),`
`,i(n.div,{className:"tip warning",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"exclamation"})}),`
`,e(n.p,{children:"warning"}),`
`]}),`
`,i(n.div,{className:"tip bolt",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"bolt"})}),`
`,e(n.p,{children:"bolt"}),`
`]}),`
`,i(n.div,{className:"tip ban",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"ban"})}),`
`,e(n.p,{children:"ban"}),`
`]}),`
`,i(n.div,{className:"tip home",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"home"})}),`
`,e(n.p,{children:"home"}),`
`]}),`
`,i(n.div,{className:"tip sync",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"sync"})}),`
`,e(n.p,{children:"sync"}),`
`]}),`
`,i(n.div,{className:"tip cogs",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"cogs"})}),`
`,e(n.p,{children:"cogs"}),`
`]}),`
`,i(n.div,{className:"tip key",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"key"})}),`
`,e(n.p,{children:"key"}),`
`]}),`
`,i(n.div,{className:"tip bell",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"bell"})}),`
`,e(n.p,{children:"bell"}),`
`]}),`
`,i(n.div,{className:"tip icon-atom",children:[e(n.span,{className:"tip-icon",children:e(r,{icon:"atom"})}),`
`,e(n.p,{children:"自定义font awesome图标"}),`
`]}),`
`,i(n.h3,{id:"时间轴",children:[e(n.a,{className:"header-anchor",href:"#时间轴",children:e(n.span,{className:"icon icon-link"})}),"时间轴"]}),`
`,i(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,e(c,{code:`{% timeline 2022 %}\r
\r
<!-- timeline 01-02 -->\r
\r
这是测试页面\r
\r
<!-- endtimeline -->\r
\r
{% endtimeline %}
`,language:"md"}),`
`,i(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,i(n.div,{className:"timeline",children:[e(n.div,{className:"timeline-item headline",children:e(n.div,{className:"timeline-item-title",children:e(n.p,{children:"2022"})})}),`

`,i(n.div,{className:"timeline-item",children:[`
`,i(n.div,{className:"timeline-item-title",children:[`
`,e(n.p,{children:"01-02"}),`
`]}),i(n.div,{className:"timeline-item-content",children:[`
`,e(n.p,{children:"这是测试页面"}),`

`]})]}),`
`]})]})}function g(a={}){const{wrapper:n}={...d(),...a.components};return n?e(n,{...a,children:e(l,{...a})}):l(a)}function t(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default,m as frontmatter,f as mdInfo,N as toc};
