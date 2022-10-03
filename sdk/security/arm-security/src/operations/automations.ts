/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Automations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  Automation,
  AutomationsListNextOptionalParams,
  AutomationsListOptionalParams,
  AutomationsListByResourceGroupNextOptionalParams,
  AutomationsListByResourceGroupOptionalParams,
  AutomationsListResponse,
  AutomationsListByResourceGroupResponse,
  AutomationsGetOptionalParams,
  AutomationsGetResponse,
  AutomationsCreateOrUpdateOptionalParams,
  AutomationsCreateOrUpdateResponse,
  AutomationsDeleteOptionalParams,
  AutomationsValidateOptionalParams,
  AutomationsValidateResponse,
  AutomationsListNextResponse,
  AutomationsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Automations operations. */
export class AutomationsImpl implements Automations {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class Automations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Lists all the security automations in the specified subscription. Use the 'nextLink' property in the
   * response to get the next page of security automations for the specified subscription.
   * @param options The options parameters.
   */
  public list(
    options?: AutomationsListOptionalParams
  ): PagedAsyncIterableIterator<Automation> {
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
    options?: AutomationsListOptionalParams
  ): AsyncIterableIterator<Automation[]> {
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
    options?: AutomationsListOptionalParams
  ): AsyncIterableIterator<Automation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the security automations in the specified resource group. Use the 'nextLink' property in
   * the response to get the next page of security automations for the specified resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AutomationsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Automation> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AutomationsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Automation[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AutomationsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Automation> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the security automations in the specified subscription. Use the 'nextLink' property in the
   * response to get the next page of security automations for the specified subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: AutomationsListOptionalParams
  ): Promise<AutomationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists all the security automations in the specified resource group. Use the 'nextLink' property in
   * the response to get the next page of security automations for the specified resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AutomationsListByResourceGroupOptionalParams
  ): Promise<AutomationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieves information about the model of a security automation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param automationName The security automation name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationName: string,
    options?: AutomationsGetOptionalParams
  ): Promise<AutomationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a security automation. If a security automation is already created and a
   * subsequent request is issued for the same automation id, then it will be updated.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationName: string,
    automation: Automation,
    options?: AutomationsCreateOrUpdateOptionalParams
  ): Promise<AutomationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationName, automation, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a security automation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param automationName The security automation name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationName: string,
    options?: AutomationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationName, options },
      deleteOperationSpec
    );
  }

  /**
   * Validates the security automation model before create or update. Any validation errors are returned
   * to the client.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param options The options parameters.
   */
  validate(
    resourceGroupName: string,
    automationName: string,
    automation: Automation,
    options?: AutomationsValidateOptionalParams
  ): Promise<AutomationsValidateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationName, automation, options },
      validateOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AutomationsListNextOptionalParams
  ): Promise<AutomationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AutomationsListByResourceGroupNextOptionalParams
  ): Promise<AutomationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/automations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Automation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Automation
    },
    201: {
      bodyMapper: Mappers.Automation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.automation,
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AutomationValidationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.automation,
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
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
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
