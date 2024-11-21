import React from 'react';
import { Text } from 'react-native';
import rule from '.';
import check from '../../engine';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

// To inspect these components, run the example app under "Rules -> Button Role"

it("throws if 'accessibilityRole' prop not defined", () => {
  const Header = () => <Text>Some text</Text>;

  expect(() => run(<Header />)).toThrowError(rule.help.problem);
});

it("throws if 'accessibilityRole' prop has a value other than 'header', 'link', 'text', 'none', 'button'", () => {
  const Header = () => <Text accessibilityRole={'alert'}>Some text</Text>;

  expect(() => run(<Header />)).toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessibilityRole' prop has the value 'text'", () => {
  const Header = () => <Text accessibilityRole={'text'}>Some text</Text>;

  expect(() => run(<Header />)).not.toThrowError(rule.help.problem);
});
