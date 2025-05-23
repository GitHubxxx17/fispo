import { Theme } from "fispo-core/types";
import { join } from "path";
import { themeDocsPlugin } from "./plugin";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "theme-docs",
  layoutPath: join(__dirname, "..", "src", "index.ts"),
  config: {
    navMenus: [],
    sidebar: {},
  },
  plugins: [themeDocsPlugin()],
};

export default theme;
