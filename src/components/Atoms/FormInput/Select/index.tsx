import { SelectHTMLAttributes } from "react";
import * as S from "./styles";

type Options = {
  value: string | number;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Options[];
};

export const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Container>
        <S.Select {...props}>
          {options.map((item) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </S.Select>
      </S.Container>
    </S.InputWrapper>
  );
};
