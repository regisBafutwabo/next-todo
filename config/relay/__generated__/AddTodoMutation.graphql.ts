/**
 * @generated SignedSource<<c6c581b793859d57fce58bfe8d922445>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type todo_insert_input = {
  completed?: boolean | null;
  created_at?: string | null;
  deleted_at?: string | null;
  description?: string | null;
  id?: string | null;
  title?: string | null;
  updated_at?: string | null;
};
export type AddTodoMutation$variables = {
  object: todo_insert_input;
};
export type AddTodoMutationVariables = AddTodoMutation$variables;
export type AddTodoMutation$data = {
  readonly insert_todo_one: {
    readonly completed: boolean;
    readonly created_at: string;
    readonly description: string | null;
    readonly id: string;
    readonly title: string;
    readonly updated_at: string | null;
    readonly deleted_at: string | null;
  } | null;
};
export type AddTodoMutationResponse = AddTodoMutation$data;
export type AddTodoMutation = {
  variables: AddTodoMutationVariables;
  response: AddTodoMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "object"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "object",
        "variableName": "object"
      }
    ],
    "concreteType": "todo",
    "kind": "LinkedField",
    "name": "insert_todo_one",
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
    "name": "AddTodoMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8590524e47b9ab7e16c435c7398af8c5",
    "id": null,
    "metadata": {},
    "name": "AddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoMutation(\n  $object: todo_insert_input!\n) {\n  insert_todo_one(object: $object) {\n    completed\n    created_at\n    description\n    id\n    title\n    updated_at\n    deleted_at\n  }\n}\n"
  }
};
})();

(node as any).hash = "6aad63ce5660498c4168e2f2ebfc5b12";

export default node;
