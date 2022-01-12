import { FC, InputHTMLAttributes } from 'react';

import { PrimaryInput } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary';
}

const Input: FC<InputProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryInput {...props} />;
    default:
      return <></>;
  }
};

export default Input;
