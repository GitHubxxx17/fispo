import { LayoutRoutes, PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import Nav from "../components/Nav";
import "../style/base.css";
import "../style/vars.css";
import "../style/docs.css";
import { HomeLayout } from "./HomeLayout";
import { useEffect, useMemo } from "react";
import { scrollManager } from "fispo-core/helper";
import { Helmet } from "react-helmet-async";
import DocLayout from "./DocLayout";
import { MarketLayout } from "./MarketLayout";
import { GetLayoutRoutes } from "fispo-core/theme";
import "../helper/icon";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;
  const { pageType, siteData, title, pagePath } = pageData;
  const { themeConfig, title: siteTitle, logo } = siteData;
  const { navMenus } = themeConfig;
  // 获取 pageType
  const type = useMemo(() => {
    const pathList = pagePath.split("/").filter(Boolean);
    return pathList[0];
  }, [pagePath]);
  const isHomePage = useMemo(() => pageType === "home", [pageType]);

  const routes: LayoutRoutes = useMemo(() => {
    return [
      {
        path: "/",
        element: <HomeLayout pageData={pageData}></HomeLayout>,
      },

      {
        path: "/theme/*",
        element: <MarketLayout pageData={pageData}></MarketLayout>,
      },
      {
        path: "/plugin/*",
        element: <MarketLayout pageData={pageData}></MarketLayout>,
      },
      {
        path: "*",
        element: <DocLayout pageData={pageData}></DocLayout>,
      },
    ];
  }, [pageData]);

  useEffect(() => {
    scrollManager.init();
    scrollManager.setNavIsScrollHidden(false);
    return () => {
      scrollManager.destroy();
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Helmet>
        <title>{isHomePage ? title : `${title} | ${siteData.title}`}</title>
      </Helmet>
      <Nav
        title={siteTitle}
        menus={navMenus}
        logo={logo}
        curPath={`/${type}`}
      ></Nav>
      <GetLayoutRoutes routes={routes} />
    </div>
  );
};

export default Layout;
