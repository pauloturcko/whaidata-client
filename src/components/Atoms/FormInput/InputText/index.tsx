import * as S from "./styles";
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
  error?: string;
};

export const InputText = ({
  label,
  required,
  error,
  ...props
}: InputTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.InputWrapper>
      <S.Label>
        {label}
        {required && <S.RequiredMark>*</S.RequiredMark>}
      </S.Label>
      <S.InputContainer>
        <S.Input
          {...props}
          type={isVisible ? "text" : props.type}
          $hasError={!!error}
        />
        {props.type === "password" && (
          <S.ToggleButton
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <EyeOff
                color="#5f6b73"
                size={20}
              />
            ) : (
              <Eye
                color="#5f6b73"
                size={20}
              />
            )}
          </S.ToggleButton>
        )}
      </S.InputContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
