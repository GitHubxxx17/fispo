import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import styles from "./index.module.scss";

export interface PaginationProps {
  currentPage?: number;
  pageCount?: number;
  onChange?: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { currentPage = 1, pageCount = 1, onChange } = props;
  const [selectPage, setSelectPage] = useState(currentPage);
  const renderPages = useMemo(() => {
    // 当页数小于8时直接返回渲染的页数
    if (pageCount < 8) {
      return Array.from({ length: pageCount }).map((_, i) => i + 1);
    } else {
      // 以选中页为中心，至少生成5页
      // 例如选中第2页：1,2,3,4,5
      // 例如选中第4页：2,3,4,5,6
      const pages: Array<number> = [];
      let min = Math.max(selectPage - 2, 1);
      let max = Math.min(selectPage + 2, pageCount);
      if (selectPage - 2 <= 0) {
        max = 5;
      }
      if (selectPage + 2 >= pageCount) {
        min = pageCount - 4;
      }
      for (let i = min; i <= max; i++) {
        pages.push(i);
      }
      // 加上第一页
      if (pages[0] != 1) {
        // 0表示省略号隐藏的部分 '···'
        if (pages[0] > 2) {
          pages.unshift(0);
        }
        pages.unshift(1);
      }
      // 加上最后一页
      if (pages.at(-1) != pageCount) {
        if (pages.at(-1)! < pageCount - 1) {
          pages.push(0);
        }
        pages.push(pageCount);
      }
      return pages;
    }
  }, [pageCount, selectPage]);

  // 设置当前页
  const setPage = useCallback(
    (val: number) => {
      if (val < 1) val = 1;
      if (val > pageCount) val = pageCount;
      setSelectPage(val);
      onChange?.(val);
    },
    [onChange]
  );

  return (
    <div className={styles.pagination}>
      {selectPage !== 1 && (
        <div
          className={classNames(styles.block)}
          onClick={() => setPage(selectPage - 1)}
        >
          &lt;
        </div>
      )}
      {renderPages.map((val, index) => {
        if (val === 0) {
          return (
            <div
              className={classNames(styles.block)}
              onClick={() => setPage(selectPage + (index == 1 ? -5 : 5))}
              title={`${index == 1 ? "后退 5 页" : "前进 5 页"}`}
              key={`${val}-${index}`}
            >
              ···
            </div>
          );
        } else {
          return (
            <div
              className={classNames(styles.block, styles.number, {
                [styles.active]: val === selectPage,
              })}
              onClick={() => {
                setPage(val);
              }}
              key={`page-${val}`}
            >
              {val}
            </div>
          );
        }
      })}
      {selectPage !== pageCount && (
        <div
          className={classNames(styles.block)}
          onClick={() => setPage(selectPage + 1)}
        >
          &gt;
        </div>
      )}
    </div>
  );
}

export default Pagination;
