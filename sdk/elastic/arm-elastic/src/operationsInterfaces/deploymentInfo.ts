/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  DeploymentInfoListOptionalParams,
  DeploymentInfoListResponse
} from "../models";

/** Interface representing a DeploymentInfo. */
export interface DeploymentInfo {
  /**
   * Fetch information regarding Elastic cloud deployment corresponding to the Elastic monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    monitorName: string,
    options?: DeploymentInfoListOptionalParams
  ): Promise<DeploymentInfoListResponse>;
}
