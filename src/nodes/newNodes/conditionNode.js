import { BaseNode } from '../common/BaseNode';
import { FiGitBranch } from 'react-icons/fi';

export const ConditionNode = (props) => {
  const config = {
    title: 'Condition',
    color: 'var(--orange)',
    icon: <FiGitBranch />,
    inputs: ['input'],
    outputs: ['true', 'false'],
    fields: [
      { name: 'condition', type: 'text' }
    ]
  };

  return <BaseNode {...props} config={config} />;
};
