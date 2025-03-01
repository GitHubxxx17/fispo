import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { BannerData, FrontMatter } from "shared/types";
import formatDateToYYYYMMDD from "../../helper/date";
interface BannerProps {
  isHomePage?: boolean;
  isArticlePage?: boolean;
  bannerData?: BannerData;
  title?: string;
  children?: React.ReactNode;
  articleData?: FrontMatter;
}

function Banner(props: BannerProps) {
  const {
    children,
    isHomePage,
    isArticlePage,
    title,
    bannerData = { img: "" },
    articleData,
  } = props;

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
        {isArticlePage && (
          <div className={styles.meta}>
            <span>发表于 {formatDateToYYYYMMDD(articleData.date)}</span>
            <span>更新于 {formatDateToYYYYMMDD(articleData.date)}</span>
            <span>{articleData.tags}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
