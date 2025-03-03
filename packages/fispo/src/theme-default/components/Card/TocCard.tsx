import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import {
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Icon from "../Icon";
import { Toc } from "shared/types";
import scrollManager, { ScrollCallback } from "../../helper/scroll";
import classNames from "classnames";

export interface TocCardProps {
  icon?: IconName;
  title?: string;
  data?: Toc[];
}

const TocCard = (props: TocCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const tocList = useRef<HTMLAnchorElement[]>([]);
  const tocScroller = useRef<HTMLDivElement>(null);

  // 处理toc目录序号
  const newTocData = useMemo(() => {
    const serialNumberArr = [];
    return props.data.map((item) => {
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
  }, [props]);

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
    let headers = [];
    const NAV_HEIGHT = 60;
    const isBottom =
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight;
    let articleTop = 0;
    const scrollToToc: ScrollCallback = (direction) => {
      if (headers.length == 0) {
        headers = Array.from(document.getElementsByClassName("header-anchor"));
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
  }, []);

  return (
    <div className={styles["card-toc"]}>
      <div className={styles.header}>
        <span>
          <Icon icon={props?.icon || "stream"} />
          {props?.title}
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
  );
};

export default memo(TocCard);
