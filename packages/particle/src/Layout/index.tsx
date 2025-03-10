import { PageData } from "fispo-core/types";
import "../style/base.css";
import styles from "./index.module.scss";
import Nav from "../components/Nav";
import { HomeLayout } from "./HomeLayout";
import scrollManager from "../helper/scroll";
import { useEffect } from "react";
import Footer from "../components/Footer";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;
  const { pageType, siteData } = pageData;
  const { title: siteTitle, themeConfig, author } = siteData;
  const { navMenus } = themeConfig;
  // 获取 pageType
  const isHomePage = pageType === "home";
  console.log(pageData);

  // 根据 pageType 分发不同的页面内容
  const getCurrentLayout = () => {
    if (isHomePage) {
      return <HomeLayout pageData={pageData} />;
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
    <div
      className={styles.layout}
      style={{
        backgroundImage: `url(${siteData.backgroundImg})`,
      }}
    >
      <Nav title={siteTitle} menus={navMenus}></Nav>
      {getCurrentLayout()}
      <Footer author={author} title={siteTitle}></Footer>
    </div>
  );
};

export default Layout;
