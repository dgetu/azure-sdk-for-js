/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Onboard an Azure API Management API to Defender for APIs. The system will start monitoring the operations within the Azure Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 *
 * @summary Onboard an Azure API Management API to Defender for APIs. The system will start monitoring the operations within the Azure Management API for intrusive behaviors and provide alerts for attacks that have been detected.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-11-20-preview/examples/ApiCollections/APICollectionOnboarding_Create_example.json
 */
async function onboardAnAzureApiManagementApiToDefenderForApIs() {
  const subscriptionId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiCollectionId = "echo-api";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.aPICollectionOnboarding.create(
    resourceGroupName,
    serviceName,
    apiCollectionId
  );
  console.log(result);
}

onboardAnAzureApiManagementApiToDefenderForApIs().catch(console.error);
