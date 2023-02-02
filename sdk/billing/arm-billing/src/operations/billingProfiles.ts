/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BillingProfiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  BillingProfile,
  BillingProfilesListByBillingAccountNextOptionalParams,
  BillingProfilesListByBillingAccountOptionalParams,
  BillingProfilesListByBillingAccountResponse,
  BillingProfilesGetOptionalParams,
  BillingProfilesGetResponse,
  BillingProfilesCreateOrUpdateOptionalParams,
  BillingProfilesCreateOrUpdateResponse,
  BillingProfilesListByBillingAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingProfiles operations. */
export class BillingProfilesImpl implements BillingProfiles {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingProfiles class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the billing profiles that a user has access to. The operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: BillingProfilesListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<BillingProfile> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
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
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: BillingProfilesListByBillingAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingProfile[]> {
    let result: BillingProfilesListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: BillingProfilesListByBillingAccountOptionalParams
  ): AsyncIterableIterator<BillingProfile> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the billing profiles that a user has access to. The operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: BillingProfilesListByBillingAccountOptionalParams
  ): Promise<BillingProfilesListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec
    );
  }

  /**
   * Gets a billing profile by its ID. The operation is supported for billing accounts with agreement
   * type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingProfilesGetOptionalParams
  ): Promise<BillingProfilesGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a billing profile. The operation is supported for billing accounts with agreement
   * type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param parameters The new or updated billing profile.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    billingAccountName: string,
    billingProfileName: string,
    parameters: BillingProfile,
    options?: BillingProfilesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BillingProfilesCreateOrUpdateResponse>,
      BillingProfilesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BillingProfilesCreateOrUpdateResponse> => {
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
      { billingAccountName, billingProfileName, parameters, options },
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
   * Creates or updates a billing profile. The operation is supported for billing accounts with agreement
   * type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param parameters The new or updated billing profile.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    billingAccountName: string,
    billingProfileName: string,
    parameters: BillingProfile,
    options?: BillingProfilesCreateOrUpdateOptionalParams
  ): Promise<BillingProfilesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      billingAccountName,
      billingProfileName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: BillingProfilesListByBillingAccountNextOptionalParams
  ): Promise<BillingProfilesListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingProfileListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingProfile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BillingProfile
    },
    201: {
      bodyMapper: Mappers.BillingProfile
    },
    202: {
      bodyMapper: Mappers.BillingProfile
    },
    204: {
      bodyMapper: Mappers.BillingProfile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingProfileListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
