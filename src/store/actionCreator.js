import { ADD_ITEM, DEL_ITEM, INIT_LIST } from './actionTypes';
import axios from 'axios';

export const addItemAction = (new_item, inputValue) => ({
  type: ADD_ITEM,
  new_item,
  inputValue,
})

export const delItemAction = (index) => ({
  type: DEL_ITEM,
  index,
})

export const setInitListData = (list) => ({
  type: INIT_LIST,
  list,
})

export const getListData = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/getList')
      .then((res) => {
        if (res.status === 200) {
          const action = setInitListData(res.data);
          dispatch(action);
        }
      })
  }
}