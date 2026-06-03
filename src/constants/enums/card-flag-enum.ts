export enum CardFlag {
  Visa = 1,
  Mastercard = 2,
}
export const CardFlagOptions = Object.entries(CardFlag)
  .filter(([key]) => isNaN(Number(key)))
  .map(([key, value]) => ({
    value,
    label: key,
  }));
