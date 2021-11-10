import styled from 'styled-components';

import {
  foreground,
  overlay2,
  shadow,
  text,
  textSecondary,
} from '../../../theme/colors';
import { weight2 } from '../../../theme/font';

export const Menu = styled.div`
  min-width: 15rem;
  z-index: 100;
  background: ${foreground};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.25rem ${shadow};
`;

export const Item = styled.div`
  color: ${textSecondary};
  height: 2rem;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: ${weight2};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 150ms;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  &:hover {
    background: ${overlay2};
    color: ${text};
  }
`;
