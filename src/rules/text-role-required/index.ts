import type { Rule } from '../../types';
import { isPressable, isText } from '../../helpers';
import type { ReactTestInstance } from 'react-test-renderer';

const allowedRoles = ['header', 'link', 'text', 'none', 'button'];
const allowedRolesMessage = allowedRoles.join(' or ');

const hasPressableParent = (node: ReactTestInstance): boolean => {
  if (isPressable(node.type)) return true;

  if (node.parent) return hasPressableParent(node.parent);

  return false;
};

const rule: Rule = {
  id: 'text-role-required',
  matcher: (node) => isText(node.type) && !hasPressableParent(node),
  assertion: (node) => allowedRoles.includes(node.props.accessibilityRole),
  help: {
    problem:
      "This text component needs to communicate it's purpose to the user.",
    solution: `Set the 'accessibilityRole' prop to ${allowedRolesMessage}`,
    link: '',
    rule: 'text-role-required',
  },
};

export default rule;
