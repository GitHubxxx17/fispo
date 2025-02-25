import React from "react";
import styles from "./index.module.scss";
import { usePageData } from "@runtime";
interface BannerProps {
  title?: string;
  children?: React.ReactNode;
}

function Banner(props: BannerProps) {
  const { children } = props;
  const { siteData } = usePageData();

  if (children) return children;
  return (
    <div className={styles.banner}>
      <div className={styles["banner-site-info"]}>
        <div className={styles["banner-site-title"]}>{siteData.title}</div>
      </div>
    </div>
  );
}

export default Banner;
