import styled from 'styled-components';

import { overlay2, text, textTertiary } from '../../../theme/colors';

export const PrimaryInput = styled.input`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  font-size: 0.875rem;
  color: ${text};
  background: ${overlay2};
  outline: none;
  border: none;
  border-radius: 1rem;
  &::placeholder {
    color: ${textTertiary};
  }
`;
