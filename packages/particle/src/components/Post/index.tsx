import { ArticleData } from "fispo-core/types";
import styles from "./index.module.scss";
import { Icon, Link } from "fispo-core/theme";
import { getRandomColor } from "../../helper/tag";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PostProps extends ArticleData {}

const Post = (props: PostProps) => {
  return (
    <div className={styles.post}>
      <Link href={props.path}>
        <h2>{props.title}</h2>
      </Link>
      <div className={styles["category-and-date"]}>
        <span className={styles.category}>
          <Link href={`/category/${props.categories}`}>
            <Icon icon="folder-open" />
            {props.categories}
          </Link>
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
              <Link href={`/tag/${tag}`} style={{ color: getRandomColor() }}>
                {tag}
              </Link>
            </span>
          );
        })}
      </div>
      <Link href={props.path} className={styles["go-post"]}>
        阅读全文
      </Link>
    </div>
  );
};

export default Post;
