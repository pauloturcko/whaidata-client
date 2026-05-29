import Image from "next/image";

interface IconOnlyProps {
  size?: number;
}

export const IconOnly = ({ size }: IconOnlyProps) => {
  return (
    <Image
      src="/logo.svg"
      alt="WhaiData logo"
      width={size ?? 100}
      height={size ?? 100}
    />
  );
};
