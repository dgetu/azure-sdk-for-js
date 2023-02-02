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
  CreateProtectionContainerInput,
  SiteRecoveryManagementClient
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Operation to create a protection container.
 *
 * @summary Operation to create a protection container.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationProtectionContainers_Create.json
 */
async function createAProtectionContainer() {
  const subscriptionId = "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName = "resourceGroupPS1";
  const fabricName = "cloud1";
  const protectionContainerName = "cloud_6d224fc6-f326-5d35-96de-fbf51efb3179";
  const creationInput: CreateProtectionContainerInput = {
    properties: {
      providerSpecificInput: [
        { instanceType: "A2ACrossClusterMigration" }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationProtectionContainers.beginCreateAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    creationInput
  );
  console.log(result);
}

createAProtectionContainer().catch(console.error);
