import { FC, FormEvent, useState } from 'react';

import useInput from '../../../hooks/useInput';
import useCreateTag from '../../../mutations/useCreateTag';
import { picker } from '../../../theme/colors';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../molecules/Modal';

const AddTagModal: FC<ModalProps> = ({ show, onHide }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: createTag } = useCreateTag();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTag({ name, color });
    setName('');
    setColor(picker[0]);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Add new tag</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="Tag's name"
          value={name}
          onChange={handleOnChangeName}
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

export default AddTagModal;
