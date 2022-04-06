import { FC, MouseEvent, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

import useDeleteNote from '../../../hooks/mutations/useDeleteNote';
import { Note } from '../../../models/note';
import EditNoteModal from '../EditNoteModal';
import { ToolbarContainer } from './styles';

interface IToolbarProps {
  note: Note;
}

const Toolbar: FC<IToolbarProps> = ({ note }) => {
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const { mutate: deleteNote } = useDeleteNote(note);

  function handleHideEditModal() {
    setEditModalVisibility(false);
  }

  function handleEdit(e: MouseEvent) {
    e.stopPropagation();
    setEditModalVisibility(true);
  }

  function handleDelete(e: MouseEvent) {
    e.stopPropagation();
    deleteNote();
  }

  return (
    <>
      <EditNoteModal show={editModalVisibility} onHide={handleHideEditModal} note={note} />

      <ToolbarContainer>
        <HiOutlinePencil onClick={handleEdit} />
        <HiOutlineTrash onClick={handleDelete} />
      </ToolbarContainer>
    </>
  );
};

export default Toolbar;
