"use client";

import { ThemeModeScript } from "flowbite-react";
import styles from "@/styles/Common.module.scss";
import { Footer, SideMenu } from "@/client";
import { Header } from "@/client/header";

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-stone-800 overflow-scroll">
      <div className="h-screen w-100 flex flex-col">
        <div>
          <Header />
        </div>

        <div className="h-full">{children}</div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
