"use client";
import { SquarePen, Trash2 } from "lucide-react";
import * as S from "./styles";
import Image from "next/image";
import mastercard from "@/assets/mastercard.svg";

export const CardInfo = () => {
  return (
    <S.CardWrapper>
      <S.CardHeader>
        <p>Nubank</p>
        <S.CardActions>
          <SquarePen size={30} />
          <Trash2
            size={30}
            className="trashIcon"
          />
        </S.CardActions>
      </S.CardHeader>
      <S.CardInfoWrapper>
        <S.InfoRow>
          <S.CardLastFourDigits>**** **** **** 6585</S.CardLastFourDigits>
          <Image
            src={mastercard}
            alt="bank flag"
            width={40}
            height={35}
          />
        </S.InfoRow>
        <S.InfoRow>
          <p>Tipo</p>
          <span>{"Crédito/Débito"}</span>
        </S.InfoRow>
        <S.InfoRow>
          <p>Validade</p>
          <span>{"09/34"}</span>
        </S.InfoRow>{" "}
        <S.InfoRow>
          <p>Limite</p>
          <span>{"R$ 8.000,00"}</span>
        </S.InfoRow>
      </S.CardInfoWrapper>
    </S.CardWrapper>
  );
};
