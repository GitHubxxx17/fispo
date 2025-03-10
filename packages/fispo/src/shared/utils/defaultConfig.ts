import { DefaultThemeConfig } from "shared/types/default-theme";

export const defaultConfig: Required<DefaultThemeConfig> = {
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
        icon: "github",
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
    },
  },
  footer: {
    message: "",
    copyright: "",
  },
};

export function deepcopy(obj: any, hash = new WeakMap()) {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);
  const cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepcopy(obj[key], hash);
    }
  }
  return cloneObj;
}

// 合并用户和默认配置
export const mergeConfig = <T extends object>(target: T, source: T): T => {
  if (!source) return target;
  const result = {} as T;
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      if (Array.isArray(target[key])) {
        result[key] = source?.[key] || target[key];
      } else if (typeof target[key] === "object") {
        if (key in source) {
          result[key] = mergeConfig(
            target[key],
            source[key] as object
          ) as T[Extract<keyof T, string>];
        } else {
          result[key] = deepcopy(target[key]);
        }
      } else {
        if (key in source) {
          result[key] = source[key];
        } else {
          result[key] = target[key];
        }
      }
    }
  }
  return result;
};
