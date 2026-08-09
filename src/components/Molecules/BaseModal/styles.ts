import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.background}99`};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 45rem;
  min-height: auto;
  max-height: 90vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  button {
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;
