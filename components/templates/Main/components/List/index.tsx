import {
  MouseEvent,
  useCallback,
} from "react";

import { useRouter } from "next/router";

import { CircularProgress } from "@mui/material";

import { TodoCard } from "../TodoCard";
import {
  ButtonContainer,
  Container,
  LoadMoreButton,
} from "./styles";
import { TodosListProps } from "./TodosList.interface";

export const List = (props: TodosListProps) => {
  const { data, hasNext, isLoadingNext, loadNext } = props;
  const { push } = useRouter();

  const lists = data?.todo_connection?.edges;
  const connectionId = data?.todo_connection?.__id;

  const onClick = useCallback(
    () => async (event: MouseEvent<HTMLDivElement>, id: string) => {
      event.preventDefault();
      await push({ query: { id } });
    },
    [push]
  );

  const BottomAction = useCallback(() => {
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
  }, [hasNext, isLoadingNext, loadNext]);

  return (
    <>
      <Container dense>
        {lists &&
          lists.map((item) => (
            <TodoCard
              connectionId={connectionId}
              onClick={onClick}
              todo={item.node}
              key={item.cursor}
            />
          ))}
      </Container>
      {BottomAction()}
    </>
  );
};
