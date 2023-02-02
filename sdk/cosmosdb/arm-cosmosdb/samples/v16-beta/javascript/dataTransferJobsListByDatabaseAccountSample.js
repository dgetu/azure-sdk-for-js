/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a list of Data Transfer jobs.
 *
 * @summary Get a list of Data Transfer jobs.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/data-transfer-service/CosmosDBDataTransferJobFeed.json
 */
async function cosmosDbDataTransferJobFeed() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataTransferJobs.listByDatabaseAccount(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cosmosDbDataTransferJobFeed();
}

main().catch(console.error);
