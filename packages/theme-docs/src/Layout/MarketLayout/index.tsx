import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import { Content } from "fispo-core/runtime";
import Footer from "../../components/Footer";

interface MarketLayoutProps {
  pageData: PageData;
}

export function MarketLayout({ pageData }: MarketLayoutProps) {
  const { pagePath } = pageData;
  return (
    <div className={styles.marketLayout}>
      <div className={styles.marketContent}>
        <Content path={pagePath} />
        <Footer />
      </div>
    </div>
  );
}
