import { Theme } from "fispo-core/types";
import { join } from "path";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "theme-docs",
  layoutPath: join(__dirname, "..", "src", "index.ts"),
  config: {
    navMenus: [],
    sidebar: {},
  },
  plugins: [],
};

export default theme;
