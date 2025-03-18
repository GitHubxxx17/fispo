import React from "react";
import styles from "./index.module.scss";
import { Tags as TagsType } from "shared/types";
import { getRandomColor } from "../../helper/tag";
import { Link } from "shared/components";

interface TagsProps {
  tags?: TagsType;
  children?: React.ReactNode;
}

function Tags(props: TagsProps) {
  const { tags = [] } = props;

  return (
    <div className={styles.tag}>
      {Object.keys(tags).map((name, index) => {
        return (
          <Link
            className={styles.tagItem}
            key={`${name}-${index}`}
            style={{ color: getRandomColor() }}
            href={`tag/${name}`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}

export default Tags;
