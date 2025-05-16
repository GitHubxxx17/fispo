import { IconName } from "@fortawesome/fontawesome-svg-core";
import Icon from "shared/components/Icon";
import styles from "./index.module.scss";
import {
  scrollManager,
  ScrollCallback,
  localGetData,
  localSaveData,
  debounce,
} from "fispo-core/helper";
import { memo, useCallback, useEffect, useMemo, useState, useRef } from "react";
import classNames from "classnames";
import { PageData } from "shared/types";

interface RightSideProps {
  children?: React.ReactNode;
  pageData?: PageData;
  setSideBarHide?: () => void;
}

interface rightSideItem {
  icon: IconName;
  text: string;
  isSpin?: boolean;
  click?: () => void;
}

const THEME = "THEME";

const RightSide = (props: RightSideProps) => {
  const { setSideBarHide } = props;
  const [isTop, setIsTop] = useState(true);
  const [settingsIsHide, setSettingsIsHide] = useState(true);
  const currentTheme = useRef(localGetData(THEME)); // 跟踪当前主题值

  const rightSideSettings: rightSideItem[] = useMemo(
    () => [
      {
        icon: "adjust",
        text: "深色和浅色模式切换",
        click: () => {
          const classList = document.documentElement.classList;
          const newTheme = classList.contains("dark") ? "light" : "dark";
          currentTheme.current = newTheme; // 更新当前主题引用
          localSaveData(THEME, newTheme);
          classList.toggle("dark");
        },
      },
      {
        icon: "arrows-alt-h",
        text: "单栏和双栏的切换",
        click: () => {
          setSideBarHide();
        },
      },
    ],
    []
  );

  const rightSideOptions: rightSideItem[] = useMemo(
    () => [
      {
        icon: "cog",
        text: "设置",
        isSpin: true,
        click: () => {
          setSettingsIsHide((pre) => !pre);
        },
      },
      {
        icon: "arrow-up",
        text: "回到顶部",
        click: () => {
          scrollManager.scrollToTarget(document.body);
        },
      },
    ],
    []
  );

  const setClassList = useCallback((isDark = false) => {
    const classList = document.documentElement.classList;
    if (isDark) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  }, []);

  const updateTheme = useCallback(() => {
    const theme = localGetData(THEME);
    // 只有当主题真的发生变化时才更新DOM
    if (theme !== currentTheme.current) {
      currentTheme.current = theme;
      setClassList(theme === "dark");
    }
  }, []);

  useEffect(() => {
    const showRightSide: ScrollCallback = (_, isTop) => {
      setIsTop(isTop);
    };
    scrollManager.add(showRightSide);

    updateTheme();

    // 【warning】 必须使用防抖处理storage事件，否则同时打开多个页面会导致浏览器卡顿
    const debouncedUpdateTheme = debounce(updateTheme, 300);
    window.addEventListener("storage", debouncedUpdateTheme);

    return () => {
      scrollManager.remove(showRightSide);
      window.removeEventListener("storage", debouncedUpdateTheme);
    };
  }, []);

  const rightSideItemRender = useCallback(
    (item: rightSideItem, index: number) => {
      return (
        <div
          key={`${item}-${index}`}
          className={styles["rightSide-item"]}
          title={item.text}
          onClick={() => {
            item.click?.();
          }}
        >
          <Icon icon={item.icon} isSpin={item?.isSpin}></Icon>
        </div>
      );
    },
    []
  );

  return (
    <div
      className={classNames(styles.rightSide, {
        [styles["rightSide-hide"]]: isTop,
      })}
    >
      <div
        className={classNames(styles["rightSide-settings"], {
          [styles["rightSide-hide"]]: settingsIsHide,
        })}
      >
        {rightSideSettings.map(rightSideItemRender)}
      </div>
      {rightSideOptions.map(rightSideItemRender)}
    </div>
  );
};

export default memo(RightSide);
