import { SelectHTMLAttributes } from "react";
import * as S from "./styles";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

export const Select = ({ label, ...props }: SelectProps) => {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Container>
        <S.Select></S.Select>
      </S.Container>
    </S.InputWrapper>
  );
};
