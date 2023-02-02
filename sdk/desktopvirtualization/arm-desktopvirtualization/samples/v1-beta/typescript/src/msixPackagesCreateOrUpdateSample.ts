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
  MsixPackage,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update a MSIX package.
 *
 * @summary Create or update a MSIX package.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/MsixPackage_Create.json
 */
async function msixPackageCreate() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const hostPoolName = "hostpool1";
  const msixPackageFullName = "msixpackagefullname";
  const msixPackage: MsixPackage = {
    displayName: "displayname",
    imagePath: "imagepath",
    isActive: false,
    isRegularRegistration: false,
    lastUpdated: new Date("2008-09-22T14:01:54.9571247Z"),
    packageApplications: [
      {
        description: "application-desc",
        appId: "ApplicationId",
        appUserModelID: "AppUserModelId",
        friendlyName: "friendlyname",
        iconImageName: "Apptile",
        rawIcon: Buffer.from("VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo"),
        rawPng: Buffer.from("VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo")
      }
    ],
    packageDependencies: [
      {
        dependencyName: "MsixTest_Dependency_Name",
        minVersion: "version",
        publisher: "PublishedName"
      }
    ],
    packageFamilyName: "MsixPackage_FamilyName",
    packageName: "MsixPackage_name",
    packageRelativePath: "packagerelativepath",
    version: "version"
  };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.msixPackages.createOrUpdate(
    resourceGroupName,
    hostPoolName,
    msixPackageFullName,
    msixPackage
  );
  console.log(result);
}

msixPackageCreate().catch(console.error);
