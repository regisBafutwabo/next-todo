/**
 * @generated SignedSource<<94aad488ee1d45cdc4b036525126c6ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoAggregateQuery$variables = {};
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
var v0 = {
  "_is_null": true
},
v1 = [
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
v2 = {
  "alias": "completed",
  "args": [
    {
      "kind": "Literal",
      "name": "where",
      "value": {
        "completed": {
          "_eq": true
        },
        "deleted_at": (v0/*: any*/)
      }
    }
  ],
  "concreteType": "todo_aggregate",
  "kind": "LinkedField",
  "name": "todos_aggregate",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": "todos_aggregate(where:{\"completed\":{\"_eq\":true},\"deleted_at\":{\"_is_null\":true}})"
},
v3 = {
  "alias": "allTodos",
  "args": [
    {
      "kind": "Literal",
      "name": "where",
      "value": {
        "deleted_at": (v0/*: any*/)
      }
    }
  ],
  "concreteType": "todo_aggregate",
  "kind": "LinkedField",
  "name": "todos_aggregate",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": "todos_aggregate(where:{\"deleted_at\":{\"_is_null\":true}})"
};
return {
  "fragment": {
    "argumentDefinitions": [],
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
                  (v2/*: any*/),
                  (v3/*: any*/)
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
    "argumentDefinitions": [],
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
                  (v2/*: any*/),
                  (v3/*: any*/),
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
    "cacheID": "3f0ad5ae24fe0e83c89fb0769c54d719",
    "id": null,
    "metadata": {},
    "name": "TodoAggregateQuery",
    "operationKind": "query",
    "text": "query TodoAggregateQuery {\n  users_connection {\n    edges {\n      node {\n        completed: todos_aggregate(where: {deleted_at: {_is_null: true}, completed: {_eq: true}}) {\n          aggregate {\n            count\n          }\n        }\n        allTodos: todos_aggregate(where: {deleted_at: {_is_null: true}}) {\n          aggregate {\n            count\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ad5611293e5b5822da47a595c0c5e08";

export default node;
