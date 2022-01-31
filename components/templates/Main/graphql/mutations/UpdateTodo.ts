import { graphql } from 'relay-runtime';

export const UpdateTodo = graphql`
    mutation UpdateTodoMutation($id:uuid!,$set: todo_set_input) {
        update_todo(where: {id: {_eq: $id}}, _set: $set) {
            returning {
                completed
                created_at
                updated_at
                title
                id
            }
        }
    }
`;