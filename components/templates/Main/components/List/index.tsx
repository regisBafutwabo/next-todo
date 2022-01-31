import {
  TodosPagination_list$key,
} from "config/relay/__generated__/TodosPagination_list.graphql";
import {
  TodosPaginationQuery,
} from "config/relay/__generated__/TodosPaginationQuery.graphql";
import { useRouter } from "next/router";
import { usePaginationFragment } from "react-relay";

import { CircularProgress } from "@mui/material";

import {
  TodosPaginationFragment,
} from "../../graphql/fragment/TodosPagination.fragment";
import { TodoCard } from "../TodoCard";
import {
  ButtonContainer,
  Container,
  LoadMoreButton,
} from "./styles";
import { TodosListProps } from "./TodosList.interface";

export const List = (props: TodosListProps) => {
  const { node } = props;
  const { push } = useRouter();

  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment<
    TodosPaginationQuery,
    TodosPagination_list$key
  >(TodosPaginationFragment, node);

  const lists = data?.todo_connection?.edges;

  const onClick = async (event: any, id: string) => {
    event.preventDefault();
    await push({ query: { id } });
  };

  const BottomAction = () => {
    if (hasNext) {
      return (
        <ButtonContainer>
          <LoadMoreButton onClick={() => loadNext(5)}>Load More</LoadMoreButton>
        </ButtonContainer>
      );
    }
    if (isLoadingNext) {
      return <CircularProgress color="secondary" />;
    } 
      return undefined;
    
  };

  return (
    <>
      <Container dense>
        {lists &&
          lists.map((item) => (
            <TodoCard onClick={onClick} todo={item.node} key={item.cursor} />
          ))}
      </Container>
      {BottomAction()}
    </>
  );
};
