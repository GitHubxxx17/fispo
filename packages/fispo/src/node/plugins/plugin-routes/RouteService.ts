import fastGlob from "fast-glob";
import { normalizePath } from "vite";
import path from "path";

interface RouteMeta {
  routePath: string;
  absolutePath: string;
}

export class RouteService {
  #scanDir: string;
  #routeData: RouteMeta[] = [];
  #extensions: string[] = [];

  constructor(root: string) {
    this.#scanDir = root;
    this.#extensions = ["js", "jsx", "ts", "tsx", "md", "mdx"];
  }

  async init() {
    const files = fastGlob
      .sync([`**/*.{${this.#extensions.join(",")}}`], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ["**/build/**"],
      })
      .sort();
    files.forEach((file) => this.addRoute(file));
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

  addRoute(filePath: string) {
    const fileRelativePath = normalizePath(
      path.relative(this.#scanDir, filePath)
    );
    const routePath = this.normalizeRoutePath(fileRelativePath);

    this.#routeData.push({
      routePath,
      absolutePath: filePath,
    });
  }

  removeRoute(filePath: string) {
    const fileRelativePath = normalizePath(
      path.relative(this.#scanDir, filePath)
    );
    const routePath = this.normalizeRoutePath(fileRelativePath);
    this.#routeData = this.#routeData.filter(
      (route) => route.routePath !== routePath
    );
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

  getExtensions() {
    return this.#extensions;
  }
}
