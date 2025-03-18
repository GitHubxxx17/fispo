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
  const { sidebar } = siteData.themeConfig;
  const {
    card_author,
    card_categories,
    card_recent_post,
    card_announcement,
    card_tags,
    card_webinfo,
  } = sidebar;

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
      {card_author.enable && (
        <Card
          type="author"
          authorData={{
            author: siteData.author,
            avatar: siteData.avatar,
            description: card_author?.description || siteData.description,
            articleNums: pageData.articlesList.length,
            tagsNums: Object.keys(pageData.tags).length,
            categorizeNums: Object.keys(pageData.categories).length,
            button: card_author.button,
          }}
        ></Card>
      )}

      {card_announcement.enable && (
        <Card
          type="announcement"
          announcementData={{
            title: "公告",
            icon: "bullhorn",
            content: card_announcement.content,
          }}
        ></Card>
      )}

      {!isArticlePage && card_categories.enable && (
        <Card
          type="list"
          listData={{
            title: "分类",
            data: pageData.categories,
            limit: card_categories.limit,
            hover: true,
          }}
        ></Card>
      )}

      {!isArticlePage && card_tags.enable && (
        <Card
          type="tag"
          tagData={{
            title: "标签",
            data: pageData.tags,
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
        {card_recent_post.enable && (
          <Card
            type="article"
            articleData={{
              title: "最新文章",
              data: pageData.articlesList.slice(0, card_recent_post.limit),
            }}
          ></Card>
        )}

        {!isArticlePage && card_webinfo.enable && (
          <Card
            type="list"
            listData={{
              title: "网站资讯",
              icon: "chart-line",
              data: {
                "文章数目：": pageData.articlesList.length,
                "已运行时间 :": `1 天`,
                "最后更新时间 :": `2025-03-${new Date().getDay()}`,
              },
            }}
          ></Card>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
