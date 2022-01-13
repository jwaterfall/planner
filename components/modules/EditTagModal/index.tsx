import { FC, FormEvent, useEffect, useState } from 'react';

import useEditTag from '../../../hooks/mutations/useEditTag';
import useInput from '../../../hooks/useInput';
import { ITag } from '../../../models/tag';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Modal, {
  IModalProps,
  ModalColorPicker,
  ModalFooter,
  ModalTitle,
} from '../../templates/Modal';

export interface IEditTagModalProps extends IModalProps {
  tag?: ITag;
}

const EditTagModal: FC<Props> = ({ show, onHide, tag }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: editTag } = useEditTag(tag);

  useEffect(() => {
    setName(tag?.name);
    setColor(tag?.color);
  }, [tag, setName, setColor]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    editTag({ name, color });
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Edit existing tag</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="Name"
          value={name}
          onChange={handleOnChangeName}
        />
        <ModalColorPicker color={color} setColor={setColor} />
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
