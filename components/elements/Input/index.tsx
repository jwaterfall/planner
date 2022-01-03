import { FC, InputHTMLAttributes } from 'react';

import { PrimaryInput } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary';
}

const Input: FC<InputProps> = ({ variant = 'primary', ...props }) => {
  if (variant === 'primary') return <PrimaryInput {...props} />;

  return <></>;
};

export default Input;
