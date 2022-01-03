import { FC, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

import useDeleteNote from '../../../hooks/mutations/useDeleteNote';
import { Note } from '../../../models/note';
import EditNoteModal from '../../modules/EditNoteModal';
import { Body, Card, Title, Toolbar } from './styles';

export interface NoteProps {
  note: Note;
}

const NoteComponent: FC<NoteProps> = ({ note }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { mutate: deleteNote } = useDeleteNote(note._id);

  switch (note.type) {
    case 'default':
      return (
        <>
          <EditNoteModal
            show={modalVisibility}
            onHide={() => setModalVisibility(false)}
            note={note}
          />
          <Card color={note.color}>
            {note.title && <Title>{note.title}</Title>}
            <Body color={note.color}>{note.description}</Body>
            <Toolbar>
              <HiOutlinePencil onClick={() => setModalVisibility(true)} />
              <HiOutlineTrash onClick={() => deleteNote()} />
            </Toolbar>
          </Card>
        </>
      );
    default:
      return <></>;
  }
};

export default NoteComponent;
