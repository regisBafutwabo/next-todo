import {
  useMemo,
  useState,
} from "react";

import {
  TodoAggregateQuery,
} from "config/relay/__generated__/TodoAggregateQuery.graphql";
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
  useLazyLoadQuery,
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
import { TodoAggregate } from "./graphql/queries/TodoAggregate.query";
import { TodosList } from "./graphql/queries/TodosList.query";
import {
  MainProps,
  QueryArgsType,
} from "./Main.interface";
import { Container } from "./styles";

export const Main = (props: MainProps) => {
  const { todoListQueryRef } = props;
  const { query } = useRouter();

  const [openAdd, setOpenAdd] = useState(false);
  const [queryArgs, setQueryArgs] = useState<QueryArgsType>({
    options: { fetchKey: 0, fetchPolicy: "network-only" },
    // variables: { id: getId() },
  });

  const node = usePreloadedQuery<TodosListQuery>(TodosList, todoListQueryRef);
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment<
    TodosPaginationQuery,
    TodosPagination_list$key
  >(TodosPaginationFragment, node);

  const {
    users_connection: { edges },
  } = useLazyLoadQuery<TodoAggregateQuery>(
    TodoAggregate,
    {},
    queryArgs.options
  );

  const count = useMemo(() => edges[0].node.allTodos.aggregate?.count, [edges]);
  const completed = useMemo(
    () => edges[0].node.completed.aggregate?.count,
    [edges]
  );

  const onUpdate = () => {
    setQueryArgs((prev) => ({
      options: {
        ...prev.options,
        fetchKey: (prev.options.fetchKey ?? 0) + 1,
      },
    }));
  };

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
        onUpdate={onUpdate}
        completed={completed}
        count={count}
      />
      {query.id ? (
        <TodoDetail
          connectionId={data?.todo_connection?.__id}
          onUpdate={onUpdate}
        />
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
