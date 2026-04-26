"use client";

import {StyledButton} from "@/components/Core/Button/styles";
import {ReactNode} from "react";
import {ThemeType} from "@/styles/theme";
type ThemeColors = keyof ThemeType["colors"];

type ButtonProps = {
    children: ReactNode;
    width?: number | string;
    height?: number | string;
    background?: "primary" | "success" | "danger" | "warning" | "info";
    color?: ThemeColors;
    justify?: "start" | "end";
    loading?: boolean;
    disabled?: boolean;
    border?: boolean;
    fontsize?: number | string;
    weight?: "normal" | "bold" | "light";
    rounded?: number | string;
    faded?: boolean;
}

export const Button = ({children, background, color, justify, loading, disabled, rounded, border, fontsize, weight, width, height, faded}: ButtonProps) => {
    return (
        <StyledButton
            $width={width}
            $height={height}
            $background={background}
            $color={color}
            $justify={justify}
            $loading={loading}
            $disabled={disabled}
            $border={border}
            $fontSize={fontsize}
            $weight={weight}
            $rounded={rounded}
            $faded={faded}
        >
            {children}
        </StyledButton>
    )
}
