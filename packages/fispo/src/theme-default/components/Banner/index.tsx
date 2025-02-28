import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { BannerData } from "shared/types";
interface BannerProps {
  isHomePage?: boolean;
  bannerData?: BannerData;
  title?: string;
  children?: React.ReactNode;
}

function Banner(props: BannerProps) {
  const { children, isHomePage, title, bannerData = { img: "" } } = props;

  if (children) return children;
  return (
    <div
      className={classNames(styles.banner, {
        [styles["not-home-page"]]: !isHomePage,
      })}
      style={{
        backgroundImage: `url(${bannerData.img})`,
      }}
    >
      <div className={styles["banner-site-info"]}>
        <div className={styles["banner-site-title"]}>{title}</div>
      </div>
    </div>
  );
}

export default Banner;
