/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import { SparkBatchImpl, SparkSessionOperationsImpl } from "./operations";
import { SparkBatch, SparkSessionOperations } from "./operationsInterfaces";
import { SparkClientOptionalParams } from "./models";

export class SparkClient extends coreClient.ServiceClient {
  endpoint: string;
  livyApiVersion: string;
  sparkPoolName: string;

  /**
   * Initializes a new instance of the SparkClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param endpoint The workspace development endpoint, for example
   *                 https://myworkspace.dev.azuresynapse.net.
   * @param sparkPoolName Name of the spark pool.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    endpoint: string,
    sparkPoolName: string,
    options?: SparkClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (sparkPoolName === undefined) {
      throw new Error("'sparkPoolName' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SparkClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-synapse-spark/1.0.0-beta.6`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://dev.azuresynapse.net/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? "{endpoint}"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.endpoint = endpoint;
    this.sparkPoolName = sparkPoolName;

    // Assigning values to Constant parameters
    this.livyApiVersion = options.livyApiVersion || "2019-11-01-preview";
    this.sparkBatch = new SparkBatchImpl(this);
    this.sparkSessionOperations = new SparkSessionOperationsImpl(this);
  }

  sparkBatch: SparkBatch;
  sparkSessionOperations: SparkSessionOperations;
}
