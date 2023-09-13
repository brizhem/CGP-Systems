import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, moveItemUp, moveItemDown, cloneItem, removeItem } from '../../store/actions';
import Block from '../Block';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';
import copyImg from '../../assets/copy.png';
import trash from '../../assets/trash.png';

const buttonsStyles = {
    display: 'flex',
    backgroundColor: '#449CF4',
    width: '53px',
    height: '27px',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer'
}

const Canvas = () => {
  const dispatch = useDispatch();
  const blocks = useSelector((state) => state.blocks);

  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const [, drop] = useDrop({
    accept: 'block',
    drop: (item) => {
        console.log('item', item);
        const newId = Date.now();
        dispatch(addItem({ ...item, id: newId }));
    },
  });

  const handleCanvasClick = () => {
    setSelectedBlockId(null);
  };

  const handleBlockSelect = (id) => {
    setSelectedBlockId(id);
  };

  const handleMoveUp = () => {
    if (selectedBlockId !== null) {
      dispatch(moveItemUp(selectedBlockId));
    }
  };

  const handleMoveDown = () => {
    if (selectedBlockId !== null) {
      dispatch(moveItemDown(selectedBlockId));
    }
  };

  const handleCloneBlock = () => {
    if (selectedBlockId !== null) {
      dispatch(cloneItem(selectedBlockId));
    }
  };

  const handleRemoveBlock = () => {
    if (selectedBlockId !== null) {
      dispatch(removeItem(selectedBlockId));
      setSelectedBlockId(null);
    }
  };

  return (
    <div
      ref={drop}
      style={{
        width: '35%',
        height: '100vh',
        border: '1px solid #E4E6F1',
        padding: '16px',
        backgroundColor: '#F5F5FC'
      }}
      onClick={handleCanvasClick}
    >
      {blocks.map((block) => (
        <div>
        {selectedBlockId === block.id && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <div style={{ ...buttonsStyles }}>
            <div onClick={handleMoveUp}>
                <img src={arrowUp} alt='Move Up' />
            </div>
            <div onClick={handleMoveDown}>
                <img src={arrowDown} alt='Move Down' />
            </div>
          </div>
          <div style={{ ...buttonsStyles, marginLeft: '5px', backgroundColor: '#68C2E9' }}>
            <div onClick={handleCloneBlock}>
                <img src={copyImg} alt='Copy' />
            </div>
            <div onClick={handleRemoveBlock}>
                <img src={trash} alt='Remove' />
            </div>
          </div>
        </div>
        )}
        <Block
          key={block.id}
          id={block.id}
          text={block.text}
          icon={block.icon}
          selected={selectedBlockId === block.id}
          onSelect={handleBlockSelect}
          isDragAndDrop={false}
        />
        </div>
      ))}
    </div>
  );
};

export default Canvas;
