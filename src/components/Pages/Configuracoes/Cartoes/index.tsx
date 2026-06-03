"use client";

import { Button } from "@/components/Molecules/Button";
import { SettingsWrapper } from "@/components/Molecules/SettingsWrapper";
import { CardInfo } from "@/components/Organisms/CardInfo";
import { Plus } from "lucide-react";

export const CartoesPage = () => {
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
        >
          <Plus size={22} /> Novo Cartão
        </Button>
      }
    >
      <CardInfo />
    </SettingsWrapper>
  );
};
