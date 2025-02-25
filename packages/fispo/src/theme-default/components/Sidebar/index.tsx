import React from "react";
import styles from "./index.module.scss";
import Card from "../Card";

type SidebarProps = {
  children?: React.ReactNode;
};

function Sidebar(props: SidebarProps) {
  const { children } = props;
  if (children) return children;
  return (
    <div className={styles.sidebar}>
      <Card type="user"></Card>
      <Card type="article"></Card>
      <Card type="list"></Card>
    </div>
  );
}

export default Sidebar;
