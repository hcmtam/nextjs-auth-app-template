"use client";

import React from "react";
import styles from "@/styles/Sign.module.scss";
import { LoginForm } from "@/client/login";

export default function Page() {
  return (
    <div
      className={`bg-stone-300 rounded-lg shadow-lg shadow-stone-300
    ${styles.loginFormBox}`}
    >
      <LoginForm />
    </div>
  );
}
