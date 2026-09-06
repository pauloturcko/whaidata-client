export const maskCurrency = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";

  const padded = digits.padStart(3, "0");
  const integerPart = padded
    .slice(0, -2)
    .replace(/^0+(?=\d)/, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const decimalPart = padded.slice(-2);

  return `${integerPart},${decimalPart}`;
};

export const maskExpiryDate = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

export const maskDigitsOnly = (value: string, maxLength: number): string =>
  value.replace(/\D/g, "").slice(0, maxLength);
