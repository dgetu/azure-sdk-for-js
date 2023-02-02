/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a route table tags.
 *
 * @summary Updates a route table tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/RouteTableUpdateTags.json
 */
async function updateRouteTableTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const routeTableName = "testrt";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.routeTables.updateTags(resourceGroupName, routeTableName, parameters);
  console.log(result);
}

updateRouteTableTags().catch(console.error);
