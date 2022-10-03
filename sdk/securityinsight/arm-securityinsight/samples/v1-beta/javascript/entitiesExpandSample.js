/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Expands an entity.
 *
 * @summary Expands an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/entities/expand/PostExpandEntity.json
 */
async function expandAnEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const parameters = {
    endTime: new Date("2019-05-26T00:00:00.000Z"),
    expansionId: "a77992f3-25e9-4d01-99a4-5ff606cc410a",
    startTime: new Date("2019-04-25T00:00:00.000Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.expand(
    resourceGroupName,
    workspaceName,
    entityId,
    parameters
  );
  console.log(result);
}

expandAnEntity().catch(console.error);
