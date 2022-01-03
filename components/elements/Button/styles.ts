import styled from 'styled-components';

import {
  primary,
  primaryHover,
  textButton,
} from '../../../styles/theme/colors';
import { weight2 } from '../../../styles/theme/font';

export const PrimaryButton = styled.button`
  background: ${primary};
  outline: 0;
  border: 0;
  font-size: 0.875rem;
  color: ${textButton};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 0.125rem solid ${primary};
  transition: all 150ms;
  &:hover {
    background: ${primaryHover};
    border-color: ${primaryHover};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${primary};
  font-weight: ${weight2};
  &:hover {
    color: ${textButton};
  }
`;
