/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { WebTestLocations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient";
import {
  ApplicationInsightsComponentWebTestLocation,
  WebTestLocationsListOptionalParams,
  WebTestLocationsListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WebTestLocations operations. */
export class WebTestLocationsImpl implements WebTestLocations {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class WebTestLocations class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of web test locations available to this Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebTestLocationsListOptionalParams
  ): PagedAsyncIterableIterator<ApplicationInsightsComponentWebTestLocation> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: WebTestLocationsListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<ApplicationInsightsComponentWebTestLocation[]> {
    let result: WebTestLocationsListResponse;
    result = await this._list(resourceGroupName, resourceName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: WebTestLocationsListOptionalParams
  ): AsyncIterableIterator<ApplicationInsightsComponentWebTestLocation> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of web test locations available to this Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebTestLocationsListOptionalParams
  ): Promise<WebTestLocationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/syntheticmonitorlocations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsWebTestLocationsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
