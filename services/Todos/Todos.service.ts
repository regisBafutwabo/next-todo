import {
  AddTodo,
} from "components/templates/Main/graphql/mutations/AddTodo.mutation";
import {
  UpdateTodo,
} from "components/templates/Main/graphql/mutations/UpdateTodo";
import RelayEnvironment from "config/relay/environment";
import { commitMutation } from "relay-runtime";
import { RelayService } from "services/Relay";

import {
  CreateTodoParams,
  DeleteTodoParams,
  UpdateTodoParams,
} from "./Todos.interface";

export class TodoService {
  static createTodo(params: CreateTodoParams) {
    const { onCompleted, variables, onError, connectionId } = params;

    return commitMutation(RelayEnvironment, {
      mutation: AddTodo,
      variables,
      onCompleted,
      updater: (store) => {
        const payload = store.getRootField("insert_todo_one");
        if (!payload) {
          return;
        }

        RelayService.onAddOneUpdater({
          store,
          connectionId,
          payload,
          edgeType: "todoEdge",
          insertionType: "Before",
        });
      },
      onError: (err) => {
        if (onError) {
          onError(err);
        }
      },
    });
  }

  static updateTodo(params: UpdateTodoParams) {
    const { onCompleted, variables, onError } = params;

    return commitMutation(RelayEnvironment, {
      mutation: UpdateTodo,
      variables,
      onCompleted,
      onError: (error) => {
        if (onError) {
          onError(error);
        }
      },
    });
  }

  static deleteTodo(params: DeleteTodoParams) {
    const { onCompleted, variables, onError, connectionId, deletedId } = params;

    return commitMutation(RelayEnvironment, {
      mutation: UpdateTodo,
      variables,
      onCompleted,
      updater: (store) => {
        const payload = store.getRootField("update_todo_by_pk");
        if (!payload) {
          return;
        }

        RelayService.onDeleteUpdater({
          store,
          connectionId,
          deletedId,
        });
      },
      onError: (error) => {
        if (onError) {
          onError(error);
        }
      },
    });
  }
}
