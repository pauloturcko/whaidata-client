"use client";
import { SquarePen, Trash2 } from "lucide-react";
import * as S from "./styles";
import {
  AccountType,
  AccountTypeLabels,
} from "@/constants/enums/account-type-enum";
import { BankAccount } from "@/services/bank-account-service";
import { formatCurrencyBRL } from "@/utils/format";
import { useBankAccount } from "@/hooks/useBankAccount";
import { useConfirm } from "@/hooks/useConfirm";
import { BaseModalProps, useModalContext } from "@/contexts/ModalContext";
import { NewBankAccount } from "@/components/Pages/Configuracoes/Contas/FormModal";
import { ComponentType } from "react";

const EditBankAccountFormContent = ({
  onClose,
  bankAccount,
}: {
  onClose: () => void;
  bankAccount: BankAccount;
}) => (
  <NewBankAccount
    onClose={onClose}
    bankAccount={bankAccount}
  />
);

export const BankAccountInfo = ({
  bankAccount,
}: {
  bankAccount: BankAccount;
}) => {
  const { deleteBankAccount } = useBankAccount();
  const { confirm } = useConfirm();
  const { openModal } = useModalContext();
  const balance = Number(bankAccount.balance);

  const handleDelete = () => {
    confirm({
      title: "Excluir conta",
      message: `Tem certeza que deseja excluir a conta "${bankAccount.name}"? Essa ação não pode ser desfeita.`,
      confirmLabel: "Excluir",
      danger: true,
      onConfirm: () => deleteBankAccount.mutate({ id: bankAccount.id }),
    });
  };

  const handleEdit = () => {
    openModal({
      component:
        EditBankAccountFormContent as unknown as ComponentType<BaseModalProps>,
      title: "Editar Conta",
      props: { bankAccount },
    });
  };

  return (
    <S.AccountWrapper>
      <S.AccountHeader>
        <p>{bankAccount.name}</p>
        <S.AccountActions>
          <SquarePen
            size={30}
            onClick={handleEdit}
          />
          <Trash2
            size={30}
            className="trashIcon"
            onClick={handleDelete}
          />
        </S.AccountActions>
      </S.AccountHeader>
      <S.AccountInfoWrapper>
        <S.AccountType>
          {AccountTypeLabels[bankAccount.accountType as AccountType]}
        </S.AccountType>
        <S.Balance $negative={balance < 0}>
          {formatCurrencyBRL(balance)}
        </S.Balance>
      </S.AccountInfoWrapper>
    </S.AccountWrapper>
  );
};
