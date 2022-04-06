import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Layout from '../components/templates/Layout';
import GlobalStyle from '../styles/GlobalStyle';

const queryClient = new QueryClient();

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ mode: 'dark' }}>
        <Normalize />
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div id="menus" />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </UserProvider>
);

export default MyApp;
