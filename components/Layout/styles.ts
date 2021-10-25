import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar page";
`;

export const Page = styled.div`
  grid-area: page;
  overflow-x: hidden;
  overflow-y: auto;
`;
