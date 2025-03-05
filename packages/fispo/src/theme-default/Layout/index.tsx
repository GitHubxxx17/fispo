import Nav from "../components/Nav";
import { usePageData } from "../../runtime";
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
import scrollManager from "../helper/scroll";
import { useEffect, useState } from "react";
import RightSide from "../components/rightSide";
import { localGetData, localSaveData } from "../helper/storage";
import { Helmet } from "react-helmet-async";
import NotFoundLayout from "./NotFoundLayout";

export function Layout() {
  const pageData = usePageData();
  // 获取 pageType
  const { pageType, title, siteData, frontmatter } = pageData;
  const { title: siteTitle, themeConfig } = siteData;
  const { sidebar, navMenus, banner } = themeConfig;
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";
  const is404 = pageType === "404";
  const [sidebarEnable, setSidebarEnable] = useState(() => {
    if (is404) return false;
    const hide = localGetData("sidebarHide");
    if (hide !== null) {
      return !hide;
    }
    return sidebar.enable;
  });
  const [sideBarHide, setSideBarHide] = useState(sidebar.hide);

  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (isHomePage) {
      return <HomeLayout pageData={pageData}></HomeLayout>;
    } else if (isArticlePage) {
      return <ArticleLayout pageData={pageData}></ArticleLayout>;
    } else if (pageType === "custom") {
      return <CustomLayout pageData={pageData}></CustomLayout>;
    } else {
      return <NotFoundLayout notFoundImg={siteData.notFoundImg} />;
    }
  };

  useEffect(() => {
    scrollManager.init();
    const hide = localGetData("sidebarHide");
    if (hide !== null) {
      setSideBarHide(hide);
    }
    return () => {
      scrollManager.destory();
    };
  }, []);

  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `url(${siteData.backgroundImg})`,
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
            {getCurrentLayout()}
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

      <Footer></Footer>
    </div>
  );
}
