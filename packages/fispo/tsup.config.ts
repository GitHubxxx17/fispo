import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: { cli: "./src/node/cli.ts" },
  bundle: true,
  splitting: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  shims: true,
});
