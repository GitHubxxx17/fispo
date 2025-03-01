import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../Card";
import { PageData } from "shared/types";
import scrollManager, { ScrollCallback } from "../../helper/scroll";

type SidebarProps = {
  children?: React.ReactNode;
  pageData?: PageData;
  isArticlePage: boolean;
};

function Sidebar(props: SidebarProps) {
  const { children, pageData, isArticlePage = false } = props;
  const { siteData } = pageData;
  if (children) return children;
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    const scroll: ScrollCallback = (direction) => {
      setIsUp(direction == "up");
    };

    scrollManager.add(scroll);
    return () => {
      scrollManager.remove(scroll);
    };
  }, []);

  return (
    <div className={styles.sidebar}>
      <Card
        type="user"
        userData={{
          author: siteData.author,
          avatar: siteData.avatar,
          description: siteData.description,
          articleNums: pageData.articlesList.length,
          tagsNums: Object.keys(pageData.tags).length,
          categorizeNums: Object.keys(pageData.categories).length,
        }}
      ></Card>
      {!isArticlePage && (
        <Card
          type="list"
          listData={{
            title: "分类",
            data: pageData.categories,
          }}
        ></Card>
      )}

      <div
        className={styles.stickyLayout}
        style={{ top: isUp ? "70px" : "20px" }}
      >
        {isArticlePage && (
          <Card
            type="toc"
            tocData={{
              title: "目录",
              data: pageData.toc,
            }}
          ></Card>
        )}
        <Card
          type="article"
          articleData={{
            title: "最新文章",
            data: pageData.articlesList.slice(0, 5),
          }}
        ></Card>
      </div>
    </div>
  );
}

export default Sidebar;
