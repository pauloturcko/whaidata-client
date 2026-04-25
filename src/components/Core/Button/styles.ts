import { styled } from "styled-components";

type ButtonBackground = "primary" | "success" | "danger" | "warning" | "info";

type ButtonProps = {
    $background?: ButtonBackground;
    $color?: string;
    $justify?: "start" | "end";
    $loading?: boolean;
    $disabled?: boolean;
    $border?: boolean;
    $fontSize?: number | string;
    $weight?: "normal" | "bold" | "light";
};

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: ${({ $justify }) => $justify ?? "center"};
    background-color: ${({ theme, $background }) => $background ? theme.colors[$background] : theme.colors.primary};
    color: ${({ theme, $color }) =>  $color ?? theme.colors.textPrimary};
    border: ${({theme, $border}) => $border ? `1px solid ${theme.colors.border}` : 'none'} ;
    font-size: ${({ $fontSize }) => typeof $fontSize === "string" ? $fontSize : `${$fontSize}px`};
    font-weight: ${({ $weight }) => $weight };
    padding: 1rem;
    cursor: ${({$disabled}) => $disabled ? "not-allowed" : "pointer"};
`;