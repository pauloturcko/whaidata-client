"use client";

import { ReactNode } from "react";
import * as S from "./styles";
import { X } from "lucide-react";

type BaseModalPops = {
  children?: ReactNode;
  title?: string;
  onClose: () => void;
};

export const BaseModal = ({
  children,
  title = "Novo Cartão",
  onClose,
}: BaseModalPops) => {
  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={(event) => event.stopPropagation()}>
        <S.Header>
          <h3>{title}</h3>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </S.Header>
        {children}
      </S.Container>
    </S.Overlay>
  );
};
