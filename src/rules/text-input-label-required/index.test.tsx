import React from 'react';
import { TextInput } from 'react-native';
import rule from '.';
import check from '../../engine';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

describe('text input without a label', () => {
  it("doesn't throw if 'accessibilityLabel' prop defined", () => {
    const Input = () => <TextInput accessibilityLabel={'test'} />;
    expect(() => run(<Input />)).not.toThrowError(rule.help.problem);
  });

  it("throws an error if 'accessibilityLabel' prop is not defined", () => {
    const Input = () => <TextInput />;
    expect(() => run(<Input />)).toThrowError(rule.help.problem);
  });
});
