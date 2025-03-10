import { DefaultThemeConfig } from "../shared/types/default-theme";
import { defaultConfig, mergeConfig } from "../shared/utils/defaultConfig";
import { describe, expect, test } from "vitest";

describe("test", () => {
  test("mergeConfig", async () => {
    const userConfig: DefaultThemeConfig = {
      banner: {
        img: "/banner.jpg",
      },
      navMenus: [
        {
          title: "首页",
          path: "/",
          icon: "home",
        },
        {
          title: "标签",
          path: "/tag",
          icon: "tag",
        },
        {
          title: "分类",
          path: "/category",
          icon: "folder-open",
        },
        {
          title: "关于",
          path: "/about",
          icon: "heart",
        },
      ],
      sidebar: {
        position: "left",
        enable: true,
        card_author: {
          enable: false,
        },
      },
    };
    const result = mergeConfig<DefaultThemeConfig>(defaultConfig, userConfig);
    expect(result).toMatchInlineSnapshot(`
      {
        "banner": {
          "img": "/banner.jpg",
          "subtitle": "",
        },
        "footer": {
          "copyright": "",
          "message": "",
        },
        "navMenus": [
          {
            "icon": "home",
            "path": "/",
            "title": "首页",
          },
          {
            "icon": "tag",
            "path": "/tag",
            "title": "标签",
          },
          {
            "icon": "folder-open",
            "path": "/category",
            "title": "分类",
          },
          {
            "icon": "heart",
            "path": "/about",
            "title": "关于",
          },
        ],
        "sidebar": {
          "card_announcement": {
            "content": "",
            "enable": true,
          },
          "card_author": {
            "button": {
              "enable": true,
              "icon": "github",
              "link": "",
              "text": "Follow me",
            },
            "description": "",
            "enable": false,
          },
          "card_categories": {
            "enable": true,
            "limit": 10,
          },
          "card_recent_post": {
            "enable": true,
            "limit": 5,
            "sort": "date",
          },
          "card_tags": {
            "enable": true,
            "limit": 10,
          },
          "card_webinfo": {
            "enable": true,
            "last_push_date": true,
            "post_count": true,
            "run_time": true,
          },
          "enable": true,
          "hide": false,
          "position": "left",
        },
      }
    `);
  });
});
