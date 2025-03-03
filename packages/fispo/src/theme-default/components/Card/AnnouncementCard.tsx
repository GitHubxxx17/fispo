import { IconName } from "@fortawesome/fontawesome-svg-core";
import styles from "./index.module.scss";
import { memo } from "react";
import Icon from "../Icon";

export interface AnnouncementCardProps {
  icon?: IconName;
  title?: string;
  content?: string;
}

const AnnouncementCard = (props: AnnouncementCardProps) => {
  return (
    <div className={styles["card-announcement"]}>
      <div className={styles.header}>
        <Icon icon={props?.icon || "history"} shake />
        {props?.title}
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default memo(AnnouncementCard);
