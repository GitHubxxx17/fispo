import { PageData } from "fispo-core/types";
import { Content } from "fispo-core/runtime";
import styles from "./index.module.scss";
import SideBar from "../../components/Sidebar";
import { ThemeConfig } from "../../types";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import { Icon, Link } from "fispo-core/theme";
import { useEffect, useMemo, useState } from "react";

interface DocLayoutProps {
  pageData: PageData;
}

const DocLayout = (props: DocLayoutProps) => {
  const { siteData, pagePath, toc } = props.pageData;
  const themeConfig = siteData.themeConfig as ThemeConfig;
  const [currIndex, setCurrIndex] = useState(0);

  const matchedSidebar = useMemo(() => {
    const matchedSidebarKey = Object.keys(themeConfig.sidebar).find((key) => {
      if (pagePath.startsWith(key)) {
        return true;
      }
    });
    return themeConfig.sidebar[matchedSidebarKey] || [];
  }, [themeConfig, pagePath]);

  const articleList = useMemo(() => {
    return matchedSidebar
      .map((item) => {
        return item.items;
      })
      .flat();
  }, [matchedSidebar]);

  useEffect(() => {
    setCurrIndex(
      articleList.findIndex(
        (item) => decodeURI(item.link) === decodeURI(pagePath)
      )
    );
  }, [articleList]);

  return (
    <div className={styles.docLayout}>
      <SideBar sidebarData={matchedSidebar} pathname={pagePath} />
      <div className={styles.content}>
        <Content />
        <div className={styles["content-footer"]}>
          <div className={styles["content-footer-pre"]}>
            {currIndex > 0 && (
              <Link href={articleList[currIndex - 1].link}>
                <span>
                  <Icon icon="angle-left" />
                  上一页
                </span>
                <span>{articleList[currIndex - 1].text}</span>
              </Link>
            )}
          </div>
          <div className={styles["content-footer-next"]}>
            {currIndex < articleList.length - 1 && (
              <Link href={articleList[currIndex + 1].link}>
                <span>
                  下一页
                  <Icon icon="angle-right" />
                </span>
                <span>{articleList[currIndex + 1].text}</span>
              </Link>
            )}
          </div>
        </div>
        <Footer />
      </div>
      <Aside asideData={toc} />
    </div>
  );
};

export default DocLayout;
