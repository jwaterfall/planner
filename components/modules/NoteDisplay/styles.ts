import styled from 'styled-components';

import {
  foreground,
  overlay3,
  primary,
  shadow,
  text,
  textSecondary,
} from '../../../styles/theme/colors';
import { weight1, weight2 } from '../../../styles/theme/font';

export const ToolbarContainer = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: opacity 250ms;
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    color: ${text};
    transition: color 150ms;
    &:hover {
      color: ${primary};
    }
  }
`;

export const Card = styled.div<{
  color: string;
}>`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${foreground};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${textSecondary};
  font-size: 0.875rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0.5rem ${shadow};
  border: 0.15rem solid ${(props) => props.color};
  &:hover {
    & ${ToolbarContainer} {
      opacity: 1;
    }
  }
`;

export const ModalCard = styled(Card)`
  width: 30rem;
  max-width: 100vw;
  max-height: 80vh;
  & ${ToolbarContainer} {
    opacity: 1;
  }
`;

export const Fade = styled.div`
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 22rem, ${foreground});
  }
`;

export const Body = styled.div`
  font-weight: ${weight1};
  max-height: 25rem;
  height: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ModalBody = styled(Body)`
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${overlay3} transparent;
  padding-bottom: 0.25rem;
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

export const Title = styled.h3`
  color: ${text};
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, transparent 80%, ${foreground});
  }
`;

export const Tag = styled.div<{ color: string }>`
  font-size: 0.75rem;
  font-weight: ${weight2};
  color: ${text};
  padding: 0.5rem;
  border: 0.15rem solid ${(props) => props.color};
  border-radius: 0.5rem;
  white-space: nowrap;
`;
