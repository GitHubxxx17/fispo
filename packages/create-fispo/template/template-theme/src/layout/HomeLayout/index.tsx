import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";

interface HomeLayoutProps {
  pageData: PageData;
}

export function HomeLayout(props: HomeLayoutProps) {
  console.log(props);
  return <div className={styles.homeLayout}>home</div>;
}
