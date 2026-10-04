import * as S from "./styles";

type AvatarProps = {
  name: string;
  src?: string | null;
  size?: string;
};

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
};

export const Avatar = ({ name, src, size = "4rem" }: AvatarProps) => {
  return (
    <S.AvatarWrapper
      role="img"
      aria-label={name}
      $src={src}
      $size={size}
    >
      {!src && getInitials(name)}
    </S.AvatarWrapper>
  );
};
