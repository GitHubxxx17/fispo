import { Toc } from "fispo-core/types";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Link } from "fispo-core/theme";
import { scrollManager, ScrollCallback } from "fispo-core/helper";

export interface AsideProps {
  asideData: Toc[];
  pagePath: string;
}

const Aside = (props: AsideProps) => {
  const { asideData, pagePath } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const tocList = useRef<HTMLAnchorElement[]>([]);
  const tocScroller = useRef<HTMLDivElement>(null);

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
    [tocList.current, tocScroller.current]
  );

  useLayoutEffect(() => {
    let headers = [];
    const NAV_HEIGHT = 60;
    const isBottom =
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight;
    const scrollToToc: ScrollCallback = () => {
      if (headers.length == 0) {
        headers = Array.from(document.getElementsByClassName("header-anchor"));
      }
      const scrollTop = Math.ceil(window.scrollY) + NAV_HEIGHT;

      // 处理文章目录
      if (isBottom) {
        tocActive(headers.length - 1);
        return;
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

    return () => {
      scrollManager.remove(scrollToToc);
    };
  }, [tocActive]);

  return (
    <div className={styles.aside}>
      <h2>目录</h2>
      {asideData.map(({ text, id, depth }, index) => {
        return (
          <div
            key={`${text}-${index}`}
            className={classNames(styles["toc-item"], {
              [styles.active]: index == activeIndex,
            })}
            style={{
              marginLeft: `${(depth - 1) * 10}px`,
            }}
            ref={tocScroller}
          >
            <Link
              ref={(el) => {
                if (el) {
                  tocList.current.push(el);
                }
              }}
              href={`${pagePath}#${id}`}
              onClick={(e) => {
                e.preventDefault();
                tocActive(index, false);
              }}
            >
              <span>{text}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Aside;
