/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified load balancer inbound NAT rule.
 *
 * @summary Deletes the specified load balancer inbound NAT rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/InboundNatRuleDelete.json
 */
async function inboundNatRuleDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb1";
  const inboundNatRuleName = "natRule1.1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.inboundNatRules.beginDeleteAndWait(
    resourceGroupName,
    loadBalancerName,
    inboundNatRuleName
  );
  console.log(result);
}

inboundNatRuleDelete().catch(console.error);
