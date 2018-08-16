import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeHotKeys = (keys) => ({
  type: actionTypes.CHANGE_KEYS,
  keys,
  totalPage: Math.ceil(keys.length / 10)
})

export const getInputValue = (val) => ({
  type: actionTypes.GET_VAL,
  val
})

export const focusInput = () => ({
  type: actionTypes.FOCUS_INPUT
})

export const blurInput = () => ({
  type: actionTypes.BLUR_INPUT
})

export const getHotKey = () => {
  return (dispatch) => {
    axios.get('/api/hotkey.json')
      .then((res) => {
        const keys = res.data.data;
        const action = changeHotKeys(keys);
        dispatch(action);
      })
      .catch((err) => console.log(err))
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const pageChange = (page) => ({
  type: actionTypes.PAGE_CHANGE,
  page
})