/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ReplicationProtectionIntent,
  ReplicationProtectionIntentsListOptionalParams,
  ReplicationProtectionIntentsGetOptionalParams,
  ReplicationProtectionIntentsGetResponse,
  CreateProtectionIntentInput,
  ReplicationProtectionIntentsCreateOptionalParams,
  ReplicationProtectionIntentsCreateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationProtectionIntents. */
export interface ReplicationProtectionIntents {
  /**
   * Gets the list of ASR replication protection intent objects in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionIntentsListOptionalParams
  ): PagedAsyncIterableIterator<ReplicationProtectionIntent>;
  /**
   * Gets the details of an ASR replication protection intent.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param intentObjectName Replication protection intent name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    intentObjectName: string,
    options?: ReplicationProtectionIntentsGetOptionalParams
  ): Promise<ReplicationProtectionIntentsGetResponse>;
  /**
   * The operation to create an ASR replication protection intent item.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param intentObjectName A name for the replication protection item.
   * @param input Create Protection Intent Input.
   * @param options The options parameters.
   */
  create(
    resourceName: string,
    resourceGroupName: string,
    intentObjectName: string,
    input: CreateProtectionIntentInput,
    options?: ReplicationProtectionIntentsCreateOptionalParams
  ): Promise<ReplicationProtectionIntentsCreateResponse>;
}
