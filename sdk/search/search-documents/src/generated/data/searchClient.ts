/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttpCompat from "@azure/core-http-compat";
import { DocumentsImpl } from "./operations";
import { Documents } from "./operationsInterfaces";
import {
  ApiVersion20210430Preview,
  SearchClientOptionalParams
} from "./models";

/** @internal */
export class SearchClient extends coreHttpCompat.ExtendedServiceClient {
  endpoint: string;
  indexName: string;
  apiVersion: ApiVersion20210430Preview;

  /**
   * Initializes a new instance of the SearchClient class.
   * @param endpoint The endpoint URL of the search service.
   * @param indexName The name of the index.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    indexName: string,
    apiVersion: ApiVersion20210430Preview,
    options?: SearchClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (indexName === undefined) {
      throw new Error("'indexName' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SearchClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-search-documents/12.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ??
        options.baseUri ??
        "{endpoint}/indexes('{indexName}')"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;
    this.indexName = indexName;
    this.apiVersion = apiVersion;
    this.documents = new DocumentsImpl(this);
  }

  documents: Documents;
}
