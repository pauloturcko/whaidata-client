"use client";

import * as S from "./styles";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useToastContext } from "@/contexts/ToastContext";
import { FormInput } from "@/components/Atoms/FormInput";
import { Button } from "@/components/Atoms/Button";
import { Logo } from "@/components/Atoms/Logo";

type LoginFormData = {
  nome: string;
  email: string;
  senha: string;
};

export const LoginPage = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(true);
  const { dispatchToast } = useToastContext();
  const { register, handleSubmit, reset, clearErrors } =
    useForm<LoginFormData>();
  const { createAccount, login } = useAuth();
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if (isActive) {
      login.mutate(
        {
          email: data.email,
          password: data.senha,
        },
        {
          onSuccess: (response) => {
            Cookies.set("whaidata.token", response.data.token, {
              expires: 1 / 24,
            });
            router.replace("/dashboard");
          },
        }
      );
      return;
    }

    createAccount.mutate(
      {
        name: data.nome,
        email: data.email,
        password: data.senha,
      },
      {
        onSuccess: () => {
          setIsActive(true);
          reset();
        },
      }
    );
  };

  return (
    <S.Container>
      <Logo.FullLogo />
      <S.LoginModal>
        <S.LoginOrCreateContainer>
          <S.LoginOrCreate
            onClick={() => {
              setIsActive(true);
              clearErrors();
              reset();
            }}
            $isActive={isActive}
          >
            Entrar
          </S.LoginOrCreate>
          <S.LoginOrCreate
            onClick={() => {
              setIsActive(false);
              clearErrors();
              reset();
            }}
            $isActive={!isActive}
          >
            Criar Conta
          </S.LoginOrCreate>
        </S.LoginOrCreateContainer>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
          {!isActive ? (
            <FormInput.Text
              label={"Nome"}
              placeholder={"Nome"}
              {...register("nome")}
            />
          ) : null}
          <FormInput.Text
            label={"Email"}
            placeholder={"Email"}
            type={"email"}
            {...register("email")}
          />
          <FormInput.Text
            label={"Senha"}
            placeholder={"Senha"}
            type={"password"}
            {...register("senha")}
          />

          {isActive ? (
            <S.ResetPassword
              onClick={() =>
                dispatchToast({
                  type: "info",
                  message: "Em breve",
                })
              }
            >
              Esqueceu sua senha?
            </S.ResetPassword>
          ) : null}
          <S.ButtonWrapper>
            <Button
              faded
              type={"submit"}
              rounded={"0.75rem"}
              width={"100%"}
              height={"3rem"}
            >
              {isActive ? "Entrar " : "Criar Conta "}
            </Button>
          </S.ButtonWrapper>
        </S.FormWrapper>
      </S.LoginModal>
    </S.Container>
  );
};
