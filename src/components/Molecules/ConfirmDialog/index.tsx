"use client";

import { Button } from "@/components/Atoms/Button";
import * as S from "./styles";

type ConfirmDialogProps = {
  onClose: () => void;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
};

export const ConfirmDialog = ({
  onClose,
  message,
  onConfirm,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  danger = false,
}: ConfirmDialogProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <S.Wrapper>
      <p>{message}</p>
      <S.Actions>
        <Button
          type="button"
          rounded="0.5rem"
          height="2.5rem"
          color="textPrimary"
          width="100%"
          background={danger ? "danger" : undefined}
          onClick={handleConfirm}
        >
          {confirmLabel}
        </Button>
        <Button
          type="button"
          onClick={onClose}
          rounded="0.5rem"
          height="2.5rem"
          border
          hover="textMuted"
          background="transparent"
          color="textPrimary"
          width="100%"
        >
          {cancelLabel}
        </Button>
      </S.Actions>
    </S.Wrapper>
  );
};
