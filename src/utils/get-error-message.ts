import { isAxiosError } from "axios";

export const getErrorMessage = (error: unknown, fallback: string): string => {
  if (isAxiosError(error) && error.response?.data) {
    const resData = error.response.data;
    if (typeof resData.message === "string") {
      return resData.message;
    }
    if (typeof resData.error === "string") {
      return resData.error;
    }
    if (typeof resData.message === "object") {
      console.error("Detalhes do erro do servidor:", resData.message);
      return "Erro interno no servidor. Verifique o console.";
    }
    return error.message;
  }
  return fallback;
};
