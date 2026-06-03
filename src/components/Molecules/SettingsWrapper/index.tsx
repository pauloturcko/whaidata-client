"use-client";

import { ReactNode } from "react";
import * as S from "./styles";

export type SettingsWrapperProps = {
  children: ReactNode;
  title: string;
  description?: string;
  button?: ReactNode;
};

export const SettingsWrapper = ({
  children,
  title,
  description,
  button,
}: SettingsWrapperProps) => {
  return (
    <S.SettingsWrapper>
      <S.Header>
        <S.InfoWrapper>
          <p>{title}</p>
          <span>{description}</span>
        </S.InfoWrapper>
        {button}
      </S.Header>
      {children}
    </S.SettingsWrapper>
  );
};
