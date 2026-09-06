import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-family: sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    }

    button {
        all: unset;
        cursor: pointer;
        box-sizing: border-box;
    }

    input, textarea, select {
        all: unset;
        box-sizing: border-box;
        -webkit-appearance: none;
        appearance: none;
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

    * {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.colors.border} transparent;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.border};
        border-radius: 999px;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.colors.textMuted};
    }
`;