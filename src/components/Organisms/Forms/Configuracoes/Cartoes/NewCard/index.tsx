import { FormInput } from "@/components/Atoms/FormInput";
import { FormWrapper } from "@/components/Atoms/FormWrapper";
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
  const { register } = useForm<NewCardFormData>();

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
      <FormInput.Text
        label="Bandeira"
        placeholder="Ex: Visa"
        {...register("bandeira")}
      />
      <FormInput.Select
        label="Tipo"
        {...register("tipo")}
      />
      <FormInput.Text
        label="validade"
        placeholder="Ex: 01/12"
        {...register("validade")}
      />
      <FormInput.Text
        label="Limite"
        placeholder="Ex: 4.000,00"
        {...register("limite")}
      />
    </FormWrapper>
  );
};
