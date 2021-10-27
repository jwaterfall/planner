import React, { FC, useState, MouseEvent } from "react";
import useInput from "../../hooks/useInput";
import { picker } from "../../theme/colors";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Modal,
  Form,
  Title,
  SectionTitle,
  Input,
  ColorSelecter,
  ColorContainer,
  Color,
  ButtonContainer,
  Button,
  ButtonSecondary,
} from "../atoms/modal";
import useCreateTag from "../../mutations/useCreateTag";

type Props = { setVisibility: (visible: boolean) => void };

const AddTagModal: FC<Props> = ({ setVisibility }) => {
  const [name, handleOnChangeName] = useInput("");
  const [color, setColor] = useState(picker[0]);
  const { mutate: createTag } = useCreateTag();

  return (
    <Container>
      <Modal>
        <Title>Add Tag</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createTag({ name, color });
            setVisibility(false);
          }}
        >
          <div>
            <SectionTitle>Name</SectionTitle>
            <Input
              placeholder="My tag"
              value={name}
              onChange={handleOnChangeName}
            />
          </div>
          <div>
            <SectionTitle>Color</SectionTitle>
            <ColorSelecter>
              {picker.map((c) => (
                <ColorContainer
                  active={color === c}
                  onClick={() => setColor(c)}
                >
                  <Color color={c} />
                </ColorContainer>
              ))}
            </ColorSelecter>
          </div>
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
        </Form>
      </Modal>
    </Container>
  );
};

export default AddTagModal;
