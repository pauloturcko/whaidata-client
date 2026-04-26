import * as S from './styles'
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";

type InputProps = {
    label: string
    placeholder: string
    type?: HTMLInputElement["type"]
}

export const Input = ({label, placeholder, type}: InputProps) => {
    const [isVisible, setIsVisible] = useState(false)

    return(
        <S.InputWrapper>
            <S.Label>{label}</S.Label>
            <S.Input placeholder={placeholder} type={isVisible ? 'text' : type} />
            {type === 'password' && <S.ToggleButton onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <EyeOff color="#5f6b73" size={20} /> : <Eye color="#5f6b73" size={20} /> }
            </S.ToggleButton>}
        </S.InputWrapper>
    )
}