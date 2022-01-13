import { FC, useRef } from 'react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { INote } from '../../../models/note';
import { IModalProps } from '../../templates/Modal';
import { Container } from '../../templates/Modal/styles';
import Note from '../Note';

export interface IViewNoteIModalProps extends IModalProps {
  note: INote;
}

const ViewNoteModal: FC<IViewNoteIModalProps> = ({ show, onHide, note }) => {
  const ref = useRef();
  useOnClickOutside(ref, onHide);
  return show ? (
    <Container>
      <div ref={ref}>
        <Note note={note} variant="modal" />
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default ViewNoteModal;
