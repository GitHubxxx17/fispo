import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import { Content } from "fispo-core/runtime";
import Footer from "../../components/Footer";

interface ThemeLayoutProps {
  pageData: PageData;
}

export function ThemeLayout(_: ThemeLayoutProps) {
  return (
    <div className={styles.themeLayout}>
      <div className={styles.themeContent}>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
