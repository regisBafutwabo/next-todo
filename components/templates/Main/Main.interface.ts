import {
  TodosListQuery,
} from "config/relay/__generated__/TodosListQuery.graphql";
import { PreloadedQuery } from "react-relay";
import {
  CacheConfig,
  FetchPolicy,
} from "relay-runtime";

export type MainProps = {
  todoListQueryRef: PreloadedQuery<TodosListQuery, Record<string, unknown>>;
};

export type QueryArgsType = {
  options: {
    fetchKey: number;
    fetchPolicy?: FetchPolicy | undefined;
    networkCacheConfig?: CacheConfig | undefined;
  };
};
