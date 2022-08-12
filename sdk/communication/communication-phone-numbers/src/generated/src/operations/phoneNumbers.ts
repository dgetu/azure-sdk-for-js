/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PhoneNumbers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PhoneNumbersClient } from "../phoneNumbersClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PurchasedPhoneNumber,
  PhoneNumbersListPhoneNumbersNextOptionalParams,
  PhoneNumbersListPhoneNumbersOptionalParams,
  PhoneNumberType,
  PhoneNumberAssignmentType,
  PhoneNumberCapabilities,
  PhoneNumbersSearchAvailablePhoneNumbersOptionalParams,
  PhoneNumbersSearchAvailablePhoneNumbersResponse,
  PhoneNumbersGetSearchResultOptionalParams,
  PhoneNumbersGetSearchResultResponse,
  PhoneNumbersPurchasePhoneNumbersOptionalParams,
  PhoneNumbersPurchasePhoneNumbersResponse,
  PhoneNumbersGetOperationOptionalParams,
  PhoneNumbersGetOperationResponse,
  PhoneNumbersCancelOperationOptionalParams,
  PhoneNumbersUpdateCapabilitiesOptionalParams,
  PhoneNumbersUpdateCapabilitiesResponse,
  PhoneNumbersGetByNumberOptionalParams,
  PhoneNumbersGetByNumberResponse,
  PhoneNumbersReleasePhoneNumberOptionalParams,
  PhoneNumbersReleasePhoneNumberResponse,
  PhoneNumbersListPhoneNumbersResponse,
  PhoneNumbersListPhoneNumbersNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PhoneNumbers operations. */
export class PhoneNumbersImpl implements PhoneNumbers {
  private readonly client: PhoneNumbersClient;

  /**
   * Initialize a new instance of the class PhoneNumbers class.
   * @param client Reference to the service client
   */
  constructor(client: PhoneNumbersClient) {
    this.client = client;
  }

  /**
   * Gets the list of all purchased phone numbers.
   * @param options The options parameters.
   */
  public listPhoneNumbers(
    options?: PhoneNumbersListPhoneNumbersOptionalParams
  ): PagedAsyncIterableIterator<PurchasedPhoneNumber> {
    const iter = this.listPhoneNumbersPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPhoneNumbersPagingPage(options);
      }
    };
  }

  private async *listPhoneNumbersPagingPage(
    options?: PhoneNumbersListPhoneNumbersOptionalParams
  ): AsyncIterableIterator<PurchasedPhoneNumber[]> {
    let result = await this._listPhoneNumbers(options);
    yield result.phoneNumbers || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listPhoneNumbersNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.phoneNumbers || [];
    }
  }

  private async *listPhoneNumbersPagingAll(
    options?: PhoneNumbersListPhoneNumbersOptionalParams
  ): AsyncIterableIterator<PurchasedPhoneNumber> {
    for await (const page of this.listPhoneNumbersPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Search for available phone numbers to purchase.
   * @param countryCode The ISO 3166-2 country code, e.g. US.
   * @param phoneNumberType The type of phone numbers to search for, e.g. geographic, or tollFree.
   * @param assignmentType The assignment type of the phone numbers to search for. A phone number can be
   *                       assigned to a person, or to an application.
   * @param capabilities Capabilities of a phone number.
   * @param options The options parameters.
   */
  async beginSearchAvailablePhoneNumbers(
    countryCode: string,
    phoneNumberType: PhoneNumberType,
    assignmentType: PhoneNumberAssignmentType,
    capabilities: PhoneNumberCapabilities,
    options?: PhoneNumbersSearchAvailablePhoneNumbersOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PhoneNumbersSearchAvailablePhoneNumbersResponse>,
      PhoneNumbersSearchAvailablePhoneNumbersResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PhoneNumbersSearchAvailablePhoneNumbersResponse> => {
      return tracingClient.withSpan(
        "PhoneNumbersClient.beginSearchAvailablePhoneNumbers",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(args, spec) as Promise<
            PhoneNumbersSearchAvailablePhoneNumbersResponse
          >;
        }
      );
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
      { countryCode, phoneNumberType, assignmentType, capabilities, options },
      searchAvailablePhoneNumbersOperationSpec
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
   * Search for available phone numbers to purchase.
   * @param countryCode The ISO 3166-2 country code, e.g. US.
   * @param phoneNumberType The type of phone numbers to search for, e.g. geographic, or tollFree.
   * @param assignmentType The assignment type of the phone numbers to search for. A phone number can be
   *                       assigned to a person, or to an application.
   * @param capabilities Capabilities of a phone number.
   * @param options The options parameters.
   */
  async beginSearchAvailablePhoneNumbersAndWait(
    countryCode: string,
    phoneNumberType: PhoneNumberType,
    assignmentType: PhoneNumberAssignmentType,
    capabilities: PhoneNumberCapabilities,
    options?: PhoneNumbersSearchAvailablePhoneNumbersOptionalParams
  ): Promise<PhoneNumbersSearchAvailablePhoneNumbersResponse> {
    const poller = await this.beginSearchAvailablePhoneNumbers(
      countryCode,
      phoneNumberType,
      assignmentType,
      capabilities,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a phone number search result by search id.
   * @param searchId The search Id.
   * @param options The options parameters.
   */
  async getSearchResult(
    searchId: string,
    options?: PhoneNumbersGetSearchResultOptionalParams
  ): Promise<PhoneNumbersGetSearchResultResponse> {
    return tracingClient.withSpan(
      "PhoneNumbersClient.getSearchResult",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { searchId, options },
          getSearchResultOperationSpec
        ) as Promise<PhoneNumbersGetSearchResultResponse>;
      }
    );
  }

  /**
   * Purchases phone numbers.
   * @param options The options parameters.
   */
  async beginPurchasePhoneNumbers(
    options?: PhoneNumbersPurchasePhoneNumbersOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PhoneNumbersPurchasePhoneNumbersResponse>,
      PhoneNumbersPurchasePhoneNumbersResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PhoneNumbersPurchasePhoneNumbersResponse> => {
      return tracingClient.withSpan(
        "PhoneNumbersClient.beginPurchasePhoneNumbers",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(args, spec) as Promise<
            PhoneNumbersPurchasePhoneNumbersResponse
          >;
        }
      );
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
      { options },
      purchasePhoneNumbersOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Purchases phone numbers.
   * @param options The options parameters.
   */
  async beginPurchasePhoneNumbersAndWait(
    options?: PhoneNumbersPurchasePhoneNumbersOptionalParams
  ): Promise<PhoneNumbersPurchasePhoneNumbersResponse> {
    const poller = await this.beginPurchasePhoneNumbers(options);
    return poller.pollUntilDone();
  }

  /**
   * Gets an operation by its id.
   * @param operationId The id of the operation
   * @param options The options parameters.
   */
  async getOperation(
    operationId: string,
    options?: PhoneNumbersGetOperationOptionalParams
  ): Promise<PhoneNumbersGetOperationResponse> {
    return tracingClient.withSpan(
      "PhoneNumbersClient.getOperation",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { operationId, options },
          getOperationOperationSpec
        ) as Promise<PhoneNumbersGetOperationResponse>;
      }
    );
  }

  /**
   * Cancels an operation by its id.
   * @param operationId The id of the operation
   * @param options The options parameters.
   */
  async cancelOperation(
    operationId: string,
    options?: PhoneNumbersCancelOperationOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "PhoneNumbersClient.cancelOperation",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { operationId, options },
          cancelOperationOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Updates the capabilities of a phone number.
   * @param phoneNumber The phone number id in E.164 format. The leading plus can be either + or encoded
   *                    as %2B, e.g. +11234567890.
   * @param options The options parameters.
   */
  async beginUpdateCapabilities(
    phoneNumber: string,
    options?: PhoneNumbersUpdateCapabilitiesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PhoneNumbersUpdateCapabilitiesResponse>,
      PhoneNumbersUpdateCapabilitiesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PhoneNumbersUpdateCapabilitiesResponse> => {
      return tracingClient.withSpan(
        "PhoneNumbersClient.beginUpdateCapabilities",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(args, spec) as Promise<
            PhoneNumbersUpdateCapabilitiesResponse
          >;
        }
      );
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
      { phoneNumber, options },
      updateCapabilitiesOperationSpec
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
   * Updates the capabilities of a phone number.
   * @param phoneNumber The phone number id in E.164 format. The leading plus can be either + or encoded
   *                    as %2B, e.g. +11234567890.
   * @param options The options parameters.
   */
  async beginUpdateCapabilitiesAndWait(
    phoneNumber: string,
    options?: PhoneNumbersUpdateCapabilitiesOptionalParams
  ): Promise<PhoneNumbersUpdateCapabilitiesResponse> {
    const poller = await this.beginUpdateCapabilities(phoneNumber, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the details of the given purchased phone number.
   * @param phoneNumber The purchased phone number whose details are to be fetched in E.164 format, e.g.
   *                    +11234567890.
   * @param options The options parameters.
   */
  async getByNumber(
    phoneNumber: string,
    options?: PhoneNumbersGetByNumberOptionalParams
  ): Promise<PhoneNumbersGetByNumberResponse> {
    return tracingClient.withSpan(
      "PhoneNumbersClient.getByNumber",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { phoneNumber, options },
          getByNumberOperationSpec
        ) as Promise<PhoneNumbersGetByNumberResponse>;
      }
    );
  }

  /**
   * Releases a purchased phone number.
   * @param phoneNumber Phone number to be released, e.g. +11234567890.
   * @param options The options parameters.
   */
  async beginReleasePhoneNumber(
    phoneNumber: string,
    options?: PhoneNumbersReleasePhoneNumberOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PhoneNumbersReleasePhoneNumberResponse>,
      PhoneNumbersReleasePhoneNumberResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PhoneNumbersReleasePhoneNumberResponse> => {
      return tracingClient.withSpan(
        "PhoneNumbersClient.beginReleasePhoneNumber",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(args, spec) as Promise<
            PhoneNumbersReleasePhoneNumberResponse
          >;
        }
      );
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
      { phoneNumber, options },
      releasePhoneNumberOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Releases a purchased phone number.
   * @param phoneNumber Phone number to be released, e.g. +11234567890.
   * @param options The options parameters.
   */
  async beginReleasePhoneNumberAndWait(
    phoneNumber: string,
    options?: PhoneNumbersReleasePhoneNumberOptionalParams
  ): Promise<PhoneNumbersReleasePhoneNumberResponse> {
    const poller = await this.beginReleasePhoneNumber(phoneNumber, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of all purchased phone numbers.
   * @param options The options parameters.
   */
  private async _listPhoneNumbers(
    options?: PhoneNumbersListPhoneNumbersOptionalParams
  ): Promise<PhoneNumbersListPhoneNumbersResponse> {
    return tracingClient.withSpan(
      "PhoneNumbersClient._listPhoneNumbers",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          listPhoneNumbersOperationSpec
        ) as Promise<PhoneNumbersListPhoneNumbersResponse>;
      }
    );
  }

  /**
   * ListPhoneNumbersNext
   * @param nextLink The nextLink from the previous successful call to the ListPhoneNumbers method.
   * @param options The options parameters.
   */
  private async _listPhoneNumbersNext(
    nextLink: string,
    options?: PhoneNumbersListPhoneNumbersNextOptionalParams
  ): Promise<PhoneNumbersListPhoneNumbersNextResponse> {
    return tracingClient.withSpan(
      "PhoneNumbersClient._listPhoneNumbersNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          listPhoneNumbersNextOperationSpec
        ) as Promise<PhoneNumbersListPhoneNumbersNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const searchAvailablePhoneNumbersOperationSpec: coreClient.OperationSpec = {
  path: "/availablePhoneNumbers/countries/{countryCode}/:search",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberSearchResult,
      headersMapper: Mappers.PhoneNumbersSearchAvailablePhoneNumbersHeaders
    },
    201: {
      bodyMapper: Mappers.PhoneNumberSearchResult,
      headersMapper: Mappers.PhoneNumbersSearchAvailablePhoneNumbersHeaders
    },
    202: {
      bodyMapper: Mappers.PhoneNumberSearchResult,
      headersMapper: Mappers.PhoneNumbersSearchAvailablePhoneNumbersHeaders
    },
    204: {
      bodyMapper: Mappers.PhoneNumberSearchResult,
      headersMapper: Mappers.PhoneNumbersSearchAvailablePhoneNumbersHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      phoneNumberType: ["phoneNumberType"],
      assignmentType: ["assignmentType"],
      capabilities: ["capabilities"],
      areaCode: ["options", "areaCode"],
      quantity: ["options", "quantity"]
    },
    mapper: { ...Mappers.PhoneNumberSearchRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.countryCode],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getSearchResultOperationSpec: coreClient.OperationSpec = {
  path: "/availablePhoneNumbers/searchResults/{searchId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberSearchResult
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.searchId],
  headerParameters: [Parameters.accept],
  serializer
};
const purchasePhoneNumbersOperationSpec: coreClient.OperationSpec = {
  path: "/availablePhoneNumbers/:purchase",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.PhoneNumbersPurchasePhoneNumbersHeaders
    },
    201: {
      headersMapper: Mappers.PhoneNumbersPurchasePhoneNumbersHeaders
    },
    202: {
      headersMapper: Mappers.PhoneNumbersPurchasePhoneNumbersHeaders
    },
    204: {
      headersMapper: Mappers.PhoneNumbersPurchasePhoneNumbersHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: { searchId: ["options", "searchId"] },
    mapper: { ...Mappers.PhoneNumberPurchaseRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationOperationSpec: coreClient.OperationSpec = {
  path: "/phoneNumbers/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberOperation,
      headersMapper: Mappers.PhoneNumbersGetOperationHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationOperationSpec: coreClient.OperationSpec = {
  path: "/phoneNumbers/operations/{operationId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
const updateCapabilitiesOperationSpec: coreClient.OperationSpec = {
  path: "/phoneNumbers/{phoneNumber}/capabilities",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PurchasedPhoneNumber,
      headersMapper: Mappers.PhoneNumbersUpdateCapabilitiesHeaders
    },
    201: {
      bodyMapper: Mappers.PurchasedPhoneNumber,
      headersMapper: Mappers.PhoneNumbersUpdateCapabilitiesHeaders
    },
    202: {
      bodyMapper: Mappers.PurchasedPhoneNumber,
      headersMapper: Mappers.PhoneNumbersUpdateCapabilitiesHeaders
    },
    204: {
      bodyMapper: Mappers.PurchasedPhoneNumber,
      headersMapper: Mappers.PhoneNumbersUpdateCapabilitiesHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: { calling: ["options", "calling"], sms: ["options", "sms"] },
    mapper: Mappers.PhoneNumberCapabilitiesRequest
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.phoneNumber],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getByNumberOperationSpec: coreClient.OperationSpec = {
  path: "/phoneNumbers/{phoneNumber}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PurchasedPhoneNumber
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.phoneNumber],
  headerParameters: [Parameters.accept],
  serializer
};
const releasePhoneNumberOperationSpec: coreClient.OperationSpec = {
  path: "/phoneNumbers/{phoneNumber}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.PhoneNumbersReleasePhoneNumberHeaders
    },
    201: {
      headersMapper: Mappers.PhoneNumbersReleasePhoneNumberHeaders
    },
    202: {
      headersMapper: Mappers.PhoneNumbersReleasePhoneNumberHeaders
    },
    204: {
      headersMapper: Mappers.PhoneNumbersReleasePhoneNumberHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.phoneNumber],
  headerParameters: [Parameters.accept],
  serializer
};
const listPhoneNumbersOperationSpec: coreClient.OperationSpec = {
  path: "/phoneNumbers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PurchasedPhoneNumbers
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const listPhoneNumbersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PurchasedPhoneNumbers
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
