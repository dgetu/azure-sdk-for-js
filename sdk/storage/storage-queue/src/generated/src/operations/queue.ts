/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Queue } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClient } from "../storageClient";
import {
  QueueCreateOptionalParams,
  QueueCreateResponse,
  QueueDeleteOptionalParams,
  QueueDeleteResponse,
  QueueGetPropertiesOptionalParams,
  QueueGetPropertiesResponse,
  QueueSetMetadataOptionalParams,
  QueueSetMetadataResponse,
  QueueGetAccessPolicyOptionalParams,
  QueueGetAccessPolicyResponse,
  QueueSetAccessPolicyOptionalParams,
  QueueSetAccessPolicyResponse
} from "../models";

/** Class containing Queue operations. */
export class QueueImpl implements Queue {
  private readonly client: StorageClient;

  /**
   * Initialize a new instance of the class Queue class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClient) {
    this.client = client;
  }

  /**
   * creates a new queue under the given account.
   * @param options The options parameters.
   */
  create(options?: QueueCreateOptionalParams): Promise<QueueCreateResponse> {
    return this.client.sendOperationRequest({ options }, createOperationSpec);
  }

  /**
   * operation permanently deletes the specified queue
   * @param options The options parameters.
   */
  delete(options?: QueueDeleteOptionalParams): Promise<QueueDeleteResponse> {
    return this.client.sendOperationRequest({ options }, deleteOperationSpec);
  }

  /**
   * Retrieves user-defined metadata and queue properties on the specified queue. Metadata is associated
   * with the queue as name-values pairs.
   * @param options The options parameters.
   */
  getProperties(
    options?: QueueGetPropertiesOptionalParams
  ): Promise<QueueGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPropertiesOperationSpec
    );
  }

  /**
   * sets user-defined metadata on the specified queue. Metadata is associated with the queue as
   * name-value pairs.
   * @param options The options parameters.
   */
  setMetadata(
    options?: QueueSetMetadataOptionalParams
  ): Promise<QueueSetMetadataResponse> {
    return this.client.sendOperationRequest(
      { options },
      setMetadataOperationSpec
    );
  }

  /**
   * returns details about any stored access policies specified on the queue that may be used with Shared
   * Access Signatures.
   * @param options The options parameters.
   */
  getAccessPolicy(
    options?: QueueGetAccessPolicyOptionalParams
  ): Promise<QueueGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { options },
      getAccessPolicyOperationSpec
    );
  }

  /**
   * sets stored access policies for the queue that may be used with Shared Access Signatures
   * @param options The options parameters.
   */
  setAccessPolicy(
    options?: QueueSetAccessPolicyOptionalParams
  ): Promise<QueueSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { options },
      setAccessPolicyOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.QueueCreateHeaders
    },
    204: {
      headersMapper: Mappers.QueueCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata
  ],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.QueueDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.QueueGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp3],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setMetadataOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.QueueSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueSetMetadataExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp3],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1,
    Parameters.metadata
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" }
          }
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier"
      },
      headersMapper: Mappers.QueueGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueGetAccessPolicyExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp4],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.QueueSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.QueueSetAccessPolicyExceptionHeaders
    }
  },
  requestBody: Parameters.queueAcl,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp4],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
