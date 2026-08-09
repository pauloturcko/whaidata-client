import { styled } from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    min-width: 0;
    max-width: 100%;
    min-height: 9.5rem;
    height: auto;
    background-color: ${(props) => props.theme.colors.surface};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 1.25rem;
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 1280px) {
        padding: 0.875rem 1rem;
        border-radius: 1rem;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
`;

export const Title = styled.p`
    font-size: 1.05rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textSecondary};

    @media (max-width: 1280px) {
        font-size: 0.95rem;
    }
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
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.$valueColor || props.theme.colors.textPrimary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;

    @media (max-width: 1400px) {
        font-size: 1.5rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.35rem;
    }
`;

export const Description = styled.p<{ $descriptionColor?: string }>`
    font-size: 0.85rem;
    color: ${(props) => props.$descriptionColor || props.theme.colors.textSecondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;

    @media (max-width: 1280px) {
        font-size: 0.775rem;
    }
`;
