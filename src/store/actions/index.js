export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  
  export const moveItemUp = (id) => ({
    type: 'MOVE_ITEM_UP',
    payload: id,
  });
  
  export const moveItemDown = (id) => ({
    type: 'MOVE_ITEM_DOWN',
    payload: id,
  });
  
  export const cloneItem = (id) => ({
    type: 'CLONE_ITEM',
    payload: id,
  });
  
  export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id,
  });
  