import {
  TodosPagination_list$key,
} from 'config/relay/__generated__/TodosPagination_list.graphql';
import {
  TodosPaginationQuery,
} from 'config/relay/__generated__/TodosPaginationQuery.graphql';
import { usePaginationFragment } from 'react-relay';

import {
  TodosPaginationFragment,
} from '../../graphql/fragment/TodosPagination.fragment';
import { TodoCard } from '../TodoCard';
import { Container } from './styles';
import { TodosListProps } from './TodosList.interface';

export const List = (props: TodosListProps) => {
    const {node} = props;
    const { data, hasNext, loadNext } = usePaginationFragment<TodosPaginationQuery, TodosPagination_list$key>(TodosPaginationFragment, node);
    
    const lists = data.todo_connection.edges;
    
    return (
        <Container dense>
            {lists.map(item => (
                <TodoCard item={item.node} key={item.cursor}/>
            ))}
        </Container>);
};