import { Button } from "@/components/Atoms/Button";
import { FormInput } from "@/components/Atoms/FormInput";
import { FormWrapper } from "@/components/Atoms/FormWrapper";
import { CardFlagOptions } from "@/constants/enums/card-flag-enum";
import { CardTypeOptions } from "@/constants/enums/card-type-enum";
import { useCard } from "@/hooks/useCard";
import { SubmitHandler, useForm } from "react-hook-form";

type NewCardFormData = {
  nome: string;
  ultimosDigitos: string;
  bandeira: number;
  tipo: number;
  validade: string;
  limite: number;
};

export const NewCard = ({ onClose }: { onClose: () => void }) => {
  const { createCard } = useCard();
  const { register, handleSubmit } = useForm<NewCardFormData>({});

  const onSubmit: SubmitHandler<NewCardFormData> = (data) => {
    createCard.mutate({
      name: data.nome,
      cardType: Number(data.tipo),
      cardFlag: Number(data.bandeira),
      expiresIn: data.validade,
      lastFourDigits: data.ultimosDigitos,
      limit: typeof data.limite === "string" 
        ? Number(String(data.limite).replace(/\./g, "").replace(",", ".")) 
        : Number(data.limite),
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput.Text
        label="Nome"
        placeholder="Ex: Itaú"
        {...register("nome")}
      />
      <FormInput.Text
        label="Últimos quatro dígitos"
        placeholder="Ex: 1234"
        {...register("ultimosDigitos")}
      />
      <FormInput.Select
        label="Bandeira"
        options={CardFlagOptions}
        {...register("bandeira")}
      />
      <FormInput.Select
        label="Tipo"
        options={CardTypeOptions}
        {...register("tipo")}
      />
      <FormInput.Text
        label="Validade"
        placeholder="Ex: 01/12"
        {...register("validade")}
      />
      <FormInput.Text
        label="Limite"
        placeholder="Ex: 4.000,00"
        {...register("limite")}
      />
      <Button
        type="submit"
        rounded="0.5rem"
        height="2.5rem"
        color="background"
      >
        Salvar
      </Button>
    </FormWrapper>
  );
};
