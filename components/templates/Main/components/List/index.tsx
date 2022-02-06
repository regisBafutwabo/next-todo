import {
  useCallback,
  useMemo,
} from "react";

import { useRouter } from "next/router";

import { CircularProgress } from "@mui/material";

import { TodoCard } from "../TodoCard";
import {
  ButtonContainer,
  Container,
  LoadMoreButton,
  Progress,
  ProgressContainer,
  ProgressDetail,
} from "./styles";
import { TodosListProps } from "./TodosList.interface";

export const List = (props: TodosListProps) => {
  const { data, hasNext, isLoadingNext, loadNext, onUpdate, completed, count } =
    props;
  const { push } = useRouter();

  const lists = useMemo(() => data?.todo_connection?.edges, [data]);
  const connectionId = useMemo(() => data?.todo_connection?.__id, [data]);

  const onClick = async (id: string) => {
    await push({ query: { id } });
  };

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
        <ProgressContainer>
          <Progress
            variant="determinate"
            value={
              completed && count ? Math.floor((completed * 100) / count) : 0
            }
            color="secondary"
          />
          <ProgressDetail>{`${completed}/${count}`}</ProgressDetail>
        </ProgressContainer>

        {lists &&
          lists.map((item) => (
            <TodoCard
              connectionId={connectionId}
              onClick={onClick}
              todo={item.node}
              key={item.node.id}
              onUpdate={onUpdate}
            />
          ))}
      </Container>
      {BottomAction()}
    </>
  );
};
