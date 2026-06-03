import { BaseNode } from '../common/BaseNode';
import { FiTerminal } from 'react-icons/fi';

export const LoggerNode = (props) => {
  const config = {
    title: 'Logger',
    color: 'var(--purple)',
    icon: <FiTerminal />,
    inputs: ['input'],
    outputs: ['output'],
    fields: []
  };

  return <BaseNode {...props} config={config} />;
};
