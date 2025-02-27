import { PageData } from "shared/types";
import ArticleList from "../../components/ArticleList";

interface HomeLayoutProps {
  pageData: PageData;
}

export function HomeLayout(props: HomeLayoutProps) {
  return <ArticleList articleList={props.pageData.articlesList}></ArticleList>;
}
