"use client";

import * as S from "./styles";
import Cookies from "js-cookie";
import { Logo } from "@/components/Molecules/Logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form } from "@/components/Molecules/FormInput";
import { Button } from "@/components/Molecules/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useToastContext } from "@/contexts/ToastContext";

type LoginFormData = {
  nome: string;
  email: string;
  senha: string;
};

export const LoginPage = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(true);
  const { dispatchToast } = useToastContext();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormData>();
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
            <Form.Input
              name={"nome"}
              placeholder={"Nome"}
              register={register}
              required
              error={errors.nome}
            />
          ) : null}
          <Form.Input
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            register={register}
            required
            error={errors.email}
          />
          <Form.Input
            name={"senha"}
            placeholder={"Senha"}
            type={"password"}
            register={register}
            required
            error={errors.senha}
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
