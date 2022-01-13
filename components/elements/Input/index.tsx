import { FC, InputHTMLAttributes } from 'react';

import { PrimaryInput } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary';
}

const Input: FC<IInputProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryInput {...props} />;
    default:
      return <></>;
  }
};

export default Input;
