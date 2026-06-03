// llmNode.js

import { BaseNode } from './common/BaseNode';
import { FiZap } from 'react-icons/fi';

export const LLMNode = (props) => {
  const config = {
    title: 'LLM',
    color: 'var(--green)',
    icon: <FiZap />,
    inputs: ['system', 'prompt'],
    outputs: ['response'],
    fields: [],
  };

  return <BaseNode {...props} config={config} />;
};
