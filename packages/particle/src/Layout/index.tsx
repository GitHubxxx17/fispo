import { LayoutRoutes, PageData } from "fispo-core/types";
import "../style/base.css";
import "../style/docs.css";
import styles from "./index.module.scss";
import Nav from "../components/Nav";
import { HomeLayout } from "./HomeLayout";
import scrollManager from "../helper/scroll";
import { useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import ArticleLayout from "./ArticleLayout";
import CustomLayout from "./CustomLayout";
import { GetLayoutRoutes } from "fispo-core/theme";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;
  const { pageType, siteData } = pageData;
  const { title: siteTitle, themeConfig, author } = siteData;
  const { navMenus } = themeConfig;
  // 获取 pageType
  const isHomePage = useMemo(() => pageType === "home", [pageType]);

  const routes: LayoutRoutes = useMemo(() => {
    return [
      {
        path: "/",
        element: <HomeLayout pageData={pageData}></HomeLayout>,
      },
      {
        path: "post/*",
        element: <ArticleLayout pageData={pageData}></ArticleLayout>,
      },
      {
        path: "tag/*",
        element: <CustomLayout pageData={pageData}></CustomLayout>,
      },
      {
        path: "category/*",
        element: <CustomLayout pageData={pageData}></CustomLayout>,
      },
      {
        path: "*",
        element: <>404</>,
      },
    ];
  }, [pageData]);

  useEffect(() => {
    scrollManager.init();
    return () => {
      scrollManager.destory();
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Nav title={siteTitle} menus={navMenus} navBlue={!isHomePage}></Nav>
      <GetLayoutRoutes routes={routes} />
      <Footer author={author} title={siteTitle}></Footer>
    </div>
  );
};

export default Layout;
