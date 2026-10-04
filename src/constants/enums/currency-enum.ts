export enum Currency {
  Real = 0,
  DolarAmericano = 1,
  DolarAustraliano = 2,
  DolarNeozelandes = 3,
  Euro = 4,
  Libra = 5,
}

export const CurrencyLabels: Record<Currency, string> = {
  [Currency.Real]: "Real (R$)",
  [Currency.DolarAmericano]: "Dólar americano (US$)",
  [Currency.DolarAustraliano]: "Dólar australiano (A$)",
  [Currency.DolarNeozelandes]: "Dólar neozelandês (NZ$)",
  [Currency.Euro]: "Euro (€)",
  [Currency.Libra]: "Libra esterlina (£)",
};
