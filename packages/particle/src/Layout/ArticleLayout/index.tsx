import { Content } from "fispo-core/runtime";
import styles from "./index.module.scss";
import { PageData } from "fispo-core/types";
import { Icon } from "fispo-core/theme";
import { convertDateString } from "../../helper/date";
import { getRandomColor } from "../../helper/tag";

interface ArticleLayoutProps {
  pageData: PageData;
}

const ArticleLayout = (props: ArticleLayoutProps) => {
  const { title, frontmatter } = props.pageData;

  return (
    <div className={styles.articleLayout}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.info}>
          <span>
            <Icon icon="calendar" />
            {convertDateString(frontmatter.date)}
          </span>
          <span>
            <a href={`/category/${frontmatter.categories}`}>
              <Icon icon="folder-open" />
              {frontmatter.categories}
            </a>
          </span>
          <span>
            <Icon icon="tags" />
            {frontmatter.tags.map((tag, index) => {
              return (
                <a href={`/tag/${tag}`} key={index}>
                  <span style={{ color: getRandomColor() }}>{tag}</span>
                </a>
              );
            })}
          </span>
        </div>
      </div>
      <Content></Content>
    </div>
  );
};

export default ArticleLayout;
