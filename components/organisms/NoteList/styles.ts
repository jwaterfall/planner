import styled from 'styled-components';

import { foreground, shadow } from '../../../styles/theme/colors';
import { weight2 } from '../../../styles/theme/font';

export const Card = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`;
