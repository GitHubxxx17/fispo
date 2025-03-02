import classNames from "classnames";
import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import Pagination, { PaginationProps } from "../Pagination";
import { ArticleData } from "shared/types";
import Icon from "../Icon";

interface ArticleListProps {
  articleList?: ArticleData[];
  step?: number;
  children?: React.ReactNode;
  filter?: {
    type?: "tag" | "category" | "search";
    keyword?: string;
  };
}

function ArticleList(props: ArticleListProps) {
  const { step = 5, children, filter } = props;
  if (children) return children;
  const [currentPage, setCurrentPage] = useState(1);

  const articleList: Partial<ArticleData[]> = useMemo(
    () =>
      props.articleList
        .map((aritcle) => {
          // 过滤标签
          if (
            filter?.type == "tag" &&
            !aritcle.tags.includes(filter?.keyword)
          ) {
            return;
          }
          // 过滤类别
          if (
            filter?.type == "category" &&
            aritcle.categories !== filter?.keyword
          ) {
            return;
          }
          return aritcle;
        })
        .filter(Boolean),
    [props.articleList, filter]
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
                    <span>
                      <Icon icon="calendar-alt" />
                      发表于 {item.date}
                    </span>
                    <span>
                      <Icon icon="inbox" />
                      <a href={`/category/${item.categories}`}>
                        {item.categories}
                      </a>
                    </span>
                    <span className={styles["content-tag"]}>
                      <Icon icon="tag" />
                      {item.tags.map((tag, index) => {
                        return (
                          <a href={`/tag/${tag}`} key={`${tag}-${index}`}>
                            {tag}
                          </a>
                        );
                      })}
                    </span>
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
