import { Button } from "@/components/Atoms/Button";
import { FormInput } from "@/components/Atoms/FormInput";
import { FormWrapper } from "@/components/Atoms/FormWrapper";
import { CardFlagOptions } from "@/constants/enums/card-flag-enum";
import { CardTypeOptions } from "@/constants/enums/card-type-enum";
import { useCard } from "@/hooks/useCard";
import { Card } from "@/services/card-service";
import { formatCurrencyInput, formatExpiryDate } from "@/utils/format";
import { maskCurrency, maskDigitsOnly, maskExpiryDate } from "@/utils/masks";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styles";

type NewCardFormData = {
  nome: string;
  ultimosDigitos: string;
  bandeira: number;
  tipo: number;
  validade: string;
  limite: string;
};

const requiredMessage = "Campo obrigatório";

export const NewCard = ({
  onClose,
  card,
}: {
  onClose: () => void;
  card?: Card;
}) => {
  const { createCard, updateCard } = useCard();
  const isEditMode = !!card;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCardFormData>({
    defaultValues: card
      ? {
          nome: card.name,
          ultimosDigitos: card.lastFourDigits,
          bandeira: card.cardFlag,
          tipo: card.cardType,
          validade: formatExpiryDate(card.expiresIn),
          limite: formatCurrencyInput(Number(card.limit)),
        }
      : undefined,
  });

  const nome = register("nome", { required: requiredMessage });
  const ultimosDigitos = register("ultimosDigitos", {
    required: requiredMessage,
  });
  const bandeira = register("bandeira", { required: requiredMessage });
  const tipo = register("tipo", { required: requiredMessage });
  const validade = register("validade", { required: requiredMessage });
  const limite = register("limite", { required: requiredMessage });

  const onSubmit: SubmitHandler<NewCardFormData> = (data) => {
    const payload = {
      name: data.nome,
      cardType: Number(data.tipo),
      cardFlag: Number(data.bandeira),
      expiresIn: data.validade,
      lastFourDigits: data.ultimosDigitos,
      limit: Number(data.limite.replace(/\./g, "").replace(",", ".")) || 0,
    };

    if (isEditMode && card) {
      updateCard.mutate(
        { id: card.id, ...payload },
        { onSuccess: () => onClose() }
      );
      return;
    }

    createCard.mutate(payload, { onSuccess: () => onClose() });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput.Text
        label="Nome"
        placeholder="Ex: Itaú"
        required
        error={errors.nome?.message}
        {...nome}
      />
      <FormInput.Text
        label="Últimos quatro dígitos"
        placeholder="Ex: 1234"
        inputMode="numeric"
        maxLength={4}
        required
        error={errors.ultimosDigitos?.message}
        {...ultimosDigitos}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          event.target.value = maskDigitsOnly(event.target.value, 4);
          ultimosDigitos.onChange(event);
        }}
      />
      <FormInput.Select
        label="Bandeira"
        options={CardFlagOptions}
        required
        error={errors.bandeira?.message}
        {...bandeira}
      />
      <FormInput.Select
        label="Tipo"
        options={CardTypeOptions}
        required
        error={errors.tipo?.message}
        {...tipo}
      />
      <FormInput.Text
        label="Validade"
        placeholder="Ex: 01/12"
        inputMode="numeric"
        maxLength={5}
        required
        error={errors.validade?.message}
        {...validade}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          event.target.value = maskExpiryDate(event.target.value);
          validade.onChange(event);
        }}
      />
      <FormInput.Text
        label="Limite"
        placeholder="Ex: 4.000,00"
        inputMode="numeric"
        required
        error={errors.limite?.message}
        {...limite}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          event.target.value = maskCurrency(event.target.value);
          limite.onChange(event);
        }}
      />
      <S.Actions>
        <Button
          type="submit"
          rounded="0.5rem"
          height="2.5rem"
          color="textPrimary"
          width="100%"
        >
          {isEditMode ? "Atualizar" : "Salvar"}
        </Button>
        <Button
          type="button"
          onClick={onClose}
          rounded="0.5rem"
          height="2.5rem"
          border
          hover="danger"
          background="transparent"
          color="textPrimary"
          width="100%"
        >
          Cancelar
        </Button>
      </S.Actions>
    </FormWrapper>
  );
};
