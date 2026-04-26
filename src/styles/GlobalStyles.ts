import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-family: sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    button {
        all: unset;
        cursor: pointer;
        box-sizing: border-box;
    }

    input, textarea, select {
        all: unset;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }

    img, svg {
        display: block;
        max-width: 100%;
    }
`;