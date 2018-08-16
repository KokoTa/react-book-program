import * as actionTypes from './actionTypes';
import axios from 'axios';

const detailAction = (data) => ({
  type: actionTypes.SET_DETAIL,
  detail: data
})

export const getDetail = (id) => {
  return (dispatch) => {
    console.log(id);
    axios.get('/api/detail.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(detailAction(data));
      })
      .catch((err) => console.log(err))
  }
}