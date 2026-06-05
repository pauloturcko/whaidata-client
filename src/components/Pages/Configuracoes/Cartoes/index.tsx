"use client";

import { Button } from "@/components/Atoms/Button";
import { SettingsWrapper } from "@/components/Molecules/SettingsWrapper";
import { CardInfo } from "@/components/Organisms/CardInfo";
import { useModalContext } from "@/contexts/ModalContext";
import { NewCard } from "@/components/Organisms/Forms/Configuracoes/Cartoes/NewCard";
import { Plus } from "lucide-react";

const CardFormContent = ({ onClose }: { onClose: () => void }) => (
  <NewCard onClose={onClose} />
);

export const CartoesPage = () => {
  const { openModal } = useModalContext();

  const handleOpenModal = () => {
    openModal({
      component: CardFormContent,
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
      <CardInfo />
    </SettingsWrapper>
  );
};
