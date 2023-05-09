/**
 * @generated SignedSource<<3d0b3003b59e0a10a4e1a14ec95d624f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookListItem_book$data = {
  readonly author: string | null;
  readonly cover: string | null;
  readonly description: string | null;
  readonly id: string | null;
  readonly price: number | null;
  readonly title: string | null;
  readonly " $fragmentType": "BookListItem_book";
};
export type BookListItem_book$key = {
  readonly " $data"?: BookListItem_book$data;
  readonly " $fragmentSpreads": FragmentRefs<"BookListItem_book">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookListItem_book",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "author",
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
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cover",
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};

(node as any).hash = "7fee50ee27c9b95c0004c17af0ca2f70";

export default node;
