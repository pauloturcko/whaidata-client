import { styled } from "styled-components";

type ButtonBackground = "primary" | "success" | "danger" | "warning" | "info";

type ButtonProps = {
    $background?: ButtonBackground;
    $width?: number | string;
    $height?: number | string;
    $color?: string;
    $justify?: "start" | "end";
    $loading?: boolean;
    $disabled?: boolean;
    $border?: boolean;
    $fontSize?: number | string;
    $weight?: "normal" | "bold" | "light";
    $rounded?: number | string;
    $faded?: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: ${({ $width }) => typeof $width === "string" ? $width : `${$width}px`};
    height: ${({ $height }) => typeof $height === "string" ? $height : `${$height}px`};
    justify-content: ${({ $justify }) => $justify ?? "center"};
    color: ${({ theme, $color }) =>  $color ?? theme.colors.textPrimary};
    border: ${({theme, $border}) => $border ? `1px solid ${theme.colors.border}` : 'none'} ;
    border-radius: ${({$rounded}) => typeof $rounded === "string" ? $rounded : `${$rounded}px`};
    font-size: ${({ $fontSize }) => typeof $fontSize === "string" ? $fontSize : `${$fontSize}px`};
    font-weight: ${({ $weight }) => $weight };
    padding: 1rem;
    cursor: ${({$disabled}) => $disabled ? "not-allowed" : "pointer"};
    background: ${({ theme, $background, $faded }) => $faded ? "linear-gradient(90deg, #246245, #00af73)" : $background  ? theme.colors[$background] : theme.colors.primary};
`;