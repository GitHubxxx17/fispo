import classNames from "classnames";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

interface PreloaderProps {
  finishLoading: boolean;
}

const Preloader = (props: PreloaderProps) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    console.log("finishLoading", props.finishLoading);
    if (!props.finishLoading) return;
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.finishLoading]);
  return (
    !hidden && (
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
    )
  );
};

export default Preloader;
