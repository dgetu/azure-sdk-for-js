/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RegionForOnlineOffline,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Online the specified region for the specified Azure Cosmos DB database account.
 *
 * @summary Online the specified region for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBDatabaseAccountOnlineRegion.json
 */
async function cosmosDbDatabaseAccountOnlineRegion() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const regionParameterForOnline: RegionForOnlineOffline = {
    region: ""
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginOnlineRegionAndWait(
    resourceGroupName,
    accountName,
    regionParameterForOnline
  );
  console.log(result);
}

async function main() {
  cosmosDbDatabaseAccountOnlineRegion();
}

main().catch(console.error);
