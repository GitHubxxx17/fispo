import React, { useCallback } from "react";
import styles from "./index.module.scss";
import { Tags as TagsType } from "shared/types";

interface TagsProps {
  tags?: TagsType;
  children?: React.ReactNode;
}

function Tags(props: TagsProps) {
  const { tags = [] } = props;

  const getRandomColor = useCallback(() => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  return (
    <div className={styles.tag}>
      {Object.keys(tags).map((name, index) => {
        return (
          <a
            className={styles.tagItem}
            key={`${name}-${index}`}
            style={{ color: getRandomColor() }}
            href={`tag/${name}`}
          >
            {name}
          </a>
        );
      })}
    </div>
  );
}

export default Tags;
