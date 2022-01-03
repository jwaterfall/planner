import { FC } from 'react';

import { picker } from '../../../styles/theme/colors';
import { ColorPickerColor, ColorPickerContainer, SectionTitle } from './styles';

export interface ColorPickerProps {
  value: string;
  onChange: (newValue: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ value, onChange }) => {
  return (
    <>
      <SectionTitle>Color</SectionTitle>
      <ColorPickerContainer>
        {picker.map((c, index) => (
          <ColorPickerColor
            key={index}
            color={c}
            active={value === c}
            onClick={() => onChange(c)}
          />
        ))}
      </ColorPickerContainer>
    </>
  );
};

export default ColorPicker;
