import classNames from "classnames";
import styles from "./index.module.scss";
import { useEffect } from "react";

interface PreloaderProps {
  finishLoading: boolean;
}

const Preloader = (props: PreloaderProps) => {
  useEffect(() => {
    console.log("finishLoading", props.finishLoading);
  }, [props.finishLoading]);
  return (
    <div
      className={classNames(styles.loading, {
        [styles.finishLoading]: props.finishLoading,
      })}
    >
      <div className={styles["loading-left-bg"]}></div>
      <div className={styles["loading-right-bg"]}></div>
      {!props.finishLoading && (
        <div className={styles["spinner-box"]}>
          <div className={styles["spinner-box-1"]}></div>
          <div className={styles["spinner-box-2"]}></div>
          <div className={styles["loading-text"]}>加载中···</div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
