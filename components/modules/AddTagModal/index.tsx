import { FC, FormEvent, useState } from 'react';

import useCreateTag from '../../../hooks/mutations/useCreateTag';
import useInput from '../../../hooks/useInput';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Modal, {
  IModalProps,
  ModalColorPicker,
  ModalFooter,
  ModalTitle,
} from '../../templates/Modal';

const AddTagModal: FC<IModalProps> = ({ show, onHide }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: createTag } = useCreateTag();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTag({ name, color });
    setName('');
    setColor(picker[0]);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} data-testid="AddTagModal">
      <ModalTitle>Add new tag</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="Name"
          value={name}
          onChange={handleOnChangeName}
          data-testid="AddTagModalNameInput"
        />
        <ModalColorPicker color={color} setColor={setColor} />
        <ModalFooter>
          <Button variant="secondary" type="button" onClick={onHide}>
            Cancel
          </Button>
          <Button data-testid="AddTagModalAddButton">Add</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddTagModal;
