import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { navMenuItem } from "shared/types";
import { debounce } from "lodash-es";

interface NavProps {
  title?: string;
  menus?: navMenuItem[];
  children?: React.ReactNode;
}

function Nav(props: NavProps) {
  const { title = "", menus = [], children } = props;
  if (children) return children;
  const [isHide, setIsHide] = useState(false);
  const lastScrollTop = useRef(0);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const scroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop.current) {
        // 向下滚动
        setIsHide(true);
      } else {
        // 向上滚动
        setIsHide(false);
      }
      setIsTop(currentScrollTop == 0);
      lastScrollTop.current = currentScrollTop;
    };

    const debounceScroll = debounce(scroll, 5);
    window.addEventListener("scroll", debounceScroll);
    return () => {
      window.removeEventListener("scroll", debounceScroll);
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
                <Link to={items.path}>
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
