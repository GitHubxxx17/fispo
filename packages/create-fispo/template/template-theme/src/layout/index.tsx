import { LayoutRoutes, PageData } from "fispo-core/types";
import "../style/base.css";
import "../style/docs.css";
import styles from "./index.module.scss";
import { HomeLayout } from "./HomeLayout";
import { scrollManager } from "fispo-core/helper";
import { useEffect, useMemo } from "react";
import { GetLayoutRoutes } from "fispo-core/theme";
import "../helper/icon";

interface LayoutProps {
  pageData: PageData;
}

const Layout = (props: LayoutProps) => {
  const { pageData } = props;

  const routes: LayoutRoutes = useMemo(() => {
    return [
      {
        path: "/",
        element: <HomeLayout pageData={pageData}></HomeLayout>,
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
      scrollManager.destroy();
    };
  }, []);

  return (
    <div className={styles.layout}>
      <GetLayoutRoutes routes={routes} />
    </div>
  );
};

export default Layout;
