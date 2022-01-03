import styled from 'styled-components';

import { cardText, cardTextSecondary } from '../../../styles/theme/colors';
import { weight2 } from '../../../styles/theme/font';

export const Toolbar = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: opacity 150ms;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    color: ${cardText};
    &:hover {
      color: ${cardTextSecondary};
    }
  }
`;

export const Card = styled.div<{ color: string }>`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${cardText};
  font-size: 0.875rem;
  &:hover {
    & ${Toolbar} {
      opacity: 1;
    }
  }
`;

export const Body = styled.div<{ color: string }>`
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
    background: linear-gradient(transparent 22rem, ${(props) => props.color});
  }
`;

export const Title = styled.h4`
  color: ${cardTextSecondary};
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
`;
