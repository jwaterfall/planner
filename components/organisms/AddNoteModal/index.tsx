import { FC, FormEvent, useEffect, useState } from 'react';

import useInput from '../../../hooks/useInput';
import { DefaultNote } from '../../../models/note';
import useEditNote from '../../../mutations/useEditNote';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../molecules/Modal';

interface Props extends ModalProps {
  note?: DefaultNote;
}

const EditNoteModal: FC<Props> = ({ show, onHide, note }) => {
  const [title, handleOnChangeTitle, setTitle] = useInput('');
  const [description, handleOnChangeDescription, setDescription] = useInput('');
  const [color, setColor] = useState('');
  const { mutate: editNote } = useEditNote(note?._id);

  useEffect(() => {
    setTitle(note?.title);
    setDescription(note?.description);
    setColor(note?.color);
  }, [note, setTitle, setDescription, setColor]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editNote({ title, description, color });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Edit existing note</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="Name"
          value={title}
          onChange={handleOnChangeTitle}
        />
        <TextArea
          required
          placeholder="Description"
          value={description}
          onChange={handleOnChangeDescription}
        />
        <ModalColorPicker value={color} onChange={setColor} />
        <ModalFooter>
          <Button variant="secondary" type="button" onClick={onHide}>
            Cancel
          </Button>
          <Button>Save</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default EditNoteModal;
