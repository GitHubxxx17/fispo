import { normalizePath, Plugin } from "vite";
import { RouteService } from "./RouteService";
import { resolve } from "path";
import { addLeadingSlash } from "shared/utils";

// 本质: 把文件目录结构 -> 路由数据
interface PluginOptions {
  prefix: string;
  root: string;
  postDir: string;
  isSSR: boolean;
}

export const CONVENTIONAL_ROUTE_ID = "virtual:routes";

export let routeService: RouteService;

let pageExtensionsReg: RegExp;

export function pluginRoutes(options: PluginOptions): Plugin {
  routeService = new RouteService(options.root);
  let scanDir: string;
  return {
    name: "fispo:vite-plugin-routes",
    async configResolved() {
      scanDir = addLeadingSlash(options.root);
      // Vite 启动时，对 RouteService 进行初始化
      await routeService.init();
      pageExtensionsReg = new RegExp(
        `\\.(${routeService.getExtensions().join("|")})$`
      );
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

    configureServer(server) {
      const fileChange = () => {
        const virtualRouteMod = server.moduleGraph.getModuleById(
          `\0${CONVENTIONAL_ROUTE_ID}`
        );
        if (virtualRouteMod) {
          server.moduleGraph.invalidateModule(virtualRouteMod!);
          server.ws.send({
            type: "full-reload",
          });
        }
      };
      server.watcher
        .add(scanDir)
        .on("add", async (file) => {
          if (file.startsWith(scanDir) && pageExtensionsReg.test(file)) {
            const absolutePath = normalizePath(resolve(process.cwd(), file));
            await routeService.addRoute(absolutePath);
            fileChange();
          }
        })
        .on("unlink", async (file) => {
          if (file.startsWith(scanDir) && pageExtensionsReg.test(file)) {
            await routeService.removeRoute(file);
            fileChange();
          }
        });
    },
  };
}
