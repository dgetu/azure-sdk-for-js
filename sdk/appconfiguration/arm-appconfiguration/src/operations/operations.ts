/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Operations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppConfigurationManagementClient } from "../appConfigurationManagementClient";
import {
  OperationDefinition,
  OperationsListNextOptionalParams,
  OperationsListOptionalParams,
  OperationsListResponse,
  CheckNameAvailabilityParameters,
  OperationsCheckNameAvailabilityOptionalParams,
  OperationsCheckNameAvailabilityResponse,
  OperationsRegionalCheckNameAvailabilityOptionalParams,
  OperationsRegionalCheckNameAvailabilityResponse,
  OperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: AppConfigurationManagementClient;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: AppConfigurationManagementClient) {
    this.client = client;
  }

  /**
   * Lists the operations available from this provider.
   * @param options The options parameters.
   */
  public list(
    options?: OperationsListOptionalParams
  ): PagedAsyncIterableIterator<OperationDefinition> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: OperationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<OperationDefinition[]> {
    let result: OperationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: OperationsListOptionalParams
  ): AsyncIterableIterator<OperationDefinition> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Checks whether the configuration store name is available for use.
   * @param checkNameAvailabilityParameters The object containing information for the availability
   *                                        request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityParameters: CheckNameAvailabilityParameters,
    options?: OperationsCheckNameAvailabilityOptionalParams
  ): Promise<OperationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { checkNameAvailabilityParameters, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Lists the operations available from this provider.
   * @param options The options parameters.
   */
  private _list(
    options?: OperationsListOptionalParams
  ): Promise<OperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Checks whether the configuration store name is available for use.
   * @param location The location in which uniqueness will be verified.
   * @param checkNameAvailabilityParameters The object containing information for the availability
   *                                        request.
   * @param options The options parameters.
   */
  regionalCheckNameAvailability(
    location: string,
    checkNameAvailabilityParameters: CheckNameAvailabilityParameters,
    options?: OperationsRegionalCheckNameAvailabilityOptionalParams
  ): Promise<OperationsRegionalCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, checkNameAvailabilityParameters, options },
      regionalCheckNameAvailabilityOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: OperationsListNextOptionalParams
  ): Promise<OperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.checkNameAvailabilityParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppConfiguration/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const regionalCheckNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.checkNameAvailabilityParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
