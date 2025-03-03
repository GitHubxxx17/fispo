import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "../Icon";

export interface AuthorCardProps {
  author?: string;
  description?: string;
  avatar?: string;
  articleNums?: number;
  tagsNums?: number;
  categorizeNums?: number;
  button?: {
    enable?: boolean;
    icon?: IconName;
    text?: string;
    link?: string;
  };
}

const AuthorCard = (props: AuthorCardProps) => {
  return (
    <div className={styles.author}>
      <div className={styles.avatar}>
        <img src={props.avatar}></img>
      </div>
      <h2 className={styles["author-name"]}>{props?.author}</h2>
      <p className={styles["author-description"]}>{props?.description}</p>
      <div className={styles["author-data"]}>
        <a href="/">
          <span>文章</span>
          <span>{props?.articleNums}</span>
        </a>
        <a href="/tag">
          <span>标签</span>
          <span>{props?.tagsNums}</span>
        </a>
        <a href="/category">
          <span>分类</span>
          <span>{props?.categorizeNums}</span>
        </a>
      </div>
      {props?.button?.enable && (
        <button className={styles["follow-btn"]}>
          <a href={props?.button?.link} target="_blank" rel="noreferrer">
            <Icon icon={props?.button?.icon}></Icon>
            {props?.button?.text}
          </a>
        </button>
      )}
    </div>
  );
};

export default memo(AuthorCard);
