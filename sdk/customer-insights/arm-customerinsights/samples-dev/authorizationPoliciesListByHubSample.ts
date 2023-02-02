/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CustomerInsightsManagementClient } from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all the authorization policies in a specified hub.
 *
 * @summary Gets all the authorization policies in a specified hub.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/AuthorizationPoliciesListByHub.json
 */
async function authorizationPoliciesListByHub() {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "azSdkTestHub";
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.authorizationPolicies.listByHub(
    resourceGroupName,
    hubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

authorizationPoliciesListByHub().catch(console.error);
