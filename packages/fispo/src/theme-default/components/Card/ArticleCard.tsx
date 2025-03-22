import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "shared/components/Icon";
import { ArticleData } from "shared/types";
import { Image, Link } from "shared/components";

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
                <Link href={item.path}>
                  <Image src={item.cover} alt="" />
                </Link>
              </div>
              <div className={styles.right}>
                <Link href={item.path}>
                  <span className={styles.title}>{item.title}</span>
                </Link>
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
