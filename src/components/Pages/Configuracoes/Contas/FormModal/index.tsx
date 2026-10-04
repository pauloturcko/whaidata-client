import { Button } from "@/components/Atoms/Button";
import { FormInput } from "@/components/Atoms/FormInput";
import { FormWrapper } from "@/components/Atoms/FormWrapper";
import { AccountTypeOptions } from "@/constants/enums/account-type-enum";
import { useBankAccount } from "@/hooks/useBankAccount";
import { BankAccount } from "@/services/bank-account-service";
import { formatCurrencyInput } from "@/utils/format";
import { maskCurrency } from "@/utils/masks";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styles";

type NewBankAccountFormData = {
  nome: string;
  tipo: number;
  saldo: string;
};

const requiredMessage = "Campo obrigatório";

export const NewBankAccount = ({
  onClose,
  bankAccount,
}: {
  onClose: () => void;
  bankAccount?: BankAccount;
}) => {
  const { createBankAccount, updateBankAccount } = useBankAccount();
  const isEditMode = !!bankAccount;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBankAccountFormData>({
    defaultValues: bankAccount
      ? {
          nome: bankAccount.name,
          tipo: bankAccount.accountType,
          saldo: formatCurrencyInput(Number(bankAccount.balance)),
        }
      : undefined,
  });

  const nome = register("nome", {
    required: requiredMessage,
    minLength: { value: 3, message: "Mínimo de 3 caracteres" },
  });
  const tipo = register("tipo", { required: requiredMessage });
  const saldo = register("saldo");

  const onSubmit: SubmitHandler<NewBankAccountFormData> = (data) => {
    const payload = {
      name: data.nome,
      accountType: Number(data.tipo),
      balance: Number(data.saldo.replace(/\./g, "").replace(",", ".")) || 0,
    };

    if (isEditMode && bankAccount) {
      updateBankAccount.mutate(
        { id: bankAccount.id, ...payload },
        { onSuccess: () => onClose() }
      );
      return;
    }

    createBankAccount.mutate(payload, { onSuccess: () => onClose() });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput.Text
        label="Nome"
        placeholder="Ex: Nubank"
        required
        error={errors.nome?.message}
        {...nome}
      />
      <FormInput.Select
        label="Tipo"
        options={AccountTypeOptions}
        required
        error={errors.tipo?.message}
        {...tipo}
      />
      <FormInput.Text
        label="Saldo"
        placeholder="Ex: 1.500,00"
        inputMode="numeric"
        error={errors.saldo?.message}
        {...saldo}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          event.target.value = maskCurrency(event.target.value);
          saldo.onChange(event);
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
