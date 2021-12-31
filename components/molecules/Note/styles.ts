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

export const Title = styled.h4`
  color: ${cardTextSecondary};
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
`;
