import {
  TodosListQuery,
} from 'config/relay/__generated__/TodosListQuery.graphql';
import { PreloadedQuery } from 'react-relay';

export type MainProps = {
    todoListQueryRef: PreloadedQuery<TodosListQuery, Record<string, unknown>>;
}