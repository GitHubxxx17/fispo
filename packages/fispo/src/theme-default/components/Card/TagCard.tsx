import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "../Icon";
import { getRandomColor, getRandomTextSize } from "../../helper/tag";

export interface TagCardProps {
  title?: string;
  data?: {
    [key: string]: string[];
  };
}

const TagCard = (props: TagCardProps) => {
  return (
    <div className={styles["card-tag"]}>
      <div className={styles.header}>
        <Icon icon="tags" />
        {props?.title}
      </div>

      <div className={styles["card-tag-cloud"]}>
        {Object.entries(props.data).map(([tag, tagArr], index) => {
          return (
            <span key={`${tag}-${index}`}>
              <a
                href={`tag/${tag}`}
                style={{
                  color: getRandomColor(),
                  fontSize: getRandomTextSize(tagArr.length),
                }}
              >
                {tag}
              </a>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default memo(TagCard);
