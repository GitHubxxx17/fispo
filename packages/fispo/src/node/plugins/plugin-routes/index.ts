import { Plugin } from "vite";
import { RouteService } from "./RouteService";

// 本质: 把文件目录结构 -> 路由数据
interface PluginOptions {
  prefix: string;
  root: string;
  postDir: string;
  isSSR: boolean;
}

export const CONVENTIONAL_ROUTE_ID = "virtual:routes";

export function pluginRoutes(options: PluginOptions): Plugin {
  const routeService = new RouteService(options.root, options.postDir);
  return {
    name: "fispo:vite-plugin-routes",
    async configResolved() {
      // Vite 启动时，对 RouteService 进行初始化
      await routeService.init();
    },
    resolveId(id: string) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return "\0" + CONVENTIONAL_ROUTE_ID;
      }
    },

    load(id: string) {
      if (id === "\0" + CONVENTIONAL_ROUTE_ID) {
        return routeService.generateRoutesCode(options.isSSR || false);
      }
    },
  };
}
