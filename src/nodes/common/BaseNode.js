import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../../store';

export const BaseNode = ({ id, data = {}, config }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [hover, setHover] = useState(false);

  const handleFieldChange = (fieldName) => (event) => {
    const value = event.target.value;
    updateNodeField(id, fieldName, value);
  };

  const getFieldValue = (field) => {
    if (data[field.name] !== undefined && data[field.name] !== null) {
      return data[field.name];
    }

    if (field.type === 'select') {
      return field.options?.[0] ?? '';
    }

    return '';
  };

  const percentForIndex = (index, count) => {
    if (count === 0) return '50%';
    return `${((index + 1) * 100) / (count + 1)}%`;
  };

  return (
    <div
      className="node-container"
      style={{
        width: 240,
        borderRadius: 12,
        background: 'var(--card)',
        boxShadow: hover ? '0 8px 20px rgba(0,0,0,0.12)' : '0 4px 12px rgba(0,0,0,0.08)',
        border: '1px solid var(--border)',
        padding: 12,
        transition: 'all 0.2s ease',
        position: 'relative',
        cursor: 'grab'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {config.color && (
        <div style={{
          height: 6,
          background: config.color,
          borderRadius: '8px 8px 0 0',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, paddingTop: config.color ? 8 : 0 }}>
        {config.icon && <div style={{ fontSize: 16, color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>{config.icon}</div>}
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{config.title}</div>
      </div>

      {config.fields?.length > 0 && (
        <div className="node-fields">
          {config.fields.map((field) => (
            <label key={field.name} className="node-field-label">
              <span>{field.name}</span>
              {field.type === 'text' ? (
                <input
                  type="text"
                  className="node-field-input"
                  value={getFieldValue(field)}
                  onChange={handleFieldChange(field.name)}
                  style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 12 }}
                />
              ) : (
                <select
                  className="node-field-select"
                  value={getFieldValue(field)}
                  onChange={handleFieldChange(field.name)}
                  style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 12 }}
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}
            </label>
          ))}
        </div>
      )}

      {config.inputs?.map((name, index) => (
        <Handle
          key={`input-${name}`}
          type="target"
          position={Position.Left}
          id={`${id}-${name}`}
          className="node-handle"
          style={{ top: percentForIndex(index, config.inputs.length) }}
        />
      ))}

      {config.outputs?.map((name, index) => (
        <Handle
          key={`output-${name}`}
          type="source"
          position={Position.Right}
          id={`${id}-${name}`}
          className="node-handle"
          style={{ top: percentForIndex(index, config.outputs.length) }}
        />
      ))}
    </div>
  );
};
