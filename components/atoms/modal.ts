import styled from "styled-components";
import { text, textTertiary, accent, modal, primary } from "../../theme/colors";

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
  width: 22rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${modal};
  backdrop-filter: blur(0.25rem);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const SectionTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 0.875rem;
  color: ${text};
  background: none;
  outline: 0;
  border: 0.125rem ${accent} solid;
  border-radius: 0.5rem;
  &::placeholder {
    color: ${textTertiary};
  }
`;

export const ColorSelecter = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const ColorContainer = styled.div<{ active: boolean }>`
  padding: 0.625rem;
  border-radius: 0.5rem;
  border: 0.125rem ${accent} solid;
  transition: border-color 150ms;
  cursor: pointer;
  ${(props) => !props.active && `border-color: transparent;`}
`;

export const Color = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 0.3rem;
  width: 1rem;
  height: 1rem;
`;

export const ButtonContainer = styled.div`
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
  color: ${text};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ButtonSecondary = styled(Button)`
  background: ${accent};
`;
