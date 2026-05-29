import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.15rem;
    width: 60%;
  }
`;
