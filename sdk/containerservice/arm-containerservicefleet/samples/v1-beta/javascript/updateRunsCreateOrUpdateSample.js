/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceFleetClient } = require("@azure/arm-containerservicefleet");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a UpdateRun
 *
 * @summary Create a UpdateRun
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/preview/2023-03-15-preview/examples/UpdateRuns_CreateOrUpdate.json
 */
async function createAnUpdateRun() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet1";
  const updateRunName = "run1";
  const resource = {
    managedClusterUpdate: {
      upgrade: { type: "Full", kubernetesVersion: "1.26.1" },
    },
    strategy: {
      stages: [
        {
          name: "stage1",
          afterStageWaitInSeconds: 3600,
          groups: [{ name: "group-a" }],
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.updateRuns.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    updateRunName,
    resource
  );
  console.log(result);
}

async function main() {
  createAnUpdateRun();
}

main().catch(console.error);
