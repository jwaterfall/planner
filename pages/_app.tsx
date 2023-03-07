import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Navbar from '../components/Navbar';
import '../globals.css';
import GlobalStyle from '../styles/GlobalStyle';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ mode: 'dark' }}>
        <Normalize />
        <GlobalStyle />
        <div className="flex flex-col h-screen bg-neutral-900">
          <div className="flex-grow overflow-y-auto">
            <Component {...pageProps} />
          </div>
          <Navbar />
        </div>
        <div id="menus" />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </UserProvider>
);

export default MyApp;
