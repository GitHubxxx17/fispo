import { Theme } from "fispo-core/types";
import { DEFAULT_THEME_PATH } from "../node/constants";
import { DefaultThemeConfig } from "shared/types/default-theme";

const theme: Theme<DefaultThemeConfig> = {
  name: "fish in the pool",
  layoutPath: DEFAULT_THEME_PATH,
  config: {
    navMenus: [],
    banner: {
      img: "/banner.png",
      subtitle: "",
    },
    sidebar: {
      enable: true,
      hide: false,
      position: "right",
      card_author: {
        enable: true,
        description: "",
        button: {
          enable: true,
          icon: {
            prefix: "fab",
            iconName: "github",
          },
          text: "Follow me",
          link: "",
        },
      },
      card_announcement: {
        enable: true,
        content: "",
      },
      card_recent_post: {
        enable: true,
        limit: 5,
        sort: "date",
      },
      card_categories: {
        enable: true,
        limit: 10,
      },
      card_tags: {
        enable: true,
        limit: 10,
      },
      card_webinfo: {
        enable: true,
        post_count: true,
        last_push_date: true,
        run_time: true,
        site_pv: true,
        site_uv: true,
      },
    },
    footer: {
      message: "",
      copyright: "",
    },
    page_pv: true,
  },
  plugins: [],
};

export default theme;
