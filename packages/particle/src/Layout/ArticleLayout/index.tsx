import { Content } from "fispo-core/runtime";
import styles from "./index.module.scss";
import { PageData } from "fispo-core/types";
import { Icon, Link } from "fispo-core/theme";
import { convertDateString } from "../../helper/date";
import { getRandomColor } from "../../helper/tag";

interface ArticleLayoutProps {
  pageData: PageData;
}

const ArticleLayout = (props: ArticleLayoutProps) => {
  const { title, frontmatter, pagePath } = props.pageData;

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
            <Link href={`/category/${frontmatter.categories}`}>
              <Icon icon="folder-open" />
              {frontmatter.categories}
            </Link>
          </span>
          <span>
            <Icon icon="tags" />
            {frontmatter.tags?.map((tag, index) => {
              return (
                <Link href={`/tag/${tag}`} key={index}>
                  <span style={{ color: getRandomColor() }}>{tag}</span>
                </Link>
              );
            })}
          </span>
        </div>
      </div>
      <Content path={pagePath} />
    </div>
  );
};

export default ArticleLayout;
