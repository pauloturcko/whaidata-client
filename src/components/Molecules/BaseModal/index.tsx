"use client";

import { ReactNode } from "react";
import * as S from "./styles";

type BaseModalPops = {
  children: ReactNode;
  title: string;
  onClose: () => void;
};

export const BaseModal = ({
  children,
  title = "Modal Title",
  onClose,
}: BaseModalPops) => {
  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={(event) => event.stopPropagation()}>
        <S.Header>
          <h3>{title}</h3>
        </S.Header>
        {children}
      </S.Container>
    </S.Overlay>
  );
};
