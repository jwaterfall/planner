import { FC, FormEvent, useEffect, useState } from 'react';

import useEditNote from '../../../hooks/mutations/useEditNote';
import useInput from '../../../hooks/useInput';
import { INote } from '../../../models/note';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import TextArea from '../../elements/TextArea';
import Modal, {
  IModalProps,
  ModalColorPicker,
  ModalFooter,
  ModalTagPicker,
  ModalTitle,
} from '../../templates/Modal';

export interface IEditNoteIModalProps extends IModalProps {
  note?: INote;
}

const EditNoteModal: FC<IEditNoteIModalProps> = ({ show, onHide, note }) => {
  const [title, handleOnChangeTitle, setTitle] = useInput('');
  const [description, handleOnChangeDescription, setDescription] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const [tags, setTags] = useState<string[]>([]);
  const { mutate: editNote } = useEditNote(note);

  useEffect(() => {
    setTitle(note?.title);
    setDescription(note.variant === 'default' ? note?.description : '');
    setColor(note?.color);
    setTags(note?.tags.map((tag) => tag._id));
  }, [note, setTitle, setDescription, setColor]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    editNote({ title, description, color, tags });
    onHide();
  }

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
        <ModalColorPicker color={color} setColor={setColor} />
        <ModalTagPicker tags={tags} setTags={setTags} />
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
