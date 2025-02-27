import classNames from "classnames";
import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import Pagination, { PaginationProps } from "../Pagination";
import { ArticlesList } from "shared/types";
import { usePageData } from "@runtime";

interface ArticleListProps {
  articleList?: ArticlesList;
  step?: number;
  children?: React.ReactNode;
}

interface ArticleItem {
  title: string;
  info: string;
  time: string;
  tag: string;
  cover: string;
  path: string;
}

function ArticleList(props: ArticleListProps) {
  const { step = 5, children } = props;
  if (children) return children;
  const [currentPage, setCurrentPage] = useState(1);

  const pageData = usePageData();

  const articleList: ArticleItem[] = Object.entries(pageData.articlesList).map(
    ([path, aritcle]) => {
      return {
        path: path,
        title: aritcle.title,
        info: "1.注册阿里云账号 阿里云官网在高校计划进行学生认证，可以免费领取最高7个月的服务器 修改以下两项购最高7个月的服务器 修改以下两项购",
        time: aritcle.date,
        tag: aritcle.tags.join(" "),
        cover: aritcle.cover,
      };
    }
  );

  const currentArtcleList = useMemo(() => {
    return articleList.slice((currentPage - 1) * step, currentPage * step);
  }, [currentPage]);

  const paginationOptions: PaginationProps = {
    pageCount: Math.ceil(articleList.length / step),
    currentPage,
    onChange: (page) => {
      setCurrentPage(page);
    },
  };

  return (
    <>
      <div className={styles.articleList}>
        {currentArtcleList.map((item, index) => {
          return (
            <div className={styles.item} key={`${item.title}-${index}`}>
              <div className={styles.left}>
                <img src={item.cover} alt="" />
              </div>
              <div className={styles.right}>
                <div className={styles.content}>
                  <a href={item.path}>
                    <h2>{item.title}</h2>
                  </a>
                  <p className={styles.meta}>
                    <span>发表于 {item.time}</span>
                    <span>更新于 {item.time}</span>
                    <span>{item.tag}</span>
                  </p>
                  <p
                    className={classNames(
                      styles.info,
                      styles["multiline-ellipsis"]
                    )}
                  >
                    {item.info}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <>
        {articleList.length && <Pagination {...paginationOptions}></Pagination>}
      </>
    </>
  );
}

export default ArticleList;
