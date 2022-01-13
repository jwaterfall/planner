import { FC, TextareaHTMLAttributes } from 'react';

import { PrimaryTextArea } from './styles';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary';
}

const TextArea: FC<ITextAreaProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryTextArea {...props} />;
    default:
      return <></>;
  }
};

export default TextArea;
