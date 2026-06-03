import { styled } from "styled-components";

export const CardWrapper = styled.div`
    width: 24rem;
    height: 11rem;
    background-color: ${(props) => props.theme.colors.surface};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 1.25rem;
    padding: 1.25rem 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Title = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textSecondary};
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    gap: 0.25rem;
`;

export const Value = styled.p<{ $valueColor?: string }>`
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.$valueColor || props.theme.colors.textPrimary};
`;

export const Description = styled.p<{ $descriptionColor?: string }>`
    font-size: 0.875rem;
    color: ${(props) => props.$descriptionColor || props.theme.colors.textSecondary};
`;
