import { Button } from "@/components/Atoms/Button";
import { FormInput } from "@/components/Atoms/FormInput";
import { FormWrapper } from "@/components/Atoms/FormWrapper";
import { CardFlagOptions } from "@/constants/enums/card-flag-enum";
import { CardTypeOptions } from "@/constants/enums/card-type-enum";
import { useForm } from "react-hook-form";

type NewCardFormData = {
  nome: string;
  ultimosDigitos: string;
  bandeira: string;
  tipo: string;
  validade: string;
  limite: string;
};

export const NewCard = ({ onClose }: { onClose: () => void }) => {
  const { register } = useForm<NewCardFormData>({
    defaultValues: {
      bandeira: "",
      tipo: "",
    },
  });

  return (
    <FormWrapper>
      <FormInput.Text
        label="Nome"
        placeholder="Ex: Itaú"
        {...register("nome")}
      />
      <FormInput.Text
        label="Últimos quatro dígitos"
        placeholder="Ex: 1234"
        {...register("limite")}
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
      <Button>Cancelar</Button>
    </FormWrapper>
  );
};
