import { FC, TextareaHTMLAttributes } from 'react';

import { PrimaryTextArea } from './styles';

const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <PrimaryTextArea {...props} />
);

export default TextArea;
