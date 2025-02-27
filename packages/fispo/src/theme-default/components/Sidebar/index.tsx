import React from "react";
import styles from "./index.module.scss";
import Card from "../Card";
import { PageData } from "shared/types";

type SidebarProps = {
  children?: React.ReactNode;
  pageData?: PageData;
};

function Sidebar(props: SidebarProps) {
  const { children, pageData } = props;
  const { siteData } = pageData;
  if (children) return children;
  return (
    <div className={styles.sidebar}>
      <Card
        type="user"
        userData={{
          author: siteData.author,
          avatar: siteData.avatar,
          description: siteData.description,
          articleNums: Object.keys(pageData.articlesList).length,
          tagsNums: Object.keys(pageData.tags).length,
          categorizeNums: Object.keys(pageData.categories).length,
        }}
      ></Card>
      <Card
        type="list"
        listData={{
          title: "分类",
          data: pageData.categories,
        }}
      ></Card>
      <Card
        type="article"
        articleData={{
          title: "最新文章",
          data: Object.values(pageData.articlesList).slice(0, 5),
        }}
      ></Card>
    </div>
  );
}

export default Sidebar;
