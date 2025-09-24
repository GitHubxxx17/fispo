import{jsx as e,jsxs as n,Fragment as c}from"react/jsx-runtime";import{e as i}from"./vendor-CuygkBdc.js";import"react";const s={title:"frontmatter",date:"2025-07-29 17:22:45",updated:"2025-07-29 17:22:45",info:"frontmatterFront-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束：---title: Hello Worlddate: 2025/4/1 20:46:25---配置属性名描述title文章的标题d"},m=[{id:"frontmatter",text:"frontmatter",depth:1},{id:"配置",text:"配置",depth:2}];function d(r){const t={a:"a",br:"br",h1:"h1",h2:"h2",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...r.components},{CodeBlock:l}=t;return l||function(){throw new Error("Expected component `CodeBlock` to be defined: you likely forgot to import, pass, or provide it.")}(),n(c,{children:[n(t.h1,{id:"frontmatter",children:[e(t.a,{className:"header-anchor",href:"#frontmatter",children:e(t.span,{className:"icon icon-link"})}),"frontmatter"]}),`
`,e(t.p,{children:"Front-matter 是文件开头的 YAML 代码块，用于配置写作设置。 以 YAML 格式书写时，Front-matter 以三个破折号结束："}),`
`,e(l,{code:`---\r
title: Hello World\r
date: 2025/4/1 20:46:25\r
---
`,language:"md"}),`
`,n(t.h2,{id:"配置",children:[e(t.a,{className:"header-anchor",href:"#配置",children:e(t.span,{className:"icon icon-link"})}),"配置"]}),`





































`,n(t.table,{children:[e(t.thead,{children:n(t.tr,{children:[e(t.th,{style:{textAlign:"center"},children:"属性名"}),e(t.th,{style:{textAlign:"center"},children:"描述"})]})}),n(t.tbody,{children:[n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"title"}),e(t.td,{style:{textAlign:"center"},children:"文章的标题"})]}),n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"description"}),e(t.td,{style:{textAlign:"center"},children:"文章的描述信息"})]}),n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"categories"}),e(t.td,{style:{textAlign:"center"},children:"文章所属的分类"})]}),n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"date"}),e(t.td,{style:{textAlign:"center"},children:"文章的发布日期"})]}),n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"updated"}),e(t.td,{style:{textAlign:"center"},children:"文章的更新日期"})]}),n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"tags"}),e(t.td,{style:{textAlign:"center"},children:"文章的标签列表"})]}),n(t.tr,{children:[e(t.td,{style:{textAlign:"center"},children:"cover"}),e(t.td,{style:{textAlign:"center"},children:"文章的封面图片地址"})]})]})]}),`
`,n(t.p,{children:[e(t.strong,{children:"分类和标签"}),":",e(t.br,{}),`
只有文章支持分类和标签。一篇文章只能所属一个分类；另外，一篇文章可以有多个标签。`]})]})}function p(r={}){const{wrapper:t}={...i(),...r.components};return t?e(t,{...r,children:e(d,{...r})}):d(r)}export{p as default,s as frontmatter,m as toc};
