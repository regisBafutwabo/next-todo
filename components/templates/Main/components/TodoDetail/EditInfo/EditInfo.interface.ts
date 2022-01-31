import {
  TodoDetailsQuery$data,
} from "config/relay/__generated__/TodoDetailsQuery.graphql";

export type EditInfoProps = {
  todo: TodoDetailsQuery$data["node"];
  handleSubmit: () => void;
};

export type IFormInput = {
  title: string;
  description: string;
  completedAt: boolean;
};
