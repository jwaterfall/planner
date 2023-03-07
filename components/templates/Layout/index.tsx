import React, { FC, PropsWithChildren } from 'react';

import Sidebar from '../../modules/Sidebar';
import { Container, Page } from './styles';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Sidebar />
    <Page>{children}</Page>
  </Container>
);

export default Layout;
