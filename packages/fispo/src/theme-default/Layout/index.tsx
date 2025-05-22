import Nav from "../components/Nav";
import "../style/base.css";
import "../style/vars.css";
import "../style/docs.css";
import { HomeLayout } from "./HomeLayout";
import styles from "./index.module.scss";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { ArticleLayout } from "./ArticleLayout";
import { CustomLayout } from "./CustomLayout";
import classNames from "classnames";
import { scrollManager, localGetData, localSaveData } from "fispo-core/helper";
import { useCallback, useEffect, useMemo, useState } from "react";
import RightSide from "../components/rightSide";
import { Helmet } from "react-helmet-async";
import NotFoundLayout from "./NotFoundLayout";
import { LayoutRoutes, PageData } from "shared/types";
import { baseUrl } from "@runtime/util";
import { GetLayoutRoutes } from "shared/components";
import "../helper/icon";

interface LayoutProps {
  pageData: PageData;
}

export default function Layout(props: LayoutProps) {
  const { pageData } = props;
  // 获取 pageType
  const { pageType, title, siteData, frontmatter } = pageData;
  const { title: siteTitle, themeConfig } = siteData;
  const { sidebar, navMenus, banner } = themeConfig;
  const isHomePage = useMemo(() => pageType === "home", [pageType]);
  const isArticlePage = useMemo(() => pageType === "article", [pageType]);
  const is404 = useMemo(() => pageType === "404", [pageType]);
  const setSidebarEnableFn = useCallback(() => {
    if (is404) return false;
    const hide = localGetData("sidebarHide");
    if (hide !== null) {
      return !hide;
    }
    return sidebar.enable;
  }, [is404, sidebar]);
  const [sidebarEnable, setSidebarEnable] = useState(setSidebarEnableFn);
  const [sideBarHide, setSideBarHide] = useState(sidebar.hide);

  useEffect(() => {
    setSidebarEnable(setSidebarEnableFn());
  }, [is404]);

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
        element: <NotFoundLayout notFoundImg={siteData.notFoundImg} />,
      },
    ];
  }, [pageData]);

  useEffect(() => {
    scrollManager.init();
    const hide = localGetData("sidebarHide");
    if (hide !== null) {
      setSideBarHide(hide);
    }
    return () => {
      scrollManager.destroy();
    };
  }, []);

  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `url(${baseUrl(siteData.backgroundImg)})`,
      }}
    >
      <Helmet>
        <title>{isHomePage ? title : `${title} | ${siteData.title}`}</title>
      </Helmet>
      <header
        className={classNames(styles.header, {
          [styles["not-home-page"]]: !isHomePage,
        })}
      >
        <Nav title={siteTitle} menus={navMenus}></Nav>
        <Banner
          isHomePage={isHomePage}
          isArticlePage={isArticlePage}
          title={title}
          bannerData={banner}
          articleData={frontmatter}
        ></Banner>
      </header>
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div
            className={styles.mainLeft}
            style={{
              width: sideBarHide ? "80%" : "",
            }}
          >
            <GetLayoutRoutes routes={routes} />
          </div>
          {sidebarEnable && (
            <div
              className={classNames(styles.mainRight, {
                [styles.sidebarLeft]: sidebar.position === "left",
                [styles.sidebarHide]: sideBarHide,
              })}
            >
              <Sidebar
                pageData={pageData}
                isArticlePage={isArticlePage}
              ></Sidebar>
            </div>
          )}
        </div>
      </main>
      {!is404 && (
        <RightSide
          pageData={pageData}
          setSideBarHide={() => {
            setSideBarHide((pre: boolean) => {
              if (sidebarEnable === false) {
                setSidebarEnable(true);
              }
              localSaveData("sidebarHide", !pre);
              return !pre;
            });
          }}
        />
      )}
      <Footer footerImg={banner.img}></Footer>
    </div>
  );
}
