/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Disks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Disk,
  DisksListByResourceGroupNextOptionalParams,
  DisksListByResourceGroupOptionalParams,
  DisksListByResourceGroupResponse,
  DisksListNextOptionalParams,
  DisksListOptionalParams,
  DisksListResponse,
  DisksCreateOrUpdateOptionalParams,
  DisksCreateOrUpdateResponse,
  DiskUpdate,
  DisksUpdateOptionalParams,
  DisksUpdateResponse,
  DisksGetOptionalParams,
  DisksGetResponse,
  DisksDeleteOptionalParams,
  GrantAccessData,
  DisksGrantAccessOptionalParams,
  DisksGrantAccessResponse,
  DisksRevokeAccessOptionalParams,
  DisksListByResourceGroupNextResponse,
  DisksListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Disks operations. */
export class DisksImpl implements Disks {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class Disks class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the disks under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DisksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Disk> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DisksListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Disk[]> {
    let result: DisksListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
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

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DisksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Disk> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the disks under a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DisksListOptionalParams
  ): PagedAsyncIterableIterator<Disk> {
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
    options?: DisksListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Disk[]> {
    let result: DisksListResponse;
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
    options?: DisksListOptionalParams
  ): AsyncIterableIterator<Disk> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    diskName: string,
    disk: Disk,
    options?: DisksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DisksCreateOrUpdateResponse>,
      DisksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DisksCreateOrUpdateResponse> => {
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
      { resourceGroupName, diskName, disk, options },
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
   * Creates or updates a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    diskName: string,
    disk: Disk,
    options?: DisksCreateOrUpdateOptionalParams
  ): Promise<DisksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      diskName,
      disk,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates (patches) a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Patch disk operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    diskName: string,
    disk: DiskUpdate,
    options?: DisksUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<DisksUpdateResponse>, DisksUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DisksUpdateResponse> => {
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
      { resourceGroupName, diskName, disk, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates (patches) a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Patch disk operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    diskName: string,
    disk: DiskUpdate,
    options?: DisksUpdateOptionalParams
  ): Promise<DisksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      diskName,
      disk,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    diskName: string,
    options?: DisksGetOptionalParams
  ): Promise<DisksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, diskName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    diskName: string,
    options?: DisksDeleteOptionalParams
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
      { resourceGroupName, diskName, options },
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
   * Deletes a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    diskName: string,
    options?: DisksDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, diskName, options);
    return poller.pollUntilDone();
  }

  /**
   * Lists all the disks under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DisksListByResourceGroupOptionalParams
  ): Promise<DisksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the disks under a subscription.
   * @param options The options parameters.
   */
  private _list(options?: DisksListOptionalParams): Promise<DisksListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Grants access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  async beginGrantAccess(
    resourceGroupName: string,
    diskName: string,
    grantAccessData: GrantAccessData,
    options?: DisksGrantAccessOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DisksGrantAccessResponse>,
      DisksGrantAccessResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DisksGrantAccessResponse> => {
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
      { resourceGroupName, diskName, grantAccessData, options },
      grantAccessOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Grants access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  async beginGrantAccessAndWait(
    resourceGroupName: string,
    diskName: string,
    grantAccessData: GrantAccessData,
    options?: DisksGrantAccessOptionalParams
  ): Promise<DisksGrantAccessResponse> {
    const poller = await this.beginGrantAccess(
      resourceGroupName,
      diskName,
      grantAccessData,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Revokes access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  async beginRevokeAccess(
    resourceGroupName: string,
    diskName: string,
    options?: DisksRevokeAccessOptionalParams
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
      { resourceGroupName, diskName, options },
      revokeAccessOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Revokes access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  async beginRevokeAccessAndWait(
    resourceGroupName: string,
    diskName: string,
    options?: DisksRevokeAccessOptionalParams
  ): Promise<void> {
    const poller = await this.beginRevokeAccess(
      resourceGroupName,
      diskName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DisksListByResourceGroupNextOptionalParams
  ): Promise<DisksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DisksListNextOptionalParams
  ): Promise<DisksListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    201: {
      bodyMapper: Mappers.Disk
    },
    202: {
      bodyMapper: Mappers.Disk
    },
    204: {
      bodyMapper: Mappers.Disk
    }
  },
  requestBody: Parameters.disk,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    },
    201: {
      bodyMapper: Mappers.Disk
    },
    202: {
      bodyMapper: Mappers.Disk
    },
    204: {
      bodyMapper: Mappers.Disk
    }
  },
  requestBody: Parameters.disk1,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Disk
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskName
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const grantAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessUri
    },
    201: {
      bodyMapper: Mappers.AccessUri
    },
    202: {
      bodyMapper: Mappers.AccessUri
    },
    204: {
      bodyMapper: Mappers.AccessUri
    }
  },
  requestBody: Parameters.grantAccessData,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const revokeAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskName
  ],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskList
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
