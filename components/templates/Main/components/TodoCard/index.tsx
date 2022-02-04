import {
  useCallback,
  useState,
} from "react";

import { useSnackbar } from "notistack";
import { TodoService } from "services";
import { validateUUID } from "utils/validateUUID";

import {
  Checkbox,
  CircularProgress,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Container } from "./styles";
import { TodoCardProps } from "./TodoCard.interface";

export const TodoCard = ({ todo, onClick }: TodoCardProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  const handleToggle = useCallback(() => {
    setLoading(true);

    TodoService.updateTodo({
      variables: {
        id: validateUUID(todo.id),
        set: {
          completed: !todo.completed,
        },
      },
      onCompleted: () => setLoading(false),
      onError: (err) => {
        enqueueSnackbar(err.message, { variant: "error" });
        setLoading(false);
      },
    });
  }, [enqueueSnackbar, todo]);

  return (
    <Container
      disablePadding
      completed={todo.completed ? 1 : 0}
      secondaryAction={
        loading ? (
          <CircularProgress color="secondary" size="24px" />
        ) : (
          <Checkbox
            edge="end"
            onChange={handleToggle}
            checked={todo.completed}
            color="secondary"
          />
        )
      }
    >
      <ListItemButton
        onClick={async (event) => {
          event.preventDefault();
          await onClick(todo.id);
        }}
      >
        <ListItemText primary={todo.title} />
      </ListItemButton>
    </Container>
  );
};
