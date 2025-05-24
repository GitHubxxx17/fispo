import { Content } from "@runtime/index";
import styles from "./index.module.scss";
import { PageData } from "shared/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { Image, Link } from "shared/components";

interface ArticleLayoutProps {
  pageData: PageData;
}

export function ArticleLayout(props: ArticleLayoutProps) {
  const { articlesList, pagePath, frontmatter, categories, siteData } =
    props.pageData;
  const { title, author } = siteData;
  const [currIndex, setCurrIndex] = useState(0);
  const isClient = useRef(false);

  const getLocationData = useCallback(() => {
    if (typeof window === "undefined") {
      return { href: "", origin: "" };
    }
    return { href: window.location.href, origin: window.location.origin };
  }, []);

  // 在客户端挂载后设置标志
  useEffect(() => {
    isClient.current = true;
  }, []);

  const copyrightText = useMemo(() => {
    if (!isClient.current) {
      // 服务端渲染时返回占位内容
      return [
        { meta: "文章作者：", value: <span>{author}</span> },
        { meta: "文章链接：", value: <span>加载中...</span> },
        { meta: "版权声明：", value: <span>加载中...</span> },
      ];
    }

    // 客户端渲染时使用真实location数据
    const { href } = getLocationData();
    return [
      { meta: "文章作者：", value: <Link href="">{author}</Link> },
      {
        meta: "文章链接：",
        value: <Link href={href}>{href}</Link>,
      },
      {
        meta: "版权声明：",
        value: (
          <>
            本博客所有文章除特别声明外，均采用
            <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY-NC-SA 4.0
            </Link>
            许可协议。转载请注明来自
            <Link href={"/"} target="_blank">
              {title}
            </Link>
            ！
          </>
        ),
      },
    ];
  }, [title, author, isClient.current, getLocationData]);

  // 推荐列表
  const recmmendList = useMemo(() => {
    const category = frontmatter.categories;
    if (!category) return [];
    return articlesList.filter((article) => {
      return (
        categories[category].includes(article.path) &&
        decodeURI(article.path) !== decodeURI(pagePath)
      );
    });
  }, [frontmatter, articlesList]);

  useEffect(() => {
    setCurrIndex(
      articlesList.findIndex(
        (article) => decodeURI(article.path) === decodeURI(pagePath)
      )
    );
  }, [articlesList]);

  return (
    <div className={styles["article-layout"]}>
      <div className={styles["article-content"]}>
        <Content path={pagePath}></Content>
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
        {frontmatter.tags?.map((item, index) => {
          return (
            <span key={`${item}-${index}`}>
              <Link href={`/tag/${item}`}>{item}</Link>
            </span>
          );
        })}
      </div>

      {articlesList.length > 1 && (
        <div className={styles["article-pagination"]}>
          {currIndex > 0 && (
            <div
              className={classNames(
                styles["pagination-left"],
                styles["article-img-hover"]
              )}
            >
              <Link href={articlesList[currIndex - 1].path}>
                <Image
                  src={articlesList[currIndex - 1].cover}
                  alt=""
                  wapperStyle={{
                    position: "absolute",
                  }}
                />
                <div className={styles["pagination-info"]}>
                  <span>上一篇</span>
                  <span>{articlesList[currIndex - 1].title}</span>
                </div>
              </Link>
            </div>
          )}
          {currIndex < articlesList.length - 1 && (
            <div
              className={classNames(
                styles["pagination-right"],
                styles["article-img-hover"]
              )}
            >
              <Link href={articlesList[currIndex + 1].path}>
                <Image
                  src={articlesList[currIndex + 1].cover}
                  alt=""
                  wapperStyle={{
                    position: "absolute",
                  }}
                />
                <div className={styles["pagination-info"]}>
                  <span>下一篇</span>
                  <span>{articlesList[currIndex + 1].title}</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}

      {recmmendList.length !== 0 && (
        <div className={styles["article-recommend"]}>
          <div className={styles["recommend-title"]}>相关推荐</div>
          <div className={styles["recommend-list"]}>
            {recmmendList.map((recmmend, index) => {
              return (
                <div
                  className={styles["article-img-hover"]}
                  key={`${recmmend.title}-${index}`}
                >
                  <Link href={recmmend.path}>
                    <Image src={recmmend.cover} alt="" />
                    <div className={styles["recommend-info"]}>
                      <span>{recmmend.date}</span>
                      <span>{recmmend.title}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
