const initialState = {
    blocks: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          blocks: [...state.blocks, action.payload],
        };
      case 'MOVE_ITEM_UP':
        return moveItem(state, action.payload, -1);
      case 'MOVE_ITEM_DOWN':
        return moveItem(state, action.payload, 1);
      case 'CLONE_ITEM':
        return cloneItem(state, action.payload);
      case 'REMOVE_ITEM':
        return {
          ...state,
          blocks: state.blocks.filter((block) => block.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  const moveItem = (state, itemId, direction) => {
    const index = state.blocks.findIndex((block) => block.id === itemId);
    if (index === -1) {
      return state;
    }
  
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= state.blocks.length) {
      return state;
    }
  
    const updatedBlocks = [...state.blocks];
    [updatedBlocks[index], updatedBlocks[newIndex]] = [updatedBlocks[newIndex], updatedBlocks[index]];
  
    return {
      ...state,
      blocks: updatedBlocks,
    };
  };
  
  const cloneItem = (state, itemId) => {
    const blockToClone = state.blocks.find((block) => block.id === itemId);
    if (!blockToClone) {
      return state;
    }
  
    const newBlock = {
      ...blockToClone,
      id: Date.now(),
    };
  
    return {
      ...state,
      blocks: [...state.blocks, newBlock],
    };
  };
  
  export default rootReducer;
  