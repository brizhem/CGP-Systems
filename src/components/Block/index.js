import React from 'react';
import { useDrag } from 'react-dnd';

const Block = ({ id, text, content, icon, selected, onSelect, isDragAndDrop, customStyle }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'block',
    item: { id, text, content, icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleBlockClick = (e) => {
    e.stopPropagation();
    onSelect(id);
  };

  return (
    <div
      ref={isDragAndDrop ? drag : null}
      onClick={isDragAndDrop ? null : handleBlockClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '10px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'pointer',
        borderRadius: '6px',
        textAlign: 'center',
        backgroundColor: selected ? '#D9E7FF' : 'white',
        ...customStyle
      }}
    >
        <div>{icon}</div>
        <div>{text}</div>
    </div>
  );
};

export default Block;
