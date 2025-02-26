import React from "react";
import SideMenu from "../Screens/MainScreen/SideMenu";
import { Outlet } from "react-router";
import styles from "./Layout.module.css";
export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <SideMenu />
      <Outlet />
    </div>
  );
}
