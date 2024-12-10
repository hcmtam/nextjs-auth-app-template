"use client";
import { DashboardSvg, KanbanSVG } from "../common/svg";
import { Footer } from "../footer/index";
import React, { MutableRefObject, useEffect, useState } from "react";
import styles from "@/styles/Common.module.scss";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { SiteIcon } from "./SiteIcon";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="px-8 pt-8">
      <div className="flex flex-row items-center">
        <div className="text-stone-50">
          <SiteIcon />
        </div>

        <span
          className={`pl-4 font-light text-stone-200
          ${styles.siteIconText} font-semibold
        `}
        >
          NextJs Auth App Template
        </span>
      </div>
    </div>
  );
};
