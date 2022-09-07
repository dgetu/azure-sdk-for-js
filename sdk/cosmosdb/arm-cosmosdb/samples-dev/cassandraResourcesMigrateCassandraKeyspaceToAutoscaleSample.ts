/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Cassandra Keyspace from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB Cassandra Keyspace from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBCassandraKeyspaceMigrateToAutoscale.json
 */
async function cosmosDbCassandraKeyspaceMigrateToAutoscale() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginMigrateCassandraKeyspaceToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    keyspaceName
  );
  console.log(result);
}

cosmosDbCassandraKeyspaceMigrateToAutoscale().catch(console.error);
