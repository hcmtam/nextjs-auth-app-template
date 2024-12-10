"use client";

import { ThemeModeScript } from "flowbite-react";

import { Footer, SideMenu } from "@/client";
import { Header } from "@/client/header";

export default function Layout({ children }) {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
}
