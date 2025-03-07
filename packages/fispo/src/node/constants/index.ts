import { join } from "path";

export const PACKAGE_ROOT = join(__dirname, "..");

export const RUNTIME_PATH = join(PACKAGE_ROOT, "src", "runtime");

export const SHARED_PATH = join(PACKAGE_ROOT, "src", "shared");

export const CLIENT_ENTRY_PATH = join(RUNTIME_PATH, "client-entry.tsx");

export const SERVER_ENTRY_PATH = join(RUNTIME_PATH, "ssr-entry.tsx");

export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT, "template.html");
export const MD_REGEX = /\.mdx?$/;

// 获取当前工作目录
const currentWorkingDirectory = process.cwd();
export const configFiles = [
  join(currentWorkingDirectory, "fispo.config.ts"),
  join(currentWorkingDirectory, "fispo.config.js"),
];
