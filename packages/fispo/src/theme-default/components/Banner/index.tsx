import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { PageData } from "shared/types";
import { formatDateToYYYYMMDD } from "../../../shared/helper/date";
import Icon from "shared/components/Icon";
import { Link } from "shared/components";
import { baseUrl } from "@runtime/util";
interface BannerProps {
  isHomePage?: boolean;
  isArticlePage?: boolean;
  children?: React.ReactNode;
  pageData?: PageData;
}

function Banner(props: BannerProps) {
  const { children, isHomePage, isArticlePage } = props;

  const { frontmatter: articleData, title, siteData } = props.pageData;
  const { banner, page_pv } = siteData.themeConfig;

  if (children) return children;
  return (
    <div
      className={classNames(styles.banner, {
        [styles["not-home-page"]]: !isHomePage,
      })}
      style={{
        backgroundImage: `url(${baseUrl(isArticlePage && articleData.cover ? articleData.cover : banner.img)})`,
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
              <Icon icon="history" />
              更新于 {formatDateToYYYYMMDD(articleData.updated)}
            </span>
            {articleData.categories !== "" && (
              <span>
                <Icon icon="inbox" />
                <Link href={`/category/${articleData.categories}`}>
                  {articleData.categories}
                </Link>
              </span>
            )}
            {articleData.tags.length > 0 && (
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
            )}
            {page_pv && (
              <span>
                <Icon icon="eye" />
                阅读量：<span id="busuanzi_value_page_pv"></span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
