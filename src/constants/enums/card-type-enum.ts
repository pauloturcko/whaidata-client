export enum CardType {
  Debito = 1,
  Credito = 2,
  DebitoCredito = 3,
}

const CardTypeLabels: Record<CardType, string> = {
  [CardType.Debito]: "Débito",
  [CardType.Credito]: "Crédito",
  [CardType.DebitoCredito]: "Débito e Crédito",
};

export const CardTypeOptions = Object.entries(CardType)
  .filter(([key]) => isNaN(Number(key)))
  .map(([_, value]) => ({
    value,
    label: CardTypeLabels[value as CardType],
  }));
