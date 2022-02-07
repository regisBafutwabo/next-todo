/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  useCallback,
  useEffect,
} from "react";

import { HeadTitle } from "components/_common";
import { StandardLayout } from "components/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@mui/material";

const AuthCallback: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { replace } = useRouter();

  const handleAccessToken = useCallback(async () => {
    if (isAuthenticated) {
      try {
        const accessToken = await getAccessTokenSilently();
        if (accessToken) {
          // localStorage.setItem("tok", accessToken);

          replace("/");
        }
      } catch (error) {
        enqueueSnackbar(`error while handling the access Token:${error}`, {
          variant: "error",
        });
      }
    }
  }, [getAccessTokenSilently, replace, isAuthenticated, enqueueSnackbar]);

  useEffect(() => {
    handleAccessToken();
  }, [handleAccessToken]);

  return (
    <>
      <HeadTitle title="Todo - Loading..." />
      <StandardLayout>
        <CircularProgress color="secondary" />
      </StandardLayout>
    </>
  );
};

export default AuthCallback;
