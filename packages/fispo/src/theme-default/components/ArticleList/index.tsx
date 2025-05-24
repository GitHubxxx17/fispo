import classNames from "classnames";
import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import Pagination, { PaginationProps } from "../Pagination";
import { ArticleData } from "shared/types";
import Icon from "shared/components/Icon";
import { Image, Link } from "shared/components";

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
  }, [currentPage, articleList]);

  const paginationOptions: PaginationProps = useMemo(
    () => ({
      pageCount: Math.ceil(articleList.length / step),
      currentPage,
      onChange: (page) => {
        setCurrentPage(page);
      },
    }),
    [articleList, step, currentPage]
  );

  return (
    <>
      <div className={styles.articleList}>
        {currentArtcleList.map((item, index) => {
          return (
            <div className={styles.item} key={`${item.title}-${index}`}>
              <div className={styles.left}>
                <Link href={item.path}>
                  <Image src={item.cover} alt="" />
                </Link>
              </div>
              <div className={styles.right}>
                <div className={styles.content}>
                  <Link href={item.path}>
                    <h2>{item.title}</h2>
                  </Link>
                  <p className={styles.meta}>
                    <span>
                      <Icon icon="calendar-alt" />
                      发表于 {item.date}
                    </span>
                    <span>
                      <Icon icon="inbox" />
                      <Link href={`/category/${item.categories}`}>
                        {item.categories}
                      </Link>
                    </span>
                    <span className={styles["content-tag"]}>
                      <Icon icon="tag" />
                      {item.tags.map((tag, index) => {
                        return (
                          <Link href={`/tag/${tag}`} key={`${tag}-${index}`}>
                            {tag}
                          </Link>
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
