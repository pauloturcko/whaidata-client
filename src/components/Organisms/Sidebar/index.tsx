"use client";

import * as S from "./styles";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  PiggyBank,
  Settings,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Logo } from "@/components/Atoms/Logo";

type menuItemsType = {
  label: string;
  link: string;
  icon: ReactNode;
};

const menuItems: menuItemsType[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Rendas",
    link: "/rendas",
    icon: <TrendingUp />,
  },
  {
    label: "Gastos",
    link: "/gastos",
    icon: <TrendingDown />,
  },
  {
    label: "Investimentos",
    link: "/investimentos",
    icon: <PiggyBank />,
  },
  {
    label: "Relatórios",
    link: "/relatorios",
    icon: <FileText />,
  },
  {
    label: "Configurações",
    link: "/configuracoes",
    icon: <Settings />,
  },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <S.Aside $isOpen={isOpen}>
      {isOpen ? (
        <Logo.FullLogo
          imgSize={55}
          fontSize="0.75rem"
        />
      ) : (
        <Logo.IconOnly size={45} />
      )}
      <S.Nav>
        <S.MenuList>
          {menuItems.map((item: menuItemsType) => {
            const isActive = pathname === item.link;

            return (
              <li key={item.link}>
                <Link
                  className={isActive ? "active" : ""}
                  href={item.link}
                >
                  {item.icon}
                  {isOpen ? item.label : ""}
                </Link>
              </li>
            );
          })}
          <li>
            <button onClick={logout}>
              <LogOut style={{ transform: "scaleX(-1)" }} />
              {isOpen ? "Sair" : null}
            </button>
          </li>
        </S.MenuList>
        <span>{isOpen ? "Versão 0.1.0" : ""}</span>
      </S.Nav>
      <S.ToggleButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}

        {isOpen ? "Recolher" : null}
      </S.ToggleButton>
    </S.Aside>
  );
};
