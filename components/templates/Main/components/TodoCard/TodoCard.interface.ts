import {
  TodosPagination_list,
} from "config/relay/__generated__/TodosPagination_list.graphql";

import { ListItemBaseProps } from "@mui/material";

export type TodoCardProps = {
  todo: TodosPagination_list["todo_connection"]["edges"][number]["node"];
  onClick: (id: string) => Promise<void>;
  connectionId: string;
  onUpdate?: () => void;
};

export interface ContainerType extends ListItemBaseProps {
  completed?: number;
}
