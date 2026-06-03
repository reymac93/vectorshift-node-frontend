import { BaseNode } from '../common/BaseNode';
import { FiHash } from 'react-icons/fi';

export const MathNode = (props) => {
  const config = {
    title: 'Math',
    color: 'var(--purple)',
    icon: <FiHash />,
    inputs: ['a', 'b'],
    outputs: ['result'],
    fields: [
      { name: 'operation', type: 'select', options: ['+', '-', '*', '/'] }
    ]
  };

  return <BaseNode {...props} config={config} />;
};
