/**
 * @generated SignedSource<<c65b5541292fe990c0c2160b3d0b4682>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type todo_constraint = "todo_pkey" | "%future added value";
export type todo_update_column = "completed" | "created_at" | "deleted_at" | "description" | "id" | "title" | "updated_at" | "user_id" | "%future added value";
export type users_constraint = "users_auth0_id_key" | "users_email_key" | "users_pkey" | "%future added value";
export type users_update_column = "auth0_id" | "email" | "id" | "name" | "password" | "picture" | "%future added value";
export type todo_insert_input = {
  completed?: boolean | null;
  created_at?: string | null;
  deleted_at?: string | null;
  description?: string | null;
  id?: string | null;
  title?: string | null;
  updated_at?: string | null;
  user?: users_obj_rel_insert_input | null;
  user_id?: string | null;
};
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: users_on_conflict | null;
};
export type users_insert_input = {
  auth0_id?: string | null;
  email?: string | null;
  id?: string | null;
  name?: string | null;
  password?: string | null;
  picture?: string | null;
  todos?: todo_arr_rel_insert_input | null;
};
export type todo_arr_rel_insert_input = {
  data: ReadonlyArray<todo_insert_input>;
  on_conflict?: todo_on_conflict | null;
};
export type todo_on_conflict = {
  constraint: todo_constraint;
  update_columns: ReadonlyArray<todo_update_column>;
  where?: todo_bool_exp | null;
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
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: ReadonlyArray<users_update_column>;
  where?: users_bool_exp | null;
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
