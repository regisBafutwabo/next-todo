import {
  TodosPagination_list$data,
} from "config/relay/__generated__/TodosPagination_list.graphql";
import {
  TodosPaginationQuery,
} from "config/relay/__generated__/TodosPaginationQuery.graphql";
import { LoadMoreFn } from "react-relay";

export type TodosListProps = {
  data: TodosPagination_list$data;
  hasNext: boolean;
  loadNext: LoadMoreFn<TodosPaginationQuery>;
  isLoadingNext: boolean;
  onUpdate?: () => void;
  completed?: number;
  count?: number;
};
