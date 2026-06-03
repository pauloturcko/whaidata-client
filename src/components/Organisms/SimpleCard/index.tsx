import * as S from "./styles";

type SimpleCardProps = {
  title: string;
  icon: React.ReactNode | string;
  value: string;
  description: string;
  valueColor?: string;
  descriptionColor?: string;
};

export const SimpleCard = ({ title, icon, value, description, valueColor, descriptionColor }: SimpleCardProps) => {
  return (
    <S.CardWrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        {icon}
      </S.TitleWrapper>
      <S.InfoWrapper>
        <S.Value $valueColor={valueColor} >{value}</S.Value>
        <S.Description $descriptionColor={descriptionColor} >{description}</S.Description>
      </S.InfoWrapper>
    </S.CardWrapper>
  );
};
