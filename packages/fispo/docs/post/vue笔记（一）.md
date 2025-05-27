---
title: vue笔记（一）
categories: "笔记"
tags:
  - 笔记
  - vue
cover: /cover/i.jpg
---

# Vue入门

{% tip info %}
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
{% endtip %}
## 搭建Vue开发环境
1. 在<a href="https://v2.cn.vuejs.org/v2/guide/installation.html">官方文档</a>中下载`开发版本`和`生产版本`;

2. 在html中引入Vue
``` html
<script type="text/javascript" src="本地vue.js的路径"></script>

<!-- 例如 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>搭建Vue开发环境</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>

</body>
</html>
```
