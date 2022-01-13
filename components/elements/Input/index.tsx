import { FC, InputHTMLAttributes } from 'react';

import { PrimaryInput } from './styles';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <PrimaryInput {...props} />
);

export default Input;
