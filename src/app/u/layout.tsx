"use client";

import { ThemeModeScript } from "flowbite-react";
import { useEffect, useRef } from "react";

import { Footer, SideMenu } from "@/client";
import { Header } from "@/client/header";
import { UserHeader } from "@/client/header/UserHeader";

export default function Layout({ children }) {
  return (
    <div className="bg-stone-800 h-100 overflow-y-scroll">
      <SideMenu />

      <div className="h-screen overflow-y-scroll bg-stone-800">
        <UserHeader />

        {children}
      </div>
    </div>
  );
}
