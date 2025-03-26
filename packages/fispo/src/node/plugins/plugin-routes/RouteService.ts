import fastGlob from "fast-glob";
import { normalizePath } from "vite";
import path, { join } from "path";

interface RouteMeta {
  routePath: string;
  absolutePath: string;
}

export class RouteService {
  #root: string;
  #scanDir: string;
  #routeData: RouteMeta[] = [];
  constructor(root: string) {
    this.#root = root;
    this.#scanDir = join(root);
  }

  async init() {
    const files = fastGlob
      .sync(["**/*.{js,jsx,ts,tsx,md,mdx}"], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ["**/node_modules/**", "**/build/**", "config.ts"],
      })
      .sort();
    files.forEach((file) => {
      // 统一路径
      const fileRelativePath = normalizePath(path.relative(this.#root, file));
      // 1. 路由路径
      const routePath = this.normalizeRoutePath(fileRelativePath);
      // 2. 文件绝对路径
      this.#routeData.push({
        routePath,
        absolutePath: file,
      });
    });
  }

  // 获取路由数据，方便测试
  getRouteMeta(): RouteMeta[] {
    return this.#routeData;
  }

  // 规范路由路径
  normalizeRoutePath(rawPath: string) {
    // 去除文件扩展名、index
    const routePath = rawPath.replace(/\.(.*)?$/, "").replace(/index$/, "");
    return routePath.startsWith("/") ? routePath : `/${routePath}`;
  }

  generateRoutesCode(ssr = false) {
    return `
import React from 'react';

${this.#routeData
  .map((route, index) => {
    return ssr
      ? `import Route${index} from '${route.absolutePath}';`
      : `const Route${index} = React.lazy(() => import('${route.absolutePath}'))`;
  })
  .join("\n")}
export const routes = [
  ${this.#routeData
    .map((route, index) => {
      return `{ path: '${encodeURI(route.routePath)}', element: React.createElement(Route${index}), preload: () => import('${route.absolutePath}') }`;
    })
    .join(",\n")}
];
`;
  }
}
