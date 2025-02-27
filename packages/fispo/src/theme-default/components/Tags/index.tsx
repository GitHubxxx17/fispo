import React from "react";
import styles from "./index.module.scss";

interface TagsProps {
  tagItem?: { name: string; path?: string }[];
  children?: React.ReactNode;
}

function Tags(props: TagsProps) {
  console.log(props);
  const tagItem = [
    {
      name: "教程",
    },
    {
      name: "Hexo",
    },
    {
      name: "更新日誌",
    },
    {
      name: "教程",
    },
    {
      name: "Hexo",
    },
    {
      name: "更新日誌",
    },
    {
      name: "教程",
    },
    {
      name: "Hexo",
    },
    {
      name: "更新日誌",
    },
  ];
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className={styles.tag}>
      {tagItem.map(({ name }, index) => {
        return (
          <a
            className={styles.tagItem}
            key={`${name}-${index}`}
            style={{ color: getRandomColor() }}
            href={name}
          >
            {name}
          </a>
        );
      })}
    </div>
  );
}

export default Tags;
