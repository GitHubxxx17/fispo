import { Toc } from "shared/types";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import scrollManager, { ScrollCallback } from "../../helper/scroll";
import Icon from "../Icon";
import { IconName } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  type: "user" | "list" | "article" | "toc";
  userData?: {
    author?: string;
    description?: string;
    avatar?: string;
    articleNums?: number;
    tagsNums?: number;
    categorizeNums?: number;
    button?: {
      enable?: boolean;
      icon?: IconName;
      text?: string;
      link?: string;
    };
  };
  listData?: {
    icon?: IconName;
    title?: string;
    limit?: number;
    data?: {
      [key: string]: string[] | number;
    };
  };
  articleData?: {
    icon?: IconName;
    title?: string;
    data?: {
      title?: string;
      date?: string;
      cover?: string;
    }[];
  };
  tocData?: {
    icon?: IconName;
    title?: string;
    data?: Toc[];
  };
}

function Card(props: CardProps) {
  const { type, userData, listData, articleData, tocData } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const tocList = useRef<HTMLAnchorElement[]>([]);
  const tocScroller = useRef<HTMLDivElement>(null);

  // 处理toc目录序号
  const newTocData = useMemo(() => {
    if (type !== "toc") return [];
    const serialNumberArr = [];
    return tocData.data.map((item) => {
      if (item.depth > serialNumberArr.length) {
        while (item.depth > serialNumberArr.length) {
          serialNumberArr.push(1);
        }
      } else if (item.depth < serialNumberArr.length) {
        while (item.depth < serialNumberArr.length) {
          serialNumberArr.pop();
        }
        serialNumberArr[item.depth - 1]++;
      } else {
        serialNumberArr[item.depth - 1]++;
      }

      return { ...item, serialNumber: serialNumberArr.join(".") };
    });
  }, [tocData?.data]);

  const tocActive = useCallback(
    (index: number, isScrollIntoView: boolean = true) => {
      setActiveIndex(index);
      const targetItem = tocList.current[index];
      if (
        !isScrollIntoView &&
        !targetItem &&
        tocScroller.current.scrollHeight === tocScroller.current.offsetHeight
      )
        return;
      // 获取目标元素相对于容器的顶部和底部位置
      const itemTop = targetItem.offsetTop;
      const itemBottom = itemTop + targetItem.offsetHeight;
      // 获取容器的滚动位置和高度
      const containerTop = tocScroller.current.scrollTop;
      const containerBottom = containerTop + tocScroller.current.offsetHeight;
      // 判断元素是否在可视区域内
      if (itemTop < containerTop || itemBottom > containerBottom) {
        // 使用 scrollIntoView 方法滚动到元素
        targetItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    []
  );

  useLayoutEffect(() => {
    if (type === "toc") {
      let headers = [];
      const NAV_HEIGHT = 60;
      const isBottom =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight;
      let articleTop = 0;
      const scrollToToc: ScrollCallback = (direction) => {
        if (headers.length == 0) {
          headers = Array.from(
            document.getElementsByClassName("header-anchor")
          );
          articleTop = headers[0].parentElement.offsetTop;
        }
        let scrollTop = Math.ceil(window.scrollY);

        // 处理进度
        if (scrollTop > articleTop) {
          setProgress(
            Math.ceil(
              ((scrollTop - articleTop) /
                (document.documentElement.scrollHeight - articleTop)) *
                100
            )
          );
        } else {
          setProgress(0);
        }

        // 处理文章目录
        if (isBottom) {
          tocActive(headers.length - 1);
          return;
        }

        if (direction == "up") {
          scrollTop += NAV_HEIGHT;
        }
        for (let i = 0; i < headers.length; i++) {
          const currentAnchor = headers[i];
          const nextAnchor = headers[i + 1];
          const currentTop = currentAnchor.parentElement.offsetTop;
          if (!nextAnchor) {
            tocActive(i);
            break;
          }

          if ((i === 0 && scrollTop < currentTop) || scrollTop == 0) {
            tocActive(0);
            break;
          }

          const nextTop = nextAnchor.parentElement.offsetTop;

          if (currentTop <= scrollTop && scrollTop < nextTop) {
            tocActive(i);
            break;
          }
        }
      };

      scrollManager.add(scrollToToc);
    }
  }, [type]);

  return (
    <div className={styles.card}>
      {type === "user" && (
        <div className={styles.author}>
          <div className={styles.avatar}>
            <img src={userData.avatar}></img>
          </div>
          <h2 className={styles["author-name"]}>{userData?.author}</h2>
          <p className={styles["author-description"]}>
            {userData?.description}
          </p>
          <div className={styles["author-data"]}>
            <a href="/">
              <span>文章</span>
              <span>{userData?.articleNums}</span>
            </a>
            <a href="/tag">
              <span>标签</span>
              <span>{userData?.tagsNums}</span>
            </a>
            <a href="/category">
              <span>分类</span>
              <span>{userData?.categorizeNums}</span>
            </a>
          </div>
          {userData?.button?.enable && (
            <button className={styles["follow-btn"]}>
              <a href={userData?.button?.link} target="_blank" rel="noreferrer">
                <Icon icon={userData?.button?.icon}></Icon>
                {userData?.button?.text}
              </a>
            </button>
          )}
        </div>
      )}
      {type == "article" && (
        <div className={styles["card-article"]}>
          <div className={styles.header}>
            <Icon icon={articleData?.icon || "history"} />
            {articleData?.title}
          </div>
          <ul className={styles.list}>
            {articleData?.data.map((item, index) => {
              return (
                <li key={`${item.title}-${index}`}>
                  <div className={styles.left}>
                    <a href={`/post/${item.title}`}>
                      <img src={item.cover} alt="" />
                    </a>
                  </div>
                  <div className={styles.right}>
                    <a href={`/post/${item.title}`}>
                      <span className={styles.title}>{item.title}</span>
                    </a>
                    <span className={styles.time}>{item.date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {type == "list" && (
        <div className={styles["card-list"]}>
          <div className={styles.header}>
            <Icon icon={listData?.icon || "folder-open"} />
            {listData?.title}
          </div>
          <ul className={styles.list}>
            {Object.entries(listData?.data)
              .slice(0, listData?.limit)
              .map(([name, value], index) => {
                return (
                  <li key={`${name}-${index}`}>
                    <a href={`/category/${name}`}>
                      <span>{name}</span>
                      <span>{Array.isArray(value) ? value.length : value}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      {type == "toc" && (
        <div className={styles["card-toc"]}>
          <div className={styles.header}>
            <span>
              <Icon icon={tocData?.icon || "stream"} />
              {tocData?.title}
            </span>
            <span className={styles.progress}>{progress}</span>
          </div>
          <div className={styles.content} ref={tocScroller}>
            <ul>
              {newTocData?.map(({ id, text, depth, serialNumber }, index) => {
                return (
                  <li
                    key={`${text}-${index}`}
                    className={classNames({
                      [styles.active]: index == activeIndex,
                    })}
                    style={{
                      marginLeft: `${(depth - 1) * 20}px`,
                    }}
                  >
                    <a
                      ref={(el) => {
                        if (el) {
                          tocList.current.push(el);
                        }
                      }}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById(id);
                        if (target) {
                          scrollManager.scrollToTarget(target, true);
                        }
                        tocActive(index, false);
                      }}
                    >
                      <span>{`${serialNumber}. `}</span>
                      <span>{text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
