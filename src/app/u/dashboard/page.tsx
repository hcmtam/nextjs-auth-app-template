"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "@/styles/Common.module.scss";
import { DashboardContainer } from "@/client/dashboard/DashboardContainer";

export default function Page() {
  return (
    <div>
      <DashboardContainer />
    </div>
  );
}
