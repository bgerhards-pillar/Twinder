import React from 'react';
import App from "./App";
import { Tweet } from "./Components";

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('contains a tweet component', () => {
  const instance = renderer.create(<App />).root;
  expect(instance.findByType(Tweet)).toBeTruthy();
})
