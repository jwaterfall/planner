import { FC, useRef } from 'react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import ColorPicker from './ColorPicker';
import TagPicker from './TagPicker';
import { Container, Content, Footer, Title } from './styles';

export const ModalTitle = Title;
export const ModalFooter = Footer;
export const ModalColorPicker = ColorPicker;
export const ModalTagPicker = TagPicker;

export interface ModalProps {
  show: boolean;
  onHide: () => void;
}

const Modal: FC<ModalProps> = ({ show, onHide, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, onHide);

  return show ? (
    <Container>
      <Content ref={ref}>{children}</Content>
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
