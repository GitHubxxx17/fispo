import { PageData } from "fispo-core/types";
import { Content } from "fispo-core/runtime";
import styles from "./index.module.scss";
import SideBar from "../../components/Sidebar";
import { ThemeConfig } from "../../types";
import Aside from "../../components/Aside";

interface DocLayoutProps {
  pageData: PageData;
}

const DocLayout = (props: DocLayoutProps) => {
  const { siteData, pagePath, toc } = props.pageData;
  const themeConfig = siteData.themeConfig as ThemeConfig;
  const matchedSidebarKey = Object.keys(themeConfig.sidebar).find((key) => {
    if (pagePath.startsWith(key)) {
      return true;
    }
  });

  const matchedSidebar = themeConfig.sidebar[matchedSidebarKey] || [];

  return (
    <div className={styles.docLayout}>
      <SideBar sidebarData={matchedSidebar} pathname={pagePath} />
      <div className={styles.content}>
        <Content />
      </div>
      <Aside asideData={toc} />
    </div>
  );
};

export default DocLayout;
