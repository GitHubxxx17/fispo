import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { join } from "path";
import { fileURLToPath } from "url";

/**
 * 项目根目录路径（解析为绝对路径）
 */
export const PACKAGE_ROOT = join(fileURLToPath(import.meta.url), "../..");

/**
 * 运行时代码目录路径
 */
export const RUNTIME_PATH = join(PACKAGE_ROOT, "src", "runtime");

/**
 * 共享代码目录路径
 */
export const SHARED_PATH = join(PACKAGE_ROOT, "src", "shared");

/**
 * 客户端入口文件路径
 */
export const CLIENT_ENTRY_PATH = join(RUNTIME_PATH, "client-entry.tsx");

/**
 * 服务端渲染入口文件路径
 */
export const SERVER_ENTRY_PATH = join(RUNTIME_PATH, "ssr-entry.tsx");

/**
 * 默认 HTML 模板文件路径
 */
export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT, "template.html");

/**
 * 默认主题目录路径
 */
export const DEFAULT_THEME_PATH = join(PACKAGE_ROOT, "src", "theme-default");

/**
 * 匹配 Markdown 和 MDX 文件的正则表达式
 */
export const MD_REGEX = /\.mdx?$/;

/**
 * 当前工作目录（项目根目录）
 */
const currentWorkingDirectory = process.cwd();

/**
 * 配置文件搜索路径列表
 * @description 按优先级排序，尝试加载 fispo.config.ts 或 fispo.config.js
 */
export const configFiles = [
  join(currentWorkingDirectory, "fispo.config.ts"),
  join(currentWorkingDirectory, "fispo.config.js"),
];

/**
 * 扩展标签列表（用于自定义 Markdown 标签）
 * @description 这些标签将被特殊处理，例如 {% tip %} 或 {% note %}
 */
export const EXTENDED_TAGS = ["tip", "note"];

/**
 * 匹配扩展标签正则表达式
 */
export const TAG_REGEX = /\{%\s*([\u4e00-\u9fa5\w\s-]+)\s*%\}/s;

/**
 * 匹配扩展标签 html 注释正则表达式
 */
export const TAG_HTML_REGEX = /<!--\s*(\S+)\s*(\S[\s\S]*?)\s*-->/;

/**
 * 外部依赖列表（构建时排除的包）
 * @description 这些包会被视为外部依赖，不会被打包进产物中
 */
export const EXTERNALS = [
  "react",
  "react-dom",
  "react-dom/client",
  "react/jsx-runtime",
];

/**
 * 默认图标配置（Font Awesome）
 * @description 预定义的图标列表，用于各种 UI 组件（如复制按钮、提示图标等）
 */
export const DEFAULT_ICON: IconLookup[] = [
  { prefix: "fas", iconName: "copy" },
  { prefix: "fas", iconName: "check" },
  { prefix: "fas", iconName: "circle-right" },
  { prefix: "fas", iconName: "plus-circle" },
  { prefix: "fas", iconName: "info-circle" },
  { prefix: "fas", iconName: "check-circle" },
  { prefix: "fas", iconName: "exclamation-circle" },
  { prefix: "fas", iconName: "minus-circle" },
  { prefix: "fas", iconName: "check" },
  { prefix: "fas", iconName: "info" },
  { prefix: "fas", iconName: "exclamation" },
  { prefix: "fas", iconName: "bolt" },
  { prefix: "fas", iconName: "ban" },
  { prefix: "fas", iconName: "home" },
  { prefix: "fas", iconName: "sync" },
  { prefix: "fas", iconName: "cogs" },
  { prefix: "fas", iconName: "key" },
  { prefix: "fas", iconName: "bell" },
];
