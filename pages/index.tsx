import {
  Suspense,
  useContext,
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
import { ColorModeContext } from "context/ThemeContext";
import type { NextPage } from "next";
import { useQueryLoader } from "react-relay";
import { ModeSwitch } from "styles/MuiSwitch";

import {
  CircularProgress,
  FormControl,
  Typography,
  useTheme,
} from "@mui/material";

const Home: NextPage = () => {
  const { palette } = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const [todoListQueryRef, todoListLoadQuery] =
    useQueryLoader<TodosListQuery>(TodosList);

  useEffect(() => {
    todoListLoadQuery({
      first: 5,
      where: { deleted_at: { _is_null: true } },
      order_by: [{ completed: "asc" }, { created_at: "desc" }],
    });
  }, [todoListLoadQuery]);

  return (
    <>
      <HeadTitle title="Todo - Home" />
      <StandardLayout>
        <FormControl>
          <ModeSwitch
            checked={palette.mode === "light"}
            // defaultChecked={}
            onChange={() => toggleColorMode()}
          />
        </FormControl>

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

        {todoListQueryRef ? (
          <Suspense fallback={<CircularProgress color="secondary" />}>
            <Main todoListQueryRef={todoListQueryRef} />
          </Suspense>
        ) : undefined}
      </StandardLayout>
    </>
  );
};

export default Home;
