import { Content } from "@runtime";
import styles from "./index.module.scss";
import { PageData } from "shared/types";
import { useEffect, useState } from "react";

interface ArticleLayoutProps {
  pageData: PageData;
}

export function ArticleLayout(props: ArticleLayoutProps) {
  const { articlesList, pagePath } = props.pageData;
  const [currIndex, setCurrIndex] = useState(0);

  const copyrightText = [
    { meta: "文章作者：", value: <a href="">xxx17</a> },
    {
      meta: "文章链接：",
      value: (
        <a href="">
          http://example.com/2023/04/15/%E6%95%B0%E7%BB%84sort()%E8%AF%A6%E8%A7%A3/
        </a>
      ),
    },
    {
      meta: "版权声明：",
      value: (
        <>
          本博客所有文章除特别声明外，均采用
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0
          </a>
          许可协议。转载请注明来自
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            XXX17的个人博客
          </a>
          ！
        </>
      ),
    },
  ];

  useEffect(() => {
    setCurrIndex(
      articlesList.findIndex(
        (article) => article.path === decodeURIComponent(pagePath)
      )
    );
  }, [articlesList]);

  return (
    <div className={styles["article-layout"]}>
      <div className={styles["article-content"]}>
        <Content></Content>
      </div>
      <div className={styles["post-copyright"]}>
        {copyrightText.map((item, index) => {
          return (
            <div
              className={styles["post-copyright-item"]}
              key={`post-copyright-${index}`}
            >
              <span>{item.meta}</span>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
      <div className={styles["article-tag"]}>
        {["笔记", "笔记"].map((item, index) => {
          return (
            <span key={`${item}-${index}`}>
              <a href="">笔记</a>
            </span>
          );
        })}
      </div>
      <div className={styles["article-pagination"]}>
        {currIndex > 0 && (
          <div className={styles["pagination-left"]}>
            <a href={articlesList[currIndex - 1].path}>
              <img src={articlesList[currIndex - 1].cover} alt="" />
              <div className={styles["pagination-info"]}>
                <span>上一篇</span>
                <span>{articlesList[currIndex - 1].title}</span>
              </div>
            </a>
          </div>
        )}
        {currIndex < articlesList.length - 1 && (
          <div className={styles["pagination-right"]}>
            <a href={articlesList[currIndex + 1].path}>
              <img src={articlesList[currIndex + 1].cover} alt="" />
              <div className={styles["pagination-info"]}>
                <span>下一篇</span>
                <span>{articlesList[currIndex + 1].title}</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
