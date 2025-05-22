import { PageData } from "fispo-core/types";
import styles from "./index.module.scss";
import { Image, Link } from "fispo-core/theme";
import { HomeFrontmatter } from "../../types/index";
import Footer from "../../components/Footer";

interface HomeLayoutProps {
  pageData: PageData;
}

export function HomeLayout(props: HomeLayoutProps) {
  const { siteData, title } = props.pageData;
  const frontmatter = props.pageData.frontmatter as HomeFrontmatter;
  const { description, logo } = siteData;

  return (
    <div className={styles.homeLayout}>
      <div className={styles["home-hero"]}>
        <div className={styles["home-hero-left"]}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles["home-hero-button"]}>
            {frontmatter.buttons?.map((button, key) => {
              return (
                <Link key={key} href={button.link}>
                  <span>{button.text}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles["home-hero-right"]}>
          <div className={styles["home-hero-right-img-bg"]}></div>
          <Image src={logo} lazy={false} />
        </div>
      </div>
      <div className={styles["home-feature"]}>
        {frontmatter.features?.map((item, key) => {
          return (
            <div className={styles["home-feature-item"]} key={key}>
              <i>{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
