import type { Rule } from '../../types';
import { isText } from '../../helpers';

const allowedRoles = ['header', 'link', 'text', 'none'];
const allowedRolesMessage = allowedRoles.join(' or ');

const rule: Rule = {
  id: 'text-role-required',
  matcher: (node) => isText(node.type),
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
