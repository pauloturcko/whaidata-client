export const formatCurrencyBRL = (value: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const formatCurrencyInput = (value: number): string =>
  new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const formatMonthYear = (isoDate: string): string =>
  new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));

export const formatExpiryDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = String(date.getUTCFullYear()).slice(-2);
  return `${month}/${year}`;
};
