import { UserConfig } from "vite";
import type { PluggableList } from "unified";
import { PageDataContext, PageData } from ".";

export interface componentProps {
  path: string;
  props: any;
}

export interface FispoPlugin {
  /**
   * 插件的名称
   */
  name: string;

  /**
   * 可选的别名配置，用于在项目中为模块路径设置别名。
   * 键为别名，值为实际的模块路径。
   * 例如：{ '@': 'src' } 表示将 '@' 别名映射到 'src' 目录。
   */
  alias?: Record<string, string>;

  /**
   * 可选的全局常量定义配置，用于在项目中定义全局可用的常量。
   * 键为常量名，值为常量值（以字符串形式表示）。
   * 例如：{ 'process.env.NODE_ENV': '"development"' } 表示定义一个全局常量 process.env.NODE_ENV 并赋值为 "development"。
   */
  define?: Record<string, string>;

  /**
   * 可选的 Markdown 处理配置，包含 remark 和 rehype 插件的配置。
   */
  markdown?: {
    /**
     * 可选的 remark 插件列表，用于在 Markdown 解析阶段对 Markdown 内容进行转换和处理。
     * remark 是一个用于处理 Markdown 的工具，这些插件可以扩展 remark 的功能。
     */
    remarkPlugins?: PluggableList;

    /**
     * 可选的 rehype 插件列表，用于在 Markdown 转换为 HTML 阶段对 HTML 内容进行转换和处理。
     * rehype 是一个用于处理 HTML 的工具，这些插件可以扩展 rehype 的功能。
     */
    rehypePlugins?: PluggableList;
  };

  /**
   * 可选的 Vite 配置，用于对 Vite 构建工具进行自定义配置。
   */
  vite?: UserConfig;

  /**
   * 可选的文件监听列表，用于指定需要监听变化的文件路径。
   * 当这些文件发生变化时，可能会触发相应的重新构建或其他操作。
   */
  watchFiles?: string[];

  /**
   * 可选的钩子函数，在配置解析之前执行。
   * 可以在这个函数中对配置进行一些预处理操作。
   */
  configBeforeResolved?: () => void;

  /**
   * 可选的钩子函数，在配置解析完成后执行。
   * 该函数接收一个 PageDataContext 类型的参数，并返回一个 PageData 类型的值。
   * 可以在这个函数中对解析后的配置进行进一步的处理和修改。
   */
  configResolved?: (config: PageDataContext) => PageData;

  /**
   * 可选的预加载动画配置，用于指定预加载动画的模块路径。
   */
  preloader?: string;

  /**
   * 可选的全局组件配置，用于指定全局组件的模块路径。
   */
  globalComponents?: {
    path: string;
    props: any;
  };

  /**
   * 可选的钩子函数，在页面渲染之前执行。
   * 此函数接收一个 PageData 类型的参数，可用于在页面渲染前对页面数据进行修改、数据准备等操作，
   */
  beforeRenderpage?: (pageData: PageData) => void;

  /**
   * 可选的钩子函数，在页面渲染完成后执行。
   * 此函数接收一个 PageData 类型的参数，可用于在页面渲染完成后进行一些后续处理，
   */
  afterRenderPage?: (pageData: PageData) => void;

  /**
   * 可选的钩子函数，在页面关闭时执行。
   * 此函数接收一个 PageData 类型的参数，可用于在页面关闭时进行资源清理、数据保存等操作，
   * 例如释放占用的内存、保存用户未提交的表单数据等。
   */
  pageClosed?: (pageData: PageData) => void;
}
