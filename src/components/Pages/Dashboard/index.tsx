"use client";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useLoaderContext } from "@/contexts/LoaderContext";
import * as S from "./styles";

export const DashboardPage = () => {
  const { user, isLoading } = useUser();
  const { dispatchLoader, hideLoader } = useLoaderContext();

  useEffect(() => {
    if (isLoading) {
      dispatchLoader();
    } else {
      hideLoader();
    }

    return () => hideLoader();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading || !user) return null;

  return (
    <S.Wrapper>
      <h2>Olá {user?.name.split(" ")[0]}!</h2>
      <p>Bem vindo ao dashboard financeiro WhaiData!</p>
      <p>
        No momento este projeto ainda está em desenvolvimento, você pode testar
        o fluxo de autenticação, incluindo a criação de conta e login.
      </p>
      <p>
        As demais rotas estão sendo preparadas para trazer uma experiência
        completa em breve.
      </p>
    </S.Wrapper>
  );
};
