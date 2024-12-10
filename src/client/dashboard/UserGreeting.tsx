"use client";

import styles from "@/styles/Common.module.scss";
import { useSession } from "next-auth/react";

export interface UserGreetingInterface {}

export const UserGreeting: React.FC<UserGreetingInterface> = (
  props: UserGreetingInterface
) => {
  const { data: session } = useSession();
  const { name } = session?.user ?? {};

  return (
    <div className="flex flex-col text-indigo-50 pb-3 ">
      <div className="">
        <span>Hi</span>
        {name && <span> {name}</span>}
        <span>,</span>
      </div>
      <div className="text-xl">Welcome back!</div>
    </div>
  );
};
