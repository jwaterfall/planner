import { FC, FormEvent, useEffect, useState } from 'react';

import useEditNote from '../../../hooks/mutations/useEditNote';
import useInput from '../../../hooks/useInput';
import { DefaultNote } from '../../../models/note';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import TextArea from '../../elements/TextArea';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTagPicker,
  ModalTitle,
} from '../../templates/Modal';

interface Props extends ModalProps {
  note?: DefaultNote;
}

const EditNoteModal: FC<Props> = ({ show, onHide, note }) => {
  const [title, handleOnChangeTitle, setTitle] = useInput('');
  const [description, handleOnChangeDescription, setDescription] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const [tags, setTags] = useState<string[]>([]);
  const { mutate: editNote } = useEditNote(note?._id);

  useEffect(() => {
    setTitle(note?.title);
    setDescription(note?.description);
    setColor(note?.color);
    setTags(note?.tags.map((tag) => tag._id));
  }, [note, setTitle, setDescription, setColor]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editNote({ title, description, color, tags });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Edit existing note</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input required placeholder="Name" value={title} onChange={handleOnChangeTitle} />
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
