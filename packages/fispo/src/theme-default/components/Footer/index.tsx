import React from "react";
import styles from "./index.module.scss";
import { Link } from "shared/components";
import { baseUrl } from "@runtime/util";
interface FooterProps {
  children?: React.ReactNode;
  footerImg: string;
}

function Footer(props: FooterProps) {
  const { children } = props;
  if (children) return children;

  return (
    <footer className={styles.footer}>
      <div
        className={styles.footerInner}
        style={{
          backgroundImage: `url(${baseUrl(props.footerImg)})`,
        }}
      >
        <p>©2020 - 2023 By XXX17</p>
        <p className={styles["framework-info"]}>
          <span>框架</span>
          <Link href="https://github.com/GitHubxxx17/fispo">Fispo</Link>
          <span>|</span>
          <span>主题</span>
          <Link href="https://github.com/GitHubxxx17/fispo">fish-in-pool</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
