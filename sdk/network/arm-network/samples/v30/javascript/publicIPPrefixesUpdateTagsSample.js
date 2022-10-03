/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates public IP prefix tags.
 *
 * @summary Updates public IP prefix tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/PublicIpPrefixUpdateTags.json
 */
async function updatePublicIPPrefixTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const publicIpPrefixName = "test-ipprefix";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPPrefixes.updateTags(
    resourceGroupName,
    publicIpPrefixName,
    parameters
  );
  console.log(result);
}

updatePublicIPPrefixTags().catch(console.error);
