/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SecurityPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SecurityPolicy,
  SecurityPoliciesListByProfileNextOptionalParams,
  SecurityPoliciesListByProfileOptionalParams,
  SecurityPoliciesListByProfileResponse,
  SecurityPoliciesGetOptionalParams,
  SecurityPoliciesGetResponse,
  SecurityPoliciesCreateOptionalParams,
  SecurityPoliciesCreateResponse,
  SecurityPolicyUpdateParameters,
  SecurityPoliciesPatchOptionalParams,
  SecurityPoliciesPatchResponse,
  SecurityPoliciesDeleteOptionalParams,
  SecurityPoliciesListByProfileNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecurityPolicies operations. */
export class SecurityPoliciesImpl implements SecurityPolicies {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class SecurityPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists security policies associated with the profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: SecurityPoliciesListByProfileOptionalParams
  ): PagedAsyncIterableIterator<SecurityPolicy> {
    const iter = this.listByProfilePagingAll(
      resourceGroupName,
      profileName,
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
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: SecurityPoliciesListByProfileOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SecurityPolicy[]> {
    let result: SecurityPoliciesListByProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProfile(
        resourceGroupName,
        profileName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: SecurityPoliciesListByProfileOptionalParams
  ): AsyncIterableIterator<SecurityPolicy> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists security policies associated with the profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: SecurityPoliciesListByProfileOptionalParams
  ): Promise<SecurityPoliciesListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an existing security policy within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    options?: SecurityPoliciesGetOptionalParams
  ): Promise<SecurityPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, securityPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new security policy within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param securityPolicy The security policy properties.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    securityPolicy: SecurityPolicy,
    options?: SecurityPoliciesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SecurityPoliciesCreateResponse>,
      SecurityPoliciesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SecurityPoliciesCreateResponse> => {
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
      {
        resourceGroupName,
        profileName,
        securityPolicyName,
        securityPolicy,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new security policy within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param securityPolicy The security policy properties.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    securityPolicy: SecurityPolicy,
    options?: SecurityPoliciesCreateOptionalParams
  ): Promise<SecurityPoliciesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      securityPolicyName,
      securityPolicy,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing security policy within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param securityPolicyUpdateProperties Security policy update properties
   * @param options The options parameters.
   */
  async beginPatch(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    securityPolicyUpdateProperties: SecurityPolicyUpdateParameters,
    options?: SecurityPoliciesPatchOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SecurityPoliciesPatchResponse>,
      SecurityPoliciesPatchResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SecurityPoliciesPatchResponse> => {
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
      {
        resourceGroupName,
        profileName,
        securityPolicyName,
        securityPolicyUpdateProperties,
        options
      },
      patchOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing security policy within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param securityPolicyUpdateProperties Security policy update properties
   * @param options The options parameters.
   */
  async beginPatchAndWait(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    securityPolicyUpdateProperties: SecurityPolicyUpdateParameters,
    options?: SecurityPoliciesPatchOptionalParams
  ): Promise<SecurityPoliciesPatchResponse> {
    const poller = await this.beginPatch(
      resourceGroupName,
      profileName,
      securityPolicyName,
      securityPolicyUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing security policy within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    options?: SecurityPoliciesDeleteOptionalParams
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
      { resourceGroupName, profileName, securityPolicyName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing security policy within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param securityPolicyName Name of the security policy under the profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    securityPolicyName: string,
    options?: SecurityPoliciesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      securityPolicyName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: SecurityPoliciesListByProfileNextOptionalParams
  ): Promise<SecurityPoliciesListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPolicyListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPolicy
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.securityPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPolicy
    },
    201: {
      bodyMapper: Mappers.SecurityPolicy
    },
    202: {
      bodyMapper: Mappers.SecurityPolicy
    },
    204: {
      bodyMapper: Mappers.SecurityPolicy
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.securityPolicy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.securityPolicyName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const patchOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPolicy
    },
    201: {
      bodyMapper: Mappers.SecurityPolicy
    },
    202: {
      bodyMapper: Mappers.SecurityPolicy
    },
    204: {
      bodyMapper: Mappers.SecurityPolicy
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.securityPolicyUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.securityPolicyName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.securityPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPolicyListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
