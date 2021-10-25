import styled from "styled-components";
import {
  text,
  textSecondary,
  accent,
  hover,
  sidebar,
} from "../../theme/colors";

export const Container = styled.div`
  grid-area: sidebar;
  width: 17.5rem;
  padding: 1rem;
  background: ${sidebar};
`;

export const Title = styled.div`
  padding: 0.75rem;
  padding-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > svg {
    color: ${textSecondary};
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: color 150ms;
    &:hover {
      color: ${text};
    }
  }
`;

export const NavItem = styled.div<{ color: string }>`
  padding: 0.75rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  text-transform: capitalize;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 150ms;
  backdrop-filter: blur(0.25rem);
  &:hover {
    background: linear-gradient(
      to right,
      ${(props) => props.color || hover} -500%,
      ${hover} 50%
    );
  }
  & > svg {
    color: ${text};
    width: 1rem;
    height: 1rem;
  }
`;

export const GroupIcon = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.125rem;
`;

export const TaskCount = styled.div`
  background: ${accent};
  border-radius: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${textSecondary};
`;
