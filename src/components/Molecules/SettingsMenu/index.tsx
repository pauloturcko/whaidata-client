import { ReactNode } from "react";
import * as S from "./styles";
import Link from "next/link";

export type SettingsMenuItem = {
  name: string;
  route: string;
  icon: ReactNode;
};

export type SettingsMenuProps = {
  items: SettingsMenuItem[];
};

export const SettingsMenu = ({ items }: SettingsMenuProps) => {
  return (
    <S.SettingsMenu>
      {items.map((item) => (
        <li key={item.route}>
          <Link href={item.route}>
            {item.icon}
            {item.name}
          </Link>
        </li>
      ))}
    </S.SettingsMenu>
  );
};