import { useEffect, useCallback, useState } from "react";
import { debounce, localGetData, localSaveData } from "fispo-core/helper";
import { usePageData } from "@runtime/hooks";

// 定义主题类型
export type ThemeType = "light" | "dark";
const THEME_KEY = "THEME";

export interface ThemeProps {
  themeKey?: string;
}

export function useTheme(props: ThemeProps = {}) {
  const { themeKey = THEME_KEY } = props;
  const { pageData, setPageData } = usePageData();

  // 初始化主题（优先读取本地存储，默认浅色主题）
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localGetData(themeKey) as ThemeType;
    return savedTheme || "light";
  });

  // 更新 DOM 主题类
  const updateDomTheme = useCallback(
    (theme: ThemeType) => {
      const classList = document.documentElement.classList;
      const isDark = theme === "dark";
      classList.toggle("dark", isDark);
      const codeHighlight = pageData?.siteData?.codeHighlight;
      const { dark = "dark", light = "default" } = codeHighlight;
      setPageData({ ...pageData, curCodeTheme: isDark ? dark : light });
    },
    [pageData.pagePath]
  );

  // 切换主题函数
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localSaveData(themeKey, newTheme);
    updateDomTheme(newTheme);
  }, [theme, updateDomTheme]);

  // 监听本地存储变化（多标签页同步主题）
  useEffect(() => {
    updateDomTheme(localGetData(themeKey));

    // 【warning】 必须使用防抖处理storage事件，否则同时打开多个页面会导致浏览器卡顿
    const handleStorageChange = debounce((event: StorageEvent) => {
      if (event.key === themeKey && event.newValue) {
        const cleanedValue = event.newValue.replace(/"/g, "");
        setTheme(cleanedValue as ThemeType);
        updateDomTheme(cleanedValue as ThemeType);
      }
    }, 300);

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [updateDomTheme]);

  return { theme, toggleTheme };
}
