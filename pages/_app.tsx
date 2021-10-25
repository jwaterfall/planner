import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import GlobalStyle from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
