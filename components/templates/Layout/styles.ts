import styled from 'styled-components';

import { overlay3 } from '../../../styles/theme/colors';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar page';
`;

export const Page = styled.div`
  grid-area: page;
  overflow-x: hidden;
  overflow-y: auto;
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
