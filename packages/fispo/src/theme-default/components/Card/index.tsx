import React from "react";
import styles from "./index.module.scss";
interface CardProps {
  type: "user" | "list" | "article";
}

function Card(props: CardProps) {
  const { type } = props;
  return (
    <div className={styles.card}>
      {type === "user" && (
        <div className={styles.author}>
          <div className={styles.avatar}>
            <img src="../hx.jpg"></img>
          </div>
          <h2 className={styles["author-name"]}>XXX17</h2>
          <p className={styles["author-description"]}>学无止境</p>
          <div className={styles["author-data"]}>
            <a href="#">
              <span>文章</span>
              <span>15</span>
            </a>
            <a href="#">
              <span>标签</span>
              <span>3</span>
            </a>
            <a href="#">
              <span>分类</span>
              <span>3</span>
            </a>
          </div>
          <button className={styles["follow-btn"]}>Follow Me</button>
        </div>
      )}
      {type == "list" && (
        <div className={styles["card-article"]}>
          <div className={styles.header}>最新文章</div>
          <ul className={styles.list}>
            {[
              {
                title: "搭建云服务器",
                time: "2023-7-14",
                cover: "../hx.jpg",
              },
              {
                title: "搭建云服务器",
                time: "2023-7-14",
                cover: "../hx.jpg",
              },
              {
                title: "搭建云服务器",
                time: "2023-7-14",
                cover: "../hx.jpg",
              },
              {
                title: "搭建云服务器",
                time: "2023-7-14",
                cover: "../hx.jpg",
              },
            ].map((item, index) => {
              return (
                <li key={`${item.title}-${index}`}>
                  <div className={styles.left}>
                    <img src={item.cover} alt="" />
                  </div>
                  <div className={styles.right}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.time}>{item.time}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {type == "article" && (
        <div className={styles["card-list"]}>
          <div className={styles.header}>分类</div>
          <ul className={styles.list}>
            {[
              ["插件", 1],
              ["笔记", 1],
              ["项目部署", 1],
            ].map((item, index) => {
              return (
                <li key={`${item[0]}-${index}`}>
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
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
