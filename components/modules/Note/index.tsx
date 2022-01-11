import { FC, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

import useDeleteNote from '../../../hooks/mutations/useDeleteNote';
import { Note } from '../../../models/note';
import EditNoteModal from '../../modules/EditNoteModal';
import { Body, Card, Tag, Tags, Title, Toolbar } from './styles';

export interface NoteProps {
  note: Note;
  projectId?: string;
}

const NoteComponent: FC<NoteProps> = ({ note, projectId }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { mutate: deleteNote } = useDeleteNote(note._id, projectId);

  switch (note.type) {
    case 'default':
      return (
        <>
          <EditNoteModal
            show={modalVisibility}
            onHide={() => setModalVisibility(false)}
            note={note}
            projectId={projectId}
          />
          <Card color={note.color}>
            {note.title && <Title>{note.title}</Title>}
            <Body>{note.description}</Body>
            {note.tags.length > 0 && (
              <Tags>
                {note.tags.map((tag) => (
                  <Tag key={tag._id} color={tag.color}>
                    {tag.name}
                  </Tag>
                ))}
              </Tags>
            )}
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
