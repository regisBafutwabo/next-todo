import { graphql } from "relay-runtime";

export const AddTodo = graphql`
  mutation AddTodoMutation($object: todo_insert_input!) {
    insert_todo_one(object: $object) {
      completed
      created_at
      description
      id
      title
      updated_at
      deleted_at
    }
  }
`;
