import { ADD_ITEM, DEL_ITEM, INIT_LIST, GET_LIST, UPDATE_VALUE } from './actionTypes';

export const addItemAction = (new_item, inputValue) => ({
  type: ADD_ITEM,
  new_item,
  inputValue,
})

export const delItemAction = (index) => ({
  type: DEL_ITEM,
  index,
})

export const getListAction = () => ({
  type: GET_LIST
})

export const setInitListData = (list) => ({
  type: INIT_LIST,
  list,
})

export const updateInputValue = (value) => ({
  type: UPDATE_VALUE,
  value
})