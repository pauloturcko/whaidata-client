import type { Metadata } from "next";
import { Providers } from "./providers";
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
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}