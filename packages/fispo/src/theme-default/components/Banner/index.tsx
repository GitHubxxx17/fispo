import React from "react";
import styles from "./index.module.scss";
import { usePageData } from "@runtime";
import classNames from "classnames";
interface BannerProps {
  isHome?: boolean;
  title?: string;
  children?: React.ReactNode;
}

function Banner(props: BannerProps) {
  const { children, isHome } = props;
  const { siteData } = usePageData();

  if (children) return children;
  return (
    <div
      className={classNames(styles.banner, {
        [styles["not-home-page"]]: !isHome,
      })}
    >
      <div className={styles["banner-site-info"]}>
        <div className={styles["banner-site-title"]}>{siteData.title}</div>
      </div>
    </div>
  );
}

export default Banner;
