import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const theme = {
  dark: darkTheme,
  light: lightTheme,
  weight: {
    bold: 700,
    semiBold: 600,
  }
};

export type ThemeType = typeof darkTheme;