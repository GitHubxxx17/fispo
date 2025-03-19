import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import scrollManager, { ScrollCallback } from "../../helper/scroll";
import { navMenuItem } from "types";
import { Icon } from "fispo-core/theme";

interface NavProps {
  title?: string;
  menus?: navMenuItem[];
  navBlue?: boolean;
}

function Nav(props: NavProps) {
  const { title = "", menus = [], navBlue = true } = props;
  const [isHide, setIsHide] = useState(false);
  const [isBlue, setIsBlue] = useState(true);
  useEffect(() => {
    setIsBlue(navBlue);

    const scroll: ScrollCallback = (direction) => {
      setIsHide(direction == "down");
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
        [styles["nav-blue"]]: isBlue,
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
                  <Icon icon={items.icon} />
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
