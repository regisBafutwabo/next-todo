/**
 * @generated SignedSource<<4c060ac67ba64fdcdc0b9bb9d542948b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoAggregateQuery$variables = {
  id: string;
};
export type TodoAggregateQueryVariables = TodoAggregateQuery$variables;
export type TodoAggregateQuery$data = {
  readonly users_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly completed: {
          readonly aggregate: {
            readonly count: number;
          } | null;
        };
        readonly allTodos: {
          readonly aggregate: {
            readonly count: number;
          } | null;
        };
      };
    }>;
  };
};
export type TodoAggregateQueryResponse = TodoAggregateQuery$data;
export type TodoAggregateQuery = {
  variables: TodoAggregateQueryVariables;
  response: TodoAggregateQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "kind": "Literal",
  "name": "deleted_at",
  "value": {
    "_is_null": true
  }
},
v2 = {
  "fields": [
    {
      "kind": "Variable",
      "name": "_eq",
      "variableName": "id"
    }
  ],
  "kind": "ObjectValue",
  "name": "user_id"
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "todo_aggregate_fields",
    "kind": "LinkedField",
    "name": "aggregate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v4 = {
  "alias": "completed",
  "args": [
    {
      "fields": [
        {
          "kind": "Literal",
          "name": "completed",
          "value": {
            "_eq": true
          }
        },
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "kind": "ObjectValue",
      "name": "where"
    }
  ],
  "concreteType": "todo_aggregate",
  "kind": "LinkedField",
  "name": "todos_aggregate",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": "allTodos",
  "args": [
    {
      "fields": [
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "kind": "ObjectValue",
      "name": "where"
    }
  ],
  "concreteType": "todo_aggregate",
  "kind": "LinkedField",
  "name": "todos_aggregate",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoAggregateQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "usersConnection",
        "kind": "LinkedField",
        "name": "users_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "usersEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "users",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAggregateQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "usersConnection",
        "kind": "LinkedField",
        "name": "users_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "usersEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "users",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "31321a5f295eba8c01561fc71c4c21a8",
    "id": null,
    "metadata": {},
    "name": "TodoAggregateQuery",
    "operationKind": "query",
    "text": "query TodoAggregateQuery(\n  $id: uuid!\n) {\n  users_connection {\n    edges {\n      node {\n        completed: todos_aggregate(where: {deleted_at: {_is_null: true}, user_id: {_eq: $id}, completed: {_eq: true}}) {\n          aggregate {\n            count\n          }\n        }\n        allTodos: todos_aggregate(where: {deleted_at: {_is_null: true}, user_id: {_eq: $id}}) {\n          aggregate {\n            count\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ec2306e4344c44d04d214e3dfbdecd7e";

export default node;
