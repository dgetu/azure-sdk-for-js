// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* eslint-disable no-unused-expressions */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  KnownCharFilterName,
  KnownLexicalAnalyzerName,
  KnownLexicalTokenizerName,
  KnownSearchFieldDataType,
  KnownTokenFilterName,
  KnownVectorSearchAlgorithmKind,
  KnownVectorSearchAlgorithmMetric,
} from "../../src/generated/service";

import { KnownVectorFilterMode } from "../../src/generated/data";

import {
  ComplexDataType,
  KnownAnalyzerNames,
  KnownCharFilterNames,
  KnownTokenFilterNames,
  KnownTokenizerNames,
  SearchFieldDataType,
  VectorFilterMode,
  VectorSearchAlgorithmKind,
  VectorSearchAlgorithmMetric,
} from "../../src/index";

type IsIdentical<T1, T2> =
  (<T>() => T extends T1 ? true : false) extends <T>() => T extends T2 ? true : false ? any : never;

type ExpectSearchFieldDataType = Exclude<
  `${KnownSearchFieldDataType}` | `Collection(${KnownSearchFieldDataType})`,
  ComplexDataType | "Edm.Single"
>;
type ExpectVectorSearchAlgorithmMetric = `${KnownVectorSearchAlgorithmMetric}`;
type ExpectVectorSearchAlgorithmKind = `${KnownVectorSearchAlgorithmKind}`;
type ExpectVectorFilterMode = `${KnownVectorFilterMode}`;
type ExpectKnownCharFilterNames = `${KnownCharFilterName}`;
type ExpectKnownAnalyzerNames = `${KnownLexicalAnalyzerName}`;
type ExpectKnownTokenizerNames = `${KnownLexicalTokenizerName}`;
type ExpectKnownTokenFilterNames = `${KnownTokenFilterName}`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function fun() {
  const a: IsIdentical<ExpectSearchFieldDataType, SearchFieldDataType> = "pass";
  const b: IsIdentical<ExpectVectorSearchAlgorithmMetric, VectorSearchAlgorithmMetric> = "pass";
  const c: IsIdentical<ExpectVectorSearchAlgorithmKind, VectorSearchAlgorithmKind> = "pass";
  const d: IsIdentical<ExpectVectorFilterMode, VectorFilterMode> = "pass";
  const e: IsIdentical<ExpectKnownCharFilterNames, `${KnownCharFilterNames}`> = "pass";
  const f: IsIdentical<ExpectKnownAnalyzerNames, `${KnownAnalyzerNames}`> = "pass";
  const g: IsIdentical<ExpectKnownTokenizerNames, `${KnownTokenizerNames}`> = "pass";
  const h: IsIdentical<ExpectKnownTokenFilterNames, `${KnownTokenFilterNames}`> = "pass";

  return [a, b, c, d, e, f, g, h];
}
