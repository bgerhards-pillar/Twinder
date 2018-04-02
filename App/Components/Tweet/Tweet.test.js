import React from "react";
import Tweet from "./Tweet";

import renderer from "react-test-renderer";
import { StyleSheet, Text, View } from "react-native";

it("renders without crashing", () => {
  const rendered = renderer.create(<Tweet />).toJSON();
  expect(rendered).toBeTruthy();
});

it("renders with text", () => {
  const instance = renderer.create(<Tweet>Hello from Twitter world</Tweet>)
    .root;
  const text = instance.findByType(Text).props.children;
  expect(text).toEqual("Hello from Twitter world");
});
