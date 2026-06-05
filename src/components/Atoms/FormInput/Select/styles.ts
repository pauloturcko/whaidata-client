import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 0.5rem;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.925rem;
`;

export const Select = styled.select<{ $hasError?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.danger : theme.colors.border};
  border-radius: 0.5rem;
  font-size: 14px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.surface};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.danger};
  margin-top: -4px;
`;
