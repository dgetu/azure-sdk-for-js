// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import "./env";

import { ArtifactsClient, ArtifactsClientOptionalParams } from "../../../src";
import { Recorder, env } from "@azure-tools/test-recorder";

export async function createClient(
  recorder: Recorder,
  options?: ArtifactsClientOptionalParams
): Promise<ArtifactsClient> {
  await recorder.start({
    envSetupForPlayback: {
      AZURE_CLIENT_ID: "azure_client_id",
      AZURE_CLIENT_SECRET: "azure_client_secret",
      AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
      ENDPOINT: "https://testaccount.dev.azuresynapse.net",
    },
  });

  const client = new ArtifactsClient(env.ENDPOINT ?? "", recorder.configureClientOptions({
    ...options,
    allowInsecureConnection: true,
  }));
  return client;
}
