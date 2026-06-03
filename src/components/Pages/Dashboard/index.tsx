"use client";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useLoaderContext } from "@/contexts/LoaderContext";
import * as S from "./styles";
import { SimpleCard } from "@/components/Organisms/SimpleCard";
import { PiggyBank, TrendingDown, TrendingUp, Wallet } from "lucide-react";

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
      <S.SimpleCardsWrapper>
        <SimpleCard
          title="Saldo Total"
          icon={
            <Wallet
              size={20}
              color="#8f8f8f"
            />
          }
          value="R$ 1.365,00"
          description="Receitas - Gastos - Investimentos"
        />
        <SimpleCard
          title="Receitas do Mês"
          valueColor="#2d936b"
          descriptionColor="#2d936b"
          icon={
            <TrendingUp
              size={20}
              color="#2d936b"
            />
          }
          value="R$ 11.320,00"
          description="+12% vs mês anterior"
        />
        <SimpleCard
          title="Gastos do Mês"
          valueColor="#b84040"
          descriptionColor="#b84040"
          icon={
            <TrendingDown
              size={20}
              color="#b84040"
            />
          }
          value="R$ 11.185,00"
          description="+8% vs mês anterior"
        />
        <SimpleCard
          title="Investidos no Mês"
          valueColor="#3a8fa8"
          icon={
            <PiggyBank
              size={20}
              color="#3a8fa8"
            />
          }
          value="R$ 1.500,00"
          description="13% de receita"
        />
      </S.SimpleCardsWrapper>
    </S.Wrapper>
  );
};
