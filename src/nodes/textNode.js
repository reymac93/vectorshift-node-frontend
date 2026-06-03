// textNode.js

import { BaseNode } from './common/BaseNode';
import { FiFileText } from 'react-icons/fi';

export const TextNode = (props) => {
  const config = {
    title: 'Text',
    color: 'var(--pink)',
    icon: <FiFileText />,
    inputs: [],
    outputs: ['output'],
    fields: [{ name: 'text', type: 'text' }],
  };

  return <BaseNode {...props} config={config} />;
};
