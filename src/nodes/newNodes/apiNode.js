import { BaseNode } from '../common/BaseNode';
import { FiGlobe } from 'react-icons/fi';

export const ApiNode = (props) => {
  const config = {
    title: 'API',
    color: 'var(--purple)',
    icon: <FiGlobe />,
    inputs: ['input'],
    outputs: ['response'],
    fields: [
      { name: 'url', type: 'text' }
    ]
  };

  return <BaseNode {...props} config={config} />;
};
