import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const LoginModal = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  width: 90%;
  max-width: 440px;
  min-height: auto;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const LoginOrCreateContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 0.1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LoginOrCreate = styled.button<{ $isActive: boolean }>`
  width: 50%;
  height: 3rem;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.surface};
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s ease, color 0.2s ease;

  &:first-child {
    border-radius: 0.75rem 0 0 0;
    background: ${({ $isActive, theme }) =>
      $isActive
        ? "linear-gradient(90deg, #246245, #00af73)"
        : theme.colors.surface};
  }

  &:last-child {
    border-radius: 0 0.75rem 0 0;
    background: ${({ $isActive, theme }) =>
      $isActive
        ? "linear-gradient(90deg, #00af73, #246245)"
        : theme.colors.surface};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1.75rem 2rem;

  @media (max-width: 480px) {
    padding: 1.25rem 1.25rem;
    gap: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

export const ResetPassword = styled.a`
  width: 100%;
  text-align: end;
  margin-top: -0.25rem;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
