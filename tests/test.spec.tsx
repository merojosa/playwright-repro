import { expect, test } from "@playwright/experimental-ct-react";
import * as React from "react";

function Page() {
  return <p>hi</p>;
}

test.use({ viewport: { width: 500, height: 500 } });

test("do not pass", async ({ mount, page }) => {
  const component = await mount(<Page />);

  await expect(component).toContainText("hi");
});
