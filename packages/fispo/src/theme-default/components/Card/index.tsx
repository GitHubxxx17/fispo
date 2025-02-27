import React from "react";
import styles from "./index.module.scss";
interface CardProps {
  type: "user" | "list" | "article";
  userData?: {
    author?: string;
    description?: string;
    avatar?: string;
    articleNums?: number;
    tagsNums?: number;
    categorizeNums?: number;
  };
  listData?: {
    title?: string;
    data?: {
      [key: string]: string[] | number;
    };
  };
  articleData?: {
    title?: string;
    data?: {
      title?: string;
      date?: string;
      cover?: string;
    }[];
  };
}

function Card(props: CardProps) {
  const { type, userData, listData, articleData } = props;
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
          <button className={styles["follow-btn"]}>Follow Me</button>
        </div>
      )}
      {type == "article" && (
        <div className={styles["card-article"]}>
          <div className={styles.header}>{articleData?.title}</div>
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
          <div className={styles.header}>{listData?.title}</div>
          <ul className={styles.list}>
            {Object.entries(listData?.data).map(([name, value], index) => {
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
    </div>
  );
}

export default Card;
