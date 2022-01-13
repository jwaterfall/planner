import { FC } from 'react';

import { StyledRadial } from './styles';

export interface IRadialProps {
  checked: boolean;
}

const Radial: FC<IRadialProps> = ({ checked }) => {
  return <StyledRadial checked={checked} />;
};

export default Radial;
