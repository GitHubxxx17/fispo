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
          icon: {
            prefix: "fas",
            iconName: "home",
          },
        },
        {
          title: "标签",
          path: "/tag",
          icon: {
            prefix: "fas",
            iconName: "tag",
          },
        },
        {
          title: "分类",
          path: "/category",
          icon: {
            prefix: "fas",
            iconName: "folder-open",
          },
        },
        {
          title: "关于",
          path: "/about/",
          icon: {
            prefix: "fas",
            iconName: "heart",
          },
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
            "icon": {
              "iconName": "home",
              "prefix": "fas",
            },
            "path": "/",
            "title": "首页",
          },
          {
            "icon": {
              "iconName": "tag",
              "prefix": "fas",
            },
            "path": "/tag",
            "title": "标签",
          },
          {
            "icon": {
              "iconName": "folder-open",
              "prefix": "fas",
            },
            "path": "/category",
            "title": "分类",
          },
          {
            "icon": {
              "iconName": "heart",
              "prefix": "fas",
            },
            "path": "/about/",
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
              "icon": {
                "iconName": "github",
                "prefix": "fab",
              },
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
