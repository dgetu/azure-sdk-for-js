/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Indexes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchServiceClient } from "../searchServiceClient";
import {
  SearchIndex,
  IndexesCreateOptionalParams,
  IndexesCreateResponse,
  IndexesListOptionalParams,
  IndexesListResponse,
  IndexesCreateOrUpdateOptionalParams,
  IndexesCreateOrUpdateResponse,
  IndexesDeleteOptionalParams,
  IndexesGetOptionalParams,
  IndexesGetResponse,
  IndexesGetStatisticsOptionalParams,
  IndexesGetStatisticsResponse,
  AnalyzeRequest,
  IndexesAnalyzeOptionalParams,
  IndexesAnalyzeResponse
} from "../models";

/** Class containing Indexes operations. */
export class IndexesImpl implements Indexes {
  private readonly client: SearchServiceClient;

  /**
   * Initialize a new instance of the class Indexes class.
   * @param client Reference to the service client
   */
  constructor(client: SearchServiceClient) {
    this.client = client;
  }

  /**
   * Creates a new search index.
   * @param index The definition of the index to create.
   * @param options The options parameters.
   */
  create(
    index: SearchIndex,
    options?: IndexesCreateOptionalParams
  ): Promise<IndexesCreateResponse> {
    return this.client.sendOperationRequest(
      { index, options },
      createOperationSpec
    );
  }

  /**
   * Lists all indexes available for a search service.
   * @param options The options parameters.
   */
  list(options?: IndexesListOptionalParams): Promise<IndexesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Creates a new search index or updates an index if it already exists.
   * @param indexName The definition of the index to create or update.
   * @param index The definition of the index to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    indexName: string,
    index: SearchIndex,
    options?: IndexesCreateOrUpdateOptionalParams
  ): Promise<IndexesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { indexName, index, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a search index and all the documents it contains. This operation is permanent, with no
   * recovery option. Make sure you have a master copy of your index definition, data ingestion code, and
   * a backup of the primary data source in case you need to re-build the index.
   * @param indexName The name of the index to delete.
   * @param options The options parameters.
   */
  delete(
    indexName: string,
    options?: IndexesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { indexName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves an index definition.
   * @param indexName The name of the index to retrieve.
   * @param options The options parameters.
   */
  get(
    indexName: string,
    options?: IndexesGetOptionalParams
  ): Promise<IndexesGetResponse> {
    return this.client.sendOperationRequest(
      { indexName, options },
      getOperationSpec
    );
  }

  /**
   * Returns statistics for the given index, including a document count and storage usage.
   * @param indexName The name of the index for which to retrieve statistics.
   * @param options The options parameters.
   */
  getStatistics(
    indexName: string,
    options?: IndexesGetStatisticsOptionalParams
  ): Promise<IndexesGetStatisticsResponse> {
    return this.client.sendOperationRequest(
      { indexName, options },
      getStatisticsOperationSpec
    );
  }

  /**
   * Shows how an analyzer breaks text into tokens.
   * @param indexName The name of the index for which to test an analyzer.
   * @param request The text and analyzer or analysis components to test.
   * @param options The options parameters.
   */
  analyze(
    indexName: string,
    request: AnalyzeRequest,
    options?: IndexesAnalyzeOptionalParams
  ): Promise<IndexesAnalyzeResponse> {
    return this.client.sendOperationRequest(
      { indexName, request, options },
      analyzeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/indexes",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SearchIndex
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.index,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/indexes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListIndexesResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/indexes('{indexName}')",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndex
    },
    201: {
      bodyMapper: Mappers.SearchIndex
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.index,
  queryParameters: [Parameters.apiVersion, Parameters.allowIndexDowntime],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.prefer
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/indexes('{indexName}')",
  httpMethod: "DELETE",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/indexes('{indexName}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchIndex
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept],
  serializer
};
const getStatisticsOperationSpec: coreClient.OperationSpec = {
  path: "/indexes('{indexName}')/search.stats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetIndexStatisticsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept],
  serializer
};
const analyzeOperationSpec: coreClient.OperationSpec = {
  path: "/indexes('{indexName}')/search.analyze",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AnalyzeResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
