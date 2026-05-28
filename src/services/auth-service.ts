import { http } from "@/http/http";

type CreateAccoutParams = {
  name: string;
  email: string;
  password: string;
};

type LoginParams = {
  email: string;
  password: string;
};

type UserData = {
  id: number;
  name: string;
  email: string;
  profilePicture: string;
};

export const authService = {
  createAccount: ({ name, email, password }: CreateAccoutParams) =>
    http.post("/users/register", { name, email, password }),
};

export const loginService = {
  login: ({ email, password }: LoginParams) =>
    http.post("/users/login", { email, password }),
};

export const userService = {
  getLoggedUserData: async () => {
    const response = await http.get<UserData>("/users/me");
    return response.data;
  },
};
