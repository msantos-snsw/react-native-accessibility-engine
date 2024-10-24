import type { Rule } from '../../types';
import { isPressable } from '../../helpers';

const allowedRoles = [
  'button',
  'link',
  'imagebutton',
  'radio',
  'tab',
  'checkbox',
  'togglebutton',
  'combobox',
];
const allowedRolesMessage = allowedRoles.join(' or ');

const rule: Rule = {
  id: 'pressable-role-required',
  matcher: (node) => isPressable(node.type),
  assertion: (node) => allowedRoles.includes(node.props.accessibilityRole),
  help: {
    problem:
      "This component is pressable but the user hasn't been informed that it behaves like a button/link/radio",
    solution: `Set the 'accessibilityRole' prop to ${allowedRolesMessage}`,
    link: '',
    rule: 'pressable-role-required',
  },
};

export default rule;
