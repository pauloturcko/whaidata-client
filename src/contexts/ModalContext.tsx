"use client";

import { ReactNode, useContext, useState, createContext } from "react";

type ModalContextType = {
  modalContent: ReactNode | null;
  dispatchModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const dispatchModal = (content: ReactNode) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        modalContent,
        dispatchModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext() precisa ser usado dentro de <ModalProvider>"
    );
  }

  return context;
}
