import{u as r,j as s}from"../client-entry.js";const o={title:"markdown 扩展"},t='Markdown 扩展Fispo 带有内置的 Markdown 扩展。链接外部链接和内部链接都会被处理。外部链接所有的外部链接都会被加上target="_blank" rel="noreferrer"，点击会在新标签页打开外部网站，例如：reactvite内部链接内部链接将转换为单页导航的路由链接。',x=[{id:"markdown-扩展",text:"Markdown 扩展",depth:1},{id:"链接",text:"链接",depth:2},{id:"外部链接",text:"外部链接",depth:3},{id:"内部链接",text:"内部链接",depth:3},{id:"frontmatter",text:"frontmatter",depth:2},{id:"标签外挂",text:"标签外挂",depth:2},{id:"引用-note",text:"引用 note",depth:3},{id:"上标标签-tip",text:"上标标签 tip",depth:3},{id:"时间轴",text:"时间轴",depth:3}];function a(c){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...c.components},{CopyButton:l,Icon:e}=n;return l||i("CopyButton"),e||i("Icon"),s.jsxs(s.Fragment,{children:[s.jsxs(n.h1,{id:"markdown-扩展",children:[s.jsx(n.a,{className:"header-anchor",href:"#markdown-扩展",children:s.jsx(n.span,{className:"icon icon-link"})}),"Markdown 扩展"]}),`
`,s.jsx(n.p,{children:"Fispo 带有内置的 Markdown 扩展。"}),`
`,s.jsxs(n.h2,{id:"链接",children:[s.jsx(n.a,{className:"header-anchor",href:"#链接",children:s.jsx(n.span,{className:"icon icon-link"})}),"链接"]}),`
`,s.jsx(n.p,{children:"外部链接和内部链接都会被处理。"}),`
`,s.jsxs(n.h3,{id:"外部链接",children:[s.jsx(n.a,{className:"header-anchor",href:"#外部链接",children:s.jsx(n.span,{className:"icon icon-link"})}),"外部链接"]}),`
`,s.jsxs(n.p,{children:["所有的外部链接都会被加上",s.jsx(n.code,{children:'target="_blank" rel="noreferrer"'}),"，点击会在新标签页打开外部网站，例如："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:s.jsx(n.a,{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer",children:"react"})}),`
`,s.jsx(n.li,{children:s.jsx(n.a,{href:"https://vitejs.cn/vite3-cn/",target:"_blank",rel:"noopener noreferrer",children:"vite"})}),`
`]}),`
`,s.jsxs(n.h3,{id:"内部链接",children:[s.jsx(n.a,{className:"header-anchor",href:"#内部链接",children:s.jsx(n.span,{className:"icon icon-link"})}),"内部链接"]}),`
`,s.jsxs(n.p,{children:["内部链接将转换为单页导航的路由链接。",s.jsx(n.br,{}),`
例如，给定以下目录结构：`]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"├─ index.md"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"├─ foo"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"│  ├─ index.md"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"│  ├─ a.md"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"│  └─ b.md"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"└─ bar"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"   ├─ index.md"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"   ├─ a.md"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"   └─ b.md"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsx(n.p,{children:"假设现在处于 foo/a.md 文件中："}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"Home"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(/)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户导航至根目录下的 index.html -->"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"foo"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(/foo/)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户导航至目录 foo 下的 index.html -->"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"foo heading"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(./#heading)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户锚定到目录 foo 下的index文件中的一个标题上 -->"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"foo a - heading"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(#heading)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 将用户锚定到当前文件中的一个标题上 -->"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"bar - three"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(../bar/three)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 可以省略扩展名 -->"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"bar - three"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(../bar/a.md)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 可以添加 .md -->"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"["}),s.jsx(n.span,{style:{color:"#D32F2F",textDecoration:"underline"},children:"bar - four"}),s.jsx(n.span,{style:{color:"#1976D2",textDecoration:"underline"},children:"]"}),s.jsx(n.span,{style:{color:"#22863A",textDecoration:"underline"},children:"(../bar/b.html)"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" <!-- 或者可以添加 .html -->"})]}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsx(n.hr,{}),`
`,s.jsxs(n.h2,{id:"frontmatter",children:[s.jsx(n.a,{className:"header-anchor",href:"#frontmatter",children:s.jsx(n.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,s.jsx(n.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。"}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D32F2F"},children:"title"}),s.jsx(n.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(n.span,{style:{color:"#22863A"},children:"Blogging Like a Hacker"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#D32F2F"},children:"lang"}),s.jsx(n.span,{style:{color:"#D32F2F"},children:":"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:" "}),s.jsx(n.span,{style:{color:"#22863A"},children:"en-US"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsxs(n.p,{children:["此数据将可用于页面的其余部分，以及所有自定义和主题组件。",s.jsx(n.br,{}),`
更多信息，参见`,s.jsx(n.a,{href:"./frontmatter",target:"",rel:"",children:"frontmatter"}),"。"]}),`
`,s.jsxs(n.h2,{id:"标签外挂",children:[s.jsx(n.a,{className:"header-anchor",href:"#标签外挂",children:s.jsx(n.span,{className:"icon icon-link"})}),"标签外挂"]}),`
`,s.jsxs(n.h3,{id:"引用-note",children:[s.jsx(n.a,{className:"header-anchor",href:"#引用-note",children:s.jsx(n.span,{className:"icon icon-link"})}),"引用 note"]}),`
`,s.jsx(n.p,{children:"Fispo 的标签外挂参考了 Hexo 独有的功能标签外挂，并不是标准的 Markdown 格式。"}),`
`,s.jsxs(n.div,{className:"note warning modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"exclamation-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"用法"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"class"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"no-icon"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"icon"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"style"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] %}"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"Any content (support inline tags too.io)."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`

























`,s.jsxs(n.table,{children:[s.jsx(n.thead,{children:s.jsxs(n.tr,{children:[s.jsx(n.th,{style:{textAlign:"center"},children:"名称"}),s.jsx(n.th,{style:{textAlign:"center"},children:"用法"})]})}),s.jsxs(n.tbody,{children:[s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"class"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】标识，不同的标识有不同的配色（ default / primary / success / info / warning / danger ）"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"no-icon"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】不显示 icon"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"icon"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】以icon-开头标识icon"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"style"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】可以覆盖配置中的 style（simple/modern/flat/disabled）"})]})]})]}),`
`,s.jsxs(n.div,{className:"note primary icon-palette flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"palette"})}),`
`,s.jsx(n.p,{children:"simple"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"示例代码"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"默认 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note default simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"default 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note primary simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"primary 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note success simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"success 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note info simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"info 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note warning simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"warning 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note danger simple %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"danger 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"样式预览"}),"："]}),`
`,s.jsxs(n.div,{className:"note simple",children:[`
`,s.jsx(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note default simple",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"circle-right",className:"fas"})}),`
`,s.jsx(n.p,{children:"default 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note primary simple",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"plus-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note success simple",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"check-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"success 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note info simple",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"info-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"info 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note warning simple",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"exclamation-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note danger simple",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"minus-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note primary icon-pen-fancy flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"pen-fancy"})}),`
`,s.jsx(n.p,{children:"modern"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"示例代码"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"默认 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note default modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"default 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note primary modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"primary 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note success modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"success 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note info modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"info 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note warning modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"warning 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note danger modern %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"danger 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"样式预览"}),"："]}),`
`,s.jsxs(n.div,{className:"note modern",children:[`
`,s.jsx(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note default modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"circle-right",className:"fas"})}),`
`,s.jsx(n.p,{children:"default 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note primary modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"plus-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note success modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"check-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"success 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note info modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"info-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"info 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note warning modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"exclamation-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note danger modern",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"minus-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note primary icon-coffee flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"coffee"})}),`
`,s.jsx(n.p,{children:"flat"}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"示例代码"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"默认 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note default flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"default 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note primary flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"primary 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note success flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"success 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note info flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"info 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note warning flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"warning 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% note danger flat %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"danger 提示块标签"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"样式预览"}),"："]}),`
`,s.jsxs(n.div,{className:"note flat",children:[`
`,s.jsx(n.p,{children:"默认 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note default flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"circle-right",className:"fas"})}),`
`,s.jsx(n.p,{children:"default 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note primary flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"plus-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"primary 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note success flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"check-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"success 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note info flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"info-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"info 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note warning flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"exclamation-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"warning 提示块标签"}),`
`]}),`
`,s.jsx(n.p,{}),`
`,s.jsxs(n.div,{className:"note danger flat",children:[s.jsx(n.span,{className:"note-icon",children:s.jsx(e,{icon:"minus-circle",className:"fas"})}),`
`,s.jsx(n.p,{children:"danger 提示块标签"}),`
`]}),`
`,s.jsxs(n.h3,{id:"上标标签-tip",children:[s.jsx(n.a,{className:"header-anchor",href:"#上标标签-tip",children:s.jsx(n.span,{className:"icon icon-link"})}),"上标标签 tip"]}),`
`,s.jsxs(n.div,{className:"tip info",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"info"})}),`
`,s.jsxs(n.p,{children:["tip的样式参考自 ",s.jsx(n.a,{href:"https://akilar.top/posts/615e2dec/",target:"_blank",rel:"noopener noreferrer",children:"Akilarの糖果屋"})]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"用法"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"class"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"no-icon"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] ["}),s.jsx(n.span,{style:{color:"#D32F2F"},children:"icon"}),s.jsx(n.span,{style:{color:"#24292EFF"},children:"] %}"})]}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"Any content"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endnote %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`





















`,s.jsxs(n.table,{children:[s.jsx(n.thead,{children:s.jsxs(n.tr,{children:[s.jsx(n.th,{style:{textAlign:"center"},children:"名称"}),s.jsx(n.th,{style:{textAlign:"center"},children:"用法"})]})}),s.jsxs(n.tbody,{children:[s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"class"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】标识，不同的标识有不同的配色（ default/success/error/warning/bolt/ban/home/sync/cogs/key/bell ）"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"no-icon"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】不显示 icon"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{style:{textAlign:"center"},children:"icon"}),s.jsx(n.td,{style:{textAlign:"center"},children:"【可选】以icon-开头标识icon"})]})]})]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"示例代码"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip %}default{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip info %}info{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip success %}success{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip error %}error{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip warning %}warning{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip bolt %}bolt{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip ban %}ban{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip home %}home{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip sync %}sync{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip cogs %}cogs{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip key %}key{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip bell %}bell{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% tip fa-atom %}自定义font awesome图标{% endtip %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"样式预览"}),"："]}),`
`,s.jsxs(n.div,{className:"tip",children:[`
`,s.jsx(n.p,{children:"default"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip info",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"info"})}),`
`,s.jsx(n.p,{children:"info"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip success",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"check"})}),`
`,s.jsx(n.p,{children:"success"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip error",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"times"})}),`
`,s.jsx(n.p,{children:"error"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip warning",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"exclamation"})}),`
`,s.jsx(n.p,{children:"warning"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip bolt",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"bolt"})}),`
`,s.jsx(n.p,{children:"bolt"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip ban",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"ban"})}),`
`,s.jsx(n.p,{children:"ban"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip home",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"home"})}),`
`,s.jsx(n.p,{children:"home"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip sync",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"sync"})}),`
`,s.jsx(n.p,{children:"sync"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip cogs",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"cogs"})}),`
`,s.jsx(n.p,{children:"cogs"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip key",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"key"})}),`
`,s.jsx(n.p,{children:"key"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip bell",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"bell"})}),`
`,s.jsx(n.p,{children:"bell"}),`
`]}),`
`,s.jsxs(n.div,{className:"tip icon-atom",children:[s.jsx(n.span,{className:"tip-icon",children:s.jsx(e,{icon:"atom"})}),`
`,s.jsx(n.p,{children:"自定义font awesome图标"}),`
`]}),`
`,s.jsxs(n.h3,{id:"时间轴",children:[s.jsx(n.a,{className:"header-anchor",href:"#时间轴",children:s.jsx(n.span,{className:"icon icon-link"})}),"时间轴"]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"示例代码"}),"："]}),`
`,s.jsxs(n.div,{className:"language-md",children:[s.jsxs(n.div,{className:"highlight-tools",children:[s.jsx(n.span,{className:"lang",children:"md"}),s.jsx(l,{})]}),s.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% timeline 2022 %}"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#C2C3C5"},children:"<!-- timeline 01-02 -->"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"这是测试页面"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#C2C3C5"},children:"<!-- endtimeline -->"})}),`
`,s.jsx(n.span,{className:"line"}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#24292EFF"},children:"{% endtimeline %}"})}),`
`,s.jsx(n.span,{className:"line"})]})})]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"样式预览"}),"："]}),`
`,s.jsxs(n.div,{className:"timeline",children:[s.jsx(n.div,{className:"timeline-item headline",children:s.jsx(n.div,{className:"timeline-item-title",children:s.jsx(n.p,{children:"2022"})})}),`

`,s.jsxs(n.div,{className:"timeline-item",children:[`
`,s.jsxs(n.div,{className:"timeline-item-title",children:[`
`,s.jsx(n.p,{children:"01-02"}),`
`]}),s.jsxs(n.div,{className:"timeline-item-content",children:[`
`,s.jsx(n.p,{children:"这是测试页面"}),`
`]})]}),`
`,s.jsx(n.p,{}),`
`]})]})}function h(c={}){const{wrapper:n}={...r(),...c.components};return n?s.jsx(n,{...c,children:s.jsx(a,{...c})}):a(c)}function i(c,n){throw new Error("Expected component `"+c+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default,o as frontmatter,t as mdInfo,x as toc};
