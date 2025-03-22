import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import { ThemeConfig } from "types";
import Post from "../../components/Post";
import { Icon, IconName, Image, Link } from "fispo-core/theme";

interface HomeLayoutProps {
  pageData: PageData;
}

export function HomeLayout(props: HomeLayoutProps) {
  const { siteData, title, articlesList } = props.pageData;
  const { themeConfig, author, avatar, description } = siteData;
  const { banner } = themeConfig as ThemeConfig;
  console.log(themeConfig);
  const iconList: IconName[] = ["github", "qq", "envelope"];

  return (
    <div className={styles.homeLayout}>
      <header>
        <Image src={banner.img} alt="" />
        <div className={styles["home-info"]}>
          {Array.from({ length: 4 }).map((_, i) => {
            return <span key={i} className={styles.loop}></span>;
          })}
          <div className={styles.info}>
            <h1>{title}</h1>
            <h3>{banner.subTitle}</h3>
          </div>
        </div>
      </header>
      <div className={styles["home-posts-wrap"]}>
        <div className={styles["home-posts"]}>
          {articlesList.map((article, index) => {
            return <Post {...article} key={index}></Post>;
          })}
        </div>
        <div className={styles["home-card"]}>
          <div className={styles["home-card-inner"]}>
            <div className={styles.avatar}>
              <Image src={avatar} alt="avatar" />
            </div>
            <div className={styles.name}>{author}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles["icon-links"]}>
              {iconList.map((item, index) => {
                return (
                  <span key={index} className={styles["icon-link"]}>
                    <Link href="">
                      <Icon icon={item}></Icon>
                    </Link>
                  </span>
                );
              })}
            </div>
            <div className={styles["friend-links"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
