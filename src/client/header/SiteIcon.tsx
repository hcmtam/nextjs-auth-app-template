"use client";
import { DashboardSvg, KanbanSVG } from "../common/svg";
import { Footer } from "../footer/index";
import React, { MutableRefObject, useEffect, useState } from "react";
import styles from "@/styles/Sign.module.scss";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

type SiteIconProps = {};

export const SiteIcon: React.FC<SiteIconProps> = (props: SiteIconProps) => {
  return (
    <div
      className={`
        flex flex-row items-center justify-center
        rounded-lg shadow-lg bg-stone-900
        bg-gradient-to-r from-gray-500 to-gray-700
        ${styles.siteIcon}`}
    >
      <KanbanSVG />
    </div>
  );
};
