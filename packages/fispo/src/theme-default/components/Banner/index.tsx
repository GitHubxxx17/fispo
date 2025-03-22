import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { FrontMatter } from "shared/types";
import { formatDateToYYYYMMDD } from "../../../shared/utils/date";
import Icon from "shared/components/Icon";
import { Link } from "shared/components";
import { BannerData } from "shared/types/default-theme";
import { baseUrl } from "@runtime/util";
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
        backgroundImage: `url(${baseUrl(isArticlePage ? articleData.cover : bannerData.img)})`,
      }}
    >
      <div className={styles["banner-site-info"]}>
        <div className={styles["banner-site-title"]}>{title}</div>
        {isArticlePage && (
          <div className={styles.meta}>
            <span>
              <Icon icon="calendar-alt" />
              发表于 {formatDateToYYYYMMDD(articleData.date)}
            </span>
            <span>
              <Icon icon="inbox" />
              <Link href={`/category/${articleData.categories}`}>
                {articleData.categories}
              </Link>
            </span>
            <span className={styles["content-tag"]}>
              <Icon icon="tag" />
              {articleData.tags.map((tag, index) => {
                return (
                  <Link href={`/tag/${tag}`} key={`${tag}-${index}`}>
                    {tag}
                  </Link>
                );
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
