import styled from 'styled-components';

import {
  foreground,
  overlay1,
  overlay2,
  overlay3,
  primary,
  shadow,
  text,
  textSecondary,
} from '../../../theme/colors';
import { weight1, weight2 } from '../../../theme/font';

export const Container = styled.div`
  grid-area: sidebar;
  width: 17.5rem;
  padding: 1rem;
  background: ${foreground};
  box-shadow: 0 0 0.25rem ${shadow};
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${overlay3} transparent;
  &::-webkit-scrollbar {
    width: 0.9rem;
    @media (max-width: 992px) {
      display: none;
    }
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 0.9rem;
    background-color: ${overlay3};
    border: 0.2rem solid transparent;
    background-clip: content-box;
  }
`;

export const NavItem = styled.div`
  text-decoration: none;
  padding: 0.75rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: ${weight2};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    background: ${overlay2};
  }
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-bottom: 0.1rem;
  }
  &.active {
    color: ${primary};
  }
`;

export const DropdownNavItem = styled(NavItem)`
  position: relative;
  font-weight: ${weight1};
  &:hover {
    & svg {
      opacity: 1;
      &:hover {
        color: ${primary};
      }
    }
  }
`;

export const DropdownIcon = styled.div`
  margin-left: auto;
  & svg {
    width: 1rem;
    height: 1rem;
    color: ${text};
    opacity: 0;
    transition: opacity 150ms;
  }
`;

export const AddNew = styled(NavItem)`
  color: ${textSecondary};
  &:hover {
    color: ${text};
  }
`;

export const Dropdown = styled(NavItem)<{ isOpened: boolean }>`
  & > svg:not(:first-of-type) {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 150ms;
    ${(props) => props.isOpened && 'transform: rotate(-90deg);'}
  }
  &:hover {
    background: none;
  }
`;

export const Section = styled.div`
  padding: 0.5rem 0;
  &:not(:first-child) {
    border-top: 1px solid ${overlay1};
  }
`;

export const Margin = styled.div`
  margin-left: 2rem;
`;

export const ColorIcon = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.125rem;
`;