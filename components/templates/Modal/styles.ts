import styled from 'styled-components';

import {
  foreground,
  overlay2,
  overlay3,
  selection,
  shadow,
  text,
  textSecondary,
} from '../../../styles/theme/colors';
import { weight2, weight3 } from '../../../styles/theme/font';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 105;
  background: hsla(0, 0%, 0%, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 25rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${foreground};
  box-shadow: 0 0 1rem 0.5rem ${shadow};
`;

export const Title = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: ${weight3};
`;

export const SectionTitle = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: ${weight2};
`;

export const ColorPickerContainer = styled.div`
  margin-top: 0.75rem;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0.5rem ${shadow};
  background: ${overlay2};
  border-radius: 0.5rem;
`;

export const ColorPickerColor = styled.div<{ color: string; active: boolean }>`
  background: ${(props) => props.color};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  transition: border-color 150ms;
  border: 0.15rem solid ${(props) => (props.active ? selection : props.color)};
`;

export const Footer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const TagPickerContainer = styled.div`
  margin-top: 0.75rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0.5rem ${shadow};
  background: ${overlay2};
  border-radius: 0.5rem;
  height: 10rem;
  overflow: hidden auto;
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

export const TagPickerTag = styled.div`
  color: ${textSecondary};
  font-size: 0.875rem;
  padding: 0.25rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  &:hover {
    color: ${text};
  }
`;
