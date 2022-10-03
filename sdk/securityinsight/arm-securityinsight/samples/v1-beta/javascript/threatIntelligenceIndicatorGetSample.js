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
 * This sample demonstrates how to View a threat intelligence indicator by name.
 *
 * @summary View a threat intelligence indicator by name.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/threatintelligence/GetThreatIntelligenceById.json
 */
async function viewAThreatIntelligenceIndicatorByName() {
  const subscriptionId = "bd794837-4d29-4647-9105-6339bfdb4e6a";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const name = "e16ef847-962e-d7b6-9c8b-a33e4bd30e47";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.threatIntelligenceIndicator.get(
    resourceGroupName,
    workspaceName,
    name
  );
  console.log(result);
}

viewAThreatIntelligenceIndicatorByName().catch(console.error);
