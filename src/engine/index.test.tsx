import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icons from 'tests/assets';
import AccessibilityEngine from 'react-native-accessibility-engine';

const Button = () => (
  <TouchableOpacity accessible={false}>
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should not contain accessibility errors', () => {
  expect(() => AccessibilityEngine.check(<Button />)).toThrow();
});
