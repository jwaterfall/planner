import { FC, InputHTMLAttributes } from 'react';

import { PrimaryTextArea } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary';
}

const TextArea: FC<InputProps> = ({ variant = 'primary', ...props }) => {
  if (variant === 'primary') return <PrimaryTextArea {...props} />;

  return <></>;
};

export default TextArea;
