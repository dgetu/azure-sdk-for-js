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
  PolicyEventsListQueryResultsForPolicySetDefinitionOptionalParams,
  PolicyInsightsClient
} from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Queries policy events for the subscription level policy set definition.
 *
 * @summary Queries policy events for the subscription level policy set definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyEvents_QuerySubscriptionLevelPolicySetDefinitionScope.json
 */
async function queryAtSubscriptionLevelPolicySetDefinitionScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyEventsResource = "default";
  const policySetDefinitionName = "3e3807c1-65c9-49e0-a406-82d8ae3e338c";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyEvents.listQueryResultsForPolicySetDefinition(
    policyEventsResource,
    subscriptionId,
    policySetDefinitionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtSubscriptionLevelPolicySetDefinitionScope().catch(console.error);

/**
 * This sample demonstrates how to Queries policy events for the subscription level policy set definition.
 *
 * @summary Queries policy events for the subscription level policy set definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyEvents_QuerySubscriptionLevelPolicySetDefinitionScopeNextLink.json
 */
async function queryAtSubscriptionLevelPolicySetDefinitionScopeWithNextLink() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyEventsResource = "default";
  const policySetDefinitionName = "3e3807c1-65c9-49e0-a406-82d8ae3e338c";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options: PolicyEventsListQueryResultsForPolicySetDefinitionOptionalParams = {
    queryOptions: { skipToken: skipToken }
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyEvents.listQueryResultsForPolicySetDefinition(
    policyEventsResource,
    subscriptionId,
    policySetDefinitionName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtSubscriptionLevelPolicySetDefinitionScopeWithNextLink().catch(
  console.error
);
