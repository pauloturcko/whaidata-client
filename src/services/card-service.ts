import { http } from "@/http/http";

type CreateCardParams = {
  name: string;
  cardType: number;
  cardFlag: number;
  expiresIn: string;
  limit: number;
  lastFourDigits: string;
};

export const createCardService = {
  createCard: ({
    name,
    cardType,
    cardFlag,
    expiresIn,
    limit,
    lastFourDigits,
  }: CreateCardParams) =>
    http.post("/cards/register", {
      name,
      cardType,
      cardFlag,
      expiresIn,
      limit,
      lastFourDigits,
    }),
};
