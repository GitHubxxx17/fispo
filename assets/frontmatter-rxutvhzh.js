import{jsx as n,jsxs as t,Fragment as d}from"react/jsx-runtime";import{u as i}from"../client-entry.js";import"react-dom/client";import"react";const p={title:"frontmatter"},m="frontmatterFront-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束：---title: Hello Worlddate: 2025/4/1 20:46:25---配置属性名描述title文章的标题d",y=[{id:"frontmatter",text:"frontmatter",depth:1},{id:"配置",text:"配置",depth:2}];function c(r){const e={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...r.components},{CopyButton:l}=e;return l||function(){throw new Error("Expected component `CopyButton` to be defined: you likely forgot to import, pass, or provide it.")}(),t(d,{children:[t(e.h1,{id:"frontmatter",children:[n(e.a,{className:"header-anchor",href:"#frontmatter",children:n(e.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,n(e.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束："}),`
`,t(e.div,{className:"language-md",children:[t(e.div,{className:"highlight-tools",children:[n(e.span,{className:"lang",children:"md"}),n(l,{})]}),n(e.pre,{className:"shiki min-light",style:{backgroundColor:"#ffffff"},tabIndex:"0",children:t(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,t(e.span,{className:"line",children:[n(e.span,{style:{color:"#D32F2F"},children:"title"}),n(e.span,{style:{color:"#D32F2F"},children:":"}),n(e.span,{style:{color:"#24292EFF"},children:" "}),n(e.span,{style:{color:"#22863A"},children:"Hello World"})]}),`
`,t(e.span,{className:"line",children:[n(e.span,{style:{color:"#D32F2F"},children:"date"}),n(e.span,{style:{color:"#D32F2F"},children:":"}),n(e.span,{style:{color:"#24292EFF"},children:" "}),n(e.span,{style:{color:"#22863A"},children:"2025/4/1 20:46:25"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292EFF"},children:"---"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,t(e.h2,{id:"配置",children:[n(e.a,{className:"header-anchor",href:"#配置",children:n(e.span,{className:"icon icon-link"})}),"配置"]}),`

































`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{style:{textAlign:"center"},children:"属性名"}),n(e.th,{style:{textAlign:"center"},children:"描述"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{style:{textAlign:"center"},children:"title"}),n(e.td,{style:{textAlign:"center"},children:"文章的标题"})]}),t(e.tr,{children:[n(e.td,{style:{textAlign:"center"},children:"description"}),n(e.td,{style:{textAlign:"center"},children:"文章的描述信息"})]}),t(e.tr,{children:[n(e.td,{style:{textAlign:"center"},children:"categories"}),n(e.td,{style:{textAlign:"center"},children:"文章所属的分类"})]}),t(e.tr,{children:[n(e.td,{style:{textAlign:"center"},children:"date"}),n(e.td,{style:{textAlign:"center"},children:"文章的发布日期"})]}),t(e.tr,{children:[n(e.td,{style:{textAlign:"center"},children:"tags"}),n(e.td,{style:{textAlign:"center"},children:"文章的标签列表"})]}),t(e.tr,{children:[n(e.td,{style:{textAlign:"center"},children:"cover"}),n(e.td,{style:{textAlign:"center"},children:"文章的封面图片地址"})]})]})]}),`
`,t(e.p,{children:[n(e.strong,{children:"分类和标签"}),":",n(e.br,{}),`
只有文章支持分类和标签。一篇文章只能所属一个分类，另外一篇文章可以有多个标签。`]})]})}function g(r={}){const{wrapper:e}={...i(),...r.components};return e?n(e,{...r,children:n(c,{...r})}):c(r)}export{g as default,p as frontmatter,m as mdInfo,y as toc};
