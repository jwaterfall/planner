import styled from 'styled-components';

import {
  foreground,
  primary,
  primaryHover,
  shadow,
  text,
  textSecondary,
} from '../../../styles/theme/colors';

export const Toolbar = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: opacity 250ms;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    color: ${primary};
    transition: color 150ms;
    &:hover {
      color: ${primaryHover};
    }
  }
`;

export const Card = styled.div<{ color: string }>`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${foreground};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${textSecondary};
  font-size: 0.875rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0.5rem ${shadow};
  &:hover {
    & ${Toolbar} {
      opacity: 1;
    }
  }
  &:before {
    background: ${(props) => props.color};
    width: 0.2rem;
    height: 70%;
    position: absolute;
    top: 15%;
    left: 0;
    content: '';
    background: linear-gradient(transparent, ${(props) => props.color} 25% 75%, transparent);
  }
`;

export const Body = styled.div`
  max-height: 25rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 20rem, ${foreground});
  }
`;

export const Title = styled.h3`
  color: ${text};
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;
