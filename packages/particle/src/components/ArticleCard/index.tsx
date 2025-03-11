import { Icon } from "fispo-core/theme";
import styles from "./index.module.scss";
import { ArticleData } from "fispo-core/types";
import { getRandomColor } from "../../helper/tag";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ArticleCardProps extends ArticleData {}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.time}>{props.date}</div>
      <a href={props.path} className={styles.title}>
        <h3>{props.title}</h3>
      </a>
      <div className={styles.info}>
        <span>
          <a href={`/category/${props.categories}`}>
            <Icon icon="folder-open" />
            {props.categories}
          </a>
        </span>
        <span>
          <Icon icon="tags" />
          {props.tags?.map((tag, index) => {
            return (
              <a href={`/tag/${tag}`} key={index}>
                <span style={{ color: getRandomColor() }}>{tag}</span>
              </a>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
