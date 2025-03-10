import { ArticleData } from "fispo-core/types";
import styles from "./index.module.scss";
import { Icon } from "fispo-core/theme";
import { getRandomColor } from "../../helper/tag";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PostProps extends ArticleData {}

const Post = (props: PostProps) => {
  console.log(props);
  return (
    <div className={styles.post}>
      <a href={props.path}>
        <h2>{props.title}</h2>
      </a>
      <div className={styles["category-and-date"]}>
        <span className={styles.category}>
          <a href={`/category/${props.categories}`}>
            <Icon icon="folder-open" />
            {props.categories}
          </a>
        </span>
        <span className={styles.date}>
          <Icon icon="calendar" />
          {props.date}
        </span>
      </div>
      <div className={styles.description}>
        <p dangerouslySetInnerHTML={{ __html: props.info }}></p>
      </div>
      <div className={styles["post-tags"]}>
        <Icon icon="tags" />
        {props.tags.map((tag, index) => {
          return (
            <span key={index}>
              <a href={`/tag/${tag}`} style={{ color: getRandomColor() }}>
                {tag}
              </a>
            </span>
          );
        })}
      </div>
      <a href={props.path} className={styles["go-post"]}>
        阅读全文
      </a>
    </div>
  );
};

export default Post;
