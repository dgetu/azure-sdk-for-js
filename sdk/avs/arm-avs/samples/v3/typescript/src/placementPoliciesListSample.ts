/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List placement policies in a private cloud cluster
 *
 * @summary List placement policies in a private cloud cluster
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/PlacementPolicies_List.json
 */
async function placementPoliciesList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.placementPolicies.list(
    resourceGroupName,
    privateCloudName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

placementPoliciesList().catch(console.error);
