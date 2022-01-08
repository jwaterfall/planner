import styled from 'styled-components';

import { overlay2, overlay3, shadow, text, textTertiary } from '../../../styles/theme/colors';

export const PrimaryTextArea = styled.textarea`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  height: 10rem;
  font-size: 0.875rem;
  color: ${text};
  background: ${overlay2};
  outline: none;
  border: none;
  border-radius: 0.5rem;
  resize: none;
  box-shadow: 0 0 0.5rem ${shadow};
  &::placeholder {
    color: ${textTertiary};
  }
  scrollbar-width: thin;
  scrollbar-color: ${overlay3} transparent;
  &::-webkit-scrollbar {
    width: 0.9rem;
    @media (max-width: 992px) {
      display: none;
    }
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 0.9rem;
    background-color: ${overlay3};
    border: 0.2rem solid transparent;
    background-clip: content-box;
  }
`;
