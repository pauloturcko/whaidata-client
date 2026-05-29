import { styled } from "styled-components";

export const Aside = styled.aside<{ $isOpen: boolean }>`
  background-color: ${(props) => props.theme.colors.surface};
  width: ${({ $isOpen }) => ($isOpen ? "16.5rem" : "4rem")};
  padding: 1rem 0.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  border-right: 1px solid ${(props) => props.theme.colors.border};
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 85%;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 1rem 0;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;

  li {
    &:last-child {
      button {
        &:hover,
        &:focus,
        &:active {
          color: ${(props) => props.theme.colors.danger};
          background-color: transparent;
        }
      }
    }
  }

  a,
  button {
    display: flex;
    gap: 1rem;
    color: ${(props) => props.theme.colors.textSecondary};
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 0.6rem;

    &:hover {
      color: ${(props) => props.theme.colors.textPrimary};
      background-color: ${(props) => props.theme.colors.primarySoft};
    }

    &:focus,
    &:active {
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.primarySoft};
    }
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 0.25rem;
  border-radius: 0.6rem;

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
    background-color: ${(props) => props.theme.colors.primarySoft};
  }
`;
