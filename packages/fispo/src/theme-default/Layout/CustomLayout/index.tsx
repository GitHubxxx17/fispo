import { PageData } from "shared/types";
import Tags from "../../components/Tags";
import ArticleList from "../../components/ArticleList";

interface CustomLayoutProps {
  pageData: PageData;
}

export function CustomLayout(props: CustomLayoutProps) {
  const { pagePath, tags, articlesList } = props.pageData;
  const pathList = pagePath.split("/").filter(Boolean);
  console.log(pathList);
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
    return <Tags></Tags>;
  } else {
    return <div></div>;
  }
}
