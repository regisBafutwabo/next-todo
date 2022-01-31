/**
 * @generated SignedSource<<52eaa55e334532a59aecc2a4b95ca64a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type todo_set_input = {
  completed?: boolean | null;
  created_at?: string | null;
  deleted_at?: string | null;
  description?: string | null;
  id?: string | null;
  title?: string | null;
  updated_at?: string | null;
};
export type UpdateTodoMutation$variables = {
  id: string;
  set?: todo_set_input | null;
};
export type UpdateTodoMutationVariables = UpdateTodoMutation$variables;
export type UpdateTodoMutation$data = {
  readonly update_todo: {
    readonly returning: ReadonlyArray<{
      readonly completed: boolean;
      readonly created_at: string;
      readonly updated_at: string | null;
      readonly title: string;
      readonly id: string;
    }>;
  } | null;
};
export type UpdateTodoMutationResponse = UpdateTodoMutation$data;
export type UpdateTodoMutation = {
  variables: UpdateTodoMutationVariables;
  response: UpdateTodoMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "set"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_set",
        "variableName": "set"
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "todo_mutation_response",
    "kind": "LinkedField",
    "name": "update_todo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "todo",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
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
            "name": "created_at",
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
            "name": "title",
            "storageKey": null
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9716507b33e05dd5e62f6f2f7b8d6ad6",
    "id": null,
    "metadata": {},
    "name": "UpdateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTodoMutation(\n  $id: uuid!\n  $set: todo_set_input\n) {\n  update_todo(where: {id: {_eq: $id}}, _set: $set) {\n    returning {\n      completed\n      created_at\n      updated_at\n      title\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a7b60bd9cd16c73258a4bbfb95a96bc1";

export default node;
