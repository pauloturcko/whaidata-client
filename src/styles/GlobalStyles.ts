import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textPrimary};
        margin: 0;
        font-family: sans-serif;
    }
`;