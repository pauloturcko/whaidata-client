"use client";

import { ReactNode } from "react";
import { ThemeType } from "@/styles/theme";
import { StyledButton } from "./styles";
type ThemeColors = keyof ThemeType["colors"];

type ButtonProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  background?:
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "transparent";
  color?: ThemeColors;
  justify?: "start" | "end";
  loading?: boolean;
  disabled?: boolean;
  border?: boolean;
  fontsize?: number | string;
  weight?: "normal" | "bold" | "light";
  rounded?: number | string;
  faded?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const Button = ({
  children,
  background,
  color,
  justify,
  loading,
  disabled,
  rounded,
  border,
  fontsize,
  weight,
  width,
  height,
  faded,
  type,
  onClick,
}: ButtonProps) => {
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
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
