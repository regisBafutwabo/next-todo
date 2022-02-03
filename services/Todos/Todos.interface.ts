import {
  AddTodoMutationVariables,
} from "../../config/relay/__generated__/AddTodoMutation.graphql";
import {
  UpdateTodoMutationVariables,
} from "../../config/relay/__generated__/UpdateTodoMutation.graphql";

export type CreateTodoParams = {
  variables: AddTodoMutationVariables;
  onCompleted?: () => void;
  onError?: (error: Error) => void;
  connectionId: string;
};

export type UpdateTodoParams = {
  variables: UpdateTodoMutationVariables;
  onCompleted?: () => void;
  onError?: (error: Error) => void;
};

export type DeleteTodoParams = UpdateTodoParams & {
  connectionId: string;
  deletedId: string;
};
