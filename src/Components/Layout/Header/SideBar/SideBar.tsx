import React from "react";
import styles from "./sidebar.module.scss";
import { SideBarProvider } from "./Components/SideBarProvider";
import { DashedLines } from "./Components/img/index";
import { SidebarMain } from "./Components/SideBarMain";

export const SideBar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.main}>
        <SidebarMain/>
      </div>
      <div className={styles.dashed}><DashedLines /></div>
      <div className={styles.providers}>
        <SideBarProvider />
      </div>
      <div className={styles.bestbonus}></div>
    </div>
  );
};
