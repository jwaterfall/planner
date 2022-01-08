import styled from 'styled-components';

import { primary, primaryHover, shadow, textButton } from '../../../styles/theme/colors';
import { weight2, weight3 } from '../../../styles/theme/font';

export const PrimaryButton = styled.button`
  background: ${primary};
  outline: 0;
  border: 0;
  font-size: 0.875rem;
  color: ${textButton};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 0.125rem solid ${primary};
  transition: all 150ms;
  box-shadow: 0 0 0.5rem ${shadow};
  &:hover {
    background: ${primaryHover};
    border-color: ${primaryHover};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
`;
