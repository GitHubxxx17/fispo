import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import { Content } from "fispo-core/runtime";
import Footer from "../../components/Footer";

interface MarketLayoutProps {
  pageData: PageData;
}

export function MarketLayout(_: MarketLayoutProps) {
  return (
    <div className={styles.marketLayout}>
      <div className={styles.marketContent}>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
