"use client";
import { SquarePen, Trash2 } from "lucide-react";
import * as S from "./styles";
import Image, { StaticImageData } from "next/image";
import mastercard from "@/assets/mastercard.svg";
import visa from "@/assets/visa.svg";
import { CardFlag } from "@/constants/enums/card-flag-enum";
import { CardType, CardTypeLabels } from "@/constants/enums/card-type-enum";
import { Card } from "@/services/card-service";
import { formatCurrencyBRL, formatExpiryDate } from "@/utils/format";
import { useCard } from "@/hooks/useCard";
import { useConfirm } from "@/hooks/useConfirm";
import { BaseModalProps, useModalContext } from "@/contexts/ModalContext";
import { NewCard } from "@/components/Pages/Configuracoes/Cartoes/FormModal";
import { ComponentType } from "react";

const flagIcons: Record<number, StaticImageData> = {
  [CardFlag.Visa]: visa,
  [CardFlag.Mastercard]: mastercard,
};

const EditCardFormContent = ({
  onClose,
  card,
}: {
  onClose: () => void;
  card: Card;
}) => (
  <NewCard
    onClose={onClose}
    card={card}
  />
);

export const CardInfo = ({ card }: { card: Card }) => {
  const { deleteCard } = useCard();
  const { confirm } = useConfirm();
  const { openModal } = useModalContext();

  const handleDelete = () => {
    confirm({
      title: "Excluir cartão",
      message: `Tem certeza que deseja excluir o cartão "${card.name}"? Essa ação não pode ser desfeita.`,
      confirmLabel: "Excluir",
      danger: true,
      onConfirm: () => deleteCard.mutate({ id: card.id }),
    });
  };

  const handleEdit = () => {
    openModal({
      component: EditCardFormContent as unknown as ComponentType<BaseModalProps>,
      title: "Editar Cartão",
      props: { card },
    });
  };

  return (
    <S.CardWrapper>
      <S.CardHeader>
        <p>{card.name}</p>
        <S.CardActions>
          <SquarePen
            size={30}
            onClick={handleEdit}
          />
          <Trash2
            size={30}
            className="trashIcon"
            onClick={handleDelete}
          />
        </S.CardActions>
      </S.CardHeader>
      <S.CardInfoWrapper>
        <S.InfoRow>
          <S.CardLastFourDigits>
            **** **** **** {card.lastFourDigits}
          </S.CardLastFourDigits>
          <Image
            src={flagIcons[card.cardFlag]}
            alt="bank flag"
            width={40}
            height={35}
          />
        </S.InfoRow>
        <S.InfoRow>
          <p>Tipo</p>
          <span>{CardTypeLabels[card.cardType as CardType]}</span>
        </S.InfoRow>
        <S.InfoRow>
          <p>Validade</p>
          <span>{formatExpiryDate(card.expiresIn)}</span>
        </S.InfoRow>
        <S.InfoRow>
          <p>Limite</p>
          <span>{formatCurrencyBRL(Number(card.limit))}</span>
        </S.InfoRow>
      </S.CardInfoWrapper>
    </S.CardWrapper>
  );
};
