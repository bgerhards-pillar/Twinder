import React from "react";
import Tweet from "./Tweet";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<Tweet />).toJSON();
  expect(rendered).toBeTruthy();
});
