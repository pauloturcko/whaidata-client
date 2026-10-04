import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
