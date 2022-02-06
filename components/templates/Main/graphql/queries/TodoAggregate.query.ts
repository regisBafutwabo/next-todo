import { graphql } from "react-relay";

export const TodoAggregate = graphql`
  query TodoAggregateQuery {
    users_connection {
      edges {
        node {
          completed: todos_aggregate(
            where: { deleted_at: { _is_null: true }, completed: { _eq: true } }
          ) {
            aggregate {
              count
            }
          }
          allTodos: todos_aggregate(where: { deleted_at: { _is_null: true } }) {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
`;
