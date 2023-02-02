/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get the status of an azure asynchronous operation associated with a private link scope operation.
 *
 * @summary Get the status of an azure asynchronous operation associated with a private link scope operation.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/privateLinkScopeOperationStatuses.json
 */
async function getSpecificOperationStatus() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const asyncOperationId = "713192d7-503f-477a-9cfe-4efc3ee2bd11";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "MyResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.privateLinkScopeOperationStatus.get(
    asyncOperationId,
    resourceGroupName
  );
  console.log(result);
}

async function main() {
  getSpecificOperationStatus();
}

main().catch(console.error);
