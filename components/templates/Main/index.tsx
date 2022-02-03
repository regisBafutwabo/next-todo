import { useState } from "react";

import {
  TodosListQuery,
} from "config/relay/__generated__/TodosListQuery.graphql";
import {
  TodosPagination_list$key,
} from "config/relay/__generated__/TodosPagination_list.graphql";
import {
  TodosPaginationQuery,
} from "config/relay/__generated__/TodosPaginationQuery.graphql";
import { useRouter } from "next/router";
import {
  usePaginationFragment,
  usePreloadedQuery,
} from "react-relay";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

import {
  List,
  TodoDetail,
} from "./components";
import { AddCard } from "./components/AddCard";
import {
  TodosPaginationFragment,
} from "./graphql/fragment/TodosPagination.fragment";
import { TodosList } from "./graphql/queries/TodosList.query";
import { MainProps } from "./Main.interface";
import { Container } from "./styles";

export const Main = (props: MainProps) => {
  const { query } = useRouter();
  const [openAdd, setOpenAdd] = useState(false);
  const { todoListQueryRef } = props;

  const node = usePreloadedQuery<TodosListQuery>(TodosList, todoListQueryRef);
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment<
    TodosPaginationQuery,
    TodosPagination_list$key
  >(TodosPaginationFragment, node);

  return (
    <Container>
      <Fab color="secondary" aria-label="add" onClick={() => setOpenAdd(true)}>
        <AddIcon />
      </Fab>
      <List
        data={data}
        hasNext={hasNext}
        loadNext={loadNext}
        isLoadingNext={isLoadingNext}
      />
      {query.id ? (
        <TodoDetail connectionId={data?.todo_connection?.__id} />
      ) : undefined}
      {openAdd ? (
        <AddCard
          connectionId={data?.todo_connection.__id || ""}
          onClose={() => setOpenAdd(false)}
        />
      ) : undefined}
    </Container>
  );
};
