import { FC } from 'react';

import { StyledRadial } from './styles';

export interface RadialProps {
  checked: boolean;
}

const Radial: FC<RadialProps> = ({ checked }) => {
  return <StyledRadial checked={checked} />;
};

export default Radial;
