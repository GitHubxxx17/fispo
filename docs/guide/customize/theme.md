---
title: 主题
---

# 主题

如果您想要自己开发主题，可通过 Fispo 的初始化工具创建主题项目的模板
## 初始化项目
```bash
create-fispo <项目目录名> --theme
```

## 文件结构
初始化后，您的项目文件夹将如下所示：

``` md
.
├── fispo.config.ts          # 项目的配置文件
├── package-lock.json        # 锁定依赖包版本的文件
├── package.json             # 项目的元数据和依赖信息文件
├── tsconfig.json            # TypeScript 编译配置文件
├── tsup.config.ts           # tsup 打包工具的配置文件
├── docs                     # 存放博客相关内容
│   ├── post                 # 文章目录（Markdown 文件）
│   │   └── helloworld.md    # 示例文章
│   └── public               # 存放公共资源文件的目录
│       ├── 404.png          # 404 页面显示的图片
│       ├── avatar.jpg       # 用户头像图片
│       ├── banner.png       # 横幅图片
│       ├── bg.png           # 背景图片
│       ├── logo.png         # 项目 logo 图片
│       └── cover            # 封面图片文件夹
│           └── a.jpg        # 封面示例图片
└── src                      # 源代码目录
    ├── config.ts            # 项目配置相关代码文件
    ├── index.ts             # 项目入口文件
    ├── layout               # 布局组件目录
    │   ├── index.module.scss # 布局组件的样式文件
    │   ├── index.tsx        # 布局组件的入口文件
    │   ├── DocLayout        # 文档布局组件目录
    │   │   ├── index.module.scss # 文档布局组件的样式文件
    │   │   └── index.tsx    # 文档布局组件文件
    │   └── HomeLayout       # 首页布局组件目录
    │       ├── index.module.scss # 首页布局组件的样式文件
    │       └── index.tsx    # 首页布局组件文件
    ├── style                # 样式文件目录
    │   ├── base.css         # 基础样式文件
    │   ├── docs.css         # 文档页面样式文件
    │   └── vars.css         # 样式变量文件
    └── types                # 类型定义目录
        ├── index.ts         # 类型定义入口文件
        └── types.d.ts       # 类型定义文件
```

## 开发主题

完成初始化后可以使用`npx fispo dev`命令启动项目

页面的数据结构如下，在 layout/index.ts 中作为 props 传入，您可以通过这些数据自由开发博客主题
```ts
/**
 * 页面数据上下文的接口
 * 包含了网站配置、页面路径、前置元数据、页面类型、目录信息、标题、文章列表、标签和分类等信息
 */
export interface PageData {
  /**
   * 网站的用户配置信息
   */
  siteData: UserConfig;
  /**
   * 页面的路径
   */
  pagePath: string;
  /**
   * 页面的前置元数据
   */
  frontmatter: FrontMatter;
  /**
   * 页面的类型
   */
  pageType: PageType;
  /**
   * 页面的目录信息
   */
  toc?: Toc[];
  /**
   * 页面的标题
   */
  title: string;
  /**
   * 文章列表
   */
  articlesList?: ArticleData[];
  /**
   * 标签信息
   */
  tags?: Tags;
  /**
   * 分类信息
   */
  categories?: Categories;
  /**
   * 允许动态添加的任意键值对
   */
  [key: string]: unknown;
}
```