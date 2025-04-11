import { Theme } from "fispo-core/types";
import { join } from "path";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "particle",
  layoutPath: join(__dirname, "index.ts"),
  config: {
    navMenus: [],
    banner: {
      img: "/banner.png",
      title: "",
      subTitle: "",
    },
  },
  plugins: [],
};

export default theme;
