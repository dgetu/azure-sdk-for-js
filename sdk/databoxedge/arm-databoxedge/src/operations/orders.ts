/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Orders } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClient } from "../dataBoxEdgeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Order,
  OrdersListByDataBoxEdgeDeviceNextOptionalParams,
  OrdersListByDataBoxEdgeDeviceOptionalParams,
  OrdersListByDataBoxEdgeDeviceResponse,
  OrdersGetOptionalParams,
  OrdersGetResponse,
  OrdersCreateOrUpdateOptionalParams,
  OrdersCreateOrUpdateResponse,
  OrdersDeleteOptionalParams,
  OrdersListDCAccessCodeOptionalParams,
  OrdersListDCAccessCodeResponse,
  OrdersListByDataBoxEdgeDeviceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Orders operations. */
export class OrdersImpl implements Orders {
  private readonly client: DataBoxEdgeManagementClient;

  /**
   * Initialize a new instance of the class Orders class.
   * @param client Reference to the service client
   */
  constructor(client: DataBoxEdgeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the orders related to a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListByDataBoxEdgeDeviceOptionalParams
  ): PagedAsyncIterableIterator<Order> {
    const iter = this.listByDataBoxEdgeDevicePagingAll(
      deviceName,
      resourceGroupName,
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
        return this.listByDataBoxEdgeDevicePagingPage(
          deviceName,
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDataBoxEdgeDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListByDataBoxEdgeDeviceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Order[]> {
    let result: OrdersListByDataBoxEdgeDeviceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataBoxEdgeDevice(
        deviceName,
        resourceGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataBoxEdgeDeviceNext(
        deviceName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDataBoxEdgeDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListByDataBoxEdgeDeviceOptionalParams
  ): AsyncIterableIterator<Order> {
    for await (const page of this.listByDataBoxEdgeDevicePagingPage(
      deviceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the orders related to a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListByDataBoxEdgeDeviceOptionalParams
  ): Promise<OrdersListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, options },
      listByDataBoxEdgeDeviceOperationSpec
    );
  }

  /**
   * Gets a specific order by name.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersGetOptionalParams
  ): Promise<OrdersGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an order.
   * @param deviceName The order details of a device.
   * @param resourceGroupName The resource group name.
   * @param order The order to be created or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    resourceGroupName: string,
    order: Order,
    options?: OrdersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<OrdersCreateOrUpdateResponse>,
      OrdersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<OrdersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, resourceGroupName, order, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an order.
   * @param deviceName The order details of a device.
   * @param resourceGroupName The resource group name.
   * @param order The order to be created or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    resourceGroupName: string,
    order: Order,
    options?: OrdersCreateOrUpdateOptionalParams
  ): Promise<OrdersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      resourceGroupName,
      order,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the order related to the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, resourceGroupName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the order related to the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      resourceGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the DCAccess Code
   * @param deviceName The device name
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listDCAccessCode(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListDCAccessCodeOptionalParams
  ): Promise<OrdersListDCAccessCodeResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, options },
      listDCAccessCodeOperationSpec
    );
  }

  /**
   * ListByDataBoxEdgeDeviceNext
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListByDataBoxEdgeDevice
   *                 method.
   * @param options The options parameters.
   */
  private _listByDataBoxEdgeDeviceNext(
    deviceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: OrdersListByDataBoxEdgeDeviceNextOptionalParams
  ): Promise<OrdersListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, nextLink, options },
      listByDataBoxEdgeDeviceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDataBoxEdgeDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OrderList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    201: {
      bodyMapper: Mappers.Order
    },
    202: {
      bodyMapper: Mappers.Order
    },
    204: {
      bodyMapper: Mappers.Order
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.order,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDCAccessCodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default/listDCAccessCode",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DCAccessCode
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDataBoxEdgeDeviceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OrderList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
