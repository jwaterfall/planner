import { FC, FormEvent, useState } from 'react';

import useCreateNote from '../../../hooks/mutations/useCreateNote';
import useInput from '../../../hooks/useInput';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import TextArea from '../../elements/TextArea';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../templates/Modal';

const AddNoteModal: FC<ModalProps> = ({ show, onHide }) => {
  const [title, handleOnChangeTitle, setTitle] = useInput('');
  const [description, handleOnChangeDescription, setDescription] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: createNote } = useCreateNote();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNote({ title, description, color, type: 'default', tags: [] });
    setTitle('');
    setDescription('');
    setColor(picker[0]);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Add new note</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input required placeholder="Name" value={title} onChange={handleOnChangeTitle} />
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
          <Button>Add</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddNoteModal;
