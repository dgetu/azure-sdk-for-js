/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RecoveryServicesProvider,
  ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams,
  ReplicationRecoveryServicesProvidersListOptionalParams,
  ReplicationRecoveryServicesProvidersGetOptionalParams,
  ReplicationRecoveryServicesProvidersGetResponse,
  AddRecoveryServicesProviderInput,
  ReplicationRecoveryServicesProvidersCreateOptionalParams,
  ReplicationRecoveryServicesProvidersCreateResponse,
  ReplicationRecoveryServicesProvidersPurgeOptionalParams,
  ReplicationRecoveryServicesProvidersRefreshProviderOptionalParams,
  ReplicationRecoveryServicesProvidersRefreshProviderResponse,
  ReplicationRecoveryServicesProvidersDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationRecoveryServicesProviders. */
export interface ReplicationRecoveryServicesProviders {
  /**
   * Lists the registered recovery services providers for the specified fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  listByReplicationFabrics(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams
  ): PagedAsyncIterableIterator<RecoveryServicesProvider>;
  /**
   * Lists the registered recovery services providers in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationRecoveryServicesProvidersListOptionalParams
  ): PagedAsyncIterableIterator<RecoveryServicesProvider>;
  /**
   * Gets the details of registered recovery services provider.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersGetOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersGetResponse>;
  /**
   * The operation to add a recovery services provider.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param addProviderInput Add provider input.
   * @param options The options parameters.
   */
  beginCreate(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    addProviderInput: AddRecoveryServicesProviderInput,
    options?: ReplicationRecoveryServicesProvidersCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationRecoveryServicesProvidersCreateResponse>,
      ReplicationRecoveryServicesProvidersCreateResponse
    >
  >;
  /**
   * The operation to add a recovery services provider.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param addProviderInput Add provider input.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    addProviderInput: AddRecoveryServicesProviderInput,
    options?: ReplicationRecoveryServicesProvidersCreateOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersCreateResponse>;
  /**
   * The operation to purge(force delete) a recovery services provider from the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  beginPurge(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersPurgeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to purge(force delete) a recovery services provider from the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  beginPurgeAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersPurgeOptionalParams
  ): Promise<void>;
  /**
   * The operation to refresh the information from the recovery services provider.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  beginRefreshProvider(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersRefreshProviderOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        ReplicationRecoveryServicesProvidersRefreshProviderResponse
      >,
      ReplicationRecoveryServicesProvidersRefreshProviderResponse
    >
  >;
  /**
   * The operation to refresh the information from the recovery services provider.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  beginRefreshProviderAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersRefreshProviderOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersRefreshProviderResponse>;
  /**
   * The operation to removes/delete(unregister) a recovery services provider from the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to removes/delete(unregister) a recovery services provider from the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersDeleteOptionalParams
  ): Promise<void>;
}
