import React from 'react';
import { Text } from 'react-native';
import rule from '.';
import check from '../../engine';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

// To inspect these components, run the example app under "Rules -> Button Role"

it("throws if 'accessibilityRole' prop not defined", () => {
  const Text = () => (
    <Text>
      Some text
    </Text>
  );

  expect(() => run(<Text />)).toThrowError(rule.help.problem);
});

it("throws if 'accessibilityRole' prop has a value other than 'header', 'link', 'text', 'none'", () => {
  const Button = () => (
    <Text accessibilityRole={'button'}>
      Some text
    </Text>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessibilityRole' prop has the value 'text'", () => {
  const Button = () => (
    <Text accessibilityRole={'text'}>
      Some text
    </Text>
  );

  expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
});
