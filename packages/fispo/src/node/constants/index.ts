import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { join } from "path";
import { fileURLToPath } from "url";

export const PACKAGE_ROOT = join(fileURLToPath(import.meta.url), "../..");

export const RUNTIME_PATH = join(PACKAGE_ROOT, "src", "runtime");

export const SHARED_PATH = join(PACKAGE_ROOT, "src", "shared");

export const CLIENT_ENTRY_PATH = join(RUNTIME_PATH, "client-entry.tsx");

export const SERVER_ENTRY_PATH = join(RUNTIME_PATH, "ssr-entry.tsx");

export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT, "template.html");

export const DEFAULT_THEME_PATH = join(PACKAGE_ROOT, "src", "theme-default");
export const MD_REGEX = /\.mdx?$/;

// 获取当前工作目录
const currentWorkingDirectory = process.cwd();
export const configFiles = [
  join(currentWorkingDirectory, "fispo.config.ts"),
  join(currentWorkingDirectory, "fispo.config.js"),
];

export const EXTENDED_TAGS = ["tip", "note"];

export const EXTERNALS = [
  "react",
  "react-dom",
  "react-dom/client",
  "react/jsx-runtime",
];

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
