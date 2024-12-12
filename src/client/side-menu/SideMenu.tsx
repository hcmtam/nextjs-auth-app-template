"use client";
import { AppSVG, KanbanSVG, SettingsSVG } from "../common/svg";
import React, { MutableRefObject, useEffect, useState } from "react";
import styles from "@/styles/Common.module.scss";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Divider } from "@mui/material";
import { SideMenuButton, SideMenuButtonInterface } from "./SideMenuButton";

type SideMenuProps = {};

export const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    console.log(`trigger collapse`, isCollapsed);
    setCollapsed(!isCollapsed);
  };

  const sideMenuListUpper: SideMenuButtonInterface[] = [
    {
      label: "Dashbaord",
      icon: <KanbanSVG />,
      url: "dashboard",
    },
  ];

  const sideMenuListLower: SideMenuButtonInterface[] = [];

  const sideMenuListBottom = [];

  return (
    <Sidebar
      collapsed={isCollapsed}
      collapsedWidth={"65px"}
      className={`float-left h-screen bg-stone-800 border-stone-500 ${styles.sideMenu}`}
      transitionDuration={600}
      rootStyles={{ borderColor: "rgb(212 212 212)" }}
    >
      <div
        className={`flex flex-col justify-between h-screen bg-stone-700 text-stone-400`}
      >
        <div>
          <Divider />
          <Menu>
            {sideMenuListUpper.map((item: SideMenuButtonInterface) => {
              return <SideMenuButton {...item} />;
            })}
          </Menu>
          <Divider />
          <Menu>
            {sideMenuListLower.map((item: SideMenuButtonInterface) => {
              return <SideMenuButton {...item} />;
            })}
          </Menu>
          <Divider />
          <Menu>
            {sideMenuListBottom.map((item: SideMenuButtonInterface) => {
              return <SideMenuButton {...item} />;
            })}
          </Menu>
        </div>

        <div>
          <button className={`py-4 pl-6`} onClick={handleToggleSidebar}>
            <AppSVG />
          </button>
        </div>
      </div>
    </Sidebar>
  );
};
