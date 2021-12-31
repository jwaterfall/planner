import { FC, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

import { Note } from '../../../models/note';
import useDeleteNote from '../../../mutations/useDeleteNote';
import EditNoteModal from '../../organisms/EditNoteModal';
import { Card, Title, Toolbar } from './styles';

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
            {note.description}
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
