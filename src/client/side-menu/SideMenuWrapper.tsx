"use client";
import { headers } from "next/headers";
import React, { MutableRefObject, useEffect, useState } from "react";

import { SideMenu } from "./SideMenu";

type SideMenuWrapperProps = {};

const SideMenuWrapper: React.FC<SideMenuWrapperProps> = (
  props: SideMenuWrapperProps
) => {
  return (
    <div>
      <SideMenu />
    </div>
  );
};

export default SideMenuWrapper;
