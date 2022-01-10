import styled from 'styled-components';

import { overlay3, primary } from '../../../styles/theme/colors';

export const StyledRadial = styled.div<{ checked: boolean }>`
  border: 0.15rem solid ${overlay3};
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    position: absolute;
    content: '';
    background: ${(props) => props.checked && primary};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
  }
`;
