/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProductGroup } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  GroupContract,
  ProductGroupListByProductNextOptionalParams,
  ProductGroupListByProductOptionalParams,
  ProductGroupListByProductResponse,
  ProductGroupCheckEntityExistsOptionalParams,
  ProductGroupCheckEntityExistsResponse,
  ProductGroupCreateOrUpdateOptionalParams,
  ProductGroupCreateOrUpdateResponse,
  ProductGroupDeleteOptionalParams,
  ProductGroupListByProductNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProductGroup operations. */
export class ProductGroupImpl implements ProductGroup {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ProductGroup class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists the collection of developer groups associated with the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupListByProductOptionalParams
  ): PagedAsyncIterableIterator<GroupContract> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      serviceName,
      productId,
      options
    );
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
        return this.listByProductPagingPage(
          resourceGroupName,
          serviceName,
          productId,
          options,
          settings
        );
      }
    };
  }

  private async *listByProductPagingPage(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupListByProductOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GroupContract[]> {
    let result: ProductGroupListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        serviceName,
        productId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProductNext(
        resourceGroupName,
        serviceName,
        productId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProductPagingAll(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupListByProductOptionalParams
  ): AsyncIterableIterator<GroupContract> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      serviceName,
      productId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the collection of developer groups associated with the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupListByProductOptionalParams
  ): Promise<ProductGroupListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, options },
      listByProductOperationSpec
    );
  }

  /**
   * Checks that Group entity specified by identifier is associated with the Product entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  checkEntityExists(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    groupId: string,
    options?: ProductGroupCheckEntityExistsOptionalParams
  ): Promise<ProductGroupCheckEntityExistsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, groupId, options },
      checkEntityExistsOperationSpec
    );
  }

  /**
   * Adds the association between the specified developer group with the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    groupId: string,
    options?: ProductGroupCreateOrUpdateOptionalParams
  ): Promise<ProductGroupCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, groupId, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the association between the specified group and product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    groupId: string,
    options?: ProductGroupDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, groupId, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByProductNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    nextLink: string,
    options?: ProductGroupListByProductNextOptionalParams
  ): Promise<ProductGroupListByProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, nextLink, options },
      listByProductNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkEntityExistsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups/{groupId}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups/{groupId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GroupContract
    },
    201: {
      bodyMapper: Mappers.GroupContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups/{groupId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
