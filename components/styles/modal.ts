import styled from 'styled-components';

import {
  overlay2,
  primary,
  selection,
  shadow,
  sidebar,
  text,
  textButton,
  textTertiary,
} from '../../theme/colors';
import { weight1, weight2, weight3 } from '../../theme/font';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: hsla(0, 0%, 0%, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 25rem;
  padding: 2rem;
  border-radius: 1rem;
  background: ${sidebar};
  box-shadow: 0 0 0.25rem ${shadow};
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

export const Input = styled.input`
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

export const ColorSelecter = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
`;

export const Color = styled.div<{ color: string; active: boolean }>`
  background: ${(props) => props.color};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: border-color 150ms;
  border: 0.15rem solid ${(props) => (props.active ? selection : props.color)};
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button`
  background: ${primary};
  outline: 0;
  border: 0;
  font-size: 0.875rem;
  color: ${textButton};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 0.125rem solid ${primary};
`;

export const ButtonSecondary = styled(Button)`
  background: transparent;
  color: ${primary};
  font-weight: ${weight2};
`;
