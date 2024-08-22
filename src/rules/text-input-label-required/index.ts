import type { Rule } from '../../types';
import { isTextInput } from '../../helpers';

const rule: Rule = {
  id: 'text-input-label-required',
  matcher: (node) => isTextInput(node.type),
  assertion: (node) => {
    const accessibilityLabel = node.props.accessibilityLabel;
    if (!accessibilityLabel) {
      return false;
    }
    return true;
  },
  help: {
    problem: 'This text input has no accessibility label',
    solution: "Define an 'accessibilityLabel' prop",
    link: '',
    rule: 'text-input-label-required',
  },
};

export default rule;
