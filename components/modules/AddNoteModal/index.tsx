import { FC, FormEvent, useState } from 'react';

import useCreateNote from '../../../hooks/mutations/useCreateNote';
import useInput from '../../../hooks/useInput';
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

export interface IAddNoteIModalProps extends IModalProps {
  projectId?: string;
}

const AddNoteModal: FC<IAddNoteIModalProps> = ({ show, onHide, projectId }) => {
  const [title, handleOnChangeTitle, setTitle] = useInput('');
  const [description, handleOnChangeDescription, setDescription] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const [tags, setTags] = useState<string[]>([]);
  const { mutate: createNote } = useCreateNote();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createNote({
      title,
      description,
      color,
      variant: 'default',
      tags,
      project: projectId,
    });
    setTitle('');
    setDescription('');
    setColor(picker[0]);
    setTags([]);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Add new note</ModalTitle>
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
          <Button>Add</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddNoteModal;
