import { ConfirmDialog } from "@/components/Molecules/ConfirmDialog";
import { BaseModalProps, useModalContext } from "@/contexts/ModalContext";
import { ComponentType } from "react";

type ConfirmOptions = {
  title?: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
};

export function useConfirm() {
  const { openModal } = useModalContext();

  const confirm = ({
    title = "Confirmar ação",
    message,
    onConfirm,
    confirmLabel,
    cancelLabel,
    danger,
  }: ConfirmOptions) => {
    openModal({
      component: ConfirmDialog as unknown as ComponentType<BaseModalProps>,
      title,
      props: { message, onConfirm, confirmLabel, cancelLabel, danger },
    });
  };

  return { confirm };
}
