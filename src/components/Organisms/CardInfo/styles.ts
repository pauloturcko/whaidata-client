import { styled } from "styled-components";

export const CardWrapper = styled.div<{ $color?: string }>`
  width: 30rem;
  height: 16rem;
  background: ${({ $color, theme }) =>
    $color
      ? $color
      : `linear-gradient(150deg, ${theme.colors.background} 0%, ${theme.colors.background} 55%, ${theme.colors.primarySoft}) 100%`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  opacity: 75%;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    cursor: pointer;
    padding: 0.25rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.surfaceElevated};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 0.4rem;
    }
  }

  .trashIcon:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const CardLastFourDigits = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;

export const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  span {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
