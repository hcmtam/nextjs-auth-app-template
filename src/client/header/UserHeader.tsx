import React, { MutableRefObject, useEffect, useState } from "react";
import styles from "@/styles/Common.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import { BorderButton } from "../common/buttons/BorderButton";

type UserHeaderProps = {};

export const UserHeader: React.FC<UserHeaderProps> = (
  props: UserHeaderProps
) => {
  const { data: session } = useSession();

  const btnClass = "w-16 h-8 text-sm shadow-md shadow-gray-500";

  return (
    <div className="flex flex-row justify-end pt-4 px-8">
      <BorderButton
        label="Sign Out"
        customClass={btnClass}
        onClick={() => signOut({ callbackUrl: `/sign/login` })}
      />
    </div>
  );
};
