import type { Metadata } from "next";
import { Providers } from "./providers";
import React from "react";

export const metadata: Metadata = {
  title: "Whaidata",
  description: "Whaidata application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}