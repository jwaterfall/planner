import styled from 'styled-components';

import {
  foreground,
  overlay1,
  overlay2,
  selection,
  shadow,
  text,
  textTertiary,
} from '../../../theme/colors';
import { weight2, weight3 } from '../../../theme/font';

export const Container = styled.div`
  margin-left: auto;
`;

export const Menu = styled.div`
  position: absolute;
  z-index: 100;
  background: ${foreground};
  min-width: 12.5rem;
  padding: 0.75rem;
  border: 1px solid ${overlay2};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.25rem ${shadow};
`;

export const Item = styled.div``;
