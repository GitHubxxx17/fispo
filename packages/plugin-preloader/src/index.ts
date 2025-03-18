import { FispoPlugin } from "fispo-core/plugin";
import { join } from "path";

export function preloaderPlugin(): FispoPlugin {
  return {
    name: "fispo:plugin-perloader",
    alias: {
      "@plugin-perloader": join(__dirname, "../src/Loading/index.tsx"),
    },
    preloader: "@plugin-perloader",
  };
}
