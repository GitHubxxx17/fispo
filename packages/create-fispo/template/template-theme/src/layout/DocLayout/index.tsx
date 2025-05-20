import { PageData } from "fispo-core/types";
import { Content } from "fispo-core/runtime";
import styles from "./index.module.scss";

interface DocLayoutProps {
  pageData: PageData;
}

const DocLayout = (props: DocLayoutProps) => {
  console.log(props);
  const { pagePath } = props.pageData;
  return (
    <div className={styles.docLayout}>
      <Content path={pagePath} />
    </div>
  );
};

export default DocLayout;
