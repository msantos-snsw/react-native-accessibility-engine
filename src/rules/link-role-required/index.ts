import type { Rule } from '../../types';
import { isText } from '../../helpers';

const rule: Rule = {
  id: 'link-role-required',
  matcher: (node) => isText(node.type),
  assertion: (node) => {
    const { onPress, accessibilityRole } = node.props;
    if (onPress) {
      return ['link', 'button'].includes(accessibilityRole);
    }
    return true;
  },
  help: {
    problem:
      "The text is clickable, but the user wasn't informed that it behaves like a link",
    solution:
      "Set the 'accessibilityRole' prop to 'link' or remove the 'onPress' prop",
    link: '',
    rule: 'link-role-required',
  },
};

export default rule;
