/**
 * @generated SignedSource<<4a7c92fae28c3e45e44a2b6ec3c4dbf8>>
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
  user_id?: string | null;
};
export type UpdateTodoMutation$variables = {
  id: string;
  set?: todo_set_input | null;
};
export type UpdateTodoMutationVariables = UpdateTodoMutation$variables;
export type UpdateTodoMutation$data = {
  readonly update_todo_by_pk: {
    readonly id: string;
    readonly completed: boolean;
    readonly created_at: string;
    readonly title: string;
    readonly description: string | null;
    readonly updated_at: string | null;
    readonly deleted_at: string | null;
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
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "pk_columns"
      }
    ],
    "concreteType": "todo",
    "kind": "LinkedField",
    "name": "update_todo_by_pk",
    "plural": false,
    "selections": [
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
        "name": "title",
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
        "name": "updated_at",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deleted_at",
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
    "cacheID": "858ce5f4679c485d6faa4a1fc2030697",
    "id": null,
    "metadata": {},
    "name": "UpdateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTodoMutation(\n  $id: uuid!\n  $set: todo_set_input\n) {\n  update_todo_by_pk(pk_columns: {id: $id}, _set: $set) {\n    id\n    completed\n    created_at\n    title\n    description\n    updated_at\n    deleted_at\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4d2673e32d891fc96ee40a40e71ad63";

export default node;
