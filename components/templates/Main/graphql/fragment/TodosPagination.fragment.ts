import { graphql } from 'react-relay';

export const TodosPaginationFragment = graphql`
  fragment TodosPagination_list on query_root @refetchable(queryName: "TodosPaginationQuery") {
    todo_connection(where: $where, order_by: $order_by, first: $first, after: $after) @connection(key: "List_todo_connection") {
      __id
      edges {
        cursor
        node {
          ...TodoCard
        }
      }
    }
  }
`;
