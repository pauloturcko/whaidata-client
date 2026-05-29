import * as S from "./styles";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  required?: boolean;
  type?: HTMLInputElement["type"];
  error?: FieldError;
};

export const Input = <T extends FieldValues>({
  name,
  placeholder,
  type,
  register,
  required = false,
  error,
}: InputProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);

  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          placeholder={placeholder}
          type={isVisible ? "text" : type}
          $hasError={!!error}
          {...register(name, { required })}
        />
        {type === "password" && (
          <S.ToggleButton
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <EyeOff color="#5f6b73" size={20} />
            ) : (
              <Eye color="#5f6b73" size={20} />
            )}
          </S.ToggleButton>
        )}
      </S.InputContainer>
      {error && <S.ErrorMessage>Campo obrigatório</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
