import { Content } from "@runtime";
import styles from "./index.module.scss";

export function ArticleLayout() {
  return (
    <div className={styles["article-layout"]}>
      <Content></Content>
    </div>
  );
}
