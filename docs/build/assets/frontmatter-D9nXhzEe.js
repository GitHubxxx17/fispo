import{u as l,j as e}from"../client-entry.js";const i={title:"frontmatter"},d="frontmatterFront-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束：---title: Hello Worlddate: 2025/4/1 20:46:25---配置属性名描述title文章的标题d",a=[{id:"frontmatter",text:"frontmatter",depth:1},{id:"配置",text:"配置",depth:2}];function r(t){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...t.components},{CopyButton:s}=n;return s||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{id:"frontmatter",children:[e.jsx(n.a,{className:"header-anchor",href:"#frontmatter",children:e.jsx(n.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,e.jsx(n.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束："}),`
`,e.jsxs(n.div,{className:"language-md",children:[e.jsxs(n.div,{className:"highlight-tools",children:[e.jsx(n.span,{className:"lang",children:"md"}),e.jsx(s,{})]}),e.jsx(n.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D32F2F"},children:"title"}),e.jsx(n.span,{style:{color:"#D32F2F"},children:":"}),e.jsx(n.span,{style:{color:"#24292EFF"},children:" "}),e.jsx(n.span,{style:{color:"#22863A"},children:"Hello World"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D32F2F"},children:"date"}),e.jsx(n.span,{style:{color:"#D32F2F"},children:":"}),e.jsx(n.span,{style:{color:"#24292EFF"},children:" "}),e.jsx(n.span,{style:{color:"#22863A"},children:"2025/4/1 20:46:25"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,e.jsx(n.span,{className:"line"})]})})]}),`
`,e.jsxs(n.h2,{id:"配置",children:[e.jsx(n.a,{className:"header-anchor",href:"#配置",children:e.jsx(n.span,{className:"icon icon-link"})}),"配置"]}),`

































`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"center"},children:"属性名"}),e.jsx(n.th,{style:{textAlign:"center"},children:"描述"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"title"}),e.jsx(n.td,{style:{textAlign:"center"},children:"文章的标题"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"description"}),e.jsx(n.td,{style:{textAlign:"center"},children:"文章的描述信息"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"categories"}),e.jsx(n.td,{style:{textAlign:"center"},children:"文章所属的分类"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"date"}),e.jsx(n.td,{style:{textAlign:"center"},children:"文章的发布日期"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"tags"}),e.jsx(n.td,{style:{textAlign:"center"},children:"文章的标签列表"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"center"},children:"cover"}),e.jsx(n.td,{style:{textAlign:"center"},children:"文章的封面图片地址"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"分类和标签"}),":",e.jsx(n.br,{}),`
只有文章支持分类和标签。一篇文章只能所属一个分类，另外一篇文章可以有多个标签。`]})]})}function o(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{o as default,i as frontmatter,d as mdInfo,a as toc};
