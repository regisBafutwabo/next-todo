import {
  Suspense,
  useEffect,
} from "react";

import { HeadTitle } from "components/_common";
import { StandardLayout } from "components/layout";
import { Main } from "components/templates";
import {
  TodosList,
} from "components/templates/Main/graphql/queries/TodosList.query";
import {
  TodosListQuery,
} from "config/relay/__generated__/TodosListQuery.graphql";
import type { NextPage } from "next";
import { useQueryLoader } from "react-relay";

import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

const Home: NextPage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [todoListQueryRef, todoListLoadQuery] =
    useQueryLoader<TodosListQuery>(TodosList);

  useEffect(() => {
    if (isAuthenticated) {
      todoListLoadQuery({
        first: 5,
        where: { deleted_at: { _is_null: true } },
        order_by: [{ completed: "asc" }, { created_at: "desc" }],
      });
    }
  }, [todoListLoadQuery, isAuthenticated]);

  return (
    <>
      <HeadTitle title="Todo - Home" />
      <StandardLayout>
        <Typography
          variant="h1"
          sx={{
            margin: 0,
            lineHeight: 1.15,
            textAlign: "center",
            fontSize: {
              xs: "3rem",
              sm: "4rem",
            },
          }}
          color="secondary"
          fontWeight={500}
        >
          Welcome to Todos!
        </Typography>

        {todoListQueryRef && isAuthenticated ? (
          <Suspense fallback={<CircularProgress color="secondary" />}>
            <Main todoListQueryRef={todoListQueryRef} />
            <Button
              color="secondary"
              variant="contained"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Suspense>
        ) : (
          <Button
            color="secondary"
            variant="contained"
            onClick={() =>
              loginWithRedirect({
                redirectUri: `${window.location.origin}/callback`,
              })
            }
          >
            Login
          </Button>
        )}
      </StandardLayout>
    </>
  );
};

export default Home;
