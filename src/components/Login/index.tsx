"use client";

import * as S from "./styles";
import {Logo} from "@/components/Core/Logo";
import {useState} from "react";
import {Form} from "@/components/Core/FormInput";
import {Button} from "@/components/Core/Button";
import {MoveRight} from "lucide-react";


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
                <S.InputsWrapper>

                    {!isActive ? <Form.Input label={"Nome"} placeholder={"Nome"}/> : null}
                    <Form.Input label={"Email"} placeholder={"Email"} type={"email"}/>
                    <Form.Input label={"Senha"} placeholder={"Senha"} type={"password"}/>
                </S.InputsWrapper>
                {isActive ? <S.ResetPassword>Esqueceu sua senha?</S.ResetPassword> : null}
                <Button faded rounded={"0.75rem"} width={"90%"} height={"3rem"}>Entrar <MoveRight size="18px" /></Button>
            </S.LoginModal>
        </S.Container>
    )
}