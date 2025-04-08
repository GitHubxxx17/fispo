import { Theme } from "fispo-core/types";
import { ThemeConfig } from "types";

const theme: Theme<ThemeConfig> = {
  name: "particle",
  layoutPath: "/src/index.ts",
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
