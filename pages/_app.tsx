import '../styles/globals.css';

import environment from 'config/relay/environment';
import theme from 'config/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { ThemeProvider } from '@mui/system';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <RelayEnvironmentProvider environment={environment}>
      <Head>
        <meta name="description" content="Generated by create todo app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RelayEnvironmentProvider>
    </>
  );
}

export default MyApp
