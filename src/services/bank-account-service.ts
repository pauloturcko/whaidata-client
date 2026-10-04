import { http } from "@/http/http";

type CreateBankAccountParams = {
  name: string;
  accountType: number;
  balance: number;
};

export type BankAccount = {
  id: number;
  userId: number;
  name: string;
  accountType: number;
  balance: string;
};

type LoadAllBankAccountsResponse = {
  bankAccounts: BankAccount[];
};

export const createBankAccountService = {
  createBankAccount: ({
    name,
    accountType,
    balance,
  }: CreateBankAccountParams) =>
    http.post("/bank-accounts/register", { name, accountType, balance }),
};

export const loadBankAccountsService = {
  loadAll: async (): Promise<BankAccount[]> => {
    const response = await http.get<LoadAllBankAccountsResponse>(
      "/bank-accounts/user-bank-accounts"
    );
    return response.data.bankAccounts;
  },
};

export const deleteBankAccountService = {
  deleteBankAccount: ({ id }: { id: number }) =>
    http.delete("/bank-accounts/delete", { data: { id } }),
};

export type UpdateBankAccountParams = Partial<CreateBankAccountParams> & {
  id: number;
};

export const updateBankAccountService = {
  updateBankAccount: ({ id, ...fields }: UpdateBankAccountParams) =>
    http.patch("/bank-accounts/update", { id, ...fields }),
};
