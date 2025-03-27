import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import Nav from "../components/Nav";
import "../style/base.css";
import "../style/vars.css";
import { HomeLayout } from "./HomeLayout";
import { useEffect } from "react";
import scrollManager from "../helper/scroll";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;
  const { pageType, siteData } = pageData;
  const { themeConfig, title, logo } = siteData;
  const { navMenus } = themeConfig;
  // 获取 pageType
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";

  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (isHomePage) {
      return <HomeLayout pageData={pageData}></HomeLayout>;
    } else if (isArticlePage) {
      return <div>article</div>;
    } else if (pageType === "custom") {
      return <div>custom</div>;
    } else {
      return <div>404</div>;
    }
  };

  useEffect(() => {
    scrollManager.init();
    return () => {
      scrollManager.destory();
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Helmet>
        <title>{isHomePage ? title : `${title} | ${siteData.title}`}</title>
      </Helmet>
      <Nav title={title} menus={navMenus} logo={logo}></Nav>
      {getCurrentLayout()}
    </div>
  );
};

export default Layout;
