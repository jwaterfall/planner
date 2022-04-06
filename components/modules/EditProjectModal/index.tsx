import { FC, FormEvent, useEffect, useState } from 'react';

import useEditProject from '../../../hooks/mutations/useEditProject';
import useInput from '../../../hooks/useInput';
import { Project } from '../../../models/project';
import { picker } from '../../../styles/theme/colors';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Modal, {
  IModalProps,
  ModalColorPicker,
  ModalFooter,
  ModalTitle,
} from '../../templates/Modal';

export interface IEditProjectIModalProps extends IModalProps {
  project?: Project;
}

const EditProjectModal: FC<IEditProjectIModalProps> = ({ show, onHide, project }) => {
  const [name, handleOnChangeName, setName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: editProject } = useEditProject(project);

  useEffect(() => {
    setName(project?.name);
    setColor(project?.color);
  }, [project, setName, setColor]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    editProject({ name, color });
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>Edit existing project</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Input required placeholder="Name" value={name} onChange={handleOnChangeName} />
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

export default EditProjectModal;
