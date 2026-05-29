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
`;

const ContentContainer = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;
