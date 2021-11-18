import { FC, FormEvent, useState } from 'react';

import useInput from '../../../hooks/useInput';
import useCreateProject from '../../../mutations/useCreateProject';
import { picker } from '../../../styles/theme/colors';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../molecules/Modal';

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
        <Input
          required
          placeholder="Project's name"
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

export default AddProjectModal;
