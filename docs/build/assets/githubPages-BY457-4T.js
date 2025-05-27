import{jsx as n,jsxs as i,Fragment as p}from"react/jsx-runtime";import{e as c}from"./vendor-CuygkBdc.js";import"react";const u={title:"GitHub Pages",date:"2025-03-31 16:48:56",updated:"2025-04-06 19:58:24",info:"GitHub Pages在部署项目前，您需确保有远程仓库，满足上述条件后即可使用命令将项目部署到远程仓库。部署命令是通过 GitHub Actions 部署 GitHub Pages。首先，如果仓库以 username.github.io 命名就不需要更改配置项中的 base，否则需要将 base"},g=[{id:"github-pages",text:"GitHub Pages",depth:1}];function s(o){const e={a:"a",br:"br",code:"code",div:"div",h1:"h1",p:"p",span:"span",...c(),...o.components},{CodeBlock:r,Icon:t}=e;return r||a("CodeBlock"),t||a("Icon"),i(p,{children:[i(e.h1,{id:"github-pages",children:[n(e.a,{className:"header-anchor",href:"#github-pages",children:n(e.span,{className:"icon icon-link"})}),"GitHub Pages"]}),`
`,i(e.div,{className:"note info flat",children:[n(e.span,{className:"note-icon",children:n(t,{icon:"info-circle",className:"fas"})}),`
`,n(e.p,{children:"在部署项目前，您需确保有远程仓库，满足上述条件后即可使用命令将项目部署到远程仓库。"}),`
`]}),`
`,i(e.p,{children:["部署命令是通过 ",n(e.a,{href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer",children:"GitHub Actions"})," 部署 GitHub Pages。"]}),`
`,i(e.p,{children:["首先，如果仓库以 ",n(e.code,{children:"username.github.io"})," 命名就不需要更改配置项中的 base，否则需要将 base 修改成您的远程仓库名称。",n(e.br,{}),`
另外还需要添加部署相关的配置 deploy，分支默认为 gh-pages`]}),`
`,n(r,{code:`export default defineConfig({\r
  base: "/fispo",\r
  deploy: {\r
    repo: "https://github.com/<username>/<project>",\r
    branch: "gh-pages",\r
  },\r
})
`,language:"ts"}),`
`,n(e.p,{children:"完成配置后在终端使用部署命令："}),`
`,n(r,{code:`npm run build && npm run deploy\r
# 或者\r
npx fispo build && npx fispo deploy
`,language:"sh"}),`
`,i(e.p,{children:["使用命令后会自动初始化git仓库并在本地创建 ",n(e.code,{children:".github/workflows/gh-pages.yml"})," 文件，之后会把所有文件 push 到远程仓库。",n(e.br,{}),`
完成部署后在 GitHub 仓库的设置中，导航至 Settings > Pages > Build and deployment 。将分支更改为 ph-pages 并保存。`,n(e.br,{}),`
最后可前往 username.github.io/repository 查看网页。`]})]})}function b(o={}){const{wrapper:e}={...c(),...o.components};return e?n(e,{...o,children:n(s,{...o})}):s(o)}function a(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default,u as frontmatter,g as toc};
