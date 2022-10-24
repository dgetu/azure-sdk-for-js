/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface NginxCertificate {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly type?: string;
  properties?: NginxCertificateProperties;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  location?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

export interface NginxCertificateProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  keyVirtualPath?: string;
  certificateVirtualPath?: string;
  keyVaultSecretId?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

export interface ResourceProviderDefaultErrorResponse {
  error?: ErrorResponseBody;
}

export interface ErrorResponseBody {
  code?: string;
  message?: string;
  target?: string;
  details?: ErrorResponseBody[];
}

export interface NginxCertificateListResponse {
  value?: NginxCertificate[];
  nextLink?: string;
}

/** Response of a list operation. */
export interface NginxConfigurationListResponse {
  /** Results of a list operation. */
  value?: NginxConfiguration[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

export interface NginxConfiguration {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly type?: string;
  properties?: NginxConfigurationProperties;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  location?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

export interface NginxConfigurationProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  files?: NginxConfigurationFile[];
  protectedFiles?: NginxConfigurationFile[];
  package?: NginxConfigurationPackage;
  rootFile?: string;
}

export interface NginxConfigurationFile {
  content?: string;
  virtualPath?: string;
}

export interface NginxConfigurationPackage {
  data?: string;
}

export interface NginxDeployment {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly name?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly type?: string;
  identity?: IdentityProperties;
  properties?: NginxDeploymentProperties;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  sku?: ResourceSku;
  location?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

export interface IdentityProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly principalId?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly tenantId?: string;
  type?: IdentityType;
  /** Dictionary of <UserIdentityProperties> */
  userAssignedIdentities?: { [propertyName: string]: UserIdentityProperties };
}

export interface UserIdentityProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly principalId?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly clientId?: string;
}

export interface NginxDeploymentProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly nginxVersion?: string;
  /** The managed resource group to deploy VNet injection related network resources. */
  managedResourceGroup?: string;
  networkProfile?: NginxNetworkProfile;
  /**
   * The IP address of the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ipAddress?: string;
  enableDiagnosticsSupport?: boolean;
  logging?: NginxLogging;
}

export interface NginxNetworkProfile {
  frontEndIPConfiguration?: NginxFrontendIPConfiguration;
  networkInterfaceConfiguration?: NginxNetworkInterfaceConfiguration;
}

export interface NginxFrontendIPConfiguration {
  publicIPAddresses?: NginxPublicIPAddress[];
  privateIPAddresses?: NginxPrivateIPAddress[];
}

export interface NginxPublicIPAddress {
  id?: string;
}

export interface NginxPrivateIPAddress {
  privateIPAddress?: string;
  privateIPAllocationMethod?: NginxPrivateIPAllocationMethod;
  subnetId?: string;
}

export interface NginxNetworkInterfaceConfiguration {
  subnetId?: string;
}

export interface NginxLogging {
  storageAccount?: NginxStorageAccount;
}

export interface NginxStorageAccount {
  accountName?: string;
  containerName?: string;
}

export interface ResourceSku {
  /** Name of the SKU. */
  name: string;
}

export interface NginxDeploymentUpdateParameters {
  identity?: IdentityProperties;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  sku?: ResourceSku;
  location?: string;
  properties?: NginxDeploymentUpdateProperties;
}

export interface NginxDeploymentUpdateProperties {
  enableDiagnosticsSupport?: boolean;
  logging?: NginxLogging;
}

export interface NginxDeploymentListResponse {
  value?: NginxDeployment[];
  nextLink?: string;
}

/** Result of GET request to list Nginx.NginxPlus operations. */
export interface OperationListResult {
  /** List of operations supported by the Nginx.NginxPlus provider. */
  value?: OperationResult[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** A Nginx.NginxPlus REST API operation. */
export interface OperationResult {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
  /** Indicates whether the operation is a data action */
  isDataAction?: boolean;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider: Nginx.NginxPlus */
  provider?: string;
  /** Type on which the operation is performed, e.g., 'deployments'. */
  resource?: string;
  /** Operation type, e.g., read, write, delete, etc. */
  operation?: string;
  /** Description of the operation, e.g., 'Write deployments'. */
  description?: string;
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Deleted */
  Deleted = "Deleted",
  /** NotSpecified */
  NotSpecified = "NotSpecified"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleted** \
 * **NotSpecified**
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link IdentityType} that the service accepts. */
export enum KnownIdentityType {
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAssignedUserAssigned */
  SystemAssignedUserAssigned = "SystemAssigned, UserAssigned",
  /** None */
  None = "None"
}

/**
 * Defines values for IdentityType. \
 * {@link KnownIdentityType} can be used interchangeably with IdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned, UserAssigned** \
 * **None**
 */
export type IdentityType = string;

/** Known values of {@link NginxPrivateIPAllocationMethod} that the service accepts. */
export enum KnownNginxPrivateIPAllocationMethod {
  /** Static */
  Static = "Static",
  /** Dynamic */
  Dynamic = "Dynamic"
}

/**
 * Defines values for NginxPrivateIPAllocationMethod. \
 * {@link KnownNginxPrivateIPAllocationMethod} can be used interchangeably with NginxPrivateIPAllocationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Static** \
 * **Dynamic**
 */
export type NginxPrivateIPAllocationMethod = string;

/** Optional parameters. */
export interface CertificatesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type CertificatesGetResponse = NginxCertificate;

/** Optional parameters. */
export interface CertificatesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The certificate */
  body?: NginxCertificate;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type CertificatesCreateOrUpdateResponse = NginxCertificate;

/** Optional parameters. */
export interface CertificatesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface CertificatesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type CertificatesListResponse = NginxCertificateListResponse;

/** Optional parameters. */
export interface CertificatesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type CertificatesListNextResponse = NginxCertificateListResponse;

/** Optional parameters. */
export interface ConfigurationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ConfigurationsListResponse = NginxConfigurationListResponse;

/** Optional parameters. */
export interface ConfigurationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationsGetResponse = NginxConfiguration;

/** Optional parameters. */
export interface ConfigurationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The Nginx configuration */
  body?: NginxConfiguration;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationsCreateOrUpdateResponse = NginxConfiguration;

/** Optional parameters. */
export interface ConfigurationsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ConfigurationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ConfigurationsListNextResponse = NginxConfigurationListResponse;

/** Optional parameters. */
export interface DeploymentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DeploymentsGetResponse = NginxDeployment;

/** Optional parameters. */
export interface DeploymentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  body?: NginxDeployment;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DeploymentsCreateOrUpdateResponse = NginxDeployment;

/** Optional parameters. */
export interface DeploymentsUpdateOptionalParams
  extends coreClient.OperationOptions {
  body?: NginxDeploymentUpdateParameters;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DeploymentsUpdateResponse = NginxDeployment;

/** Optional parameters. */
export interface DeploymentsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type DeploymentsListResponse = NginxDeploymentListResponse;

/** Optional parameters. */
export interface DeploymentsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type DeploymentsListByResourceGroupResponse = NginxDeploymentListResponse;

/** Optional parameters. */
export interface DeploymentsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DeploymentsListNextResponse = NginxDeploymentListResponse;

/** Optional parameters. */
export interface DeploymentsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DeploymentsListByResourceGroupNextResponse = NginxDeploymentListResponse;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface NginxManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
