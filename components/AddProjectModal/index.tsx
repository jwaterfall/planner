import { FC, useState } from 'react';

import useInput from '../../hooks/useInput';
import useCreateProject from '../../mutations/useCreateProject';
import { picker } from '../../theme/colors';
import {
  Button,
  ButtonContainer,
  ButtonSecondary,
  Color,
  ColorSelecter,
  Container,
  Input,
  Modal,
  SectionTitle,
  Title,
} from '../styles/modal';

type Props = { setVisibility: (visible: boolean) => void };

const AddProjectModal: FC<Props> = ({ setVisibility }) => {
  const [name, handleOnChangeName] = useInput('');
  const [color, setColor] = useState(picker[0]);
  const { mutate: createProject } = useCreateProject();

  return (
    <Container>
      <Modal>
        <Title>Add new project</Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProject({ name, color });
            setVisibility(false);
          }}
        >
          <Input
            required
            placeholder="Project's name"
            value={name}
            onChange={handleOnChangeName}
          />
          <SectionTitle>Color</SectionTitle>
          <ColorSelecter>
            {picker.map((c, index) => (
              <Color
                key={index}
                color={c}
                active={color === c}
                onClick={() => setColor(c)}
              />
            ))}
          </ColorSelecter>
          <ButtonContainer>
            <ButtonSecondary
              type="button"
              onClick={() => {
                setVisibility(false);
              }}
            >
              Cancel
            </ButtonSecondary>
            <Button>Add</Button>
          </ButtonContainer>
        </form>
      </Modal>
    </Container>
  );
};

export default AddProjectModal;
