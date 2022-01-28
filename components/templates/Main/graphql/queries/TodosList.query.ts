import { graphql } from 'react-relay';

export const TodosList = graphql`
    query TodosListQuery($where:todo_bool_exp, $order_by: [todo_order_by!], $first:Int, $after: String) {
        ...TodosPagination_list
    }
`;