import { PageData } from "fispo-core/types";
import { Content } from "fispo-core/runtime";
import styles from "./index.module.scss";

interface DocLayoutProps {
  pageData: PageData;
}

const DocLayout = (props: DocLayoutProps) => {
  console.log(props);
  return (
    <div className={styles.docLayout}>
      <Content />
    </div>
  );
};

export default DocLayout;
