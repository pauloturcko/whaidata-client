"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { ToastProvider } from "@/contexts/ToastContext";
import { Toast } from "@/components/Organisms/Toast";
import { LoaderProvider } from "@/contexts/LoaderContext";
import { FullPageLoader } from "@/components/Organisms/FullPageLoader";
import { ModalProvider } from "@/contexts/ModalContext";
import { BaseModal } from "@/components/Molecules/BaseModal";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[themeMode]}>
        <LoaderProvider>
          <ToastProvider>
            <ModalProvider>
              <GlobalStyles />
              <Toast />
              <FullPageLoader />
              <BaseModal />
              {children}
            </ModalProvider>
          </ToastProvider>
        </LoaderProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
