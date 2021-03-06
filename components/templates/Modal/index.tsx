import { FC, useRef } from 'react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import ColorPicker from './ColorPicker';
import TagPicker from './TagPicker';
import { Container, Content, Footer, Title } from './styles';

export const ModalTitle = Title;
export const ModalFooter = Footer;
export const ModalColorPicker = ColorPicker;
export const ModalTagPicker = TagPicker;

export interface IModalProps {
  show: boolean;
  onHide: () => void;
}

const Modal: FC<IModalProps> = ({ show, onHide, children, ...props }) => {
  const ref = useRef();
  useOnClickOutside(ref, onHide);

  return (
    <Container show={show} {...props}>
      <Content ref={ref}>{children}</Content>
    </Container>
  );
};

export default Modal;
