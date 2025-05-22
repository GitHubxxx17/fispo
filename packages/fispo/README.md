# Fispo - 基于 React 的现代化 SSG 框架

[![npm version](https://img.shields.io/npm/v/fispo-core?style=flat-square)](https://www.npmjs.com/package/fispo-core)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16-brightgreen?style=flat-square)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

Fispo 是一个基于 React + Vite + TypeScript 的静态站点生成器，专为构建现代化博客而设计。支持自定义主题系统、插件生态和 Markdown 扩展，带来极致的开发体验。

## ✨ 特性亮点

- **⚡ 闪电般速度** - 基于 Vite 的超快构建体验
- **🎨 主题自由** - 完全可定制的 React 主题系统
- **🔌 插件生态** - 强大的插件扩展能力
- **📝 MDX 支持** - 在 Markdown 中使用 React 组件
- **🛠 类型安全** - 完整的 TypeScript 类型支持

## 📦 快速开始

### 环境要求

- Node.js >= 16
- npm >= 7 或 pnpm >= 6

### 创建新项目

#### 安装初始化项目工具

```
npm i @fispo/fispo-create -g
```

#### 初始化项目

```bash
fispo-create myblog
cd my-blog
npm run dev
```

### 项目结构

```
.
└── docs                     # 存放博客相关内容
    ├── post                 # 文章目录（Markdown/MDX）
    └── public               # 存放公共资源文件的目录
├── .gitignore
├── .npmrc
├── fispo.config.ts          # 配置文件
├── package.json
├── README.md
└── package.json
```

## 🔧 配置指南

`fispo.config.ts` 示例：

```typescript
import { defineConfig } from "fispo-core";

export default defineConfig({
  title: "fispo的个人博客",
  author: "fispo",
  description: "学无止境",
  notFoundImg: "/404.png",
  themeConfig: {
    navMenus: [
      {
        title: "首页",
        path: "/",
        icon: {
          prefix: "fas",
          iconName: "home",
        },
      },
      {
        title: "标签",
        path: "/tag",
        icon: {
          prefix: "fas",
          iconName: "tag",
        },
      },
      {
        title: "分类",
        path: "/category",
        icon: {
          prefix: "fas",
          iconName: "folder-open",
        },
      },
      {
        title: "关于",
        path: "/about/",
        icon: {
          prefix: "fas",
          iconName: "heart",
        },
      },
    ],
    sidebar: {
      card_author: {
        button: {
          link: "https://github.com/GitHubxxx17/fispo",
        },
      },
      card_announcement: {
        enable: true,
        content: "网站正在更新中······",
      },
    },
  },
});
```

## 🚀 构建部署

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```
