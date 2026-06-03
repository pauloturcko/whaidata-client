"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ToastType = "success" | "error" | "info" | "warning";

type ToastContextType = {
  message: string;
  type: ToastType;
  id: number;
  dispatchToast: (params: { message: string; type: ToastType }) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("info");
  const [id, setId] = useState(0);

  const dispatchToast = ({
    message,
    type,
  }: {
    message: string;
    type: ToastType;
  }) => {
    setMessage(message);
    setType(type);
    setId((prev) => prev + 1);
  };

  return (
    <ToastContext.Provider value={{ message, type, id, dispatchToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToastContext(): ToastContextType {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToastContext() precisa ser usado dentro de <ToastProvider>"
    );
  }

  return context;
}
