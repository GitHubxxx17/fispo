import React from "react";
import styles from "./index.module.scss";
interface FooterProps {
  children?: React.ReactNode;
}

function Footer(props: FooterProps) {
  const { children } = props;
  if (children) return children;

  return (
    <footer className={styles.footer}>
      <p>©2020 - 2023 By XXX17</p>
      <p className={styles["framework-info"]}>
        <span>框架</span>
        <a>Fitp</a>
        <span>|</span>
        <span>主题</span>
        <a>fish-in-pool</a>
      </p>
    </footer>
  );
}

export default Footer;
