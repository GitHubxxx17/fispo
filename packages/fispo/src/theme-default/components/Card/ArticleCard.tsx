import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "../Icon";
import { ArticleData } from "shared/types";

export interface ArticleCardProps {
  icon?: IconName;
  title?: string;
  data?: ArticleData[];
}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className={styles["card-article"]}>
      <div className={styles.header}>
        <Icon icon={props?.icon || "history"} />
        {props?.title}
      </div>
      <ul className={styles.list}>
        {props?.data.map((item, index) => {
          return (
            <li key={`${item.title}-${index}`}>
              <div className={styles.left}>
                <a href={item.path}>
                  <img src={item.cover} alt="" />
                </a>
              </div>
              <div className={styles.right}>
                <a href={item.path}>
                  <span className={styles.title}>{item.title}</span>
                </a>
                <span className={styles.time}>{item.date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(ArticleCard);
