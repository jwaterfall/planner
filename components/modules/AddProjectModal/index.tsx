import { FC, FormEvent, useState } from 'react';

import useCreateProject from '../../../hooks/mutations/useCreateProject';
import useInput from '../../../hooks/useInput';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../templates/Modal';

const AddProjectModal: FC<ModalProps> = ({ show, onHide }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: createProject } = useCreateProject();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProject({ name, color });
    setName('');
    setColor(picker[0]);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Add new project</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input required placeholder="Name" value={name} onChange={handleOnChangeName} />
        <ModalColorPicker color={color} setColor={setColor} />
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

export default AddProjectModal;
