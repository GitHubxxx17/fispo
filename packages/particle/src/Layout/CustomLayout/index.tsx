import Tags from "../../components/Tags";
import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";

interface CustomLayoutProps {
  pageData: PageData;
}

const CustomLayout = (props: CustomLayoutProps) => {
  const { pagePath, tags, categories, articlesList } = props.pageData;
  const pathList = pagePath.split("/").filter(Boolean);
  const type = pathList[0];
  const keyword = decodeURI(pathList.at(-1));

  const render = (type: string) => {
    switch (type) {
      case "tag":
        return (
          <Tags
            type="tag"
            tags={tags}
            articleList={articlesList}
            keyword={keyword}
          ></Tags>
        );
      case "category":
        return (
          <Tags
            type="category"
            tags={categories}
            articleList={articlesList}
            keyword={keyword}
          ></Tags>
        );
      default:
        return;
    }
  };

  return <div className={styles.customLayout}>{render(type)}</div>;
};

export default CustomLayout;
