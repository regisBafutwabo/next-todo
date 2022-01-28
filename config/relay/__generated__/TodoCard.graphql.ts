/**
 * @generated SignedSource<<7284846cce124e8d16f14ddd7fca7fad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoCard$data = {
  readonly completed: boolean;
  readonly created_at: string;
  readonly id: string;
  readonly title: string;
  readonly updated_at: string | null;
  readonly " $fragmentType": "TodoCard";
};
export type TodoCard = TodoCard$data;
export type TodoCard$key = {
  readonly " $data"?: TodoCard$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoCard">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoCard",
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
    }
  ],
  "type": "todo",
  "abstractKey": null
};

(node as any).hash = "57ed1a87dd0b599c998eed6b295a2140";

export default node;
