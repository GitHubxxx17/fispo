import { Theme } from "fispo-core/types";
import { join } from "path";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "template-theme",
  layoutPath: join(__dirname, "..", "src", "index.ts"),
  config: {
    navMenus: [],
  },
  plugins: [],
};

export default theme;
