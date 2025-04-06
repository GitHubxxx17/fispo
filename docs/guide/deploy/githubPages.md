---
title: GitHub Pages
---

# GitHub Pages

{% note info flat %}
在部署项目前，您需确保有远程仓库，满足上述条件后即可使用命令将项目部署到远程仓库。
{% endnote %}


部署命令是通过 [GitHub Actions](https://docs.github.com/zh/actions) 部署 GitHub Pages。

首先，如果仓库以 `username.github.io` 命名就不需要更改配置项中的 base，否则需要将 base 修改成您的远程仓库名称。
另外还需要添加部署相关的配置 deploy，分支默认为 gh-pages

```ts
export default defineConfig({
  base: "/fispo",
  deploy: {
    repo: "https://github.com/<username>/<project>",
    branch: "gh-pages",
  },
})
```

完成配置后在终端使用部署命令：
```sh
npm run build && npm run deploy
# 或者
npx fispo build && npx fispo deploy
```

使用命令后会自动初始化git仓库并在本地创建 `.github/workflows/gh-pages.yml` 文件，之后会把所有文件 push 到远程仓库。
完成部署后在 GitHub 仓库的设置中，导航至 Settings > Pages > Build and deployment 。将分支更改为 ph-pages 并保存。
最后可前往 username.github.io/repository 查看网页。

