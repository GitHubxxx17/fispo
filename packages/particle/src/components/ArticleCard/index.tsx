import { Icon, Link } from "fispo-core/theme";
import styles from "./index.module.scss";
import { ArticleData } from "fispo-core/types";
import { getRandomColor } from "../../helper/tag";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ArticleCardProps extends ArticleData {}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.time}>{props.date}</div>
      <Link href={props.path} className={styles.title}>
        <h3>{props.title}</h3>
      </Link>
      <div className={styles.info}>
        <span>
          <Link href={`/category/${props.categories}`}>
            <Icon icon="folder-open" />
            {props.categories}
          </Link>
        </span>
        <span>
          <Icon icon="tags" />
          {props.tags?.map((tag, index) => {
            return (
              <Link href={`/tag/${tag}`} key={index}>
                <span style={{ color: getRandomColor() }}>{tag}</span>
              </Link>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
