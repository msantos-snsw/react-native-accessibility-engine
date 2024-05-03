import type { Rule } from '../../types';
import { isText } from '../../helpers';

const allowedRoles = ['header', 'link', 'text', 'none'];
const allowedRolesMessage = allowedRoles.join(' or ');

const rule: Rule = {
  id: 'pressable-role-required',
  matcher: (node) => isText(node.type),
  assertion: (node) => allowedRoles.includes(node.props.accessibilityRole),
  help: {
    problem:
      "This component is pressable but the user hasn't been informed that it behaves like a button/link/radio",
    solution: `Set the 'accessibilityRole' prop to ${allowedRolesMessage}`,
    link: '',
  },
};

export default rule;
