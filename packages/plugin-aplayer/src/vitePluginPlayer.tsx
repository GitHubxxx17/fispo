import { vitePlugin } from "fispo-core/plugin";

export function vitePluginPlayer(): vitePlugin {
  return {
    name: "fispo:plugin-player",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "link",
            attrs: {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css",
              defer: true,
            },
            injectTo: "head",
          },
          {
            tag: "script",
            attrs: {
              src: "https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js",
              defer: true,
            },
            injectTo: "head",
          },
          {
            tag: "script",
            attrs: {
              src: "https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },
  };
}
