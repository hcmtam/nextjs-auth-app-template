"use client";
import { CSSProperties } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useRouter } from "next/navigation";

export interface SideMenuButtonInterface {
  label: string;
  icon: React.ReactNode;
  url: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const SideMenuButton: React.FC<SideMenuButtonInterface> = (
  props: SideMenuButtonInterface
) => {
  const { label, icon, url, onClick, disabled } = props;
  const { push } = useRouter();

  return (
    <MenuItem
      icon={icon}
      onClick={() => {
        console.log(`clicked tab`, url);
        push(`/u/${url}`);
      }}
    >
      {label}
    </MenuItem>
  );
};
