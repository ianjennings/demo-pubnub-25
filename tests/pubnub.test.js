import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("PubNub Website", () => {
  it("should load the homepage and check key call-to-actions", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com" });

    const startBuildingBtn = await testdriver.find("Start Building button");
    expect(startBuildingBtn).toBeTruthy();

    const assertResult = await testdriver.assert(
      "The PubNub homepage is loaded with the main headline and navigation"
    );
    expect(assertResult).toBeTruthy();
  });

  it("should navigate to the pricing page and verify plan options", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com/pricing/" });

    const freePlan = await testdriver.find("Free Plan");
    expect(freePlan).toBeTruthy();

    const assertResult = await testdriver.assert(
      "The pricing plans including Free and Starter tiers are displayed"
    );
    expect(assertResult).toBeTruthy();
  });

  it("should explore real-time interactive demos", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com/demos/" });

    const customerSupport = await testdriver.find("Real-Time Customer Support Demo");
    expect(customerSupport).toBeTruthy();

    const assertResult = await testdriver.assert(
      "Real-time interactive demos such as chat and customer support are visible"
    );
    expect(assertResult).toBeTruthy();
  });
});
