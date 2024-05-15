import type { ReactTestInstance } from 'react-test-renderer';
import isPressable from '../isPressable';

const isRadio = (node: ReactTestInstance) => {
  return isPressable(node.type) && node.props.accessibilityRole === 'radio';
};

export default isRadio;
