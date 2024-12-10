"use client";

import styles from "@/styles/Common.module.scss";
import { UserGreeting } from "./UserGreeting";

export interface DashboardContainerInterface {}

export const DashboardContainer: React.FC<DashboardContainerInterface> = (
  props: DashboardContainerInterface
) => {
  return (
    <div className="flex flex-col px-8 pb-8 pt-4 overflow-y-scroll">
      <UserGreeting />

      <div className={`flex ${styles.insightContainer} justify-between mb-8`}>
        <div
          className={`w-full bg-stone-700 rounded-lg p-4 
          ${styles.mediaBottomMargin} ${styles.smallMediaRightMargin}
          shadow-md shadow-stone-400 ${styles.mediumInsightBox} `}
        ></div>

        <div
          className={`w-full bg-stone-700 rounded-lg p-4 
          ${styles.mediaBottomMargin} ${styles.smallMediaRightMargin}
          shadow-md shadow-stone-400 ${styles.mediumInsightBox} `}
        ></div>

        <div
          className={`w-full bg-stone-700 rounded-lg p-4 
          ${styles.mediaBottomMargin} ${styles.mediumInsightBox} 
          shadow-md shadow-stone-400`}
        ></div>
      </div>

      <div
        className={`flex flex-row w-full justify-between ${styles.insightContainer}
        mb-8`}
      >
        <div
          className={`w-full ${styles.mediumInsightBox} ${styles.mediaRightMargin}
          bg-stone-700 rounded-lg p-4 shadow-md shadow-stone-400`}
        ></div>

        <div
          className={`w-full ${styles.mediumInsightBox} ${styles.mediaLeftMargin} bg-stone-700
           rounded-lg p-4 shadow-md shadow-stone-400`}
        ></div>
      </div>

      <div
        className={`flex ${styles.mediaBottomMargin} ${styles.largeInsightBox}
        bg-stone-700 shadow-md shadow-stone-400 rounded-md p-4`}
      ></div>
    </div>
  );
};
