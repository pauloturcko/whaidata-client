import { SelectHTMLAttributes } from "react";
import * as S from "./styles";

type Options = {
  value: string | number;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Options[];
  required?: boolean;
  error?: string;
};

export const Select = ({
  label,
  options,
  required,
  error,
  ...props
}: SelectProps) => {
  return (
    <S.InputWrapper>
      <S.Label>
        {label}
        {required && <S.RequiredMark>*</S.RequiredMark>}
      </S.Label>
      <S.Container>
        <S.Select
          {...props}
          $hasError={!!error}
        >
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
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
