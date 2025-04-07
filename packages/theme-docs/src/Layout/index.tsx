import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import Nav from "../components/Nav";
import "../style/base.css";
import "../style/vars.css";
import "../style/docs.css";
import { HomeLayout } from "./HomeLayout";
import { useEffect } from "react";
import scrollManager from "../helper/scroll";
import { Helmet } from "react-helmet-async";
import DocLayout from "./DocLayout";
import { ThemeLayout } from "./ThemeLayout";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;
  const { pageType, siteData, title, pagePath } = pageData;
  const { themeConfig, title: siteTitle, logo } = siteData;
  const { navMenus } = themeConfig;
  // 获取 pageType
  const pathList = pagePath.split("/").filter(Boolean);
  const type = pathList[0];
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";
  const isThemePage = type === "theme";

  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (isHomePage) {
      return <HomeLayout pageData={pageData} />;
    } else if (isArticlePage) {
      return <DocLayout pageData={pageData} />;
    } else if (isThemePage) {
      return <ThemeLayout pageData={pageData} />;
    } else if (pageType === "custom") {
      return <DocLayout pageData={pageData} />;
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
      <Nav title={siteTitle} menus={navMenus} logo={logo}></Nav>
      {getCurrentLayout()}
    </div>
  );
};

export default Layout;
