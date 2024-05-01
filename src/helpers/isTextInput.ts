import type React from 'react';
import {
  TextInput
} from 'react-native';

const isTextInput = (type: React.ElementType<any>) => {
  return (
    type === TextInput
  );
};

export default isTextInput;
