import { styled } from "styled-components";

export const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.25rem;
    font-weight: 700;
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
