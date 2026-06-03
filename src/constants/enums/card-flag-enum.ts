export enum CardFlag {
  Visa = 1,
  Mastercard = 2,
}

export const CardFlagOptions = Object.entries(CardFlag).map(([key, value]) => ({
  value,
  label: {
    [CardFlag.Visa]: "Visa",
    [CardFlag.Mastercard]: "Mastercard",
  }[value],
}));
