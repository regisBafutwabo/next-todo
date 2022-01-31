import {
  TodosListQuery,
} from "config/relay/__generated__/TodosListQuery.graphql";
import { useRouter } from "next/router";
import { usePreloadedQuery } from "react-relay";

import {
  List,
  TodoDetail,
} from "./components";
import { TodosList } from "./graphql/queries/TodosList.query";
import { MainProps } from "./Main.interface";
import { Container } from "./styles";

export const Main = (props: MainProps) => {
  const { query } = useRouter();
  const { todoListQueryRef } = props;
  const data = usePreloadedQuery<TodosListQuery>(TodosList, todoListQueryRef);

  return (
    <Container>
      <List node={data} />
      {query.id ? <TodoDetail /> : undefined}
    </Container>
  );
};
