import { Image } from "shared/components";
import styles from "./index.module.scss";

interface NotFoundLayoutProps {
  notFoundImg: string;
}

const NotFoundLayout = (props: NotFoundLayoutProps) => {
  return (
    <div className={styles.notFoundLayout}>
      <div className={styles.notFoundImg}>
        <Image src={props.notFoundImg} alt="404" />
      </div>
      <div className={styles.errorInfo}>
        <h1>404</h1>
        <span>页面没有找到</span>
      </div>
    </div>
  );
};

export default NotFoundLayout;
