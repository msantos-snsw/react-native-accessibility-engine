import type { Rule } from '../../types';
import { isRadio } from '../../helpers';

const allowedValues = [true, false];
const allowedValuesMessage = allowedValues.join(' or ');

const rule: Rule = {
  id: 'selected-state-required',
  matcher: (node) => isRadio(node),
  assertion: (node) =>
    allowedValues.includes(node.props.accessibilityState?.selected),
  help: {
    problem:
      "This component has an accessibility role of 'radio' but doesn't have a selected state",
    solution: `Set the 'accessibilityState' prop to an object like this: { selected: ${allowedValuesMessage} }`,
    link: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
    rule: 'selected-state-required'
  },
};

export default rule;
