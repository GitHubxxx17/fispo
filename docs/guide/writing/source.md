---
title: 资源处理
---

# 资源处理

## 根目录
根目录是存放所有资源的地方，包括文章、图片、js和css等文件资源，默认存放在 docs 文件夹下，如果需要修改存放的位置可在 `fispo.config.ts` 文件配置中修改 root 配置项。

## public目录

图片和字体等静态资源可以放置在根目录下的 public 目录中。例如，如果项目根目录是 ./docs，并且使用默认源目录位置，那么 public 目录将是 ./docs/public。
放置在 public 中的资源将按原样复制到输出目录的根目录中。例如 public/icon.png 在源代码中使用 /icon.png 引用。

## post目录

文章资源的存放目录默认为根目录下的 post 目录中。