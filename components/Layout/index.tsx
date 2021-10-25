import React, { FC } from "react";
import Head from "next/head";
import Sidebar from "../Sidebar";
import { Container, Page } from "./styles";

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({ children, title }) => (
  <Container>
    <Head>
      <title>Planner {title && `| ${title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar />
    <Page>{children}</Page>
  </Container>
);

export default Layout;
