"use client";

import {StyledButton} from "@/components/Core/Button/styles";
import {ReactNode} from "react";
import {ThemeType} from "@/styles/theme";
type ThemeColors = keyof ThemeType["colors"];

type ButtonProps = {
    children: ReactNode;
    background?: "primary" | "success" | "danger" | "warning" | "info";
    color?: ThemeColors;
    justify?: "start" | "end";
    loading?: boolean;
    disabled?: boolean;
}

export const Button = ({
                           children,
                           background,
                           color,
                           justify,
                           loading,
                           disabled,
                       }: ButtonProps) => {
    return (
        <StyledButton $background={background} $disabled={disabled} $color={color} $justify={justify}
                      $loading={loading}>{children}</StyledButton>
    )
}
