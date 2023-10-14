/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttpCompat from "@azure/core-http-compat";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import {
  DataSourcesImpl,
  IndexersImpl,
  SkillsetsImpl,
  SynonymMapsImpl,
  IndexesImpl
} from "./operations";
import {
  DataSources,
  Indexers,
  Skillsets,
  SynonymMaps,
  Indexes
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ApiVersion20231101,
  SearchServiceClientOptionalParams,
  GetServiceStatisticsOptionalParams,
  GetServiceStatisticsResponse
} from "./models";

/** @internal */
export class SearchServiceClient extends coreHttpCompat.ExtendedServiceClient {
  endpoint: string;
  apiVersion: ApiVersion20231101;

  /**
   * Initializes a new instance of the SearchServiceClient class.
   * @param endpoint The endpoint URL of the search service.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    apiVersion: ApiVersion20231101,
    options?: SearchServiceClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SearchServiceClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-search-documents/12.0.0`;
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
      endpoint: options.endpoint ?? options.baseUri ?? "{endpoint}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;
    this.apiVersion = apiVersion;
    this.dataSources = new DataSourcesImpl(this);
    this.indexers = new IndexersImpl(this);
    this.skillsets = new SkillsetsImpl(this);
    this.synonymMaps = new SynonymMapsImpl(this);
    this.indexes = new IndexesImpl(this);
    this.addCustomApiVersionPolicy(apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Gets service level statistics for a search service.
   * @param options The options parameters.
   */
  getServiceStatistics(
    options?: GetServiceStatisticsOptionalParams
  ): Promise<GetServiceStatisticsResponse> {
    return this.sendOperationRequest(
      { options },
      getServiceStatisticsOperationSpec
    );
  }

  dataSources: DataSources;
  indexers: Indexers;
  skillsets: Skillsets;
  synonymMaps: SynonymMaps;
  indexes: Indexes;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getServiceStatisticsOperationSpec: coreClient.OperationSpec = {
  path: "/servicestats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceStatistics
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
