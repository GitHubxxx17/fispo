import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import "../style/base.css";
import "../style/vars.css";
import "../style/docs.css";
import { Helmet } from "react-helmet-async";
import { HomeLayout } from "./HomeLayout";
import DocLayout from "./DocLayout";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;
  const { pageType, siteData, title } = pageData;
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";

  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (isHomePage) {
      return <HomeLayout pageData={pageData} />;
    } else if (isArticlePage) {
      return <DocLayout pageData={pageData} />;
    } else if (pageType === "custom") {
      return <DocLayout pageData={pageData} />;
    } else {
      return <div>404</div>;
    }
  };

  return (
    <div className={styles.layout}>
      {/* 浏览器标签页标题 */}
      <Helmet>
        <title>{isHomePage ? title : `${title} | ${siteData.title}`}</title>
      </Helmet>
      {getCurrentLayout()}
    </div>
  );
};

export default Layout;
