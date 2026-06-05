"use client";
import { BaseModal } from "@/components/Molecules/BaseModal";
import {
  ReactNode,
  useContext,
  useState,
  createContext,
  ComponentType,
} from "react";

type BaseModalProps = {
  onClose: () => void;
  [key: string]: unknown;
};

type ModalConfig = {
  component: ComponentType<BaseModalProps>;
  props?: Omit<BaseModalProps, "onClose">;
};

type ModalContextType = {
  openModal: (config: ModalConfig) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

  const openModal = (config: ModalConfig) => setModalConfig(config);
  const closeModal = () => setModalConfig(null);

  const ActiveComponent = modalConfig?.component ?? null;

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {ActiveComponent && (
        <BaseModal onClose={closeModal}>
          <ActiveComponent
            {...(modalConfig?.props ?? {})}
            onClose={closeModal}
          />
        </BaseModal>
      )}
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
