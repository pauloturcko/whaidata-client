"use client";

import styled from "styled-components";
import { ReactNode } from "react";
import {
  SettingsMenu,
  SettingsMenuItem,
} from "@/components/Molecules/SettingsMenu";
import { CreditCard } from "lucide-react";

const settingsMenuItems: SettingsMenuItem[] = [
  {
    name: "Cartões",
    route: "/configuracoes/cartoes",
    icon: <CreditCard />,
  },
];

export default function Configuracoes({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <SettingsMenu items={settingsMenuItems} />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 1.5rem;
`;

const ContentContainer = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1rem;
`;
