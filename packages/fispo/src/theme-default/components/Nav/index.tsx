import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import scrollManager, { ScrollCallback } from "../../helper/scroll";
import Icon from "shared/components/Icon";
import { navMenuItem } from "shared/types/default-theme";
import { Link } from "shared/components";

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
        <Link href="#">{title}</Link>
      </div>
      <div className={styles.menus}>
        <ul>
          {menus.map((items) => {
            return (
              <li key={items.title}>
                <Link href={items.path}>
                  <Icon icon={items.icon}></Icon>
                  <span>{items.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
