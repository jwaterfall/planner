import { FC, InputHTMLAttributes } from 'react';

import { PrimaryTextArea } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary';
}

const TextArea: FC<InputProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryTextArea {...props} />;
    default:
      return <></>;
  }
};

export default TextArea;
