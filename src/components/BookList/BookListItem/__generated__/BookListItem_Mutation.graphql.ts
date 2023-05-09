/**
 * @generated SignedSource<<b70b3605911ec1ecd3a45644645ff0e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BookListItem_Mutation$variables = {
  input: string;
};
export type BookListItem_Mutation$data = {
  readonly deleteBook: string;
};
export type BookListItem_Mutation = {
  response: BookListItem_Mutation$data;
  variables: BookListItem_Mutation$variables;
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
        "name": "id",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteBook",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookListItem_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookListItem_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7dd09edba4f8c8b7d510d89bc66fc75d",
    "id": null,
    "metadata": {},
    "name": "BookListItem_Mutation",
    "operationKind": "mutation",
    "text": "mutation BookListItem_Mutation(\n  $input: ID!\n) {\n  deleteBook(id: $input)\n}\n"
  }
};
})();

(node as any).hash = "fd898b22735e6575ad3c6e953fa90c6c";

export default node;
