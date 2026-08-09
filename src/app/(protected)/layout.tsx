"use client";

import { Sidebar } from "@/components/Organisms/Sidebar";
import styled from "styled-components";
import { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

const ContentContainer = styled.main`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  overflow-x: hidden;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
