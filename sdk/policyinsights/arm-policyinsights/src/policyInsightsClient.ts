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
import {
  PolicyTrackedResourcesImpl,
  RemediationsImpl,
  PolicyEventsImpl,
  PolicyStatesImpl,
  PolicyMetadataOperationsImpl,
  PolicyRestrictionsImpl,
  ComponentPolicyStatesImpl,
  OperationsImpl,
  AttestationsImpl
} from "./operations";
import {
  PolicyTrackedResources,
  Remediations,
  PolicyEvents,
  PolicyStates,
  PolicyMetadataOperations,
  PolicyRestrictions,
  ComponentPolicyStates,
  Operations,
  Attestations
} from "./operationsInterfaces";
import { PolicyInsightsClientOptionalParams } from "./models";

export class PolicyInsightsClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the PolicyInsightsClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PolicyInsightsClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PolicyInsightsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-policyinsights/6.0.0-beta.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.policyTrackedResources = new PolicyTrackedResourcesImpl(this);
    this.remediations = new RemediationsImpl(this);
    this.policyEvents = new PolicyEventsImpl(this);
    this.policyStates = new PolicyStatesImpl(this);
    this.policyMetadataOperations = new PolicyMetadataOperationsImpl(this);
    this.policyRestrictions = new PolicyRestrictionsImpl(this);
    this.componentPolicyStates = new ComponentPolicyStatesImpl(this);
    this.operations = new OperationsImpl(this);
    this.attestations = new AttestationsImpl(this);
  }

  policyTrackedResources: PolicyTrackedResources;
  remediations: Remediations;
  policyEvents: PolicyEvents;
  policyStates: PolicyStates;
  policyMetadataOperations: PolicyMetadataOperations;
  policyRestrictions: PolicyRestrictions;
  componentPolicyStates: ComponentPolicyStates;
  operations: Operations;
  attestations: Attestations;
}
