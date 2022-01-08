import styled from 'styled-components';

import { overlay2, shadow, text, textTertiary } from '../../../styles/theme/colors';

export const PrimaryInput = styled.input`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  font-size: 0.875rem;
  color: ${text};
  background: ${overlay2};
  outline: none;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem ${shadow};
  &::placeholder {
    color: ${textTertiary};
  }
`;
