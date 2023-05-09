/**
 * @generated SignedSource<<886fb6801ba41db342852748f9691c48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BookInput = {
  author: string;
  cover: string;
  description: string;
  price: number;
  title: string;
};
export type CreateBookForm_Mutation$variables = {
  input: BookInput;
};
export type CreateBookForm_Mutation$data = {
  readonly createBook: {
    readonly author: string | null;
    readonly cover: string | null;
    readonly description: string | null;
    readonly id: string | null;
    readonly price: number | null;
    readonly title: string | null;
  } | null;
};
export type CreateBookForm_Mutation = {
  response: CreateBookForm_Mutation$data;
  variables: CreateBookForm_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "input"
      }
    ],
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "createBook",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateBookForm_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateBookForm_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a37c6fe34a07196254a4a7964d21e663",
    "id": null,
    "metadata": {},
    "name": "CreateBookForm_Mutation",
    "operationKind": "mutation",
    "text": "mutation CreateBookForm_Mutation(\n  $input: BookInput!\n) {\n  createBook(payload: $input) {\n    id\n    title\n    author\n    description\n    price\n    cover\n  }\n}\n"
  }
};
})();

(node as any).hash = "61d33fc5025ee970060ec044d209c57e";

export default node;
