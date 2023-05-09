/**
 * @generated SignedSource<<2d52a789d409938c9916fad759a0c1ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeBooksQuery$variables = {};
export type HomeBooksQuery$data = {
  readonly getBooks: ReadonlyArray<{
    readonly author: string | null;
    readonly cover: string | null;
    readonly description: string | null;
    readonly id: string | null;
    readonly price: number | null;
    readonly title: string | null;
  } | null> | null;
};
export type HomeBooksQuery = {
  response: HomeBooksQuery$data;
  variables: HomeBooksQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: 'Book',
      kind: 'LinkedField',
      name: 'getBooks',
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'title',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'author',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'description',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'price',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'cover',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'HomeBooksQuery',
      selections: v0 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'HomeBooksQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: 'cfd97ba34e25853749545cd4c1734902',
      id: null,
      metadata: {},
      name: 'HomeBooksQuery',
      operationKind: 'query',
      text: 'query HomeBooksQuery {\n  getBooks {\n    id\n    title\n    author\n    description\n    price\n    cover\n  }\n}\n',
    },
  };
})();

(node as any).hash = '61932a4aa30c30610d282251650481fe';

export default node;
