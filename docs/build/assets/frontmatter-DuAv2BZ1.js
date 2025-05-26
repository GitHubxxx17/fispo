import{jsx as n,jsxs as e,Fragment as c}from"react/jsx-runtime";import{e as i}from"./vendor-CuygkBdc.js";import"react";const s={title:"frontmatter"},m="frontmatterFront-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束：---title: Hello Worlddate: 2025/4/1 20:46:25---配置属性名描述title文章的标题d",p=[{id:"frontmatter",text:"frontmatter",depth:1},{id:"配置",text:"配置",depth:2}];function d(r){const t={a:"a",br:"br",h1:"h1",h2:"h2",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...r.components},{CodeBlock:l}=t;return l||function(){throw new Error("Expected component `CodeBlock` to be defined: you likely forgot to import, pass, or provide it.")}(),e(c,{children:[e(t.h1,{id:"frontmatter",children:[n(t.a,{className:"header-anchor",href:"#frontmatter",children:n(t.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,n(t.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束："}),`
`,n(l,{code:`---\r
title: Hello World\r
date: 2025/4/1 20:46:25\r
---
`,language:"md"}),`
`,e(t.h2,{id:"配置",children:[n(t.a,{className:"header-anchor",href:"#配置",children:n(t.span,{className:"icon icon-link"})}),"配置"]}),`

































`,e(t.table,{children:[n(t.thead,{children:e(t.tr,{children:[n(t.th,{style:{textAlign:"center"},children:"属性名"}),n(t.th,{style:{textAlign:"center"},children:"描述"})]})}),e(t.tbody,{children:[e(t.tr,{children:[n(t.td,{style:{textAlign:"center"},children:"title"}),n(t.td,{style:{textAlign:"center"},children:"文章的标题"})]}),e(t.tr,{children:[n(t.td,{style:{textAlign:"center"},children:"description"}),n(t.td,{style:{textAlign:"center"},children:"文章的描述信息"})]}),e(t.tr,{children:[n(t.td,{style:{textAlign:"center"},children:"categories"}),n(t.td,{style:{textAlign:"center"},children:"文章所属的分类"})]}),e(t.tr,{children:[n(t.td,{style:{textAlign:"center"},children:"date"}),n(t.td,{style:{textAlign:"center"},children:"文章的发布日期"})]}),e(t.tr,{children:[n(t.td,{style:{textAlign:"center"},children:"tags"}),n(t.td,{style:{textAlign:"center"},children:"文章的标签列表"})]}),e(t.tr,{children:[n(t.td,{style:{textAlign:"center"},children:"cover"}),n(t.td,{style:{textAlign:"center"},children:"文章的封面图片地址"})]})]})]}),`
`,e(t.p,{children:[n(t.strong,{children:"分类和标签"}),":",n(t.br,{}),`
只有文章支持分类和标签。一篇文章只能所属一个分类，另外一篇文章可以有多个标签。`]})]})}function g(r={}){const{wrapper:t}={...i(),...r.components};return t?n(t,{...r,children:n(d,{...r})}):d(r)}export{g as default,s as frontmatter,m as mdInfo,p as toc};
