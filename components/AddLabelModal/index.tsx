import React, { FC, useState, MouseEvent } from "react";
import useInput from "../../hooks/useInput";
import { picker } from "../../theme/colors";
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

type Props = { setVisibility: (visible: boolean) => void };

const AddLabelModal: FC<Props> = ({ setVisibility }) => {
  const [name, handleOnChangeName] = useInput("");
  const [selectedColor, setSelectedColor] = useState(picker[0]);

  return (
    <Container>
      <Modal>
        <Title>Add Collection</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(name, selectedColor);
          }}
        >
          <div>
            <SectionTitle>Name</SectionTitle>
            <Input
              placeholder="My collection"
              value={name}
              onChange={handleOnChangeName}
            />
          </div>
          <div>
            <SectionTitle>Color</SectionTitle>
            <ColorSelecter>
              {picker.map((color) => (
                <ColorContainer
                  active={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                >
                  <Color color={color} />
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

export default AddLabelModal;
