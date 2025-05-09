import { PageData } from "shared/types";
import Tags from "../../components/Tags";
import ArticleList from "../../components/ArticleList";
import Categories from "../../components/Categories";
import { Content } from "@runtime/index";
import styles from "./index.module.scss";

interface CustomLayoutProps {
  pageData: PageData;
}

export function CustomLayout(props: CustomLayoutProps) {
  const { pagePath, tags, articlesList, categories } = props.pageData;
  const pathList = pagePath.split("/").filter(Boolean);
  const type = pathList[0];

  if (type == "tag") {
    return pathList.length == 1 ? (
      <Tags tags={tags} />
    ) : (
      <ArticleList
        articleList={articlesList}
        filter={{ type: "tag", keyword: decodeURIComponent(pathList.at(-1)) }}
      />
    );
  } else if (type === "category") {
    return pathList.length == 1 ? (
      <Categories categories={categories} />
    ) : (
      <ArticleList
        articleList={articlesList}
        filter={{
          type: "category",
          keyword: decodeURIComponent(pathList.at(-1)),
        }}
      />
    );
  } else {
    return (
      <div className={styles["custom-layout"]}>
        <Content />
      </div>
    );
  }
}
