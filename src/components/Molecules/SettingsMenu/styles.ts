import styled from "styled-components";

export const SettingsMenu = styled.ul`
  display: inline-flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0.5rem;

  li {
    list-style: none;
    flex-shrink: 0;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;

    &:hover {
    background-color: ${(props) => props.theme.colors.surfaceElevated};
  }
    &:active, &:focus {
    background-color: ${(props) => props.theme.colors.primarySoft};
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
  }
`;