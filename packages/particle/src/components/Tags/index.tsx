import styles from "./index.module.scss";
import { getRandomColor } from "../../helper/tag";
import { ArticleData, Tags as TagsType } from "fispo-core/types";
import { Icon, IconName, Link } from "fispo-core/theme";
import ArticleCard from "../ArticleCard";
import { useMemo } from "react";

interface TagsProps {
  type: "tag" | "category";
  tags: TagsType;
  articleList: ArticleData[];
  keyword: string;
}

const Tags = (props: TagsProps) => {
  const { tags = [], type, articleList, keyword } = props;

  const iconType: IconName = type === "tag" ? "tags" : "folder-open";

  const currBg =
    "linear-gradient(120deg, rgb(154, 187, 247) 0px, rgb(255, 187, 244) 100%)";

  const articles = useMemo(() => {
    if (!keyword) return [];
    if (type == "tag") {
      return articleList.filter((article) => {
        return article.tags?.includes(keyword);
      });
    } else {
      return articleList.filter((article) => {
        return article.categories === keyword;
      });
    }
  }, [articleList]);

  return (
    <div className={styles.tags}>
      <div className={styles["categories-tags"]}>
        {Object.entries(tags).map(([tag], index) => {
          return (
            <span key={index}>
              <Link
                href={`/${type}/${tag}`}
                style={{
                  background: tag === keyword ? currBg : getRandomColor(),
                }}
              >
                <Icon icon={iconType} />
                {tag}
              </Link>
            </span>
          );
        })}
      </div>
      {articles.map((article, index) => {
        return <ArticleCard {...article} key={index} />;
      })}
    </div>
  );
};

export default Tags;
