import { readFile } from "fs/promises";
import { Plugin } from "vite";
import { CLIENT_ENTRY_PATH, DEFAULT_HTML_PATH } from "../constants";
import { SiteConfig } from "shared/types";
import { withBase } from "shared/utils";

export function pluginIndexHtml(config: SiteConfig): Plugin {
  return {
    name: "fispo:index-html",
    apply: "serve",
    // 插入入口 script 标签
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "link",
            attrs: {
              rel: "icon",
              href: withBase(config.logo, config.base),
              type: "image/png",
            },
            injectTo: "head",
          },
          {
            tag: "script",
            attrs: {
              type: "module",
              src: withBase(`@fs/${CLIENT_ENTRY_PATH}`, config.base),
            },
            injectTo: "body",
          },
        ],
      };
    },
    configureServer(server) {
      // 通过vite中间件处理返回html
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, "utf-8");

          try {
            html = await server.transformIndexHtml(
              req.url,
              html,
              req.originalUrl
            );
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
          } catch (e) {
            return next(e);
          }
        });
      };
    },
  };
}
