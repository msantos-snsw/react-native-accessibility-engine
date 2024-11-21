import '@testing-library/jest-native/extend-expect';
import './src';

if (typeof global.performance === 'undefined') {
  global.performance = {
    now: () => Date.now(), // or a more accurate implementation as shown below
  };
}

if (typeof global.performance.now !== 'function') {
  const start = Date.now();
  global.performance.now = function () {
    return Date.now() - start; // Returns time in milliseconds since the start
  };
}
