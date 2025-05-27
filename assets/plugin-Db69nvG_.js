import{jsx as r,jsxs as e,Fragment as s}from"react/jsx-runtime";import{e as t}from"./vendor-CuygkBdc.js";import"react";const l={title:"插件",date:"2025-04-20 17:55:40",updated:"2025-04-20 21:06:07",info:"插件如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板初始化项目create-fispo <项目目录名> --plugin文件结构初始化后，您的项目文件夹将如下所示：.├── fispo.config.ts          # 项目的配置文件├── package-lock"},g=[{id:"插件",text:"插件",depth:1},{id:"初始化项目",text:"初始化项目",depth:2},{id:"文件结构",text:"文件结构",depth:2},{id:"开发插件",text:"开发插件",depth:2}];function i(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...t(),...a.components},{CodeBlock:o}=n;return o||function(){throw new Error("Expected component `CodeBlock` to be defined: you likely forgot to import, pass, or provide it.")}(),e(s,{children:[e(n.h1,{id:"插件",children:[r(n.a,{className:"header-anchor",href:"#插件",children:r(n.span,{className:"icon icon-link"})}),"插件"]}),`
`,r(n.p,{children:"如果您想要自己开发插件，可通过 Fispo 的初始化工具创建插件项目的模板"}),`
`,e(n.h2,{id:"初始化项目",children:[r(n.a,{className:"header-anchor",href:"#初始化项目",children:r(n.span,{className:"icon icon-link"})}),"初始化项目"]}),`
`,r(o,{code:`create-fispo <项目目录名> --plugin
`,language:"bash"}),`
`,e(n.h2,{id:"文件结构",children:[r(n.a,{className:"header-anchor",href:"#文件结构",children:r(n.span,{className:"icon icon-link"})}),"文件结构"]}),`
`,r(n.p,{children:"初始化后，您的项目文件夹将如下所示："}),`
`,r(o,{code:`.\r
├── fispo.config.ts          # 项目的配置文件\r
├── package-lock.json        # 锁定依赖包版本的文件\r
├── package.json             # 项目的元数据和依赖信息文件\r
├── tsconfig.json            # TypeScript 编译配置文件\r
├── tsup.config.ts           # tsup 打包工具的配置文件\r
├── docs                     # 存放博客相关内容\r
│   ├── post                 # 文章目录（Markdown 文件）\r
│   │   └── helloworld.md    # 示例文章\r
│   └── public               # 存放公共资源文件的目录\r
│       ├── 404.png          # 404 页面显示的图片\r
│       ├── avatar.jpg       # 用户头像图片\r
│       ├── banner.png       # 横幅图片\r
│       ├── bg.png           # 背景图片\r
│       ├── logo.png         # 项目 logo 图片\r
│       └── cover            # 封面图片文件夹\r
│           └── a.jpg        # 封面示例图片\r
└── src                      # 源代码目录\r
    ├── index.ts             # 项目入口文件\r
    └── types                # 类型定义目录\r
        └── types.d.ts       # 类型定义文件
`,language:"md"}),`
`,e(n.h2,{id:"开发插件",children:[r(n.a,{className:"header-anchor",href:"#开发插件",children:r(n.span,{className:"icon icon-link"})}),"开发插件"]}),`
`,e(n.p,{children:["完成初始化后可以使用",r(n.code,{children:"npx fispo dev"}),"命令启动项目"]}),`
`,r(n.p,{children:"页面的数据结构如下"}),`
`,e(n.ul,{children:[`
`,r(n.li,{children:"可以在自定义插件中添加 markdown 相关的插件以及 vite 相关插件"}),`
`,r(n.li,{children:"通过生命周期的钩子函数控制页面的数据以及渲染"}),`
`,r(n.li,{children:"插入页面加载动画组件"}),`
`,r(n.li,{children:"在页面上挂载全局组件"}),`
`]}),`
`,r(o,{code:`export interface FispoPlugin {\r
  /**\r
   * 插件的名称\r
   */\r
  name: string;\r
\r
  /**\r
   * 可选的别名配置，用于在项目中为模块路径设置别名。\r
   * 键为别名，值为实际的模块路径。\r
   * 例如：{ '@': 'src' } 表示将 '@' 别名映射到 'src' 目录。\r
   */\r
  alias?: Record<string, string>;\r
\r
  /**\r
   * 可选的全局常量定义配置，用于在项目中定义全局可用的常量。\r
   * 键为常量名，值为常量值（以字符串形式表示）。\r
   * 例如：{ 'process.env.NODE_ENV': '"development"' } 表示定义一个全局常量 process.env.NODE_ENV 并赋值为 "development"。\r
   */\r
  define?: Record<string, string>;\r
\r
  /**\r
   * 可选的 Markdown 处理配置，包含 remark 和 rehype 插件的配置。\r
   */\r
  markdown?: {\r
    /**\r
     * 可选的 remark 插件列表，用于在 Markdown 解析阶段对 Markdown 内容进行转换和处理。\r
     * remark 是一个用于处理 Markdown 的工具，这些插件可以扩展 remark 的功能。\r
     */\r
    remarkPlugins?: PluggableList;\r
\r
    /**\r
     * 可选的 rehype 插件列表，用于在 Markdown 转换为 HTML 阶段对 HTML 内容进行转换和处理。\r
     * rehype 是一个用于处理 HTML 的工具，这些插件可以扩展 rehype 的功能。\r
     */\r
    rehypePlugins?: PluggableList;\r
  };\r
\r
  /**\r
   * 可选的 Vite 配置，用于对 Vite 构建工具进行自定义配置。\r
   */\r
  vite?: UserConfig;\r
\r
  /**\r
   * 可选的文件监听列表，用于指定需要监听变化的文件路径。\r
   * 当这些文件发生变化时，可能会触发相应的重新构建或其他操作。\r
   */\r
  watchFiles?: string[];\r
\r
  /**\r
   * 可选的钩子函数，在配置解析之前执行。\r
   * 可以在这个函数中对配置进行一些预处理操作。\r
   */\r
  configBeforeResolved?: () => void;\r
\r
  /**\r
   * 可选的钩子函数，在配置解析完成后执行。\r
   * 该函数接收一个 PageDataContext 类型的参数，并返回一个 PageData 类型的值。\r
   * 可以在这个函数中对解析后的配置进行进一步的处理和修改。\r
   */\r
  configResolved?: (config: PageDataContext) => void;\r
\r
  /**\r
   * 可选的预加载动画配置，用于指定预加载动画的模块路径。\r
   */\r
  preloader?: string;\r
\r
  /**\r
   * 可选的全局组件配置，用于指定全局组件的模块路径。\r
   */\r
  globalComponents?: {\r
    path: string;\r
    props: any;\r
  };\r
\r
  /**\r
   * 可选的钩子函数，在页面渲染之前执行。\r
   * 此函数接收一个 PageData 类型的参数，可用于在页面渲染前对页面数据进行修改、数据准备等操作，\r
   */\r
  beforeRenderpage?: (pageData: PageData) => void;\r
\r
  /**\r
   * 可选的钩子函数，在页面渲染完成后执行。\r
   * 此函数接收一个 PageData 类型的参数，可用于在页面渲染完成后进行一些后续处理，\r
   */\r
  afterRenderPage?: (pageData: PageData) => void;\r
\r
  /**\r
   * 可选的钩子函数，在页面关闭时执行。\r
   * 此函数接收一个 PageData 类型的参数，可用于在页面关闭时进行资源清理、数据保存等操作，\r
   * 例如释放占用的内存、保存用户未提交的表单数据等。\r
   */\r
  pageClosed?: (pageData: PageData) => void;\r
}
`,language:"ts"})]})}function h(a={}){const{wrapper:n}={...t(),...a.components};return n?r(n,{...a,children:r(i,{...a})}):i(a)}export{h as default,l as frontmatter,g as toc};
