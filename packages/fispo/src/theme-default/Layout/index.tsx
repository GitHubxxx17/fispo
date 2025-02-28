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
import { useEffect } from "react";

export function Layout() {
  const pageData = usePageData();
  // 获取 pageType
  const { pageType, title, siteData } = pageData;
  const { title: siteTitle, themeConfig } = siteData;
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";
  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (isHomePage) {
      return <HomeLayout pageData={pageData}></HomeLayout>;
    } else if (isArticlePage) {
      return <ArticleLayout></ArticleLayout>;
    } else if (pageType === "custom") {
      return <CustomLayout pageData={pageData}></CustomLayout>;
    } else {
      return <div>404 页面</div>;
    }
  };

  useEffect(() => {
    scrollManager.init();
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
      <header
        className={classNames(styles.header, {
          [styles["not-home-page"]]: !isHomePage,
        })}
      >
        <Nav title={siteTitle} menus={themeConfig.navMenus}></Nav>
        <Banner
          isHomePage={isHomePage}
          title={title}
          bannerData={themeConfig.banner}
        ></Banner>
      </header>
      <main className={styles.main}>
        <div className={styles.mainLeft}>{getCurrentLayout()}</div>
        <div className={styles.mainRight}>
          <Sidebar pageData={pageData} isArticlePage={isArticlePage}></Sidebar>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
