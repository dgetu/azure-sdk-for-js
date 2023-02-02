/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IotHubClient } = require("@azure/arm-iothub");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 *
 * @summary Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/preview/2022-04-30-preview/examples/iothub_getconsumergroup.json
 */
async function iotHubResourceListEventHubConsumerGroups() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "testHub";
  const eventHubEndpointName = "events";
  const name = "test";
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.getEventHubConsumerGroup(
    resourceGroupName,
    resourceName,
    eventHubEndpointName,
    name
  );
  console.log(result);
}

iotHubResourceListEventHubConsumerGroups().catch(console.error);
