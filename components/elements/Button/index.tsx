import { ButtonHTMLAttributes, FC } from 'react';

import { PrimaryButton, SecondaryButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  if (variant === 'primary') return <PrimaryButton {...props} />;

  if (variant === 'secondary') return <SecondaryButton {...props} />;

  return <></>;
};

export default Button;
