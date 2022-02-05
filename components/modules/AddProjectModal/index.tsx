import { FC, FormEvent, useState } from 'react';

import useCreateProject from '../../../hooks/mutations/useCreateProject';
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

const AddProjectModal: FC<IModalProps> = ({ show, onHide }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: createProject } = useCreateProject();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createProject({ name, color });
    setName('');
    setColor(picker[0]);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} data-testid="AddProjectModal">
      <ModalTitle>Add new project</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="Name"
          value={name}
          onChange={handleOnChangeName}
          data-testid="AddProjectModalNameInput"
        />
        <ModalColorPicker color={color} setColor={setColor} />
        <ModalFooter>
          <Button variant="secondary" type="button" onClick={onHide}>
            Cancel
          </Button>
          <Button data-testid="AddProjectModalAddButton">Add</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
