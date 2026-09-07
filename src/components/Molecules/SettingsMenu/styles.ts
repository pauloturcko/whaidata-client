import styled from "styled-components";
import Link from "next/link";

export const SettingsMenu = styled.ul`
  display: inline-flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0.5rem;

  li {
    list-style: none;
    flex-shrink: 0;
  }
`;

export const MenuLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  padding: 0.25rem 1rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.primary
      : props.theme.colors.textSecondary};
  background-color: ${(props) =>
    props.$active ? props.theme.colors.primarySoft : "transparent"};
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$active
        ? props.theme.colors.primarySoft
        : props.theme.colors.surfaceElevated};
  }
`;

export const Icon = styled.span`
  display: none;
  align-items: center;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const Label = styled.span`
  width: max-content;
`;
