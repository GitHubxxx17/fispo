import{jsx as e,jsxs as l,Fragment as o}from"react/jsx-runtime";import{u as d}from"../client-entry.js";import"react-dom/client";import"react";const N={title:"markdown 扩展"},F='Markdown 扩展Fispo 带有内置的 Markdown 扩展。链接外部链接和内部链接都会被处理。外部链接所有的外部链接都会被加上target="_blank" rel="noreferrer"，点击会在新标签页打开外部网站，例如：reactvite内部链接内部链接将转换为单页导航的路由链接。',y=[{id:"markdown-扩展",text:"Markdown 扩展",depth:1},{id:"链接",text:"链接",depth:2},{id:"外部链接",text:"外部链接",depth:3},{id:"内部链接",text:"内部链接",depth:3},{id:"frontmatter",text:"frontmatter",depth:2},{id:"标签外挂",text:"标签外挂",depth:2},{id:"引用-note",text:"引用 note",depth:3},{id:"上标标签-tip",text:"上标标签 tip",depth:3},{id:"时间轴",text:"时间轴",depth:3}];function i(a){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...a.components},{CopyButton:s,Icon:c}=n;return s||r("CopyButton"),c||r("Icon"),l(o,{children:[l(n.h1,{id:"markdown-扩展",children:[e(n.a,{className:"header-anchor",href:"#markdown-扩展",children:e(n.span,{className:"icon icon-link"})}),"Markdown 扩展"]}),`
`,e(n.p,{children:"Fispo 带有内置的 Markdown 扩展。"}),`
`,l(n.h2,{id:"链接",children:[e(n.a,{className:"header-anchor",href:"#链接",children:e(n.span,{className:"icon icon-link"})}),"链接"]}),`
`,e(n.p,{children:"外部链接和内部链接都会被处理。"}),`
`,l(n.h3,{id:"外部链接",children:[e(n.a,{className:"header-anchor",href:"#外部链接",children:e(n.span,{className:"icon icon-link"})}),"外部链接"]}),`
`,l(n.p,{children:["所有的外部链接都会被加上",e(n.code,{children:'target="_blank" rel="noreferrer"'}),"，点击会在新标签页打开外部网站，例如："]}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer",children:"react"})}),`
`,e(n.li,{children:e(n.a,{href:"https://vitejs.cn/vite3-cn/",target:"_blank",rel:"noopener noreferrer",children:"vite"})}),`
`]}),`
`,l(n.h3,{id:"内部链接",children:[e(n.a,{className:"header-anchor",href:"#内部链接",children:e(n.span,{className:"icon icon-link"})}),"内部链接"]}),`
`,l(n.p,{children:["内部链接将转换为单页导航的路由链接。",e(n.br,{}),`
例如，给定以下目录结构：`]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"."})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"├─ index.md"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"├─ foo"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"│  ├─ index.md"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"│  ├─ a.md"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"│  └─ b.md"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"└─ bar"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"   ├─ index.md"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"   ├─ a.md"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"   └─ b.md"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,e(n.p,{children:"假设现在处于 foo/a.md 文件中："}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"Home"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(/)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户导航至根目录下的 index.html -->"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"foo"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(/foo/)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户导航至目录 foo 下的 index.html -->"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"foo heading"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(./#heading)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"foo a - heading"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(#heading)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户锚定到当前文件中的一个标题上 -->"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"bar - three"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(../bar/three)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 可以省略扩展名 -->"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"bar - three"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(../bar/a.md)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 可以添加 .md -->"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),e(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"bar - four"}),e(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),e(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(../bar/b.html)"}),e(n.span,{style:{color:"#24292EFF"},children:" <!-- 或者可以添加 .html -->"})]}),`
`,e(n.span,{className:"line"})]})})]}),`
`,e(n.hr,{}),`
`,l(n.h2,{id:"frontmatter",children:[e(n.a,{className:"header-anchor",href:"#frontmatter",children:e(n.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,e(n.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。"}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D32F2F"},children:"title"}),e(n.span,{style:{color:"#D32F2F"},children:":"}),e(n.span,{style:{color:"#24292EFF"},children:" "}),e(n.span,{style:{color:"#22863A"},children:"Blogging Like a Hacker"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D32F2F"},children:"lang"}),e(n.span,{style:{color:"#D32F2F"},children:":"}),e(n.span,{style:{color:"#24292EFF"},children:" "}),e(n.span,{style:{color:"#22863A"},children:"en-US"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:["此数据将可用于页面的其余部分，以及所有自定义和主题组件。",e(n.br,{}),`
更多信息，参见`,e(n.a,{href:"./frontmatter",target:"",rel:"",children:"frontmatter"}),"。"]}),`
`,l(n.h2,{id:"标签外挂",children:[e(n.a,{className:"header-anchor",href:"#标签外挂",children:e(n.span,{className:"icon icon-link"})}),"标签外挂"]}),`
`,l(n.h3,{id:"引用-note",children:[e(n.a,{className:"header-anchor",href:"#引用-note",children:e(n.span,{className:"icon icon-link"})}),"引用 note"]}),`
`,e(n.p,{children:"Fispo 的标签外挂参考了 Hexo 独有的功能标签外挂，并不是标准的 Markdown 格式。"}),`
`,l(n.div,{className:"note warning modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。"}),`
`]}),`
`,l(n.p,{children:[e(n.strong,{children:"用法"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[l(n.span,{className:"line",children:[e(n.span,{style:{color:"#24292EFF"},children:"{% note ["}),e(n.span,{style:{color:"#D32F2F"},children:"class"}),e(n.span,{style:{color:"#24292EFF"},children:"] ["}),e(n.span,{style:{color:"#D32F2F"},children:"no-icon"}),e(n.span,{style:{color:"#24292EFF"},children:"] ["}),e(n.span,{style:{color:"#D32F2F"},children:"icon"}),e(n.span,{style:{color:"#24292EFF"},children:"] ["}),e(n.span,{style:{color:"#D32F2F"},children:"style"}),e(n.span,{style:{color:"#24292EFF"},children:"] %}"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"Any content (support inline tags too.io)."})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`

























`,l(n.table,{children:[e(n.thead,{children:l(n.tr,{children:[e(n.th,{style:{textAlign:"center"},children:"名称"}),e(n.th,{style:{textAlign:"center"},children:"用法"})]})}),l(n.tbody,{children:[l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"class"}),e(n.td,{style:{textAlign:"center"},children:"【可选】标识，不同的标识有不同的配色（ default / primary / success / info / warning / danger ）"})]}),l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"no-icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】不显示 icon"})]}),l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】以icon-开头标识icon"})]}),l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"style"}),e(n.td,{style:{textAlign:"center"},children:"【可选】可以覆盖配置中的 style（simple/modern/flat/disabled）"})]})]})]}),`
`,l(n.div,{className:"note primary icon-palette flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"palette"})}),`
`,e(n.p,{children:"simple"}),`
`]}),`
`,l(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"默认 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note default simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"default 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note primary simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"primary 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note success simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"success 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note info simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"info 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note warning simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"warning 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note danger simple %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"danger 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,l(n.div,{className:"note simple",children:[`
`,e(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note default simple",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"circle-right",className:"fas"})}),`
`,e(n.p,{children:"default 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note primary simple",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"plus-circle",className:"fas"})}),`
`,e(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note success simple",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"check-circle",className:"fas"})}),`
`,e(n.p,{children:"success 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note info simple",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"info-circle",className:"fas"})}),`
`,e(n.p,{children:"info 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note warning simple",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note danger simple",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"minus-circle",className:"fas"})}),`
`,e(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note primary icon-pen-fancy flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"pen-fancy"})}),`
`,e(n.p,{children:"modern"}),`
`]}),`
`,l(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"默认 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note default modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"default 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note primary modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"primary 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note success modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"success 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note info modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"info 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note warning modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"warning 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note danger modern %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"danger 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,l(n.div,{className:"note modern",children:[`
`,e(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note default modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"circle-right",className:"fas"})}),`
`,e(n.p,{children:"default 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note primary modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"plus-circle",className:"fas"})}),`
`,e(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note success modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"check-circle",className:"fas"})}),`
`,e(n.p,{children:"success 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note info modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"info-circle",className:"fas"})}),`
`,e(n.p,{children:"info 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note warning modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note danger modern",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"minus-circle",className:"fas"})}),`
`,e(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note primary icon-coffee flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"coffee"})}),`
`,e(n.p,{children:"flat"}),`
`]}),`
`,l(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"默认 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note default flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"default 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note primary flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"primary 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note success flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"success 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note info flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"info 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note warning flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"warning 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% note danger flat %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"danger 提示块标签"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,l(n.div,{className:"note flat",children:[`
`,e(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note default flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"circle-right",className:"fas"})}),`
`,e(n.p,{children:"default 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note primary flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"plus-circle",className:"fas"})}),`
`,e(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note success flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"check-circle",className:"fas"})}),`
`,e(n.p,{children:"success 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note info flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"info-circle",className:"fas"})}),`
`,e(n.p,{children:"info 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note warning flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"exclamation-circle",className:"fas"})}),`
`,e(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,e(n.p,{}),`
`,l(n.div,{className:"note danger flat",children:[e(n.span,{className:"note-icon",children:e(c,{icon:"minus-circle",className:"fas"})}),`
`,e(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,l(n.h3,{id:"上标标签-tip",children:[e(n.a,{className:"header-anchor",href:"#上标标签-tip",children:e(n.span,{className:"icon icon-link"})}),"上标标签 tip"]}),`
`,l(n.div,{className:"tip info",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"info"})}),`
`,l(n.p,{children:["tip的样式参考自 ",e(n.a,{href:"https://akilar.top/posts/615e2dec/",target:"_blank",rel:"noopener noreferrer",children:"Akilarの糖果屋"})]}),`
`]}),`
`,l(n.p,{children:[e(n.strong,{children:"用法"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[l(n.span,{className:"line",children:[e(n.span,{style:{color:"#24292EFF"},children:"{% tip ["}),e(n.span,{style:{color:"#D32F2F"},children:"class"}),e(n.span,{style:{color:"#24292EFF"},children:"] ["}),e(n.span,{style:{color:"#D32F2F"},children:"no-icon"}),e(n.span,{style:{color:"#24292EFF"},children:"] ["}),e(n.span,{style:{color:"#D32F2F"},children:"icon"}),e(n.span,{style:{color:"#24292EFF"},children:"] %}"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"Any content"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`





















`,l(n.table,{children:[e(n.thead,{children:l(n.tr,{children:[e(n.th,{style:{textAlign:"center"},children:"名称"}),e(n.th,{style:{textAlign:"center"},children:"用法"})]})}),l(n.tbody,{children:[l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"class"}),e(n.td,{style:{textAlign:"center"},children:"【可选】标识，不同的标识有不同的配色（ default/success/error/warning/bolt/ban/home/sync/cogs/key/bell ）"})]}),l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"no-icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】不显示 icon"})]}),l(n.tr,{children:[e(n.td,{style:{textAlign:"center"},children:"icon"}),e(n.td,{style:{textAlign:"center"},children:"【可选】以icon-开头标识icon"})]})]})]}),`
`,l(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip %}default{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip info %}info{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip success %}success{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip error %}error{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip warning %}warning{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip bolt %}bolt{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip ban %}ban{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip home %}home{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip sync %}sync{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip cogs %}cogs{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip key %}key{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip bell %}bell{% endtip %}"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% tip fa-atom %}自定义font awesome图标{% endtip %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:[e(n.strong,{children:"样式预览"}),"：",e(n.br,{}),`
default{% endtip %}`]}),`
`,l(n.div,{className:"tip",children:[`
`,e(n.p,{children:"default"}),`
`]}),`
`,e(n.p,{children:"info{% endtip %}"}),`
`,l(n.div,{className:"tip info",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"info"})}),`
`,e(n.p,{children:"info"}),`
`]}),`
`,e(n.p,{children:"success{% endtip %}"}),`
`,l(n.div,{className:"tip success",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"check"})}),`
`,e(n.p,{children:"success"}),`
`]}),`
`,e(n.p,{children:"error{% endtip %}"}),`
`,l(n.div,{className:"tip error",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"times"})}),`
`,e(n.p,{children:"error"}),`
`]}),`
`,e(n.p,{children:"warning{% endtip %}"}),`
`,l(n.div,{className:"tip warning",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"exclamation"})}),`
`,e(n.p,{children:"warning"}),`
`]}),`
`,e(n.p,{children:"bolt{% endtip %}"}),`
`,l(n.div,{className:"tip bolt",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"bolt"})}),`
`,e(n.p,{children:"bolt"}),`
`]}),`
`,e(n.p,{children:"ban{% endtip %}"}),`
`,l(n.div,{className:"tip ban",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"ban"})}),`
`,e(n.p,{children:"ban"}),`
`]}),`
`,e(n.p,{children:"home{% endtip %}"}),`
`,l(n.div,{className:"tip home",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"home"})}),`
`,e(n.p,{children:"home"}),`
`]}),`
`,e(n.p,{children:"sync{% endtip %}"}),`
`,l(n.div,{className:"tip sync",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"sync"})}),`
`,e(n.p,{children:"sync"}),`
`]}),`
`,e(n.p,{children:"cogs{% endtip %}"}),`
`,l(n.div,{className:"tip cogs",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"cogs"})}),`
`,e(n.p,{children:"cogs"}),`
`]}),`
`,e(n.p,{children:"key{% endtip %}"}),`
`,l(n.div,{className:"tip key",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"key"})}),`
`,e(n.p,{children:"key"}),`
`]}),`
`,e(n.p,{children:"bell{% endtip %}"}),`
`,l(n.div,{className:"tip bell",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"bell"})}),`
`,e(n.p,{children:"bell"}),`
`]}),`
`,e(n.p,{children:"自定义font awesome图标{% endtip %}"}),`
`,l(n.div,{className:"tip icon-atom",children:[e(n.span,{className:"tip-icon",children:e(c,{icon:"atom"})}),`
`,e(n.p,{children:"自定义font awesome图标"}),`
`]}),`
`,l(n.h3,{id:"时间轴",children:[e(n.a,{className:"header-anchor",href:"#时间轴",children:e(n.span,{className:"icon icon-link"})}),"时间轴"]}),`
`,l(n.p,{children:[e(n.strong,{children:"示例代码"}),"："]}),`
`,l(n.div,{className:"language-md",children:[l(n.div,{className:"highlight-tools",children:[e(n.span,{className:"lang",children:"md"}),e(s,{})]}),e(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:l(n.code,{children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% timeline 2022 %}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#C2C3C5"},children:"<!-- timeline 01-02 -->"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"这是测试页面"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#C2C3C5"},children:"<!-- endtimeline -->"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#24292EFF"},children:"{% endtimeline %}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:[e(n.strong,{children:"样式预览"}),"："]}),`
`,l(n.div,{className:"timeline",children:[e(n.div,{className:"timeline-item headline",children:e(n.div,{className:"timeline-item-title",children:e(n.p,{children:"2022"})})}),`

`,l(n.div,{className:"timeline-item",children:[`
`,l(n.div,{className:"timeline-item-title",children:[`
`,e(n.p,{children:"01-02"}),`
`]}),l(n.div,{className:"timeline-item-content",children:[`
`,e(n.p,{children:"这是测试页面"}),`

`]})]}),`
`]})]})}function f(a={}){const{wrapper:n}={...d(),...a.components};return n?e(n,{...a,children:e(i,{...a})}):i(a)}function r(a,n){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default,N as frontmatter,F as mdInfo,y as toc};
