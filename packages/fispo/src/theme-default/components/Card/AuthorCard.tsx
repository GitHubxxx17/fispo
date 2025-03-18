import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "shared/components/Icon";
import { Link } from "shared/components";

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
        <Link href="/">
          <span>文章</span>
          <span>{props?.articleNums}</span>
        </Link>
        <Link href="/tag">
          <span>标签</span>
          <span>{props?.tagsNums}</span>
        </Link>
        <Link href="/category">
          <span>分类</span>
          <span>{props?.categorizeNums}</span>
        </Link>
      </div>
      {props?.button?.enable && (
        <button className={styles["follow-btn"]}>
          <Link href={props?.button?.link} target="_blank" rel="noreferrer">
            <Icon icon={props?.button?.icon}></Icon>
            {props?.button?.text}
          </Link>
        </button>
      )}
    </div>
  );
};

export default memo(AuthorCard);
