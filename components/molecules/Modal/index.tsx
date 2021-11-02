import { FC } from 'react';

import ColorPicker from './ColorPicker';
import { Container, Content, Footer, Title } from './styles';

export const ModalTitle = Title;
export const ModalFooter = Footer;
export const ModalColorPicker = ColorPicker;

export interface ModalProps {
  show: boolean;
  onHide: () => void;
}

const Modal: FC<ModalProps> = ({ show, onHide, children }) => {
  return show ? (
    <Container>
      <Content>{children}</Content>
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
