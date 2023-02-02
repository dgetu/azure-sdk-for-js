/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RecoveryServicesClient } from "@azure/arm-recoveryservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Unregisters the given container from your Recovery Services vault.
 *
 * @summary Unregisters the given container from your Recovery Services vault.
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2022-04-01/examples/DeleteRegisteredIdentities.json
 */
async function deleteRegisteredIdentity() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "BCDRIbzRG";
  const vaultName = "BCDRIbzVault";
  const identityName = "dpmcontainer01";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.registeredIdentities.delete(
    resourceGroupName,
    vaultName,
    identityName
  );
  console.log(result);
}

async function main() {
  deleteRegisteredIdentity();
}

main().catch(console.error);
