/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a devcenter
 *
 * @summary Deletes a devcenter
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-10-12-preview/examples/DevCenters_Delete.json
 */
async function devCentersDelete() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const devCenterName = "Contoso";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.devCenters.beginDeleteAndWait(
    resourceGroupName,
    devCenterName
  );
  console.log(result);
}

devCentersDelete().catch(console.error);
