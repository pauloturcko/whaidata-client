import type { Metadata } from "next";
import { Providers } from "./providers";
import StyledComponentsRegistry from "./registry";
import React from "react";

export const metadata: Metadata = {
  title: "Whaidata",
  description: "Whaidata Fincande Dashboard",
    icons: {
        icon: "/logo.svg",
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}