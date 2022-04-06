import { FC, useRef } from 'react';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { Note } from '../../../models/note';
import { IModalProps } from '../../templates/Modal';
import { Container } from '../../templates/Modal/styles';
import NoteDisplay from '../NoteDisplay';

export interface IViewNoteIModalProps extends IModalProps {
  note: Note;
}

const ViewNoteModal: FC<IViewNoteIModalProps> = ({ show, onHide, note, ...props }) => {
  const ref = useRef();
  useOnClickOutside(ref, onHide);

  return show ? (
    <Container show={show} {...props}>
      <div ref={ref}>
        <NoteDisplay note={note} variant="modal" />
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default ViewNoteModal;
