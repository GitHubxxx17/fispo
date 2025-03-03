import { IconName } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";
import styles from "./index.module.scss";
import scrollManager, { ScrollCallback } from "../../helper/scroll";
import { useCallback, useEffect, useMemo, useState } from "react";
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

export default function RightSide(props: RightSideProps) {
  const { setSideBarHide } = props;
  const [isTop, setIsTop] = useState(true);
  const [settingsIsHide, setSettingsIsHide] = useState(true);

  const rightSideSettings: rightSideItem[] = useMemo(
    () => [
      { icon: "adjust", text: "深色和浅色模式切换" },
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
          scrollManager.scrollToTarget(document.body, true);
        },
      },
    ],
    []
  );

  useEffect(() => {
    const showRightSide: ScrollCallback = (_, isTop) => {
      setIsTop(isTop);
    };

    scrollManager.add(showRightSide);
    return () => {
      scrollManager.remove(showRightSide);
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
}
