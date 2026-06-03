// draggableNode.js

export const DraggableNode = ({ type, label, icon, color }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.currentTarget.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className="draggable-pill"
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.currentTarget.style.cursor = 'grab')}
        style={{ borderColor: 'var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}
        draggable
        title={label}
      >
          {icon && <div style={{ display: 'flex', alignItems: 'center', color: color ?? 'var(--muted)' }}>{icon}</div>}
          <span style={{ fontSize: 13 }}>{label}</span>
      </div>
    );
  };
  