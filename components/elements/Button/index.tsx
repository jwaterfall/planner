import { ButtonHTMLAttributes, FC } from 'react';

import { PrimaryButton, SecondaryButton } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: FC<IButtonProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    default:
      return <></>;
  }
};

export default Button;
