"use client";

import * as S from "./styles";
import {Logo} from "@/components/Core/Logo";
import {useState} from "react";
import {Form} from "@/components/Core/FormInput";


export const LoginPage = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <S.Container>
            <Logo.FullLogo/>
            <S.LoginModal>
                <S.LoginOrCreateContainer>
                    <S.LoginOrCreate onClick={() => setIsActive(true)} $isActive={isActive}>Entrar</S.LoginOrCreate>
                    <S.LoginOrCreate onClick={() => setIsActive(false)} $isActive={!isActive}>Criar Conta</S.LoginOrCreate>
                </S.LoginOrCreateContainer>
                <Form.Input/>
            </S.LoginModal>
        </S.Container>
    )
}