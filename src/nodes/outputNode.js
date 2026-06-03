// outputNode.js

import { BaseNode } from './common/BaseNode';
import { FiDownload } from 'react-icons/fi';

export const OutputNode = (props) => {
  const config = {
    title: 'Output',
    color: 'var(--orange)',
    icon: <FiDownload />,
    inputs: ['value'],
    outputs: [],
    fields: [
      { name: 'name', type: 'text' },
      { name: 'type', type: 'select', options: ['Text', 'Image'] },
    ],
  };

  return <BaseNode {...props} config={config} />;
};
