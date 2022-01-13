import { FC } from 'react';

import { picker } from '../../../styles/theme/colors';
import { ColorPickerColor, ColorPickerContainer, SectionTitle } from './styles';

export interface IColorPickerProps {
  color: string;
  setColor: (newValue: string) => void;
}

const ColorPicker: FC<IColorPickerProps> = ({ color, setColor }) => {
  return (
    <div>
      <SectionTitle>Color</SectionTitle>
      <ColorPickerContainer>
        {picker.map((c, index) => (
          <ColorPickerColor
            key={index}
            color={c}
            active={color === c}
            onClick={() => setColor(c)}
          />
        ))}
      </ColorPickerContainer>
    </div>
  );
};

export default ColorPicker;
