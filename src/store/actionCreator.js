import { ADD_ITEM, DEL_ITEM } from './actionTypes';

export const addItemAction = (new_item, inputValue) => ({
  type: ADD_ITEM,
  new_item,
  inputValue,
})

export const delItemAction = (index) => ({
  type: DEL_ITEM,
  index,
})