import { FC, FormEvent, useEffect, useState } from 'react';

import useInput from '../../../hooks/useInput';
import { Project } from '../../../models/project';
import useEditProject from '../../../mutations/useEditProject';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Modal, {
  ModalColorPicker,
  ModalFooter,
  ModalProps,
  ModalTitle,
} from '../../molecules/Modal';

interface Props extends ModalProps {
  project?: Project;
}

const EditProjectModal: FC<Props> = ({ show, onHide, project }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState('');
  const { mutate: editProject } = useEditProject(project?._id);

  useEffect(() => {
    setName(project?.name);
    setColor(project?.color);
  }, [project, setName, setColor]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProject({ name, color });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Edit existing project</ModalTitle>
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
          <Button>Save</Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default EditProjectModal;
