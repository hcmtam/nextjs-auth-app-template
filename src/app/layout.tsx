"use client";

import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import SessionProvider from "../client/common/utils/SessionProvider";

export default async function Layout({ children }) {
  return (
    <html>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <SessionProvider>
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
