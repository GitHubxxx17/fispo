import { PageData } from "shared/types";
import Tags from "../../components/Tags";
import ArticleList from "../../components/ArticleList";
import Categories from "../../components/Categories";
import { Content } from "@runtime/index";
import styles from "./index.module.scss";
import { useMemo } from "react";

interface CustomLayoutProps {
  pageData: PageData;
}

export function CustomLayout(props: CustomLayoutProps) {
  const { pagePath, tags, articlesList, categories } = props.pageData;

  const customComponent = useMemo(() => {
    const pathList = pagePath.split("/").filter(Boolean);
    const type = pathList[0];

    return (
      <>
        {type == "tag" && (
          <>
            {pathList.length == 1 ? (
              <Tags tags={tags} />
            ) : (
              <ArticleList
                articleList={articlesList}
                filter={{
                  type: "tag",
                  keyword: decodeURIComponent(pathList.at(-1)),
                }}
              />
            )}
          </>
        )}
        {type == "category" && (
          <>
            {pathList.length == 1 ? (
              <Categories categories={categories} />
            ) : (
              <ArticleList
                articleList={articlesList}
                filter={{
                  type: "category",
                  keyword: decodeURIComponent(pathList.at(-1)),
                }}
              />
            )}
          </>
        )}
        {type !== "tag" && type !== "category" && (
          <div className={styles["custom-layout"]}>
            <Content path={pagePath} />
          </div>
        )}
      </>
    );
  }, [pagePath]);

  return <>{customComponent}</>;
}
