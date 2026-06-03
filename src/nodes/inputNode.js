// inputNode.js

import { BaseNode } from './common/BaseNode';
import { FiUpload } from 'react-icons/fi';

export const InputNode = (props) => {
  const config = {
    title: 'Input',
    color: 'var(--blue)',
    icon: <FiUpload />, 
    inputs: [],
    outputs: ['output'],
    fields: [
      { name: 'name', type: 'text' },
      { name: 'type', type: 'select', options: ['Text', 'File'] },
    ],
  };

  return <BaseNode {...props} config={config} />;
};
