/**
 * @generated SignedSource<<eda6bd6b6d558a4daf71846df4306fa0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type order_by = "asc" | "asc_nulls_first" | "asc_nulls_last" | "desc" | "desc_nulls_first" | "desc_nulls_last" | "%future added value";
export type todo_order_by = {
  completed?: order_by | null;
  created_at?: order_by | null;
  deleted_at?: order_by | null;
  description?: order_by | null;
  id?: order_by | null;
  title?: order_by | null;
  updated_at?: order_by | null;
  user?: users_order_by | null;
  user_id?: order_by | null;
};
export type users_order_by = {
  auth0_id?: order_by | null;
  email?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  password?: order_by | null;
  picture?: order_by | null;
  todos_aggregate?: todo_aggregate_order_by | null;
};
export type todo_aggregate_order_by = {
  count?: order_by | null;
  max?: todo_max_order_by | null;
  min?: todo_min_order_by | null;
};
export type todo_max_order_by = {
  created_at?: order_by | null;
  deleted_at?: order_by | null;
  description?: order_by | null;
  id?: order_by | null;
  title?: order_by | null;
  updated_at?: order_by | null;
  user_id?: order_by | null;
};
export type todo_min_order_by = {
  created_at?: order_by | null;
  deleted_at?: order_by | null;
  description?: order_by | null;
  id?: order_by | null;
  title?: order_by | null;
  updated_at?: order_by | null;
  user_id?: order_by | null;
};
export type todo_bool_exp = {
  _and?: ReadonlyArray<todo_bool_exp> | null;
  _not?: todo_bool_exp | null;
  _or?: ReadonlyArray<todo_bool_exp> | null;
  completed?: Boolean_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  deleted_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  user?: users_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
};
export type Boolean_comparison_exp = {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: ReadonlyArray<boolean> | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: ReadonlyArray<boolean> | null;
};
export type timestamptz_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: ReadonlyArray<string> | null;
  _iregex?: string | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: ReadonlyArray<string> | null;
  _niregex?: string | null;
  _nlike?: string | null;
  _nregex?: string | null;
  _nsimilar?: string | null;
  _regex?: string | null;
  _similar?: string | null;
};
export type uuid_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type users_bool_exp = {
  _and?: ReadonlyArray<users_bool_exp> | null;
  _not?: users_bool_exp | null;
  _or?: ReadonlyArray<users_bool_exp> | null;
  auth0_id?: String_comparison_exp | null;
  email?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  password?: String_comparison_exp | null;
  picture?: String_comparison_exp | null;
  todos?: todo_bool_exp | null;
};
export type TodosPaginationQuery$variables = {
  after?: string | null;
  first?: number | null;
  order_by?: ReadonlyArray<todo_order_by> | null;
  where?: todo_bool_exp | null;
};
export type TodosPaginationQueryVariables = TodosPaginationQuery$variables;
export type TodosPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TodosPagination_list">;
};
export type TodosPaginationQueryResponse = TodosPaginationQuery$data;
export type TodosPaginationQuery = {
  variables: TodosPaginationQueryVariables;
  response: TodosPaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order_by"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "order_by",
    "variableName": "order_by"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodosPaginationQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodosPagination_list"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodosPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "todoConnection",
        "kind": "LinkedField",
        "name": "todo_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "todoEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "completed",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deleted_at",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updated_at",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "created_at",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "where",
          "order_by"
        ],
        "handle": "connection",
        "key": "List_todo_connection",
        "kind": "LinkedHandle",
        "name": "todo_connection"
      }
    ]
  },
  "params": {
    "cacheID": "fa20fff1dbc2f24135c51896c03a9175",
    "id": null,
    "metadata": {},
    "name": "TodosPaginationQuery",
    "operationKind": "query",
    "text": "query TodosPaginationQuery(\n  $after: String\n  $first: Int\n  $order_by: [todo_order_by!]\n  $where: todo_bool_exp\n) {\n  ...TodosPagination_list\n}\n\nfragment TodosPagination_list on query_root {\n  todo_connection(where: $where, order_by: $order_by, first: $first, after: $after) {\n    edges {\n      cursor\n      node {\n        completed\n        id\n        title\n        deleted_at\n        updated_at\n        created_at\n        description\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b166021e4d2f4d49050bfd46b48eb328";

export default node;
