import { test_server } from "@azure/test-server";

describe.only("temp", async () => {
  test_server("/workspaces/azure-sdk-for-js/sdk/template/template/dist-esm/test", [
    "public/configurationClient.spec.js",
  ]);
  await new Promise((resolve) => {
    setTimeout(resolve, 600 * 1000);
  });
});
