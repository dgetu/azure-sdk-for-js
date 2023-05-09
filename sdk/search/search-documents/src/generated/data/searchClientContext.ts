/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ApiVersion20200630, SearchClientOptionalParams } from "./models";

const packageName = "@azure/search-documents";
const packageVersion = "11.3.2";

/** @internal */
export class SearchClientContext extends coreHttp.ServiceClient {
  endpoint: string;
  indexName: string;
  apiVersion: ApiVersion20200630;

  /**
   * Initializes a new instance of the SearchClientContext class.
   * @param endpoint The endpoint URL of the search service.
   * @param indexName The name of the index.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    indexName: string,
    apiVersion: ApiVersion20200630,
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

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{endpoint}/indexes('{indexName}')";

    // Parameter assignments
    this.endpoint = endpoint;
    this.indexName = indexName;
    this.apiVersion = apiVersion;
  }
}
