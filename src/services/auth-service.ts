import { http } from "@/http/http";

type CreateAccoutParams = {
  name: string;
  email: string;
  password: string;
};

export const authService = {
  createAccount: ({ name, email, password }: CreateAccoutParams) =>
    http.post("/users/register", { name, email, password }),
};
