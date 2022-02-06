import { graphql } from "react-relay";

export const TodoAggregate = graphql`
  query TodoAggregateQuery($id: uuid!) {
    users_connection {
      edges {
        node {
          completed: todos_aggregate(
            where: {
              deleted_at: { _is_null: true }
              user_id: { _eq: $id }
              completed: { _eq: true }
            }
          ) {
            aggregate {
              count
            }
          }
          allTodos: todos_aggregate(
            where: { deleted_at: { _is_null: true }, user_id: { _eq: $id } }
          ) {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
`;
