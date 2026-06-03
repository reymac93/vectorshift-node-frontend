// toolbar.js

import { DraggableNode } from './draggableNode';
import { FiUpload, FiGlobe, FiDownload, FiFileText, FiHash, FiClock, FiGitBranch, FiTerminal, FiZap } from 'react-icons/fi';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' icon={<FiUpload/>} color={'var(--blue)'} />
                <DraggableNode type='llm' label='LLM' icon={<FiZap/>} color={'var(--green)'} />
                <DraggableNode type='customOutput' label='Output' icon={<FiDownload/>} color={'var(--orange)'} />
                <DraggableNode type='text' label='Text' icon={<FiFileText/>} color={'var(--pink)'} />
                <DraggableNode type='math' label='Math' icon={<FiHash/>} color={'var(--purple)'} />
                <DraggableNode type='api' label='API' icon={<FiGlobe/>} color={'var(--purple)'} />
                <DraggableNode type='delay' label='Delay' icon={<FiClock/>} color={'var(--muted)'} />
                <DraggableNode type='condition' label='Condition' icon={<FiGitBranch/>} color={'var(--orange)'} />
                <DraggableNode type='logger' label='Logger' icon={<FiTerminal/>} color={'var(--purple)'} />
            </div>
        </div>
    );
};
