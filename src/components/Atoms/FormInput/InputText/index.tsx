import * as S from "./styles";
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const InputText = ({ label, ...props }: InputTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          {...props}
          type={isVisible ? "text" : props.type}
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
    </S.InputWrapper>
  );
};
