import Nav from "../components/Nav";
import { usePageData } from "../../runtime";
import "../style/base.css";
import { HomeLayout } from "./HomeLayout";
import styles from "./index.module.scss";

export function Layout() {
  const pageData = usePageData();
  // 获取 pageType
  const { pageType, siteData } = pageData;
  const { title, themeConfig } = siteData;
  // 根据 pageType 分发不同的页面内容
  const getContent = () => {
    if (pageType === "home") {
      return <HomeLayout></HomeLayout>;
    } else if (pageType === "article") {
      return <div>正文页面</div>;
    } else {
      return <div>404 页面</div>;
    }
  };
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Nav title={title} menus={themeConfig.navMenus}></Nav>
        {getContent()}
      </header>
      {/* <main className={styles.main}>
        <div className={styles.mainLeft}>{getCurrentLayout(type)}</div>
        <div className={styles.mainRight}>
          <Sidebar>{props.sidebar}</Sidebar>
        </div>
      </main>
      <Footer>{props.footer}</Footer> */}
    </div>
  );
}
