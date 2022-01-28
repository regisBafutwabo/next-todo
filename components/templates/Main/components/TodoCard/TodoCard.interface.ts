import {
  TodosPagination_list,
} from 'config/relay/__generated__/TodosPagination_list.graphql';

export type TodoCardProps = {
    item: TodosPagination_list['todo_connection']['edges'][number]['node'];

}