import { FC } from 'react';

import { Note } from '../../../models/note';
import Tags from './Tags';
import Toolbar from './Toolbar';
import { ModalBody, ModalCard, Title } from './styles';

export interface IModalNoteProps {
  note: Note;
}

const ModalNote: FC<IModalNoteProps> = ({ note }) => {
  switch (note.variant) {
    case 'default':
      return (
        <ModalCard color={note.color}>
          {note.title && <Title>{note.title}</Title>}
          <ModalBody>{note.description}</ModalBody>
          {note.tags && <Tags note={note} />}
          <Toolbar note={note} />
        </ModalCard>
      );
    default:
      return <></>;
  }
};

export default ModalNote;
