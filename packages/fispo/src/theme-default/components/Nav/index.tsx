import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { navMenuItem } from "shared/types";
import scrollManager, { ScrollCallback } from "../../helper/scroll";
import Icon from "../Icon";

interface NavProps {
  title?: string;
  menus?: navMenuItem[];
  children?: React.ReactNode;
}

function Nav(props: NavProps) {
  const { title = "", menus = [], children } = props;
  if (children) return children;
  const [isHide, setIsHide] = useState(false);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const scroll: ScrollCallback = (direction, isTop) => {
      setIsHide(direction == "down");
      setIsTop(isTop);
    };

    scrollManager.add(scroll);
    return () => {
      scrollManager.remove(scroll);
    };
  }, []);

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.hide]: isHide,
        [styles.top]: isTop,
      })}
    >
      <div className={styles["blog-name"]}>
        <a href="#">{title}</a>
      </div>
      <div className={styles.menus}>
        <ul>
          {menus.map((items) => {
            return (
              <li key={items.title}>
                <a href={items.path}>
                  <Icon icon={items.icon}></Icon>
                  <span>{items.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
