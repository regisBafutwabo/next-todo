// eslint-disable react/jsx-props-no-spreading
// eslint-disable jsx-props-no-spreading
import "../styles/globals.css";

import {
  useMemo,
  useState,
} from "react";

import {
  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
} from "_constants";
import environment from "config/relay/environment";
import theme from "config/theme";
import { ColorModeContext } from "context/ThemeContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { getDesignPalettes } from "utils/designPalette";

import { Auth0Provider } from "@auth0/auth0-react";
import {
  createTheme,
  PaletteMode,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";

function MetaTags() {
  return (
    <Head>
      <meta name="description" content="Generated by create todo app" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
        localStorage.setItem("mode", mode === "light" ? "dark" : "light");
      },
    }),
    [mode]
  );

  const MuiTheme = useMemo(
    () => (mode ? createTheme(getDesignPalettes(mode)) : theme),
    [mode]
  );

  return (
    <>
      <MetaTags />
      <RelayEnvironmentProvider environment={environment}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={MuiTheme}>
            <Auth0Provider
              domain={AUTH_DOMAIN}
              clientId={AUTH_CLIENT_ID}
              audience="todo-next"
              redirectUri={
                typeof window !== "undefined"
                  ? window.location.origin
                  : "http://localhost:3000"
              }
            >
              <SnackbarProvider>
                <Component {...pageProps} />
              </SnackbarProvider>
            </Auth0Provider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </RelayEnvironmentProvider>
    </>
  );
}

export default MyApp;
