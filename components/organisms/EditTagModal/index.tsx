import { FC, FormEvent, useEffect, useState } from 'react';

import useInput from '../../../hooks/useInput';
import { Tag } from '../../../models/tag';
import useEditTag from '../../../mutations/useEditTag';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../molecules/Modal';

interface Props extends ModalProps {
  tag?: Tag;
}

const EditTagModal: FC<Props> = ({ show, onHide, tag }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState('');
  const { mutate: editTag } = useEditTag(tag?._id);

  useEffect(() => {
    setName(tag?.name);
    setColor(tag?.color);
  }, [tag, setName, setColor]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTag({ name, color });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Edit existing tag</ModalTitle>
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
          <Button>Save</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default EditTagModal;
