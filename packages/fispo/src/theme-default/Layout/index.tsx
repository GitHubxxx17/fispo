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

export function Layout() {
  const pageData = usePageData();
  // 获取 pageType
  const { pageType, title, siteData } = pageData;
  const { title: siteTitle, themeConfig } = siteData;
  const isHome = pageType === "home";
  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (pageType === "home") {
      return <HomeLayout></HomeLayout>;
    } else if (pageType === "article") {
      return <ArticleLayout></ArticleLayout>;
    } else if (pageType === "custom") {
      return <CustomLayout></CustomLayout>;
    } else {
      return <div>404 页面</div>;
    }
  };
  return (
    <div
      className={styles.layout}
      style={{
        backgroundImage: `url(${siteData.backgroundImg})`,
      }}
    >
      <header
        className={classNames(styles.header, {
          [styles["not-home-page"]]: !isHome,
        })}
      >
        <Nav title={siteTitle} menus={themeConfig.navMenus}></Nav>
        <Banner
          isHome={isHome}
          title={title}
          bannerData={themeConfig.banner}
        ></Banner>
      </header>
      <main className={styles.main}>
        <div className={styles.mainLeft}>{getCurrentLayout()}</div>
        <div className={styles.mainRight}>
          <Sidebar pageData={pageData}></Sidebar>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
