/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SnapshotResource, SnapshotsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Snapshots. */
export interface Snapshots {
  /**
   * Get the AppComplianceAutomation snapshot list.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  list(
    reportName: string,
    options?: SnapshotsListOptionalParams
  ): PagedAsyncIterableIterator<SnapshotResource>;
}
