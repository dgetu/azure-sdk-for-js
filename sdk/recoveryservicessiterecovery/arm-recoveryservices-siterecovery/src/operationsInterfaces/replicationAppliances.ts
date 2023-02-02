/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ReplicationAppliance,
  ReplicationAppliancesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationAppliances. */
export interface ReplicationAppliances {
  /**
   * Gets the list of Azure Site Recovery appliances for the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationAppliancesListOptionalParams
  ): PagedAsyncIterableIterator<ReplicationAppliance>;
}
