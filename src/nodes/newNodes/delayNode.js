import { BaseNode } from '../common/BaseNode';
import { FiClock } from 'react-icons/fi';

export const DelayNode = (props) => {
  const config = {
    title: 'Delay',
    color: 'var(--muted)',
    icon: <FiClock />,
    inputs: ['input'],
    outputs: ['output'],
    fields: [
      { name: 'seconds', type: 'text' }
    ]
  };

  return <BaseNode {...props} config={config} />;
};
