import styled from 'styled-components';

import {
  buttonPrimaryHover,
  buttonSecondaryHover,
  primary,
  secondary,
} from '../../../styles/theme/colors';

export const PrimaryButton = styled.button`
  margin: 0;
  color: ${primary};
  background: none;
  border: 1px solid ${primary};
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  transition: 150ms all;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  &:hover {
    background: ${buttonPrimaryHover};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  color: ${secondary};
  border-color: ${secondary};
  &:hover {
    background: ${buttonSecondaryHover};
  }
`;
