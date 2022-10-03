/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RegulatoryComplianceStandards } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  RegulatoryComplianceStandard,
  RegulatoryComplianceStandardsListNextOptionalParams,
  RegulatoryComplianceStandardsListOptionalParams,
  RegulatoryComplianceStandardsListResponse,
  RegulatoryComplianceStandardsGetOptionalParams,
  RegulatoryComplianceStandardsGetResponse,
  RegulatoryComplianceStandardsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RegulatoryComplianceStandards operations. */
export class RegulatoryComplianceStandardsImpl
  implements RegulatoryComplianceStandards {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class RegulatoryComplianceStandards class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Supported regulatory compliance standards details and state
   * @param options The options parameters.
   */
  public list(
    options?: RegulatoryComplianceStandardsListOptionalParams
  ): PagedAsyncIterableIterator<RegulatoryComplianceStandard> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: RegulatoryComplianceStandardsListOptionalParams
  ): AsyncIterableIterator<RegulatoryComplianceStandard[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: RegulatoryComplianceStandardsListOptionalParams
  ): AsyncIterableIterator<RegulatoryComplianceStandard> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Supported regulatory compliance standards details and state
   * @param options The options parameters.
   */
  private _list(
    options?: RegulatoryComplianceStandardsListOptionalParams
  ): Promise<RegulatoryComplianceStandardsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Supported regulatory compliance details state for selected standard
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param options The options parameters.
   */
  get(
    regulatoryComplianceStandardName: string,
    options?: RegulatoryComplianceStandardsGetOptionalParams
  ): Promise<RegulatoryComplianceStandardsGetResponse> {
    return this.client.sendOperationRequest(
      { regulatoryComplianceStandardName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: RegulatoryComplianceStandardsListNextOptionalParams
  ): Promise<RegulatoryComplianceStandardsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceStandardList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion9],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceStandard
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceStandardList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
