import styled from "styled-components";
import Image from "next/image";

interface FullLogoProps {
  fontSize?: number | string;
  imgSize?: number;
}

export const FullLogo = ({ fontSize, imgSize }: FullLogoProps) => {
  return (
    <Wrapper $fontSize={fontSize}>
      <Image
        src="/logo.svg"
        alt="WhaiData logo"
        width={imgSize ?? 100}
        height={imgSize ?? 100}
      />

      <h1>Whai</h1>
      <h1 style={{ color: "#3CDD7F" }}>Data</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $fontSize?: number | string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ $fontSize }) => {
    if (!$fontSize) return "1rem";

    if (typeof $fontSize === "number") {
      return `${$fontSize}px`;
    }

    return $fontSize;
  }};
`;
