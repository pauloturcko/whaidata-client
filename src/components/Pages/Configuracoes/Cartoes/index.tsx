"use client";

import { Button } from "@/components/Atoms/Button";
import { SettingsWrapper } from "@/components/Molecules/SettingsWrapper";
import { CardInfo } from "@/components/Organisms/CardInfo";
import { useModalContext } from "@/contexts/ModalContext";
import { useCard } from "@/hooks/useCard";
import { Plus } from "lucide-react";
import { NewCard } from "./FormModal";
import * as S from "./styles";

const CardFormContent = ({ onClose }: { onClose: () => void }) => (
  <NewCard onClose={onClose} />
);

export const CartoesPage = () => {
  const { openModal } = useModalContext();
  const { loadAllCards } = useCard();

  const handleOpenModal = () => {
    openModal({
      component: CardFormContent,
      title: "Novo Cartão",
    });
  };

  return (
    <SettingsWrapper
      title="Cartões"
      description="Configure seus cartões"
      button={
        <Button
          border
          rounded="0.5rem"
          height="2.5rem"
          color="background"
          onClick={handleOpenModal}
        >
          <Plus size={22} /> Novo Cartão
        </Button>
      }
    >
      <S.CardsGrid>
        {loadAllCards.isLoading && <p>Carregando...</p>}
        {loadAllCards.data?.length === 0 && <p>Nenhum cartão cadastrado.</p>}
        {loadAllCards.data?.map((card) => (
          <CardInfo
            key={card.id}
            card={card}
          />
        ))}
      </S.CardsGrid>
    </SettingsWrapper>
  );
};
