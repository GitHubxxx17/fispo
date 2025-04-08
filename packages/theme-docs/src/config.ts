import { Theme } from "fispo-core/types";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "theme-docs",
  layoutPath: "/src/index.ts",
  config: {
    navMenus: [],
    sidebar: {},
  },
  plugins: [],
};

export default theme;
