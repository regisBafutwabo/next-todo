import { graphql } from "relay-runtime";

export const UpdateTodo = graphql`
  mutation UpdateTodoMutation($id: uuid!, $set: todo_set_input) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: $set) {
      id
      completed
      created_at
      title
      description
      updated_at
      deleted_at
    }
  }
`;
