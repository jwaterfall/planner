import React, { FC } from 'react';

import Sidebar from '../Sidebar';
import { Container, Page } from './styles';

const Layout: FC = ({ children }) => (
  <Container>
    <Sidebar />
    <Page>{children}</Page>
  </Container>
);

export default Layout;
