import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { scrollManager, ScrollCallback, useTheme } from "fispo-core/helper";
import { NavMenuItem } from "types";
import { Icon, Image, Link } from "fispo-core/theme";

interface NavProps {
  title?: string;
  menus?: NavMenuItem[];
  navBlue?: boolean;
  logo?: string;
  curPath?: string;
}

function Nav(props: NavProps) {
  const { title = "", menus = [], logo = "", curPath = "/" } = props;
  const [isTop, setIsTop] = useState(true);
  const [isShowMenus, setIsShowMenus] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const resetMenus = useCallback(() => {
    setIsShowMenus(false);
    document.body.classList.remove("mobile-nav");
  }, []);

  useEffect(() => {
    const scroll: ScrollCallback = (_, isTop) => {
      setIsTop(isTop);
    };
    scrollManager.add(scroll);

    // 媒体查询
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    mediaQuery.addEventListener("change", resetMenus);
    return () => {
      scrollManager.remove(scroll);
      mediaQuery.removeEventListener("change", resetMenus);
    };
  }, []);

  const renderMenus = useMemo(() => {
    return (
      <ul>
        {menus.map((items) => {
          return (
            <li key={items.title}>
              <Link
                href={items.path}
                className={items.path === curPath ? styles.active : ""}
              >
                {items.icon && <Icon icon={items.icon} />}
                <span>{items.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }, [menus, curPath]);

  const renderTools = useMemo(() => {
    return (
      <>
        <div className={styles["nav-tools-item"]}>
          <span title="切换黑白主题" onClick={toggleTheme}>
            <Icon icon={theme === "light" ? "sun" : "moon"} />
          </span>
        </div>
        <div className={styles["nav-tools-item"]}>
          <span title="github">
            <Link href="https://github.com/GitHubxxx17/fispo">
              <Icon icon={["fab", "github"]} />
            </Link>
          </span>
        </div>
      </>
    );
  }, [theme, toggleTheme]);

  return (
    <>
      <nav
        className={classNames(styles.nav, {
          [styles["nav-top"]]: isTop,
        })}
      >
        <div className={styles["nav-left"]}>
          <div className={styles["blog-name"]}>
            <Link href="/">
              {logo && (
                <Image
                  src={logo}
                  lazy={false}
                  wapperStyle={{
                    width: "28px",
                    marginRight: "10px",
                  }}
                />
              )}
              {title}
            </Link>
          </div>
          <div className={styles.menus}>
            <ul>{renderMenus}</ul>
          </div>
        </div>
        <div className={styles["nav-right"]}>
          <div className={styles["nav-right-tools"]}>{renderTools}</div>
          <div
            className={styles["nav-right-menus"]}
            onClick={() => {
              setIsShowMenus((v) => {
                document.body.classList.toggle("mobile-nav");
                return !v;
              });
            }}
          >
            <Icon icon="bars"></Icon>
          </div>
        </div>
      </nav>
      {
        <div
          className={classNames(styles["nav-menus"], {
            [styles["nav-menus-show"]]: isShowMenus,
          })}
        >
          {renderMenus}
          <div className={styles["nav-menus-tools"]}>{renderTools}</div>
        </div>
      }
    </>
  );
}

export default Nav;
