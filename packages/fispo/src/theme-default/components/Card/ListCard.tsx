import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "shared/components/Icon";
import { Link } from "shared/components";

export interface ListCardProps {
  icon?: IconName;
  title?: string;
  limit?: number;
  data?: {
    [key: string]: string[] | number | string;
  };
  hover?: boolean;
}

const ListCard = (props: ListCardProps) => {
  return (
    <div className={styles["card-list"]}>
      <div className={styles.header}>
        <Icon icon={props?.icon || "folder-open"} />
        {props?.title}
      </div>
      <ul className={styles.list}>
        {Object.entries(props?.data)
          .slice(0, props?.limit)
          .map(([name, value], index) => {
            return (
              <li key={`${name}-${index}`}>
                {props.hover ? (
                  <Link href={`/category/${name}`}>
                    <span>{name}</span>
                    <span>{Array.isArray(value) ? value.length : value}</span>
                  </Link>
                ) : (
                  <>
                    <span>{name}</span>
                    <span>{Array.isArray(value) ? value.length : value}</span>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default memo(ListCard);
