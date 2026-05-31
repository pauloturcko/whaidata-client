"use client";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useLoaderContext } from "@/contexts/LoaderContext";
import * as S from "./styles";
import { SimpleCard } from "@/components/Organisms/SimpleCard";

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
      <SimpleCard />
    </S.Wrapper>
  );
};
