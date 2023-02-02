/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Queries component policy states for the subscription level policy definition.
 *
 * @summary Queries component policy states for the subscription level policy definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-04-01/examples/ComponentPolicyStates_QuerySubscriptionLevelPolicyDefinitionScope.json
 */
async function queryLatestComponentPolicyStatesAtSubscriptionLevelPolicyDefinitionScope() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const policyDefinitionName = "24813039-7534-408a-9842-eb99f45721b1";
  const componentPolicyStatesResource = "latest";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.componentPolicyStates.listQueryResultsForPolicyDefinition(
    subscriptionId,
    policyDefinitionName,
    componentPolicyStatesResource
  );
  console.log(result);
}

async function main() {
  queryLatestComponentPolicyStatesAtSubscriptionLevelPolicyDefinitionScope();
}

main().catch(console.error);
