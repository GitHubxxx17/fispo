import { Link } from "fispo-core/theme";
import styles from "./index.module.scss";

interface FooterProps {
  author: string;
  title: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrap"]}>
        <div>
          © 2022 - 2024 {props.title} | @{props.author}
        </div>
        <div>
          Based on the{" "}
          <Link href="https://github.com/GitHubxxx17/fispo">Fispo Engine</Link>|
          <Link href="https://github.com/GitHubxxx17/fispo">
            Particle Theme
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
