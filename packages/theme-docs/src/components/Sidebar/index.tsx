import { Link } from "fispo-core/theme";
import { SidebarGroup } from "../../types";
import styles from "./index.module.scss";
import classNames from "classnames";

export interface SidebarProps {
  sidebarData: SidebarGroup[];
  pathname: string;
}

const SideBar = (props: SidebarProps) => {
  const { sidebarData, pathname } = props;

  const renderGroup = (item: SidebarGroup) => {
    return (
      <section key={item.text} className={styles.sidebarGroup}>
        <div className={styles.sidebarTitle}>
          <h2>{item.text}</h2>
        </div>
        <div className={styles.sidebarContent}>
          {item.items?.map((item) => (
            <div
              key={item.link}
              className={classNames(styles.sidebarItem, {
                [styles.active]: pathname === item.link,
              })}
            >
              <Link href={item.link}>{item.text}</Link>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <nav>{sidebarData.map(renderGroup)}</nav>
    </aside>
  );
};

export default SideBar;
