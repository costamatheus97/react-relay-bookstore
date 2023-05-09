/**
 * @generated SignedSource<<a6807603cb4e1e36e2688e9586442c27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookList_Query$variables = {};
export type BookList_Query$data = {
  readonly getBooks: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"BookListItem_book">;
  } | null> | null;
};
export type BookList_Query = {
  response: BookList_Query$data;
  variables: BookList_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BookList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "getBooks",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BookListItem_book"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BookList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "getBooks",
        "plural": true,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2e7a78f8b3f563e2bf0548a6f813033b",
    "id": null,
    "metadata": {},
    "name": "BookList_Query",
    "operationKind": "query",
    "text": "query BookList_Query {\n  getBooks {\n    ...BookListItem_book\n    id\n  }\n}\n\nfragment BookListItem_book on Book {\n  id\n  title\n  author\n  description\n  price\n  cover\n}\n"
  }
};

(node as any).hash = "31444db4a49b3b689af31b8f289f1c94";

export default node;
