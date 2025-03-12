import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: {
    cli: "./src/node/cli.ts",
    index: "./src/node/index.ts",
    dev: "./src/node/dev.ts",
  },
  bundle: true,
  splitting: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  shims: true,
  clean: true, // 清空之前的构建产物
  define: {
    "process.env.TSUP_MODE": JSON.stringify(options.watch ? "watch" : "build"),
  },
}));
