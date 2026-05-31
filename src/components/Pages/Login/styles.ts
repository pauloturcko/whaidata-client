import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  //background-image:
  //        linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
  //        linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  //background-size: 30px 30px;
`;

export const LoginModal = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  width: 90%;
  max-width: 450px;
  height: 30rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  //box-shadow: rgba(0,255,150, 0.1) 0px 20px 25px -5px, rgba(0,255,150, 0.04) 0px 10px 10px -5px;
`;
export const LoginOrCreateContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 0.1rem;
  border-radius: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
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
  font-weight: 500;

  &:first-child {
    border-radius: 0.5rem 0 0 0;
    background: ${({ $isActive, theme }) =>
      $isActive
        ? "linear-gradient(90deg, #246245, #00af73)"
        : theme.colors.surface};
  }

  &:last-child {
    border-radius: 0 0.5rem 0 0;
    background: ${({ $isActive, theme }) =>
      $isActive
        ? "linear-gradient(90deg, #00af73, #246245)"
        : theme.colors.surface};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  padding-top: 1.5rem;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  width: 90%;
  padding-bottom: 1rem;
`;

export const ResetPassword = styled.a`
  width: 90%;
  text-align: end;
  margin-bottom: 1rem;
  font-size: 0.875em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    text-decoration: underline;
  }
`;
