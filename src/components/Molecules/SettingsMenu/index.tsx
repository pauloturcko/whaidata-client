"use client";

import { ReactNode } from "react";
import * as S from "./styles";
import { usePathname } from "next/navigation";

export type SettingsMenuItem = {
  name: string;
  route: string;
  icon: ReactNode;
};

export type SettingsMenuProps = {
  items: SettingsMenuItem[];
};

export const SettingsMenu = ({ items }: SettingsMenuProps) => {
  const pathname = usePathname();

  return (
    <S.SettingsMenu>
      {items.map((item) => {
        const isActive =
          pathname === item.route || pathname.startsWith(`${item.route}/`);

        return (
          <li key={item.route}>
            <S.MenuLink href={item.route} $active={isActive}>
              <S.Icon>{item.icon}</S.Icon>
              <S.Label>{item.name}</S.Label>
            </S.MenuLink>
          </li>
        );
      })}
    </S.SettingsMenu>
  );
};