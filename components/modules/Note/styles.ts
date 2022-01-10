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
  border: 0.15rem solid ${(props) => props.color};
  &:hover {
    & ${Toolbar} {
      opacity: 1;
    }
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

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, transparent 80%, ${foreground});
  }
`;

export const Tag = styled.div<{ color: string }>`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${text};
  padding: 0.5rem;
  border: 0.15rem solid ${(props) => props.color};
  border-radius: 0.5rem;
  white-space: nowrap;
`;
