import React from "react";
import styles from "./index.module.scss";
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
          backgroundImage: `url(${props.footerImg})`,
        }}
      >
        <p>©2020 - 2023 By XXX17</p>
        <p className={styles["framework-info"]}>
          <span>框架</span>
          <a
            href="https://github.com/GitHubxxx17/fispo"
            target="_blank"
            rel="noreferrer"
          >
            Fispo
          </a>
          <span>|</span>
          <span>主题</span>
          <a
            href="https://github.com/GitHubxxx17/fispo"
            target="_blank"
            rel="noreferrer"
          >
            fish-in-pool
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
