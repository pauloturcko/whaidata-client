"use client";

import { useModalContext } from "@/contexts/ModalContext";
import { ReactNode } from "react";
import * as S from "./styles";
import { Button } from "../Button";
import { X } from "lucide-react";

type BaseModalPops = {
  children?: ReactNode;
  title?: string;
};

export const BaseModal = ({ children, title }: BaseModalPops) => {
  const { closeModal } = useModalContext();

  return (
    <S.Overlay>
      <S.Container>
        <S.Header>
          <h3>Novo Cartão</h3>
          <button onClick={closeModal}>
            <X size={22} />
          </button>
        </S.Header>
      </S.Container>
    </S.Overlay>
  );
};
